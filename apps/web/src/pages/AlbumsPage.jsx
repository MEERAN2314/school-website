
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ImageCard from '@/components/ImageCard.jsx';
import { Button } from '@/components/ui/button.jsx';

const AlbumsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'activities', label: 'Class Activities' },
    { id: 'events', label: 'Events' },
    { id: 'celebrations', label: 'Celebrations' },
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1652407173066-6bca9753ffea',
      alt: 'Children engaged in classroom learning activities',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1596488711806-2d21fdbfe633',
      alt: 'Kids learning through interactive play',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1693920615557-433759882d48',
      alt: 'Montessori learning materials and activities',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f',
      alt: 'Children enjoying outdoor play activities',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1596488711620-b36f025a805a',
      alt: 'Creative art and craft activities',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1697790698221-5e5712c82e92',
      alt: 'Festival celebration with traditional decorations',
      category: 'celebrations',
    },
    {
      src: 'https://images.unsplash.com/photo-1696965118775-15e44ecd1e35',
      alt: 'Diwali celebration with lights and decorations',
      category: 'celebrations',
    },
    {
      src: 'https://images.unsplash.com/photo-1578593139862-d9b9d9693d57',
      alt: 'Children participating in art exhibition',
      category: 'events',
    },
    {
      src: 'https://images.unsplash.com/photo-1702426900067-b6f649e9ff90',
      alt: 'Happy children in classroom environment',
      category: 'activities',
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
      alt: 'Annual day performance by students',
      category: 'events',
    },
    {
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
      alt: 'Sports day activities and games',
      category: 'events',
    },
    {
      src: 'https://images.unsplash.com/photo-1560785477-d43d2b34e0df',
      alt: 'Children celebrating birthday party',
      category: 'celebrations',
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Photo Gallery - International Kidz World Montessori Play School</title>
        <meta
          name="description"
          content="Browse our photo gallery showcasing class activities, events, and celebrations at International Kidz World Montessori Play School in Adambakkam, Chennai."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="relative py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Capturing precious moments of learning, growth, and joy
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </motion.div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageCard
                      {...image}
                      onClick={() => setSelectedImage(image)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 text-lg">No images found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AlbumsPage;
