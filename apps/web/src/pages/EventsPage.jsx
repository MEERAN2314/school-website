
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard.jsx';

const EventsPage = () => {
  const events = [
    {
      title: 'Annual Day Celebration 2026',
      date: 'March 15, 2026',
      location: 'School Auditorium',
      description: 'Our grand annual day celebration showcasing the talents of our wonderful students through dance, drama, music, and cultural performances. Parents and families are invited to witness the amazing growth and achievements of our children.',
      image: 'https://images.unsplash.com/photo-1652407173066-6bca9753ffea',
    },
    {
      title: 'Sports Day Extravaganza',
      date: 'April 5, 2026',
      location: 'School Playground',
      description: 'A day filled with exciting sports activities, races, and games for all age groups. Children will participate in various athletic events designed to promote physical fitness, teamwork, and sportsmanship. Come cheer for your little champions!',
      image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f',
    },
    {
      title: 'Pongal Festival Celebration',
      date: 'January 14-15, 2026',
      location: 'School Campus',
      description: 'Traditional Pongal celebration with cultural activities, traditional games, and festive decorations. Children will learn about Tamil culture and traditions while enjoying special activities and traditional snacks.',
      image: 'https://images.unsplash.com/photo-1697790698221-5e5712c82e92',
    },
    {
      title: 'Diwali Festival of Lights',
      date: 'October 2026',
      location: 'School Campus',
      description: 'Celebrate the festival of lights with rangoli making, diya decoration, and cultural performances. Children will learn about the significance of Diwali while participating in fun, safe activities.',
      image: 'https://images.unsplash.com/photo-1696965118775-15e44ecd1e35',
    },
    {
      title: 'Independence Day Celebration',
      date: 'August 15, 2026',
      location: 'School Campus',
      description: 'Patriotic celebration with flag hoisting, cultural programs, and activities that instill national pride and values in our young learners.',
      image: 'https://images.unsplash.com/photo-1596488711806-2d21fdbfe633',
    },
    {
      title: 'Christmas Celebration',
      date: 'December 2026',
      location: 'School Campus',
      description: 'Festive celebration with carol singing, Christmas tree decoration, and visit from Santa Claus. Children will enjoy special activities and learn about the spirit of giving.',
      image: 'https://images.unsplash.com/photo-1693920615557-433759882d48',
    },
    {
      title: 'Grandparents Day',
      date: 'September 2026',
      location: 'School Campus',
      description: 'A special day dedicated to honoring grandparents with performances, games, and activities where children and grandparents can bond and create beautiful memories together.',
      image: 'https://images.unsplash.com/photo-1652407173066-6bca9753ffea',
    },
    {
      title: 'Science Exhibition',
      date: 'November 2026',
      location: 'School Auditorium',
      description: 'Young scientists showcase their projects and experiments. An interactive exhibition where children demonstrate their understanding of scientific concepts through hands-on displays.',
      image: 'https://images.unsplash.com/photo-1596488711620-b36f025a805a',
    },
    {
      title: 'Art & Craft Exhibition',
      date: 'February 2027',
      location: 'School Gallery',
      description: 'Display of creative artwork, crafts, and projects created by our talented students throughout the year. Parents can appreciate their children\'s artistic development and creativity.',
      image: 'https://images.unsplash.com/photo-1578593139862-d9b9d9693d57',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Events - International Kidz World Montessori Play School</title>
        <meta
          name="description"
          content="Explore upcoming events and celebrations at International Kidz World Montessori Play School in Adambakkam, Chennai. Annual Day, Sports Day, Cultural Festivals and more."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Celebrations</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Join us for exciting events and celebrations throughout the year
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in celebrating every milestone and creating joyful memories for our children
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EventCard {...event} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Why We Celebrate
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    At International Kidz World, we believe that celebrations and events are an integral part of a child's holistic development. Our carefully planned events serve multiple purposes:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span><strong>Cultural Awareness:</strong> Festivals and celebrations help children understand and appreciate diverse cultures and traditions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span><strong>Confidence Building:</strong> Performances and presentations boost children's self-confidence and public speaking skills.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span><strong>Social Skills:</strong> Group activities and celebrations enhance teamwork and social interaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span><strong>Family Bonding:</strong> Events provide opportunities for families to engage with the school community.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span><strong>Joyful Learning:</strong> Celebrations make learning fun and create lasting positive memories.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsPage;
