
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, text, rating = 5, index = 0 }) => {
  const borderColors = [
    'border-l-vibrantPurple',
    'border-l-brightOrange',
    'border-l-sunnyYellow',
    'border-l-freshLimeGreen',
    'border-l-skyBlue',
    'border-l-hotPink'
  ];
  
  const bgColors = [
    'bg-veryLightPurple',
    'bg-veryLightOrange',
    'bg-yellow-50',
    'bg-green-50',
    'bg-veryLightBlue',
    'bg-pink-50'
  ];

  const borderColor = borderColors[index % borderColors.length];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      className={`${bgColor} rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-white border-l-[6px] ${borderColor} relative`}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-300 drop-shadow-sm opacity-50" />
      
      <div className="flex items-center gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-sunnyYellow text-sunnyYellow drop-shadow-sm" />
        ))}
      </div>
      
      <p className="text-gray-700 font-medium mb-6 text-lg leading-relaxed italic relative z-10">
        "{text}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-vibrantPurple to-hotPink shadow-md flex items-center justify-center font-bold text-xl text-white`}>
          {name.charAt(0)}
        </div>
        <p className="font-bold text-gray-800 text-lg">{name}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
