
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner.jsx';

const ImageCard = ({ src, alt, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group border-2 border-transparent hover:border-hotPink"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-veryLightPurple flex items-center justify-center">
          <LoadingSpinner className="text-vibrantPurple" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vibrantPurple/90 via-hotPink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <p className="text-white font-bold text-lg drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {alt}
        </p>
      </div>
    </motion.div>
  );
};

export default ImageCard;
