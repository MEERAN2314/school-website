
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Users, Palette, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import ProgramCard from '@/components/ProgramCard.jsx';
import ImageCard from '@/components/ImageCard.jsx';

const HomePage = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Montessori Method',
      description: 'Child-centered approach fostering independence and natural learning',
      color: 'from-vibrantPurple to-hotPink',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure, nurturing space where children feel loved and protected',
      color: 'from-brightOrange to-sunnyYellow',
    },
    {
      icon: Users,
      title: 'Expert Educators',
      description: 'Qualified teachers passionate about early childhood development',
      color: 'from-skyBlue to-turquoise',
    },
    {
      icon: Palette,
      title: 'Activity Learning',
      description: 'Hands-on activities that make learning fun and engaging',
      color: 'from-freshLimeGreen to-mintGreen',
    },
  ];

  const testimonials = [
    {
      name: 'Fathima',
      text: 'My daughter has blossomed at International Kidz World! The teachers are so caring and the Montessori approach has really helped her become more independent and confident.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      text: 'Best decision we made for our son! The school provides a perfect balance of learning and play. The facilities are excellent and the staff is wonderful.',
      rating: 5,
    },
    {
      name: 'Sandeep',
      text: 'I love how the school focuses on individual development. My child looks forward to going to school every day. The curriculum is well-structured and engaging.',
      rating: 5,
    },
  ];

  const programs = [
    {
      title: 'Play Group',
      ageGroup: '1.5 - 2.5 years',
      description: 'Introduction to social interaction and sensory exploration',
      icon: Star,
    },
    {
      title: 'Pre-KG',
      ageGroup: '2.5 - 3.5 years',
      description: 'Building foundation skills through play and discovery',
      icon: BookOpen,
    },
    {
      title: 'LKG',
      ageGroup: '3.5 - 4.5 years',
      description: 'Developing language, math, and creative abilities',
      icon: Palette,
    },
  ];

  const galleryImages = [
    { src: '/assets/WhatsApp Image 2026-03-10 at 20.38.22.jpeg', alt: 'Classroom Activities' },
    { src: '/assets/Nature activity da.jpeg', alt: 'Nature Activity Day' },
    { src: '/assets/WhatsApp Image 2026-03-10 at 20.38.33.jpeg', alt: 'Montessori Learning' },
  ];

  return (
    <>
      <Helmet>
        <title>International Kidz World Montessori Play School - Best Montessori School in Adambakkam, Chennai</title>
        <meta
          name="description"
          content="International Kidz World Montessori Play School in Adambakkam, Chennai offers authentic Montessori education for children aged 1.5-4.5 years. Best play school with qualified teachers, safe environment, and holistic development programs. Enroll now!"
        />
        <meta name="keywords" content="Montessori school Chennai, play school Adambakkam, best preschool Chennai, International Kidz World, early childhood education, Montessori method, kindergarten Chennai, nursery school Adambakkam, child development center" />
        <meta name="author" content="International Kidz World Montessori Play School" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://internationalkidzworld.com/" />
        <meta property="og:title" content="International Kidz World Montessori Play School - Best Montessori School in Chennai" />
        <meta property="og:description" content="Authentic Montessori education for children aged 1.5-4.5 years in Adambakkam, Chennai. Safe environment, qualified teachers, and holistic development programs." />
        <meta property="og:image" content="https://internationalkidzworld.com/og-image.jpg" />
        <meta property="og:site_name" content="International Kidz World Montessori Play School" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://internationalkidzworld.com/" />
        <meta property="twitter:title" content="International Kidz World Montessori Play School - Best Montessori School in Chennai" />
        <meta property="twitter:description" content="Authentic Montessori education for children aged 1.5-4.5 years in Adambakkam, Chennai. Safe environment, qualified teachers, and holistic development programs." />
        <meta property="twitter:image" content="https://internationalkidzworld.com/og-image.jpg" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "International Kidz World Montessori Play School",
            "description": "Authentic Montessori education for children aged 1.5-4.5 years in Adambakkam, Chennai",
            "url": "https://internationalkidzworld.com",
            "telephone": "+91 98414 44842",
            "email": "info@internationalkidzworld.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.135/112, Masthan Gori St, Balakrishnapuram",
              "addressLocality": "Adambakkam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600088",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.990125187326928",
              "longitude": "80.20005617625623"
            },
            "openingHours": [
              "Mo-Fr 08:00-17:00",
              "Sa 08:00-13:00"
            ],
            "priceRange": "$$",
            "image": "https://internationalkidzworld.com/school-image.jpg",
            "sameAs": [
              "https://www.instagram.com/internationalkidzworld"
            ]
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://internationalkidzworld.com/" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-vibrantPurple via-brightOrange to-skyBlue">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1702426900067-b6f649e9ff90"
              alt="Happy children learning at International Kidz World Montessori Play School"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vibrantPurple/80 via-hotPink/60 to-brightOrange/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-pattern-dots opacity-30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-sunnyYellow text-deepPurple font-bold text-sm mb-6 shadow-lg animate-bounce">
                Admissions Open 2026-27
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Where Little Minds <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunnyYellow to-brightOrange drop-shadow-sm">Grow Big Dreams</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                Nurturing young learners through the proven Montessori method in the heart of Adambakkam, Chennai.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-brightOrange to-hotPink text-white hover:shadow-xl hover:scale-105 border-none text-lg px-8 py-6">
                    Book a Visit <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-vibrantPurple hover:bg-veryLightPurple text-lg px-8 py-6 shadow-xl hover:scale-105">
                    Enquire Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto fill-veryLightPurple" preserveAspectRatio="none">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 bg-veryLightPurple relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-vibrantPurple to-hotPink mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrantPurple to-hotPink">International Kidz World</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                We believe every child is unique and deserves a nurturing environment to explore, learn, and grow. Our Montessori-based curriculum encourages independence, creativity, and a lifelong love for learning.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 group border-b-4 border-transparent hover:border-hotPink"
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${highlight.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <highlight.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 font-medium">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 bg-veryLightOrange relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-waves opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-brightOrange to-sunnyYellow mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brightOrange to-hotPink">Programs</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                Age-appropriate programs designed to nurture every stage of your child's development
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProgramCard {...program} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/courses">
                <Button size="lg" className="bg-gradient-to-r from-brightOrange to-hotPink text-white hover:shadow-xl hover:scale-105 border-none text-lg px-8">
                  View All Programs <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-skyBlue to-vibrantPurple mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyBlue to-vibrantPurple">Parents Say</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                Hear from our happy parents about their experience with International Kidz World
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-veryLightBlue relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-hotPink to-brightOrange mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Joyful <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotPink to-brightOrange">Moments</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                Glimpses of learning and fun at our school - where every moment is a step towards growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ImageCard {...image} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/albums">
                <Button size="lg" className="bg-gradient-to-r from-hotPink to-brightOrange text-white hover:shadow-xl hover:scale-105 border-none text-lg px-8">
                  View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-vibrantPurple via-hotPink to-brightOrange relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center text-white max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
                Admissions Open for 2026-27!
              </h2>
              <p className="text-xl mb-10 font-medium text-white drop-shadow-sm">
                Give your child the gift of quality Montessori education. Limited seats available!
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-sunnyYellow text-deepPurple hover:bg-white hover:scale-105 text-lg px-10 py-6 shadow-xl border-none">
                    Book a Visit <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-vibrantPurple hover:bg-veryLightPurple hover:scale-105 text-lg px-10 py-6 shadow-xl border-none">
                    Enquire Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
