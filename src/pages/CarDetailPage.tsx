import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

interface Car {
  id: string;
  title: string;
  price: number;
  image: string;
  additionalImages: string[];
  transmission: string;
  fuelType: string;
  year: number;
  mileage: number;
  description: string;
  features: string[];
  condition: string;
  engineSize: number;
  driveType: string;
  color: string;
  bodyType: string;
}

const CarDetailPage = () => {
  const { carId } = useParams<{ carId: string }>();
  const [carDetails, setCarDetails] = useState<Car | null>(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const newCarsRes = await fetch('/data/newcars.json');
        const newCars = await newCarsRes.json();
        const usedCarsRes = await fetch('/data/usedcars.json');
        const usedCars = await usedCarsRes.json();
        const allCars = [...newCars, ...usedCars];
        const car = allCars.find((car: Car) => car.id === carId);
        setCarDetails(car || null);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };
    fetchCarData();
  }, [carId]);

  const handleToggleSpecs = () => {
    setShowSpecs(!showSpecs);
    setShowFeatures(false);
  };

  const handleToggleFeatures = () => {
    setShowFeatures(!showFeatures);
    setShowSpecs(false);
  };

  const openModal = (img: string) => {
    setCurrentImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    if (!carDetails) return;
    const index = carDetails.additionalImages.indexOf(currentImage);
    if (index < carDetails.additionalImages.length - 1) {
      setCurrentImage(carDetails.additionalImages[index + 1]);
    }
  };

  const prevImage = () => {
    if (!carDetails) return;
    const index = carDetails.additionalImages.indexOf(currentImage);
    if (index > 0) {
      setCurrentImage(carDetails.additionalImages[index - 1]);
    }
  };

  if (!carDetails) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading car details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Car Details */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">{carDetails.title}</h1>

          {/* Main Image */}
          <div className="mb-4">
            <img
              src={carDetails.image}
              alt={carDetails.title}
              loading="lazy"
              className="w-full h-auto max-h-[340px] object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(carDetails.image)}
            />
          </div>

          {/* Additional Thumbnails */}
          {carDetails.additionalImages.length > 0 && (
            <div className="flex gap-2 overflow-x-auto mb-6">
              {carDetails.additionalImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i}`}
                  loading="lazy"
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-700 hover:border-yellow-500"
                  onClick={() => openModal(img)}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="text-xl font-bold text-yellow-500 mb-4">
            KSH {carDetails.price.toLocaleString()}
          </div>

          {/* Description */}
          <p className="mb-6">{carDetails.description}</p>

          {/* Specs & Features Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleToggleSpecs}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${
                showSpecs ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={handleToggleFeatures}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${
                showFeatures ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Features
            </button>
          </div>

          {showSpecs && (
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Engine:</strong> {carDetails.engineSize}cc</li>
                <li><strong>Transmission:</strong> {carDetails.transmission}</li>
                <li><strong>Drive Type:</strong> {carDetails.driveType}</li>
                <li><strong>Fuel Type:</strong> {carDetails.fuelType}</li>
                <li><strong>Body Type:</strong> {carDetails.bodyType}</li>
                <li><strong>Color:</strong> {carDetails.color}</li>
                <li><strong>Year:</strong> {carDetails.year}</li>
                <li><strong>Mileage:</strong> {carDetails.mileage.toLocaleString()} km</li>
              </ul>
            </div>
          )}

          {showFeatures && (
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                {carDetails.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/3 bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="../assets/logo.png"
              alt="Logo"
              className="w-24 h-24 object-cover rounded-full mb-6"
            />

            {/* WhatsApp / Call */}
            <a
              href="https://wa.me/254725772082"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg w-full mb-4 text-lg"
            >
              <FaWhatsapp className="mr-3" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+254725772082"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full mb-6 text-lg"
            >
              <FaPhoneAlt className="mr-3" />
              Call Now
            </a>

            {/* Contact Form */}
            <form className="w-full space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded-lg bg-gray-700 text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 rounded-lg bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded-lg bg-gray-700 text-white"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 rounded-lg bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-6 rounded-lg font-medium"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-yellow-500"
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Enlarged"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailPage;
