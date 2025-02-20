// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import bghome from '../assets/bghome.png';
// import signinImage from '../assets/Signin.jpg';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const apiurl = 'http://127.0.0.1:3000';

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setMessage('');
//     try {
//       const response = await axios.post(`${apiurl}/api/verify`, { email, password });
//       setMessage(response.data.message);
//     } catch (err) {
//       if (err.response && err.response.data) {
//         setError(err.response.data.message);
//       } else {
//         setError('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <div className="bg-white justify-between">
//       <div
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{ backgroundImage: `url(${bghome})` }}
//       ></div>
//       <div className="relative h-full sm:px-12 lg:px-24 bg-green-600/0 backdrop-blur-sm">
//         <NavBar />
//         <div className="m-32 ml-64 items-center justify-center bg-gray-500/15 w-1/2 h-full p-6 rounded-lg shadow-lg relative backdrop-blur-sm">
//           <button
//             onClick={() => navigate('/')}
//             className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//           >
//             ✖
//           </button>
//           <div className="flex grid-cols-1 md-grid-cols-2 gap-5 justify-center">
//             <div className="w-80 h-90 mt-4 justify-center">
//               <img
//                 src={signinImage}
//                 alt="Signup"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//             <form onSubmit={handleLoginSubmit} className="ml-5">
//               <h2 className="text-2xl font-bold mb-2 text-center text-white fw-bold shadow-2xl">
//                 Signup
//               </h2>
//               <div className="mb-4">
//                 <label htmlFor="email" className="form-label text-black fw-bold">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="form-control"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password" className="form-label text-black fw-bold">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="form-control"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               {message && <p className="text-green-500 text-sm">{message}</p>}
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Login;
