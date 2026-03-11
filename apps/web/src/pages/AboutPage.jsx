
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Users, BookOpen, Sparkles, Star, Shield, Trophy, Lightbulb, Globe, Smile } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const whyChooseUs = [
    {
      icon: BookOpen,
      title: 'Montessori Excellence',
      description: 'Authentic Montessori curriculum designed to foster independence and critical thinking',
      color: 'vibrantPurple',
      bgColor: 'veryLightPurple'
    },
    {
      icon: Users,
      title: 'Qualified Educators',
      description: 'Certified Montessori teachers with years of experience in early childhood education',
      color: 'brightOrange',
      bgColor: 'veryLightOrange'
    },
    {
      icon: Heart,
      title: 'Nurturing Environment',
      description: 'Safe, loving atmosphere where every child feels valued and supported',
      color: 'hotPink',
      bgColor: 'softPeach'
    },
    {
      icon: Sparkles,
      title: 'Holistic Development',
      description: 'Focus on cognitive, social, emotional, and physical growth',
      color: 'sunnyYellow',
      bgColor: 'veryLightOrange'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Consistently excellent results and happy, confident graduates',
      color: 'mintGreen',
      bgColor: 'veryLightBlue'
    },
    {
      icon: Target,
      title: 'Individual Attention',
      description: 'Small class sizes ensuring personalized care for each child',
      color: 'skyBlue',
      bgColor: 'veryLightBlue'
    },
  ];



  const philosophyPoints = [
    {
      title: 'Hands-On Learning',
      description: 'Children learn best through direct experience with specially designed Montessori materials that engage their senses and promote understanding.',
      icon: Lightbulb,
      color: 'brightOrange'
    },
    {
      title: 'Mixed Age Groups',
      description: 'Our multi-age classrooms foster peer learning, leadership, and social development as older children mentor younger ones.',
      icon: Users,
      color: 'vibrantPurple'
    },
    {
      title: 'Freedom Within Limits',
      description: 'Children have the freedom to choose their activities within a structured environment that promotes responsibility and self-discipline.',
      icon: Globe,
      color: 'skyBlue'
    },
    {
      title: 'Respect for the Child',
      description: 'We honor each child\'s unique developmental timeline and learning style, fostering confidence and a positive self-image.',
      icon: Smile,
      color: 'hotPink'
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - International Kidz World Montessori Play School | Our Vision & Mission</title>
        <meta
          name="description"
          content="Learn about International Kidz World Montessori Play School's vision, mission, and commitment to authentic Montessori education in Adambakkam, Chennai. Meet our qualified educators and discover our child-centered approach."
        />
        <meta name="keywords" content="about Montessori school Chennai, International Kidz World mission, Montessori philosophy, qualified Montessori teachers, child-centered education, Adambakkam preschool, authentic Montessori method" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://internationalkidzworld.com/about" />
        <meta property="og:title" content="About International Kidz World Montessori Play School - Our Vision & Mission" />
        <meta property="og:description" content="Discover our commitment to authentic Montessori education, qualified teachers, and child-centered approach in Adambakkam, Chennai." />
        <meta property="og:image" content="https://internationalkidzworld.com/about-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About International Kidz World Montessori Play School - Our Vision & Mission" />
        <meta property="twitter:description" content="Discover our commitment to authentic Montessori education, qualified teachers, and child-centered approach in Adambakkam, Chennai." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://internationalkidzworld.com/about" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-vibrantPurple via-deepPurple to-brightMagenta overflow-hidden">
          <div className="absolute inset-0 bg-pattern-subtle opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center text-white"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-lightLavender bg-clip-text text-transparent"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Us
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover our journey, values, and commitment to nurturing young minds through authentic Montessori education
              </motion.p>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-sunnyYellow/20 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-hotPink/20 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-gradient-to-b from-softWhite to-veryLightPurple">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-vibrantPurple p-3 rounded-2xl shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-vibrantPurple">
                      Our Vision
                    </h2>
                  </motion.div>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be the leading Montessori institution in Chennai, recognized for excellence in early childhood education and for nurturing confident, creative, and compassionate global citizens.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We envision a world where every child has access to quality education that respects their individuality and empowers them to reach their full potential.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-2xl border border-lightLavender relative overflow-hidden"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brightOrange/10 to-transparent rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-brightOrange p-3 rounded-2xl shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-vibrantPurple">Our Mission</h3>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Provide authentic Montessori education that fosters independence and self-directed learning',
                        'Create a safe, nurturing environment where children feel loved and valued',
                        'Develop well-rounded individuals through holistic education',
                        'Partner with parents in their child\'s educational journey'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-brightOrange rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principal's Message Section */}
        <section className="py-20 bg-gradient-to-r from-veryLightBlue to-veryLightPurple">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-lightLavender relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vibrantPurple via-brightOrange to-hotPink"></div>
                
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-hotPink to-brightMagenta p-4 rounded-2xl shadow-lg"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Heart className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-vibrantPurple mb-2">
                      Message from Our Principal
                    </h2>
                    <p className="text-brightOrange font-semibold">Mrs. Salma</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <motion.p
                    className="text-lg font-medium text-vibrantPurple"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Dear Parents and Guardians,
                  </motion.p>
                  
                  {[
                    "Welcome to International Kidz World Montessori Play School! It is my privilege to lead this wonderful institution where we believe that every child is a unique individual with unlimited potential.",
                    "Our Montessori approach is not just a teaching method; it's a philosophy that respects the natural development of children. We provide a carefully prepared environment where children can explore, discover, and learn at their own pace, guided by our experienced and caring educators.",
                    "At International Kidz World, we focus on developing the whole child – intellectually, socially, emotionally, and physically. We believe in fostering independence, creativity, and a lifelong love for learning. Our curriculum is designed to nurture critical thinking, problem-solving skills, and social responsibility.",
                    "We are committed to creating a safe, inclusive, and joyful learning environment where every child feels valued and empowered. We look forward to partnering with you in your child's educational journey."
                  ].map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  <motion.div
                    className="pt-6 border-t border-lightLavender"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="font-semibold text-vibrantPurple">
                      Warm regards,<br />
                      Mrs. Salma<br />
                      <span className="text-brightOrange">Principal, International Kidz World Montessori Play School</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Montessori Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vibrantPurple to-brightMagenta bg-clip-text text-transparent">
                The Montessori Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Understanding the principles that guide our educational approach and shape young minds
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Main Philosophy Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-veryLightPurple to-veryLightBlue rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-lightLavender relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sunnyYellow/20 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="bg-vibrantPurple p-4 rounded-2xl shadow-lg"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BookOpen className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-vibrantPurple">Child-Centered Learning</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      The Montessori method, developed by Dr. Maria Montessori, is based on the belief that children are naturally eager to learn and capable of self-directed learning when provided with the right environment and materials.
                    </p>
                    <p className="text-lg">
                      Our classrooms are carefully prepared environments where children can freely choose activities that interest them, work at their own pace, and develop independence and self-confidence.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy Points Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {philosophyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 hover:border-opacity-60 transition-all duration-300 h-full ${
                      point.color === 'brightOrange' ? 'border-brightOrange/20 hover:border-brightOrange/40' :
                      point.color === 'vibrantPurple' ? 'border-vibrantPurple/20 hover:border-vibrantPurple/40' :
                      point.color === 'skyBlue' ? 'border-skyBlue/20 hover:border-skyBlue/40' :
                      'border-hotPink/20 hover:border-hotPink/40'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className={`p-3 rounded-xl shadow-md ${
                            point.color === 'brightOrange' ? 'bg-brightOrange' :
                            point.color === 'vibrantPurple' ? 'bg-vibrantPurple' :
                            point.color === 'skyBlue' ? 'bg-skyBlue' :
                            'bg-hotPink'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <point.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className={`text-xl font-bold ${
                          point.color === 'brightOrange' ? 'text-brightOrange' :
                          point.color === 'vibrantPurple' ? 'text-vibrantPurple' :
                          point.color === 'skyBlue' ? 'text-skyBlue' :
                          'text-hotPink'
                        }`}>{point.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-veryLightPurple via-softWhite to-veryLightOrange">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vibrantPurple to-brightOrange bg-clip-text text-transparent">
                Why Choose International Kidz World
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for your child's early education
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 border-2 hover:border-opacity-60 h-full relative overflow-hidden ${
                    item.color === 'vibrantPurple' ? 'border-vibrantPurple/20 hover:border-vibrantPurple/40' :
                    item.color === 'brightOrange' ? 'border-brightOrange/20 hover:border-brightOrange/40' :
                    item.color === 'hotPink' ? 'border-hotPink/20 hover:border-hotPink/40' :
                    item.color === 'sunnyYellow' ? 'border-sunnyYellow/20 hover:border-sunnyYellow/40' :
                    item.color === 'mintGreen' ? 'border-mintGreen/20 hover:border-mintGreen/40' :
                    'border-skyBlue/20 hover:border-skyBlue/40'
                  }`}>
                    <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-50 ${
                      item.bgColor === 'veryLightPurple' ? 'bg-veryLightPurple' :
                      item.bgColor === 'veryLightOrange' ? 'bg-veryLightOrange' :
                      item.bgColor === 'softPeach' ? 'bg-softPeach' :
                      'bg-veryLightBlue'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                          item.color === 'vibrantPurple' ? 'bg-vibrantPurple' :
                          item.color === 'brightOrange' ? 'bg-brightOrange' :
                          item.color === 'hotPink' ? 'bg-hotPink' :
                          item.color === 'sunnyYellow' ? 'bg-sunnyYellow' :
                          item.color === 'mintGreen' ? 'bg-mintGreen' :
                          'bg-skyBlue'
                        }`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-vibrantPurple transition-colors ${
                        item.color === 'vibrantPurple' ? 'text-vibrantPurple' :
                        item.color === 'brightOrange' ? 'text-brightOrange' :
                        item.color === 'hotPink' ? 'text-hotPink' :
                        item.color === 'sunnyYellow' ? 'text-sunnyYellow' :
                        item.color === 'mintGreen' ? 'text-mintGreen' :
                        'text-skyBlue'
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


      </div>
    </>
  );
};

export default AboutPage;
