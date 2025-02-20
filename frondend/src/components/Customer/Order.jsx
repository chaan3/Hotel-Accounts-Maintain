// import React, { useState, useEffect } from 'react';

// const FoodOrder = () => {
//     const [menu, setMenu] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedItem, setSelectedItem] = useState('');
//     const [quantity, setQuantity] = useState(1);
//     const [error, setError] = useState('');
//     const [message, setMessage] = useState('');
//     const apiurl = "http://127.0.0.1:3000";

//     useEffect(() => {
//         // Fetch menu from backend
//         fetch(apiurl + "/Menu")
//             .then((res) => res.json())
//             .then((data) => setMenu(data))
//             .catch((err) => console.error("Failed to fetch menu:", err));
//     }, []);

//     const handleOrderSubmit = (e) => {
//         e.preventDefault();
//         if (selectedCategory && selectedItem && quantity > 0) {
//             fetch(apiurl + "/Order", {
//                 method: "POST",
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ selectedCategory, selectedItem, quantity }),
//             }).then((res) => {
//                 if (res.ok) {
//                     setMessage("Order placed successfully!");
//                 } else {
//                     setError("Failed to place order.");
//                 }
//             }).catch((err) => setError("Network error: " + err.message));
//         } else {
//             setError("All fields are required.");
//         }
//     };

//     const filteredItems = menu.filter(item => item.category === selectedCategory);

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center">Place Your Order</h1>
//             <form onSubmit={handleOrderSubmit}>
//                 <div className="mb-3">
//                     <label>Category:</label>
//                     <select
//                         className="form-control"
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         required
//                     >
//                         <option value="">Select Category</option>
//                         {[...new Set(menu.map(item => item.category))].map((cat, index) => (
//                             <option key={index} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="mb-3">
//                     <label>Sub Item:</label>
//                     <select
//                         className="form-control"
//                         value={selectedItem}
//                         onChange={(e) => setSelectedItem(e.target.value)}
//                         required
//                         disabled={!selectedCategory}
//                     >
//                         <option value="">Select Sub Item</option>
//                         {filteredItems.map((item, index) => (
//                             <option key={index} value={item.subItem}>
//                                 {item.subItem} - ₹{item.price}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="mb-3">
//                     <label>Quantity:</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={quantity}
//                         onChange={(e) => setQuantity(Number(e.target.value))}
//                         min="1"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Place Order</button>
//                 {error && <p className="text-danger mt-2">{error}</p>}
//                 {message && <p className="text-success mt-2">{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default FoodOrder;
