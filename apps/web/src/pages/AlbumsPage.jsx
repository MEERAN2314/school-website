
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const AlbumsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'activities', label: 'Activities', icon: '🎨' },
    { id: 'events', label: 'Events', icon: '🎉' },
    { id: 'celebrations', label: 'Celebrations', icon: '🎊' },
    { id: 'facilities', label: 'Facilities', icon: '🏫' },
  ];

  // Import all images from assets folder
  const images = [
    {
      src: '/assets/Nature activity da.jpeg',
      alt: 'Nature activity day - Children exploring outdoors',
      category: 'activities',
      title: 'Nature Activity Day'
    },
    {
      src: '/assets/Yoga.jpeg',
      alt: 'Yoga session with children',
      category: 'activities',
      title: 'Yoga Session'
    },
    {
      src: '/assets/black and white day.jpeg',
      alt: 'Black and white day celebration',
      category: 'celebrations',
      title: 'Black & White Day'
    },
    {
      src: '/assets/purple day.jpeg',
      alt: 'Purple day celebration',
      category: 'celebrations',
      title: 'Purple Day'
    },
    {
      src: '/assets/admission open.jpeg',
      alt: 'Admission open announcement',
      category: 'events',
      title: 'Admission Open'
    },
    {
      src: '/assets/certificates.jpeg',
      alt: 'Certificate distribution ceremony',
      category: 'events',
      title: 'Certificate Distribution'
    },
    {
      src: '/assets/entrance.jpeg',
      alt: 'School entrance view',
      category: 'facilities',
      title: 'School Entrance'
    },
    {
      src: '/assets/index.jpeg',
      alt: 'School overview',
      category: 'facilities',
      title: 'School Overview'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.17.jpeg',
      alt: 'School activity moment',
      category: 'activities',
      title: 'Learning Activities'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.22.jpeg',
      alt: 'Children engaged in learning',
      category: 'activities',
      title: 'Classroom Learning'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.24.jpeg',
      alt: 'Interactive learning session',
      category: 'activities',
      title: 'Interactive Learning'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.26.jpeg',
      alt: 'Creative activities',
      category: 'activities',
      title: 'Creative Time'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.29.jpeg',
      alt: 'Group activities',
      category: 'activities',
      title: 'Group Activities'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.30.jpeg',
      alt: 'Learning through play',
      category: 'activities',
      title: 'Play & Learn'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.33.jpeg',
      alt: 'Montessori activities',
      category: 'activities',
      title: 'Montessori Method'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.45.jpeg',
      alt: 'Special event celebration',
      category: 'events',
      title: 'Special Event'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.53.jpeg',
      alt: 'School celebration',
      category: 'celebrations',
      title: 'School Celebration'
    },
    {
      src: '/assets/WhatsApp Image 2026-03-10 at 20.38.59.jpeg',
      alt: 'Happy moments at school',
      category: 'activities',
      title: 'Happy Moments'
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setImageIndex(0);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;

    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
    setImageIndex(newIndex);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <>
      <Helmet>
        <title>Photo Gallery - School Activities & Events | International Kidz World Montessori Chennai</title>
        <meta
          name="description"
          content="Browse our photo gallery showcasing classroom activities, events, celebrations and joyful moments at International Kidz World Montessori Play School in Adambakkam, Chennai. See children learning and growing through Montessori education."
        />
        <meta name="keywords" content="Montessori school photos Chennai, preschool gallery Adambakkam, children activities photos, school events pictures, Montessori classroom images, kids learning photos Chennai, play school gallery" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://internationalkidzworld.com/albums" />
        <meta property="og:title" content="Photo Gallery - School Activities & Events | International Kidz World Montessori" />
        <meta property="og:description" content="See joyful moments and learning experiences at our Montessori school in Chennai through our photo gallery of activities, events and celebrations." />
        <meta property="og:image" content="https://internationalkidzworld.com/gallery-og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Photo Gallery - School Activities & Events | International Kidz World Montessori" />
        <meta property="twitter:description" content="See joyful moments and learning experiences at our Montessori school in Chennai through our photo gallery of activities, events and celebrations." />

        {/* Image Gallery Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "International Kidz World Photo Gallery",
            "description": "Photo gallery showcasing classroom activities, events, and celebrations at International Kidz World Montessori Play School",
            "publisher": {
              "@type": "School",
              "name": "International Kidz World Montessori Play School",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.135/112, Masthan Gori St, Balakrishnapuram",
                "addressLocality": "Adambakkam",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600088",
                "addressCountry": "IN"
              }
            }
          })}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://internationalkidzworld.com/albums" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                📸 Photo Gallery
              </motion.h1>
              <motion.p
                className="text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Capturing precious moments of learning, growth, and joy at International Kidz World
              </motion.p>
              <motion.div
                className="mt-8 text-sm opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {images.length} beautiful memories • Click any image to view in full screen
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Images Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-600">
                Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
              </p>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                          <p className="text-white/80 text-xs line-clamp-2">{image.alt}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📷</div>
                <p className="text-gray-600 text-lg mb-2">No photos found in this category</p>
                <p className="text-gray-500">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                >
                  <h3 className="text-white font-semibold text-lg mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.alt}</p>
                  {filteredImages.length > 1 && (
                    <p className="text-white/60 text-xs mt-2">
                      {filteredImages.findIndex(img => img.src === selectedImage.src) + 1} of {filteredImages.length}
                    </p>
                  )}
                </motion.div>
              </motion.div>

              {/* Keyboard Hints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs text-center"
              >
                Press ESC to close • Use arrow keys to navigate
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AlbumsPage;
