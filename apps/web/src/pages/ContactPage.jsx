
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

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
      content: '+91 98765 43210',
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
        <title>Contact Us - International Kidz World Montessori Play School</title>
        <meta
          name="description"
          content="Contact International Kidz World Montessori Play School in Adambakkam, Chennai. Visit us, call, or send a message for admissions and enquiries."
        />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-hotPink"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-hotPink to-brightOrange mb-4 rounded-full"></div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotPink focus:border-transparent bg-gray-50 text-gray-900 transition-all shadow-sm hover:shadow-md"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brightOrange focus:border-transparent bg-gray-50 text-gray-900 transition-all shadow-sm hover:shadow-md"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-vibrantPurple focus:border-transparent bg-gray-50 text-gray-900 transition-all shadow-sm hover:shadow-md"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skyBlue focus:border-transparent bg-gray-50 text-gray-900 transition-all shadow-sm hover:shadow-md"
                      placeholder="Tell us about your enquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-brightOrange to-hotPink text-white hover:scale-[1.02] transition-all shadow-lg border-none"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

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
                  href="https://wa.me/919876543210"
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="International Kidz World Montessori Play School Location"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
