// src/pages/DiagnosisPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUploadCloud,
  FiShield,
  FiSun,
  FiThermometer,
  FiDroplet,
  FiCheckCircle,
  FiAlertTriangle,
  FiInfo,
  FiTarget,
  FiActivity,
  FiGlobe,
  FiTool,
  FiCamera // Corrected Icon: Changed FiScan to FiCamera
} from 'react-icons/fi';
import DiagnosisWheel from '../components/DiagnosisWheel';

const DiagnosisPage = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [activeDiagnosisSection, setActiveDiagnosisSection] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // --- Mock Data (unchanged) ---
  const cropData = {
    prediction: 'Tomato - Early Blight',
    diseaseCode: 'TOM_EB_01',
    confidenceScore: 92,
    description: 'A common fungal disease in tomatoes caused by Alternaria solani, characterized by dark, concentric-ringed spots on lower leaves. It typically starts on older leaves and progresses upwards.',
    symptoms: [
        'Small, dark, concentric spots on older leaves, often with a yellow halo.',
        'Spots can enlarge and merge, causing leaves to turn yellow and drop.',
        'Lesions may appear on stems and fruits, particularly at the stem end.',
        'Severely infected plants may defoliate, leading to sunscald on fruits and reduced yield.'
    ],
    environmentalFactors: {
      soilMoisture: '45% (Optimal)',
      temperature: '28°C (High Risk)',
      humidity: '65% (Favorable for fungus)',
      sunlight: '6-8 hours/day (Adequate)',
      ph: '6.0-6.8 (Ideal)',
    },
    recommendedActions: [
      'Remove and destroy infected lower leaves immediately.',
      'Apply a copper-based or chlorothalonil fungicide, following label instructions.',
      'Ensure proper plant spacing to improve air circulation (e.g., 2-3 feet between plants).',
      'Avoid overhead watering; use drip irrigation to keep foliage dry.',
      'Sanitize tools after use in infected areas.',
    ],
    preventiveMeasures: [
      'Practice crop rotation; avoid planting tomatoes or potatoes in the same spot for at least two years.',
      'Use disease-resistant tomato varieties if available.',
      'Mulch around the base of plants to reduce soil splash onto leaves (e.g., straw, plastic mulch).',
      'Regularly scout plants for early symptoms.',
      'Ensure balanced fertilization; avoid excessive nitrogen.'
    ],
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setActiveDiagnosisSection(null);
      setIsScanning(false);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScanClick = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setActiveDiagnosisSection('overview');
    }, 2500); // Duration of the scan
  };

  const ConfidenceMeter = ({ score }) => (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-gray-700">Confidence</span>
        <span className="text-sm font-bold text-green-700">{score}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );

  const detailPanelVariants = {
    hidden: { 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      opacity: 0 
    },
    visible: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    },
    exit: { 
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeInOut' } 
    }
  };

  const renderDetailPanel = () => {
    // This function's content remains the same
    switch (activeDiagnosisSection) {
      case 'overview':
        return (
          <motion.div key="overview-panel" className="p-6 bg-white rounded-xl shadow-lg border border-gray-100" variants={detailPanelVariants} initial="hidden" animate="visible" exit="exit">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><FiTarget className="text-2xl text-green-600 mr-3" /> Overview & Prediction</h3>
            <h4 className="text-2xl font-semibold text-green-700 mb-2">{cropData.prediction}</h4>
            <p className="text-sm text-gray-500 mb-4">Disease ID: {cropData.diseaseCode}</p>
            <p className="text-gray-600 mb-6">{cropData.description}</p>
            <ConfidenceMeter score={cropData.confidenceScore} />
            <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3">Key Symptoms:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {cropData.symptoms.map((symptom, index) => (<li key={index}>{symptom}</li>))}
                </ul>
            </div>
          </motion.div>
        );
      case 'health':
        return (
          <motion.div key="health-panel" className="p-6 bg-white rounded-xl shadow-lg border border-gray-100" variants={detailPanelVariants} initial="hidden" animate="visible" exit="exit">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><FiActivity className="text-2xl text-blue-600 mr-3" /> Health Indicators</h3>
            <p className="text-gray-600 mb-4">Detailed biological and observed health indicators:</p>
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FiCheckCircle className="mr-3 text-blue-500" /> Plant Vigor: <span className="font-semibold ml-auto">Moderate</span></li>
                <li className="flex items-center"><FiInfo className="mr-3 text-red-500" /> Leaf Discoloration: <span className="font-semibold ml-auto">Present on lower leaves</span></li>
                <li className="flex items-center"><FiDroplet className="mr-3 text-green-500" /> Fungal Growth: <span className="font-semibold ml-auto">Visible under magnification</span></li>
                <li className="flex items-center"><FiShield className="mr-3 text-purple-500" /> Disease Stage: <span className="font-semibold ml-auto">Early to Mid-stage</span></li>
            </ul>
            <p className="text-gray-500 italic mt-6 text-sm">*Further analysis may require laboratory testing.</p>
          </motion.div>
        );
      case 'environment':
        return (
          <motion.div key="environment-panel" className="p-6 bg-white rounded-xl shadow-lg border border-gray-100" variants={detailPanelVariants} initial="hidden" animate="visible" exit="exit">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><FiGlobe className="text-2xl text-yellow-600 mr-3" /> Environmental Conditions</h3>
            <p className="text-gray-600 mb-4">Current environmental factors influencing crop health:</p>
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FiThermometer className="mr-3 text-red-500" /> Temperature: <span className="font-semibold ml-auto">{cropData.environmentalFactors.temperature}</span></li>
                <li className="flex items-center"><FiDroplet className="mr-3 text-blue-500" /> Humidity: <span className="font-semibold ml-auto">{cropData.environmentalFactors.humidity}</span></li>
                <li className="flex items-center"><FiInfo className="mr-3 text-green-500" /> Soil Moisture: <span className="font-semibold ml-auto">{cropData.environmentalFactors.soilMoisture}</span></li>
                <li className="flex items-center"><FiSun className="mr-3 text-orange-500" /> Sunlight Exposure: <span className="font-semibold ml-auto">{cropData.environmentalFactors.sunlight}</span></li>
                <li className="flex items-center"><FiActivity className="mr-3 text-lime-600" /> Soil pH: <span className="font-semibold ml-auto">{cropData.environmentalFactors.ph}</span></li>
            </ul>
            <p className="text-gray-500 italic mt-6 text-sm">*Optimal conditions for this crop may vary slightly by variety and region.</p>
          </motion.div>
        );
      case 'solutions':
        return (
          <motion.div key="solutions-panel" className="p-6 bg-white rounded-xl shadow-lg border border-gray-100" variants={detailPanelVariants} initial="hidden" animate="visible" exit="exit">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><FiTool className="text-2xl text-red-600 mr-3" /> Treatment & Prevention</h3>
            <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center"><FiCheckCircle className="text-blue-500 mr-2"/> Recommended Actions:</h4>
                <ul className="space-y-3 text-gray-700">
                    {cropData.recommendedActions.map((action, index) => (<li key={index} className="flex items-start"><FiCheckCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" /><span>{action}</span></li>))}
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center"><FiAlertTriangle className="text-amber-500 mr-2"/> Preventive Measures:</h4>
                <ul className="space-y-3 text-gray-700">
                    {cropData.preventiveMeasures.map((measure, index) => (<li key={index} className="flex items-start"><FiAlertTriangle className="text-amber-400 mt-1 mr-3 flex-shrink-0" /><span>{measure}</span></li>))}
                </ul>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Crop Health Diagnosis</h1>
          <p className="text-gray-500 mt-2">Upload a clear image of the affected crop for an instant AI-powered analysis.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} className="hidden"/>
          
          <label
            htmlFor="imageUpload"
            className="w-full h-80 flex justify-center items-center bg-white border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors duration-300 shadow-sm relative overflow-hidden"
          >
            {imagePreviewUrl ? (
              <>
                <img src={imagePreviewUrl} alt="Crop Preview" className="w-full h-full object-contain p-2 rounded-2xl" />
                
                {isScanning && (
                  <motion.div
                    className="absolute top-0 h-full w-12 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, rgba(74, 222, 128, 0) 0%, rgba(74, 222, 128, 0.7) 50%, rgba(74, 222, 128, 0) 100%)',
                      boxShadow: '0px 0px 30px 10px rgba(74, 222, 128, 0.5)',
                    }}
                    initial={{ left: '-10%' }}
                    animate={{ left: '100%' }}
                    transition={{ duration: 2.5, ease: 'linear' }}
                  />
                )}
              </>
            ) : (
              <div className="text-center text-gray-400 flex flex-col items-center">
                <FiUploadCloud className="text-5xl mb-2" />
                <h3 className="font-semibold text-lg text-gray-600">Click to Upload Image</h3>
                <p className="text-sm">PNG or JPG format</p>
              </div>
            )}
          </label>

          {imagePreviewUrl && !activeDiagnosisSection && !isScanning && (
            <div className="mt-6 text-center">
              <motion.button
                onClick={handleScanClick}
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCamera className="mr-2" />
                Scan Image
              </motion.button>
            </div>
          )}
        </div>

        {activeDiagnosisSection && (
          <div className="mt-10 flex flex-col lg:flex-row gap-8">
            <div 
              className="w-full lg:w-1/3 flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
              style={{ perspective: '1000px' }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnosis Details</h2>
                <div className="w-full h-64 md:h-80 flex items-center justify-center">
                  <DiagnosisWheel 
                      onSectionClick={setActiveDiagnosisSection} 
                      activeSection={activeDiagnosisSection} 
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    Click on a section of the wheel for detailed insights.
                </p>
            </div>
            
            <div className="w-full lg:w-2/3 min-h-[300px] relative">
                <AnimatePresence mode="wait">
                    {renderDetailPanel()}
                </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisPage;