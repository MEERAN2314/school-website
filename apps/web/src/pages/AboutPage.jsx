
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Users, BookOpen, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const whyChooseUs = [
    {
      icon: BookOpen,
      title: 'Montessori Excellence',
      description: 'Authentic Montessori curriculum designed to foster independence and critical thinking',
    },
    {
      icon: Users,
      title: 'Qualified Educators',
      description: 'Certified Montessori teachers with years of experience in early childhood education',
    },
    {
      icon: Heart,
      title: 'Nurturing Environment',
      description: 'Safe, loving atmosphere where every child feels valued and supported',
    },
    {
      icon: Sparkles,
      title: 'Holistic Development',
      description: 'Focus on cognitive, social, emotional, and physical growth',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Consistently excellent results and happy, confident graduates',
    },
    {
      icon: Target,
      title: 'Individual Attention',
      description: 'Small class sizes ensuring personalized care for each child',
    },
  ];

  const achievements = [
    'Certified Montessori School',
    'ISO 9001:2015 Certified',
    'Best Play School Award 2025',
    'Excellence in Early Childhood Education',
    'Safe School Certification',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - International Kidz World Montessori Play School</title>
        <meta
          name="description"
          content="Learn about International Kidz World Montessori Play School's vision, mission, and commitment to quality early childhood education in Adambakkam, Chennai."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="relative py-20 bg-gradient-to-br from-deep-blue to-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Discover our journey, values, and commitment to nurturing young minds
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-deep-blue">
                  Our Vision
                </h2>
                <p className="text-lg text-navy/80 mb-6">
                  To be the leading Montessori institution in Chennai, recognized for excellence in early childhood education and for nurturing confident, creative, and compassionate global citizens.
                </p>
                <p className="text-lg text-navy/80">
                  We envision a world where every child has access to quality education that respects their individuality and empowers them to reach their full potential.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-light-gray rounded-2xl p-8 shadow-xl border-t-4 border-bright-red">
                  <Target className="w-16 h-16 text-bright-red mb-4" />
                  <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Mission</h3>
                  <ul className="space-y-3 text-navy/80">
                    <li className="flex items-start gap-2">
                      <span className="text-bright-red mt-1">•</span>
                      <span>Provide authentic Montessori education that fosters independence and self-directed learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bright-red mt-1">•</span>
                      <span>Create a safe, nurturing environment where children feel loved and valued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bright-red mt-1">•</span>
                      <span>Develop well-rounded individuals through holistic education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bright-red mt-1">•</span>
                      <span>Partner with parents in their child's educational journey</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-deep-blue">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-bright-red p-3 rounded-xl">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-deep-blue">
                    Message from Our Principal
                  </h2>
                </div>
                <p className="text-lg text-navy/80 mb-4">
                  Dear Parents and Guardians,
                </p>
                <p className="text-navy/80 mb-4">
                  Welcome to International Kidz World Montessori Play School! It is my privilege to lead this wonderful institution where we believe that every child is a unique individual with unlimited potential.
                </p>
                <p className="text-navy/80 mb-4">
                  Our Montessori approach is not just a teaching method; it's a philosophy that respects the natural development of children. We provide a carefully prepared environment where children can explore, discover, and learn at their own pace, guided by our experienced and caring educators.
                </p>
                <p className="text-navy/80 mb-4">
                  At International Kidz World, we focus on developing the whole child – intellectually, socially, emotionally, and physically. We believe in fostering independence, creativity, and a lifelong love for learning. Our curriculum is designed to nurture critical thinking, problem-solving skills, and social responsibility.
                </p>
                <p className="text-navy/80 mb-4">
                  We are committed to creating a safe, inclusive, and joyful learning environment where every child feels valued and empowered. We look forward to partnering with you in your child's educational journey.
                </p>
                <p className="text-navy/80 font-semibold">
                  Warm regards,<br />
                  Mrs. Kavitha Ramesh<br />
                  Principal, International Kidz World Montessori Play School
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-4 text-deep-blue"
            >
              The Montessori Philosophy
            </motion.h2>
            <p className="text-center text-navy/70 mb-12 max-w-3xl mx-auto">
              Understanding the principles that guide our educational approach
            </p>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-light-gray rounded-2xl p-8 mb-8 border-l-4 border-bright-red"
              >
                <h3 className="text-2xl font-bold text-deep-blue mb-4">Child-Centered Learning</h3>
                <p className="text-navy/80 mb-4">
                  The Montessori method, developed by Dr. Maria Montessori, is based on the belief that children are naturally eager to learn and capable of self-directed learning when provided with the right environment and materials.
                </p>
                <p className="text-navy/80">
                  Our classrooms are carefully prepared environments where children can freely choose activities that interest them, work at their own pace, and develop independence and self-confidence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-light-gray rounded-xl p-6 border-t-2 border-deep-blue"
                >
                  <h3 className="text-xl font-bold text-deep-blue mb-3">Hands-On Learning</h3>
                  <p className="text-navy/80">
                    Children learn best through direct experience with specially designed Montessori materials that engage their senses and promote understanding.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-light-gray rounded-xl p-6 border-t-2 border-bright-red"
                >
                  <h3 className="text-xl font-bold text-deep-blue mb-3">Mixed Age Groups</h3>
                  <p className="text-navy/80">
                    Our multi-age classrooms foster peer learning, leadership, and social development as older children mentor younger ones.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-light-gray rounded-xl p-6 border-t-2 border-deep-blue"
                >
                  <h3 className="text-xl font-bold text-deep-blue mb-3">Freedom Within Limits</h3>
                  <p className="text-navy/80">
                    Children have the freedom to choose their activities within a structured environment that promotes responsibility and self-discipline.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-light-gray rounded-xl p-6 border-t-2 border-bright-red"
                >
                  <h3 className="text-xl font-bold text-deep-blue mb-3">Respect for the Child</h3>
                  <p className="text-navy/80">
                    We honor each child's unique developmental timeline and learning style, fostering confidence and a positive self-image.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-deep-blue"
            >
              Why Choose International Kidz World
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-light-gray"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-light-gray w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-bright-red" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue mb-2">{item.title}</h3>
                  <p className="text-navy/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-deep-blue"
            >
              Our Achievements & Certifications
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-light-gray rounded-xl p-4 border-l-4 border-deep-blue"
                  >
                    <Award className="w-8 h-8 text-bright-red flex-shrink-0" />
                    <span className="text-navy font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
