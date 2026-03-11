
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ title, date, location, description, image }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 group border border-gray-100"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vibrantPurple/90 via-hotPink/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-md group-hover:text-sunnyYellow transition-colors relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-brightOrange rounded-full"></span>
          </h3>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-veryLightPurple/30">
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center gap-3 text-gray-700 font-semibold bg-white p-2 rounded-lg shadow-sm w-fit border border-gray-100">
            <div className="bg-gradient-to-br from-brightOrange to-sunnyYellow p-1.5 rounded-md">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">{date}</span>
          </div>
          
          {location && (
            <div className="flex items-center gap-3 text-gray-700 font-semibold bg-white p-2 rounded-lg shadow-sm w-fit border border-gray-100">
              <div className="bg-gradient-to-br from-skyBlue to-turquoise p-1.5 rounded-md">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">{location}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;
