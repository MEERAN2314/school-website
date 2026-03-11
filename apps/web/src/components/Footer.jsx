
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-skyBlue' },
    { icon: Instagram, href: 'https://www.instagram.com/internationalkidzworld?igsh=eTk3cDVnaWhmZXdz', label: 'Instagram', color: 'hover:bg-hotPink' },
  ];

  return (
    <footer className="bg-gradient-to-r from-deepPurple via-vibrantPurple to-turquoise text-white relative overflow-hidden border-t-4 border-sunnyYellow">
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                <img 
                  src="https://horizons-cdn.hostinger.com/dcb273d5-021c-46a9-9400-00fcdf0852ad/28144f580308f502f13969e84c0be5c2.png" 
                  alt="Kidoz World Montessori Logo" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold block text-white">International Kidz World</span>
                <span className="text-sm font-semibold text-sunnyYellow uppercase tracking-wider">Montessori Play School</span>
              </div>
            </div>
            <p className="text-white/90 font-medium leading-relaxed">
              Where Little Minds Grow Big Dreams. Nurturing the next generation with love, care, and the proven Montessori method.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brightOrange rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-sunnyYellow font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-hotPink group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-freshLimeGreen rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-brightOrange transition-colors mt-1">
                  <MapPin className="w-4 h-4 text-white transition-colors" />
                </div>
                <span className="text-white/90 font-medium leading-relaxed">
                  No.135/112, Masthan Gori St, Balakrishnapuram, Adambakkam, Chennai, Tamil Nadu – 600088
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-freshLimeGreen transition-colors">
                  <Phone className="w-4 h-4 text-white transition-colors" />
                </div>
                <span className="text-white/90 font-medium">+91 98414 44842</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-skyBlue transition-colors">
                  <Mail className="w-4 h-4 text-white transition-colors" />
                </div>
                <span className="text-white/90 font-medium">info@internationalkidzworld.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hotPink rounded-full"></span>
            </h3>
            <p className="text-white/90 font-medium mb-4">Stay connected with us on social media for updates and joyful moments.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`bg-white/10 shadow-md p-3 rounded-xl text-white ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80 font-medium">
            © {new Date().getFullYear()} International Kidz World Montessori Play School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
