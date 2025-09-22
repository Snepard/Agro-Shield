// src/components/DiagnosisWheel.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiActivity, FiGlobe, FiTool } from 'react-icons/fi';

const DiagnosisWheel = ({ onSectionClick, activeSection }) => {
  const sections = [
    { id: 'overview', label: 'Overview', icon: FiTarget, color: 'bg-green-500', iconColor: 'text-white' },
    { id: 'health', label: 'Health Indicators', icon: FiActivity, color: 'bg-blue-500', iconColor: 'text-white' },
    { id: 'environment', label: 'Environment', icon: FiGlobe, color: 'bg-yellow-500', iconColor: 'text-white' },
    { id: 'solutions', label: 'Solutions', icon: FiTool, color: 'bg-red-500', iconColor: 'text-white' },
  ];

  const numSections = sections.length;
  const anglePerSection = 360 / numSections;
  const radius = 100;

  const wheelContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const sectionVariants = (index) => ({
    initial: {
      opacity: 0,
      scale: 0.8,
      x: 0, y: 0,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0, y: 0,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    hover: {
      scale: 1.08,
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    active: {
      scale: 1.15,
      x: Math.cos(((index * anglePerSection + anglePerSection / 2) * Math.PI) / 180) * (radius / 5),
      y: Math.sin(((index * anglePerSection + anglePerSection / 2) * Math.PI) / 180) * (radius / 5),
      boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  });


  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex flex-wrap items-center justify-center bg-transparent"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateX(40deg) rotateY(0deg) rotateZ(0deg)',
      }}
      variants={wheelContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {sections.map((section, index) => {
        const startAngle = index * anglePerSection;
        const endAngle = (index + 1) * anglePerSection;

        const numSteps = 20;
        const angleStep = (endAngle - startAngle) / numSteps;
        const points = ['50% 50%'];

        for (let i = 0; i <= numSteps; i++) {
            const currentAngle = startAngle + i * angleStep;
            const x = 50 + 50 * Math.cos((currentAngle - 90) * Math.PI / 180);
            const y = 50 + 50 * Math.sin((currentAngle - 90) * Math.PI / 180);
            points.push(`${x}% ${y}%`);
        }
        
        const clipPathValue = `polygon(${points.join(', ')})`;
        
        const midAngle = startAngle + anglePerSection / 2;
        const textX = Math.cos((midAngle - 90) * Math.PI / 180) * (radius * 0.6);
        const textY = Math.sin((midAngle - 90) * Math.PI / 180) * (radius * 0.6);

        return (
          <motion.div
            key={section.id}
            className={`absolute inset-0 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform-gpu ${section.color}`}
            style={{
              clipPath: clipPathValue,
              zIndex: activeSection === section.id ? 10 : 1,
              originX: '50%',
              originY: '50%',
            }}
            onClick={() => onSectionClick(section.id)}
            variants={sectionVariants(index)}
            initial="initial"
            animate={activeSection === section.id ? "active" : "animate"}
            whileHover="hover"
          >
            {/* --- MODIFIED LINE --- */}
            <div
              className="absolute flex flex-col items-center text-center p-2 w-20 md:w-24" // Added w-20 md:w-24 to constrain width and force text wrapping
              style={{
                transform: `translate(${textX}px, ${textY}px)`,
              }}
            >
              <section.icon className={`text-3xl md:text-4xl mb-1 ${section.iconColor}`} />
              <span className="text-xs md:text-sm font-semibold text-white">{section.label}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default DiagnosisWheel;