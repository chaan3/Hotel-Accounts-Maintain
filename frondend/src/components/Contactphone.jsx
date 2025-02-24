import React from 'react'

const Contactphone = () => {
  return (
    <div className="fill-white bg-white px-0.5 py-0.5 rounded-full  hover:scale-150 transform transition-transform duration-500">
      {/* Email Icon */}
      <a
          href="tel:+918344292756"
          className="flex items-center justify-center w-9 h-9 rounded-full shadow-lg "
        >
          <img src="assets/phone.svg" alt="gmail" />
        </a>
    </div>
  )
}

export default Contactphone;
