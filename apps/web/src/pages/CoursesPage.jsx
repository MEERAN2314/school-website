
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Baby, Smile, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const CoursesPage = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const { toast } = useToast();

  const programs = [
    {
      id: 'playgroup',
      title: 'Play Group',
      ageGroup: '1.5 - 2.5 years',
      icon: Baby,
      gradient: 'from-vibrantPurple to-hotPink',
      borderColor: 'border-l-vibrantPurple',
      curriculum: [
        'Sensory exploration activities',
        'Basic motor skill development',
        'Introduction to social interaction',
        'Music and movement',
        'Simple art activities',
      ],
      activities: [
        'Sand and water play',
        'Finger painting',
        'Building blocks',
        'Story time',
        'Outdoor play',
      ],
      outcomes: [
        'Improved fine and gross motor skills',
        'Enhanced sensory awareness',
        'Basic social skills',
        'Confidence in group settings',
      ],
    },
    {
      id: 'prekg',
      title: 'Pre-KG',
      ageGroup: '2.5 - 3.5 years',
      icon: Smile,
      gradient: 'from-brightOrange to-sunnyYellow',
      borderColor: 'border-l-brightOrange',
      curriculum: [
        'Pre-literacy activities',
        'Number recognition',
        'Shape and color identification',
        'Language development',
        'Creative expression',
      ],
      activities: [
        'Montessori practical life exercises',
        'Puzzle solving',
        'Role play',
        'Nature walks',
        'Craft activities',
      ],
      outcomes: [
        'Recognition of letters and numbers',
        'Improved vocabulary',
        'Better hand-eye coordination',
        'Enhanced creativity',
      ],
    },
    {
      id: 'lkg',
      title: 'LKG (Lower Kindergarten)',
      ageGroup: '3.5 - 4.5 years',
      icon: BookOpen,
      gradient: 'from-freshLimeGreen to-turquoise',
      borderColor: 'border-l-freshLimeGreen',
      curriculum: [
        'Phonics and early reading',
        'Basic mathematics concepts',
        'Environmental awareness',
        'Creative arts',
        'Physical education',
      ],
      activities: [
        'Letter formation practice',
        'Counting games',
        'Science experiments',
        'Drama and dance',
        'Sports activities',
      ],
      outcomes: [
        'Reading simple words',
        'Basic arithmetic skills',
        'Scientific curiosity',
        'Improved physical fitness',
      ],
    },
    {
      id: 'ukg',
      title: 'UKG (Upper Kindergarten)',
      ageGroup: '4.5 - 5.5 years',
      icon: GraduationCap,
      gradient: 'from-skyBlue to-vibrantPurple',
      borderColor: 'border-l-skyBlue',
      curriculum: [
        'Advanced reading and writing',
        'Mathematical operations',
        'General knowledge',
        'Computer basics',
        'Life skills',
      ],
      activities: [
        'Reading comprehension',
        'Problem-solving exercises',
        'Project work',
        'Computer lab sessions',
        'Field trips',
      ],
      outcomes: [
        'Reading fluency',
        'Mathematical reasoning',
        'Computer literacy',
        'School readiness',
      ],
    }
  ];

  const handleEnquire = (programTitle) => {
    toast({
      title: "Enquiry Submitted!",
      description: `Thank you for your interest in ${programTitle}. We'll contact you soon!`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Programs - International Kidz World Montessori Play School</title>
        <meta
          name="description"
          content="Explore our comprehensive Montessori programs including Play Group, Pre-KG, LKG, and UKG at International Kidz World in Adambakkam, Chennai."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">Our Programs</h1>
              <p className="text-xl max-w-3xl mx-auto drop-shadow-sm">
                Age-appropriate Montessori programs designed to nurture every stage of your child's development
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-veryLightPurple">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 border-l-[6px] ${program.borderColor}`}
                >
                  <button
                    onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${program.gradient} p-3 rounded-xl shadow-md`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800">{program.title}</h2>
                        <p className="text-gray-600">{program.ageGroup}</p>
                      </div>
                    </div>
                    {expandedProgram === program.id ? (
                      <ChevronUp className="w-6 h-6 text-hotPink" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-vibrantPurple" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedProgram === program.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-800 mb-3">Curriculum Highlights</h3>
                              <ul className="space-y-2">
                                {program.curriculum.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-hotPink mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-lg font-bold text-gray-800 mb-3">Activities</h3>
                              <ul className="space-y-2">
                                {program.activities.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-brightOrange mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Learning Outcomes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {program.outcomes.map((outcome, i) => (
                                <div
                                  key={i}
                                  className="bg-veryLightPurple rounded-lg p-3 text-gray-700 border-l-2 border-vibrantPurple"
                                >
                                  {outcome}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            <Button
                              className={`bg-gradient-to-r ${program.gradient} text-white border-none hover:opacity-90 hover:scale-105 transition-all shadow-md`}
                              onClick={() => handleEnquire(program.title)}
                            >
                              Enquire Now
                            </Button>
                            <Button
                              variant="outline"
                              className="border-vibrantPurple text-vibrantPurple hover:bg-vibrantPurple hover:text-white transition-all"
                              onClick={() => toast({
                                title: "Download Brochure",
                                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                              })}
                            >
                              Download Brochure
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-brightOrange to-hotPink mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Ready to Enroll Your Child?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our community of happy learners and give your child the best start in their educational journey.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-vibrantPurple to-hotPink text-white hover:scale-105 transition-all shadow-lg border-none"
                  onClick={() => toast({
                    title: "Schedule Visit",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                  })}
                >
                  Schedule a Visit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brightOrange text-brightOrange hover:bg-brightOrange hover:text-white transition-all"
                  onClick={() => toast({
                    title: "Contact Us",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                  })}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesPage;
