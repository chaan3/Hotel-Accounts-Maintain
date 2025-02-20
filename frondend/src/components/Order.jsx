import React, { useState, useEffect } from 'react';

const Order = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [foodOptions, setFoodOptions] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [register, setRegister] = useState([]);
    const apiurl = "http://127.0.0.1:3000";

    // Fetch food options from the backend
    useEffect(() => {
        fetch(apiurl + "/getFoodOptions")
            .then((res) => res.json())
            .then((data) => {
                setFoodOptions(data);
            })
            .catch((err) => {
                setError("Error fetching food options: " + err.message);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && address.trim() !== '' && selectedFood.trim() !== '') {
            fetch(apiurl + "/order", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, address, selectedFood }),
            })
            .then((res) => {
                if (res.ok) {
                    setRegister([...register, { name, email, password, address, selectedFood }]);
                    setMessage("Registered and order placed successfully!");
                } else {
                    setError("Registration failed. Please try again.");
                }
            })
            .catch((err) => {
                setError("Network error: " + err.message);
            });
        } else {
            setError("All fields are required.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center fs-4 fw-bold">
                            <h1>Food Order Registration</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" name="name"
                                        placeholder="Enter Your Name"
                                        required
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" name="email"
                                        placeholder="Enter Your Email Address"
                                        required
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" name="password"
                                        placeholder="Enter Your Password"
                                        required
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>

                                {/* Address */}
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <input type="text" id="address" name="address"
                                        placeholder="Enter Your Address"
                                        required
                                        className="form-control"
                                        onChange={(e) => setAddress(e.target.value)}
                                        value={address}
                                    />
                                </div>

                                {/* Food Selection */}
                                <div className="mb-3">
                                    <label htmlFor="food" className="form-label">Select Food:</label>
                                    <select
                                        id="food"
                                        name="food"
                                        className="form-control"
                                        value={selectedFood}
                                        onChange={(e) => setSelectedFood(e.target.value)}
                                        required
                                    >
                                        <option value="">-- Select a food item --</option>
                                        {foodOptions.map((food) => (
                                            <option key={food.id} value={food.name}>
                                                {food.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="btn w-100 btn-primary border-0 text-white fs-2 fw-semibold hover:bg-blue-900"
                                >
                                    Register & Place Order
                                </button>

                                {error && <p className="text-danger">{error}</p>}
                                {message && <p className="text-success">{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
