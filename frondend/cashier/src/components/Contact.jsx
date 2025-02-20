import React from 'react'
import Contactphone from './Contactphone'
import Contactm from './ContactMail'
import Contactw from './ContactWhatsapp'

const Contact = () => {
  return (
<>
  {/* Contact Details */}
  <div className="h-[30-rem] w-full bg-gray-200 ">
          <h3 className="text-lg font-semibold mb-4 text-justify-between">Contact Us</h3>
          <ul className="text-sm space-y-2 text-justify-between">
            <li className="flex gap-4"><label className="mt-4"><strong>Phone:</strong> +91 8344292756 </label><Contactphone/></li>
            <li className="flex gap-4"><label className="mt-4"><strong>Whatsapp:</strong> +91 8344292756 </label><Contactw/></li>
            <li className="flex gap-4"><label className="mt-4"><strong>Email:</strong> chandaji628@gmail.com</label><Contactm/></li>
            <li><strong>Address:</strong> 59/2, Nadaha Salai Street Srivilliputhur</li>
          </ul>
    </div>
</>
  )
}

export default Contact
