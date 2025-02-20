import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
// const jwt=require("jsonwebtoken")
// import generateToken from '../uitl/server';

// import router from './router';

dotenv.config(); // Load environment variables
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors()); // Fix: `cors` should be called as a function.




//router 
const router=express.Router();
app.use('/api',router)

const SECRET_KEY = process.env.SECRET_KEY || "anjac@2023";


router.get('/test',(req,res)=>res.json({message:"Api Tested"}));

// MongoDB connection
mongoose.connect('mongodb+srv://root:root@hotelcluster.4dn5z.mongodb.net/SRV-Hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Creating Schema
const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date},
    

});
const menuSchema = new mongoose.Schema({
    category: { type: String, required: true },
    subItem: { type: String, required: true,unique:true},
    price: { type: Number, required: true },
});

// Creating model
const RegisterModel = mongoose.model('Register', registerSchema);
const Menumodel=mongoose.model('Menu',menuSchema);

// POST: Create a new menu
app.post('/Menu', async (req, res) => {
    const { category,subItem,price } = req.body;
    try {
        const newmenu = new Menumodel({ category, subItem, price });
        await newmenu.save();
        res.status(201).json(newmenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create menu ' });
    }
});

// POST: Create a new registration
app.post('/Register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Find user by email
        // const user = await RegisterModel.findOne({ email });

        // if (!user) {
        //     return res.status(404).json({ message: "Invalid credentials" });
        // }else{
        const newRegister = new RegisterModel({ name, email, password });
        await newRegister.save();
        res.status(201).json(newRegister);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create registration' });
    }
});

// GET: Fetch all registrations
router.get('/getall', async (req, res) => {
    try {
        const allRegisters = await RegisterModel.find();
        res.json(allRegisters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch registrations' });
    }
});

// DELETE: Remove a registration by ID
router.delete('/deluser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await RegisterModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete registration' });
    }
});

router.put('/updateuser/:id',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const id= req.params.id ;
        const updateRegister=await RegisterModel.findByIdAndUpdate(
            id,
            {name,email,password}
        )
        if(!updateRegister){
            return res.status(404).json({message:"Not Found"})
        }else{
            // res.json(updateRegister)
            return res.status(201).json({message:"Updated Successfully"})
        }

    }catch(e){
        console.log(e);
        res.status(500).json({message:"failed"})
    }
})

// // login

// app.post('/login', async (req, res) => {
//     const { name ,email, password } = req.body;

//     try {
//         // Find the user by email
//         const user = await RegisterModel.findOne({ email });
//         // if (!user) return res.status(400).json({ error: 'User not found' });
//         if(!user){
//         // Compare the hashed password
//         const isPasswordValid = await bcrypt.hash(password,10);
//         const newuser=new RegisterModel({name,email,password:isPasswordValid});
//         await newuser.save();
//         // if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });


//         return res.status(201).json({ message: 'Register successful' });
//     }
//     res.status(404).json({message:"user already Exist"})
// } 

//     catch (error) {
//         res.status(500).json({ error: 'internet error' });
//     }
// });

//generatetoken
// const generateToken=(user)=>jwt.sign({id:user.id },process.env.secret_key,{expiresIn:' 2m'})

//authendication

// router.post('/auth', async (req, res) => {
//     try {
//         const { email,password } = req.body;

//         // Find user by email
//         const user = await RegisterModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User Not Found..!" });
//         }

//         // // Compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         console.log("Password Match:", isMatch);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Incorrect Password" });
//         }

//         // Generate token
//         const token = generateToken(user);
//         res.json({ token });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// Token generator function

// const generateToken = (user) => {
//     return jwt.sign(
//         { id: user._id, email: user.email },
//         SECRET_KEY, // Ensure this is set in your environment
//         { expiresIn: '2m' }
//     );
// };


//Middleware
// const verifyToken = async (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         return res.status(401).json({ message: "Missing Token" });
//     }
//     const token = authHeader.split(" ")[1];
    
//     jwt.verify(token, SECRET_KEY, async (err, decode) => {
//         if (err) {
//             return res.status(403).json({ message: "Invalid Token" });
//         }
//         const user = await RegisterModel.findOne({ _id: decode.id });
//         if (!user) {
//             return res.status(404).json({ message: "User Not Found" });
//         }
//         req.user = user;
//         next();
//     });
// };


// router.get("/data",verifyToken,async(req,res)=>{
//     res.status(200).json({message:`welcome ${req.user.email} this is prodected data`});
// });

//findmany
// const bcrypt = require("bcrypt");
app.post("/verify", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await RegisterModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Invalid credentials or email not found" });
        }

        // Compare password
        console.log("Stored password:", password)
        console.log("Stored user.password:", user.password)
        // const hashedPassword = user.password; 
        // const isPasswordValid = await bcrypt.compare(password, user.password);

        if (password!==user.password) {
            return res.status(404).json({ message: "Invalid credentials or password not valid" });
            
        }

        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


// Server setup
const port =3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// module.exports=router;