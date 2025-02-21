import React from 'react'
import Contactw from './Contactwhatsapp';
import Contactm from './Contactmail';
import Contactphone from './Contactphone';

const Footerpage = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  " >
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-justify-between">About Us</h3>
          <p className="text-sm text-justify-between">
            We are a trusted mobile service center providing reliable repair and maintenance services for all brands and models. Customer satisfaction is our priority.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-justify-between">Contact Us</h3>
          <ul className="text-sm space-y-2 text-justify-between">
            <li className="flex gap-4"><label className="mt-4"><strong>Phone:</strong> +91 8344292756 </label><Contactphone/></li>
            <li className="flex gap-4"><label className="mt-4"><strong>Whatsapp:</strong> +91 8344292756 </label><Contactw/></li>
            <li className="flex gap-4"><label className="mt-4"><strong>Email:</strong> chandaji628@gmail.com</label><Contactm/></li>
            <li><strong>Address:</strong> 59/2, Nadaha Salai Street Srivilliputhur</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ml-2">Quick Links</h3>
          <ul className="text-sm space-y-2 ml-6">
            <li><a href="/services" className="hover:underline ">Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
    
      </div>
      

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mobile Service Center. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footerpage;
