import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


// const NavBar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//    const [isLoginOpen, setIsLoginOpen] = useState(false);
//    const [isOrderOpen, setIsOrderOpen] = useState(false);
//    const [isSignupOpen, setIsSignupOpen] = useState(false);
//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const navigate = useNavigate();
 
//    const handleNavigation = (path) => {
//      setIsMenuOpen(false); // Close menu for mobile navigation
//      navigate(path);
//    };
 
//    const openLoginPopup = () => {
//      setIsLoginOpen(true);
//      setIsMenuOpen(false); // Close the menu
//    };
 
//    const closeLoginPopup = () => {
//      setIsLoginOpen(false);
//    };
 
//    const openOrderPopup = () => {
//      setIsOrderOpen(true);
//      setIsMenuOpen(false); // Close the menu
//    };
 
//    const closeOrderPopup = () => {
//      setIsOrderOpen(false);
//    };
 
//    const openSignupPopup = () => {
//      setIsSignupOpen(true);
//      setIsMenuOpen(false); // Close the menu
//    };
 
//    const closeSignupPopup = () => {
//      setIsSignupOpen(false);
//    };
//   return (
//        <div className="flex justify-between items-center w-full">
//             <div className="flex items-center gap-2">
//               <img
//                 className="h-18 w-1 py-2 shadow-3xl"
//                 src="src/assets/srvlogo.png"
//                 alt="Logo"
//               />
//               <h1 className="text-4xl font-bold text-white">Hotel Sri Rajavirundhu</h1>
//             </div>
//             <div className="hidden md:flex space-4 text-white">
//               <a href="#home" className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Home</a>
//               <a href="#about" className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">About</a>
//               <a onClick={() => navigate("/Login")} 
//                className="hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Login</a>
//               <a 
//               onClick={() => navigate("/Register")} 
//                className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Signup</a>
//             </div>
//             <button
//               onClick={toggleMenu}
//               className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
//               aria-expanded={isMenuOpen}
//               aria-label="Toggle menu"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                 <path fillRule="evenodd" d="M4 5h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd" />
//               </svg>
//             </button>
//             {isMenuOpen && (
//             <div className="md:hidden bg-amber-700">
//               <a href="#home" className="block px-3 py-2 hover:bg-white hover:text-black">Home</a>
//               <a href="#about" className="block px-3 py-2 hover:bg-white hover:text-black">About</a>
//               <a 
//                onClick={navigate('/Login')}
//                className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full">Login</a>
//               <a onClick={navigate('/Register')} className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full">Signup</a>
//             </div>
//           )}
      
//   </div>
//   )
// }

// export default NavBar

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isOrderOpen, setIsOrderOpen] = useState(false);
   const [isSignupOpen, setIsSignupOpen] = useState(false);
 
   // Register form state
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [message, setMessage] = useState('');
   const [register, setRegister] = useState([]);
   const [loading, setLoading] = useState(false);
   const apiurl = "https://hotel-accounts-maintain-bs.onrender.com";


  //  //login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true); // Set loading to true during the request

    // Basic input validation
    if (!email || !password) {
      setError("Both email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${apiurl}/verify`, { email, password });
      
      // Handle success response
      setMessage(response.data.message);
      setName('');
      setEmail('');
      setPassword('');
      // setMessage('');  
      setError('');
      
      navigate('/admin-dashboard');
    } catch (err) {
      // Handle errors  
      if (err.response && err.response.data) {
        setError(err.response.data.message);
        setName('');
        setEmail('');
        setPassword('');
        setMessage('');  
        // setError('');
      } else {
        setError("An unexpected error occurred.");
        setName('');
        setEmail('');
        setPassword('');
        setMessage('');  
        // setError('');
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  //  const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(apiurl + "/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const result = await response.json();

  //     if (response.ok) {
  //       alert(result.message);
  //       // navigate("/dashboard"); // Redirect if necessary
  //       navigate(<Services/>);
  //     } else {
  //       setError(result.error || "Login failed");
  //     }
  //   } catch (err) {
  //     setError("Network error: " + err.message);
  //   }
  // };
  
// register
    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
    
      // Check if email already exists first
      const emailCheckResponse = await fetch(apiurl + '/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({ email }),
      });
    
      const emailCheckResult = await emailCheckResponse.json();
    
      // If the email already exists, show an alert
      if (emailCheckResult.exists) {
        alert('Email already taken');
        return;  // Exit the function early to prevent further actions
      }
    
    
      else if(name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
          await fetch(apiurl + "/Register", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, email, password })
          })
          .then((res) => {
              if (res.ok) {
                  setRegister([...register, { name, email, password }]);
                  setMessage("Register Successfully");
                  // navigate('/toDo/src/components/Login.jsx')
                  setName('');
                setEmail('');
                setPassword('');
                // setMessage('');  
                setError('');

              } else {
                  setError("Registration failed. Please try again.");
                  setMessage(''); 
                  setName('');
                  setEmail('');
                  setPassword(''); 
              }
          })
          .catch((err) => {
              setError("Network error: " + err.message);
              setMessage(''); 
              setName('');
              setEmail('');
              setPassword(''); 
          });
      } 
      else {
          setError("All fields are required.");
          setMessage(''); 
          setName('');
          setEmail('');
          setPassword(''); 
      }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();
 
   const handleNavigation = (path) => {
     setIsMenuOpen(false); // Close menu for mobile navigation
     navigate(path);
   };
 
   const openLoginPopup = () => {
     setIsLoginOpen(true);
     setIsMenuOpen(false); // Close the menu
   };
 
   const closeLoginPopup = () => {
     setIsLoginOpen(false);
   };
 
   const openOrderPopup = () => {
     setIsOrderOpen(true);
     setIsMenuOpen(false); // Close the menu
   };
 
   const closeOrderPopup = () => {
     setIsOrderOpen(false);
   };
 
   const openSignupPopup = () => {
     setIsSignupOpen(true);
     setIsMenuOpen(false); // Close the menu
   };
 
   const closeSignupPopup = () => {
     setIsSignupOpen(false);
   };
  return (
    <div className=" flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <img
                className="h-10"
                src="src/assets/srv.png"
                alt="Logo"
              />
              <h1 className="text-4xl font-bold">SRV</h1>
            </div>
            <div className="hidden md:flex space-4">
              <a href="#home" className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Home</a>
              <a href="#about" className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">About</a>
              <a onClick={openLoginPopup} 
               className="hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Login</a>
              <a 
              onClick={openSignupPopup} 
               className=" hover:text-black px-3 py-2 rounded-md text-sm font-medium relative group">Signup</a>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            {isMenuOpen && (
            <div className="md:hidden bg-amber-700">
              <a href="#home" className="block px-3 py-2 hover:bg-white hover:text-black">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-white hover:text-black">About</a>
              <a onClick={openLoginPopup} className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full">Login</a>
              <a onClick={openSignupPopup} className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full">Signup</a>
            </div>
          )}
        {/* Login Popup */}
    {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-500/10 w-1/2 h-115 p-6 rounded shadow-lg relative backdrop-blur-sm mt-96">
          <button onClick={closeLoginPopup} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">✖</button>
          <div className="flex gap-5 justify-center">
          <div className="w-80 h-80   mt-4 justify-center">
  <img src="src/assets/Signin.jpg" alt="Signup" className="w-full h-full object-cover rounded-lg" />
  </div>
  
          {/* <h2 className="text-2xl font-bold mb-4 text-center text-black fw-bold">Signup</h2> */}
          <form onSubmit={handleLoginSubmit} className="ml-5">
          <h2 className="text-2xl font-bold mb-2 text-center text-black fw-bold">Signin</h2>
            <div className="mb-5">
              <label htmlFor="email" className="form-label text-white fw-bold">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label text-white   fw-bold">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-500 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"

            >
              Signin
            </button>
          </form>
          </div>
        </div>
      </div>
        )}
  
        {/* Signup Popup */}
         {isSignupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-500/10 w-1/2 h-115 p-6 rounded shadow-lg relative backdrop-blur-sm mt-96">
              <button onClick={closeSignupPopup} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">✖</button>
              <div className="flex grid-cols-1 md-grid-cols-2 gap-5 justify-center">
              <div className="w-80 h-90  mt-4 justify-center">
    <img src="src/assets/Signup.jpg" alt="Signup" className="w-full h-full object-cover rounded-lg" />
  </div>
  
               
               <form onSubmit={handleRegisterSubmit} className="ml-5">
              <h2 className="text-2xl font-bold mb-2 text-center text-dark-900 fw-bold shadow-2xl">Signup</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-black fw-bold  ">Name</label>
                  <input
                    type="text"
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label  text-black fw-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label text-black  fw-bold">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {message && <p className="text-green-500 text-sm">{message}</p>}
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                  Signup
                </button>
              </form>
              </div> 
            </div>
          </div>
        )} 
        </div>
  )
}

export default NavBar
