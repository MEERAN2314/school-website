
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'No.135/112, Masthan Gori St, Balakrishnapuram, Adambakkam, Chennai, Tamil Nadu – 600088',
      gradient: 'from-vibrantPurple to-hotPink'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98414 44842',
      gradient: 'from-brightOrange to-sunnyYellow'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@internationalkidzworld.com',
      gradient: 'from-skyBlue to-turquoise'
    },
    {
      icon: Clock,
      title: 'School Timings',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 8:00 AM - 1:00 PM',
      gradient: 'from-freshLimeGreen to-mintGreen'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - International Kidz World Montessori Play School | Adambakkam, Chennai</title>
        <meta
          name="description"
          content="Contact International Kidz World Montessori Play School in Adambakkam, Chennai. Visit us, call +91 98414 44842, or WhatsApp for admissions and enquiries. Get directions to our school location."
        />
        <meta name="keywords" content="contact Montessori school Chennai, International Kidz World address, Adambakkam play school contact, Montessori school phone number, preschool admissions Chennai, school location Adambakkam" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://internationalkidzworld.com/contact" />
        <meta property="og:title" content="Contact International Kidz World Montessori Play School - Adambakkam, Chennai" />
        <meta property="og:description" content="Visit us in Adambakkam, Chennai or call +91 98414 44842 for admissions and enquiries. Get directions and contact information." />
        <meta property="og:image" content="https://internationalkidzworld.com/contact-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact International Kidz World Montessori Play School - Adambakkam, Chennai" />
        <meta property="twitter:description" content="Visit us in Adambakkam, Chennai or call +91 98414 44842 for admissions and enquiries. Get directions and contact information." />
        
        {/* Local Business Contact Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "School",
              "name": "International Kidz World Montessori Play School",
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
              "openingHours": [
                "Mo-Fr 08:00-17:00",
                "Sa 08:00-13:00"
              ]
            }
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://internationalkidzworld.com/contact" />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="relative py-20 bg-gradient-to-br from-vibrantPurple via-hotPink to-brightOrange">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto drop-shadow-sm">
                We'd love to hear from you! Get in touch for admissions, enquiries, or to schedule a visit
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-veryLightOrange">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-vibrantPurple to-skyBlue mb-4 rounded-full"></div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Get in Touch
                </h2>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${info.gradient} p-3 rounded-xl shadow-sm`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.a
                  href="https://wa.me/919841444842"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="block bg-gradient-to-r from-freshLimeGreen to-mintGreen text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <h3 className="font-bold text-lg">WhatsApp Us</h3>
                      <p className="text-white/90">Quick response on WhatsApp</p>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-skyBlue to-turquoise mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Visit Our School
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We welcome you to visit our campus and see our facilities firsthand
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-veryLightBlue"
            >
              <div className="relative h-96">
                {/* Official Google Maps iframe for International Kidz World */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7141622452796!2d80.20005617625623!3d12.990125187326928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672b555d0293%3A0x4924aa688025b965!2sInternational%20Kidz%20World%20Montessori%20Play%20School!5e0!3m2!1sen!2sin!4v1773132260294!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="International Kidz World Montessori Play School Location"
                />
                
                {/* Overlay button for direct Google Maps access */}
                <div className="absolute top-4 right-4 z-10">
                  <a
                    href="https://maps.app.goo.gl/bM1CsuhAndJ2qnJY6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-vibrantPurple font-semibold hover:bg-white transition-all flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    View Larger Map
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
