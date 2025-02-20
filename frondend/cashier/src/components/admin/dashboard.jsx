import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
];

const orders = [
  { id: 1, item: "Pasta", status: "Completed", amount: "$12" },
  { id: 2, item: "Burger", status: "Pending", amount: "$8" },
  { id: 3, item: "Pizza", status: "In Progress", amount: "$15" },
];

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
  className={`${
    sidebarOpen ? "block" : "hidden"
  } w-64 bg-gray-800 text-white p-6 bg-cover bg-center md:block h-screen overflow-y-auto`}
>
  <h2 className="text-2xl font-bold mb-6 mt-6">Dashboard</h2>
  <ul className="space-y-4">
    <li>
      <button
        onClick={() => handleSectionClick("overview")}
        className="hover:text-gray-400"
      >
        Overview
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("orders")}
        className="hover:text-gray-400"
      >
        Orders
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("accounts")}
        className="hover:text-gray-400"
      >
        Accounts
      </button>
    </li>
  </ul>
</div>


      {/* Toggle Button for Sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden absolute top-4 left-4 z-50 text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 transform transition-all duration-300 ${
            sidebarOpen ? "rotate-0" : "rotate-45"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Main Content */}
      <div className="p-6 gap-6 flex flex-col w-full sm:mt-6 md:mt-6">
        {activeSection === "overview" && (
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <h2 className="text-xl font-bold">Revenue Overview</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeSection === "orders" && (
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <table className="w-full border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Item</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="text-center">
                    <td className="border p-2">{order.item}</td>
                    <td className="border p-2">{order.status}</td>
                    <td className="border p-2">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === "accounts" && (
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <h2 className="text-xl font-bold">Account Summary</h2>
            <p className="text-lg">
              Total Balance: <span className="font-semibold">$20,000</span>
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
