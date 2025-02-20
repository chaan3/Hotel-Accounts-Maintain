// import React, { useState } from 'react'


// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar';
// import Footer from './Footer';

// const Register = () => {
    
//   const navigate=useNavigate();
//        const[name,setName]=useState('');
//        const [email, setEmail] = useState('');
//        const [password, setPassword] = useState('');
//        const [error, setError] = useState('');
//        const [message, setMessage] = useState('');
//        const [register, setRegister] = useState([]);
//        const apiurl = "http://127.0.0.1:3000";
    
//     // register
//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
      
//         // Check if email already exists first
//         const emailCheckResponse = await fetch(apiurl + '/Register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body:JSON.stringify({ email }),
//         });
      
//         const emailCheckResult = await emailCheckResponse.json();
      
//         // If the email already exists, show an alert
//         if (emailCheckResult.exists) {
//           alert('Email already taken');
//           return;  // Exit the function early to prevent further actions
//         }
      
      
//         else if(name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
//             await fetch(apiurl + "/Register", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ name, email, password })
//             })
//             .then((res) => {
//                 if (res.ok) {
//                     setRegister([...register, { name, email, password }]);
//                     setMessage("Register Successfully");
//                     // navigate('/toDo/src/components/Login.jsx')
//                     setName('');
//                   setEmail('');
//                   setPassword('');
//                   // setMessage('');  
//                   setError('');
  
//                 } else {
//                     setError("Registration failed. Please try again.");
//                     setMessage(''); 
//                     setName('');
//                     setEmail('');
//                     setPassword(''); 
//                 }
//             })
//             .catch((err) => {
//                 setError("Network error: " + err.message);
//                 setMessage(''); 
//                 setName('');
//                 setEmail('');
//                 setPassword(''); 
//             });
//         } 
//         else {
//             setError("All fields are required.");
//             setMessage(''); 
//             setName('');
//             setEmail('');
//             setPassword(''); 
//         }
//     }

//   //     const openLoginPopup = () => {
//   //          setIsLoginOpen(true);
//   //          setIsMenuOpen(false); // Close the menu
//   //        };
       
//   //        const closeLoginPopup = () => {
//   //          setIsLoginOpen(false);
//   //        };

//   //  const openSignupPopup = () => {
//   //    setIsSignupOpen(true);
//   //    setIsMenuOpen(false); // Close the menu
//   //  };
 
//   //  const closeSignupPopup = () => {
//   //    setIsSignupOpen(false);
//   //  };

//   return (

    
//     <div className="bg-white  ">
//       <div
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{ backgroundImage: 'url(src/assets/bghome.png)' }}
//       ></div>
      
//       <div className="relative h-full  sm:px-12 lg:px-24 bg-green-600/0 backdrop-blur-sm">
//       <NavBar/>
//             <div className=" m-32 ml-64 items-center justify-center bg-gray-500/15 w-1/2 h-full p-6 rounded-lg shadow-lg relative backdrop-blur-sm">
//               <button 
//               onClick={()=>navigate('/')}
//                className="absolute top-3 right-3 text-gray-600 hover:text-red-500">✖</button>
//               <div className="flex grid-cols-1 md-grid-cols-2 gap-5 justify-center">
//               <div className="w-80 h-90  mt-4 justify-center">
//     <img src="src/assets/Signup.jpg" alt="Signup" className="w-full h-full object-cover rounded-lg" />
//   </div>
  
//               {/* <h2 className="text-2xl font-bold mb-4 text-center text-black fw-bold">Signup</h2> */}
//               <form onSubmit={handleRegisterSubmit} className="ml-5">
//               <h2 className="text-2xl font-bold mb-2 text-center text-white fw-bold shadow-2xl">Signup</h2>
//                 <div className="mb-4">
//                   <label htmlFor="name" className="form-label text-black fw-bold  ">Name</label>
//                   <input
//                     type="text"
//                     id="name" 
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="form-label  text-black fw-bold">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="password" className="form-label text-black  fw-bold">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//                 {message && <p className="text-green-500 text-sm">{message}</p>}
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
//                 >
//                   Signup
//                 </button>
//                 <div className='flex mt-5 gap-1'>
//                 <p className='text-white'>Already Register? Go to </p>
//                 <a
//                   type="submit"
//                   onClick={navigate('/Login')}
//                   className="px-2 bg-danger text-white rounded hover:bg-green-800"
//                 >
//                   Login
//                 </a>
//                 </div>
//               </form>
//               </div>
//             </div>
//           </div>
//           <Footer/>
//           </div>
          
//         )}
// export default Register
