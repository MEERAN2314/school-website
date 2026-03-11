
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button.jsx';

const ProgramCard = ({ title, ageGroup, description, icon: Icon }) => {
  
  const getGradientByTitle = (title) => {
    if (title.includes('Play Group')) return 'from-vibrantPurple to-hotPink border-l-vibrantPurple';
    if (title.includes('Pre-KG')) return 'from-brightOrange to-sunnyYellow border-l-brightOrange';
    if (title.includes('LKG')) return 'from-freshLimeGreen to-turquoise border-l-freshLimeGreen';
    if (title.includes('UKG')) return 'from-skyBlue to-vibrantPurple border-l-skyBlue';
    return 'from-vibrantPurple to-hotPink border-l-vibrantPurple';
  };

  const gradientClass = getGradientByTitle(title);

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100 border-l-[5px] relative overflow-hidden group h-full flex flex-col ${gradientClass}`}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClass.split(' ')[0]} ${gradientClass.split(' ')[1]} opacity-10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-20 transition-all`} />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        {Icon && (
          <div className={`bg-gradient-to-br ${gradientClass.split(' ')[0]} ${gradientClass.split(' ')[1]} p-4 rounded-2xl shadow-md text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Icon className="w-8 h-8" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
          <span className="inline-block bg-veryLightPurple px-3 py-1 rounded-full text-sm font-bold text-vibrantPurple shadow-sm">
            {ageGroup}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 font-medium mb-8 relative z-10 leading-relaxed flex-grow">
        {description}
      </p>
      
      <Button variant="outline" className={`w-full bg-gradient-to-r ${gradientClass.split(' ')[0]} ${gradientClass.split(' ')[1]} text-white border-none hover:opacity-90 hover:shadow-lg transition-all duration-300 relative z-10`}>
        Learn More <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default ProgramCard;
