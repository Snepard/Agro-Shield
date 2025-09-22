import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi'; // Using a popular icon library for a better UI

// Main component for the Diagnosis Page
const DiagnosisPage = () => {
  // State to store the URL of the image preview
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  // State to store the file object itself
  const [imageFile, setImageFile] = useState(null);
  
  // Mock data for display after image upload
  const cropData = {
    prediction: 'Tomato - Early Blight',
    confidenceScore: '92%',
    soilMoisture: '45%',
    temperature: '28°C',
    humidity: '65%',
    recommendation: 'Apply a copper-based fungicide. Remove and destroy infected leaves to prevent further spread. Ensure proper plant spacing for better air circulation.',
  };

  // Handler for when a user selects a file
  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setImageFile(file);
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-900">AgroShield Crop Diagnosis</h1>
        <p className="text-gray-600 mt-2">Upload a picture of the affected crop to get an instant analysis.</p>
      </div>

      <div className="w-full max-w-2xl">
        {/* Image Upload Area */}
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Hides the default file input
        />
        
        <label
          htmlFor="imageUpload"
          className="w-full h-80 flex justify-center items-center bg-white border-2 border-dashed border-green-500 rounded-2xl cursor-pointer hover:bg-green-100 transition-colors duration-300 shadow-sm overflow-hidden"
        >
          {imagePreviewUrl ? (
            <img src={imagePreviewUrl} alt="Crop Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center text-gray-500 flex flex-col items-center">
              <FiUploadCloud className="text-5xl text-green-500 mb-2" />
              <h3 className="font-semibold text-lg">Click to Upload Image</h3>
              <p className="text-sm">PNG, JPG, or JPEG</p>
            </div>
          )}
        </label>

        {/* Data Display Section - only shows after an image is uploaded */}
        {imagePreviewUrl && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-green-900 border-b-2 border-gray-200 pb-3 mb-5">
              Analysis Report
            </h2>
            
            <div className="space-y-4">
              {/* Data Row */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Disease Prediction:</span>
                <span className="text-gray-700 bg-green-100 font-semibold px-3 py-1 rounded-full">{cropData.prediction}</span>
              </div>

              {/* Data Row */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Confidence Score:</span>
                <span className="text-gray-700">{cropData.confidenceScore}</span>
              </div>

              <hr className="my-4" />

              {/* Environment Data Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <span className="font-bold text-gray-800 block">Soil Moisture</span>
                  <span className="text-gray-600">{cropData.soilMoisture}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800 block">Temperature</span>
                  <span className="text-gray-600">{cropData.temperature}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800 block">Humidity</span>
                  <span className="text-gray-600">{cropData.humidity}</span>
                </div>
              </div>

              {/* Recommendation Section */}
              <div className="mt-5">
                <span className="font-bold text-gray-800">Recommended Action:</span>
                <p className="bg-green-50 text-green-800 p-4 rounded-lg mt-2 leading-relaxed">
                  {cropData.recommendation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisPage;