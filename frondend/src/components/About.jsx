import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg" >
      <div className="flex items-center justify-center">
     <img src="assets/srvlogo.png" alt="" className="w-20 h-25"/>
     <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-3 fs-1 fw-bold">Sri Rajavirundhu</h1>
     </div>
      
      <p className="text-gray-700 text-lg mb-6 text-center">
        Sri Rajavirundhu is a popular dining establishment known for its
        exquisite culinary offerings, especially its signature{" "}
        <strong>briyani</strong> dishes. Combining authentic flavors and
        high-quality ingredients, it is a go-to destination for biryani lovers.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Highlights
      </h2>
      <div className="row g-4">
        {/* Biryani Specials */}
        <div className="grid-cols-1 md:grid-cols-1">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title text-lg font-bold">Briyani Specials</h5>
              <p className="card-text text-gray-700">
                A variety of briyani options, including chicken, mutton, prawn,
                egg, and vegetarian versions, cooked with rich spices and
                traditional methods. Famous for perfectly cooked rice and
                flavorful masalas.
              </p>
            </div>
          </div>
        </div>

        {/* Chinese Delicacies */}
        <div className="grid-cols-1 md:grid-cols-1">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title text-lg font-bold">Chinese Delicacies</h5>
              <p className="card-text text-gray-700">
                A selection of Chinese dishes, including fried rice, noodles,
                chili chicken, and Manchurian, catering to fans of Indo-Chinese
                fusion cuisine.
              </p>
            </div>
          </div>
        </div>

        {/* Ambiance and Service */}
        <div className="grid-cols-1 md:grid-cols-1">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title text-lg font-bold">Ambiance and Service</h5>
              <p className="card-text text-gray-700">
                Family-friendly setting with a warm and welcoming atmosphere.
                Known for prompt service and attention to detail for an
                enjoyable dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* Adaptable Delivery Nearby */}
        <div className="grid-cols-1 md:grid-cols-1">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title text-lg font-bold">
                Adaptable Delivery Nearby
              </h5>
              <p className="card-text text-gray-700">
                Offers convenient delivery services to nearby locations,
                ensuring you can enjoy your favorite dishes at your doorstep
                with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        Why Choose Sri Rajavirundhu?
      </h2>
      <p className="text-gray-700 text-lg mt-3">
        Sri Rajavirundhu stands out for its consistent taste, generous portions,
        and a mix of traditional and modern culinary styles. Whether you're
        craving a hearty biryani meal or quick Chinese bites, it promises
        satisfaction for food enthusiasts.
      </p>
    </div>
  );
};


export default About;
