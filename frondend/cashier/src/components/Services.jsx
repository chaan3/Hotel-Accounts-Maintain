import React, { useState } from 'react';
import Slideshow from './slideshow/SlideshowBriyani';
import ScrollSection from './Scrollanimation';
import AdminFoodManagement from './adminaddfood';
// import FoodOrder from './Customer/Order';

const Services = () => {
  // State to track the current index of the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);



  return (
    <div>
      <ScrollSection>
      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-600">Our Food Offerings</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the best culinary delights tailored to your taste buds. Here are some of the highlights we offer.
          </p>
          <div className="m-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl flex">
            {/* Food Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src="src/assets/briyani.png" alt="Biryani Special" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">Biryani Specials</h3>
                <p className="mt-4 text-gray-600">
                  Authentic biryani with perfectly cooked rice, tender meat, and flavorful spices. A must-try for food lovers.
                </p>
              </div>
            </div>
            {/* Food Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src="src/assets/chi-rice.jpg" alt="Chinese Cuisine" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">Chinese Delicacies</h3>
                <p className="mt-4 text-gray-600">
                  A mix of classic and fusion Chinese dishes, from fried rice to chili chicken, crafted to perfection.
                </p>
              </div>
            </div>
            {/* Food Item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src="src/assets/icecream.jpg" alt="Desserts" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">Delicious Desserts</h3>
                <p className="mt-4 text-gray-600">
                  End your meal on a sweet note with our range of traditional and modern desserts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollSection>

      <ScrollSection>

      {/* Food Gallery Section with Full Image View */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-600">Food Gallery</h2>
          <p className="mt-4 text-lg text-gray-600">
            Scroll through a visual treat of our dishes that will tantalize your taste buds.
          </p>
<div className="flex justify-center">
          <div className="m-10 rounded-3xl relative">
            {/* Slideshow Images */}
            <Slideshow/>
           </div>
           <div className="m-10 rounded-3xl relative">
            {/* Slideshow Images */}
            <Slideshow/>
           </div>
           <div className="m-10 rounded-3xl relative">
            {/* Slideshow Images */}
            <Slideshow/>
           </div>
           <div className="m-10 rounded-3xl relative">
            {/* Slideshow Images */}
            <Slideshow/>
            </div>
           </div>
        </div>
      </section>
      </ScrollSection>
<ScrollSection>
      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-600">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here's what our customers have to say about their delightful experience with us.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-600 italic">
                "The biryani is heavenly, and the service is top-notch. Highly recommend!"
              </p>
              <p className="mt-4 text-gray-800 font-semibold">- John Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-600 italic">
                "Loved the Chinese dishes and the desserts. A perfect dining experience!"
              </p>
              <p className="mt-4 text-gray-800 font-semibold">- Jane Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-600 italic">
                "Amazing food and wonderful ambiance. I'll be coming back for sure."
              </p>
              <p className="mt-4 text-gray-800 font-semibold">- Robert Lee</p>
            </div>
          </div>
        </div>
      </section>
      {/* <li className="flex gap-4"><label className="mt-4"><strong>food Order:</strong></label><AdminFoodManagement/></li> */}
      {/* <AdminFoodManagement/> */}
      {/* <FoodOrder/> */}
      </ScrollSection>
    </div>
  );
};

export default Services;
