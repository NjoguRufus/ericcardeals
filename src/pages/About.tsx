import React from 'react';
import { Shield, Users, Award, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Eric_Car_Deals!</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect vehicle. We're committed to making car ownership 
            accessible and enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-400">Every vehicle undergoes thorough inspection and verification</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-400">Dedicated to providing exceptional customer service</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">Professional staff with years of industry experience</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <ThumbsUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
            <p className="text-gray-400">Competitive prices and flexible financing options</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded with a vision to transform the car buying experience in Kenya, Eric_Car_Deals! 
                has grown to become one of the most trusted names in the automotive industry.
              </p>
              <p className="text-gray-300 mb-4">
                We understand that buying a car is a significant decision, which is why we focus on 
                providing transparent information, professional guidance, and exceptional service to 
                all our customers.
              </p>
              <p className="text-gray-300">
                Our commitment to quality and customer satisfaction has earned us the trust of 
                thousands of happy car owners across the country.
              </p>
            </div>
            <div 
              className="h-full min-h-[300px] bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
