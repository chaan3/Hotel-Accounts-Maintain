import React, { useState } from 'react';

const AdminFoodManagement = () => {
    const [category, setCategory] = useState('');
    const [subItem, setSubItem] = useState('');
    const [price, setPrice] = useState('');
    const [menu, setMenu] = useState([]);
      const [error, setError] = useState('');
       const [message, setMessage] = useState('');
       const [register, setRegister] = useState([]);
    const apiurl = "http://127.0.0.1:3000";

    const MenuCreation = async (e) => {
        e.preventDefault();
      
        // Check if subItem already exists first
        // const subItemCheckResponse = await fsetch(apiurl + '/Menu', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body:JSON.stringify({ SubItem }),
        // });
      
        // const subItemCheckResult = await subItemCheckResponse.json();
      
        // // If the email already exists, show an alert
        // if (subItemCheckResult.exists) {
        //   alert('Item already taken');
        //   return;  // Exit the function early to prevent further actions
        // }
      
      
     if(category.trim() !== '' && subItem.trim() !== '' && price.trim() !== '') {
            await fetch(apiurl + "/Menu", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ category, subItem, price })
            })
            .then((res) => {
                if (res.ok) {
                    setRegister([...register, { category, subItem, price }]);
                    setMessage("Menu Created Successfully");
                    // navigate('/toDo/src/components/Login.jsx')
                    setCategory('');
                  setSubItem('');
                  setPrice('');
                  // setMessage('');  
                  setError('');
  
                } else {
                    setError("failed. Please try again.");
                    setMessage(''); 
                    setCategory('');
                    setSubItem('');
                    setPrice('');
                }
            })
            .catch((err) => {
                setError("Network error: " + err.message);
                setMessage(''); 
                setCategory('');
                setSubItem('');
                setPrice('');
            });
        } 
        else {
            setError("All fields are required.");
            setMessage(''); 
            setCategory('');
            setSubItem('');
            setPrice('');
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Admin - Food Management</h1>
            <form onSubmit={MenuCreation}>
                <div className="mb-3">
                    <label>Category:</label>
                    <select

                        className="form-control"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Briyani">Briyani</option>
                        <option value="Parotta">Parotta</option>
                        <option value="Chinese">Chinese</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Sub Item:</label>
                    <input
                        type="text"
                        name='subItem'
                        className="form-control"
                        value={subItem}
                        onChange={(e) => setSubItem(e.target.value)}
                        placeholder="Enter Sub Item (e.g., Chicken Briyani)"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Price:</label>
                    <input
                        type="number"
                        name='price'
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price"
                        required
                    />
                </div>
                {error && <p className='text-danger'>{error}</p>}
                {message && <p className='text-success'>{message}</p>}
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>

            {/* <h3 className="mt-5">Current Menu:</h3>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        {item.category} - {item.subItem} - ₹{item.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default AdminFoodManagement;
