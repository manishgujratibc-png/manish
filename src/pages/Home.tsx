import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Hammer, 
  DraftingCompass, 
  HardHat,
  Calendar,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Navbar, Footer } from '../components/Shared';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'architectural',
    title: 'Architectural Design',
    description: 'Bespoke house plans and architectural layouts tailored to your lifestyle and site conditions.',
    icon: <DraftingCompass className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/arch/800/600'
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    description: 'Advanced structural analysis and engineering solutions to ensure safety and longevity.',
    icon: <Building2 className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/struct/800/600'
  },
  {
    id: 'construction',
    title: 'Construction Management',
    description: 'End-to-end project management from foundation to finishing with precision and quality.',
    icon: <Hammer className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/const/800/600'
  },
  {
    id: 'renovation',
    title: 'Renovation & Interior',
    description: 'Transforming existing spaces into modern masterpieces with creative interior solutions.',
    icon: <HardHat className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/reno/800/600'
  }
];

const GALLERY_IMAGES = [
  'https://lh3.googleusercontent.com/p/AF1QipN8jAcOViUA52bgmWnM7xBv0Cp1jlU2mRM3X0H8=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipO3e6xQwQfHNIqwV1GGQW4pvT5AhSdSBR9sOcwL=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipNrUBHC2nXNkrBaZCKmiMecddN77qQBuPx_WFl9=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipMC5vy0-O93WltUEXH7hfUsc5oavh2xUGJS5gO5=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipM7DJEpPkTwl6QY8dAaamBk13hC6Rc7PpQzICbG=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipP4E0yM9EGT5mTBk10Xlx6pej2svS7cUCEVdrVx=s1360-w1360-h1020-rw',
];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
              16+ Years Experience
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Building Your <span className="text-accent">Dreams</span> With Precision.
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mb-10 leading-relaxed">
            Swastik Architect & Engineering Solution provides world-class architectural design, 
            structural engineering, and construction management in Rourkela.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-accent text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1ylqNUzT3T2HSzu14mDz0YYpmWMuVZjNt" 
              alt="Engineering Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-xs hidden lg:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/20 p-3 rounded-2xl">
                <CheckCircle2 className="text-accent w-8 h-8" />
              </div>
              <div className="font-bold text-xl">16+ Years Experience</div>
            </div>
            <p className="text-slate-500 text-sm">
              We have been delivering exceptional engineering solutions across Odisha for over 16 years.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Leading Engineering <span className="text-primary">Consultants</span> in Rourkela.
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Swastik Architect & Engineering Solution is a premier engineering consultancy firm based in Rourkela, Odisha. 
            We specialize in providing comprehensive architectural and structural solutions that blend creativity with technical excellence.
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Our team of highly professional, creative, and detail-oriented experts is dedicated to guiding you through every step 
            of your construction journey, from initial planning to final execution.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              "Professional Team",
              "Creative Designs",
              "Detail Oriented",
              "Fast Execution",
              "Reasonable Prices",
              "Flexible Appointments"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
            Learn More About Us <ChevronRight className="w-5 h-5 group-hover:text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive <span className="text-primary">Solutions</span></h2>
          <p className="text-slate-500 text-lg">
            We offer a wide range of engineering and architectural services to meet your construction needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface rounded-3xl p-8 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="bg-white group-hover:bg-accent p-4 rounded-2xl w-fit mb-6 transition-colors shadow-sm">
                <div className="text-primary group-hover:text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-200 mb-6 line-clamp-3">
                {service.description}
              </p>
              <a href="#booking" className="inline-flex items-center gap-2 font-bold text-sm group-hover:text-accent">
                Book Service <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold">Recent <span className="text-primary">Projects</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="booking" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Online Booking</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Start Your <span className="text-accent">Project</span>?
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Schedule a free consultation with our expert engineers. We'll discuss your vision, 
              requirements, and provide a preliminary roadmap for your dream project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Working Hours</h4>
                  <p className="text-slate-400">Open Daily: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Service Areas</h4>
                  <p className="text-slate-400">Rourkela, Banei and nearby areas in Odisha.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Booking Received!</h3>
                <p className="text-slate-500">We will call you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="095832 72020"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                    <option>House Planning</option>
                    <option>Structural Design</option>
                    <option>Construction Management</option>
                    <option>Renovation</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">Select Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      minDate={new Date()}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"} <Calendar className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Have a question or want to discuss a project? Reach out to us via the form or contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Office</h4>
                  <p className="text-slate-500">
                    Biju Patnaik road, near SBI Bank, Gopabandhu Nagar, Kalinga Vihar, Chhend Colony, Rourkela, Odisha 769015
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-slate-500">095832 72020</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-slate-500">contact@swastikarchitect.com</p>
                </div>
              </div>
            </div>
        </div>

        <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary outline-none" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary outline-none" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary outline-none" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary outline-none resize-none"></textarea>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">Send Message</button>
              </form>
            </div>

            {/* Google Map Placeholder */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl h-64 bg-slate-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.658254256844!2d84.8465063753351!3d22.25306647971932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20197777777777%3A0x7777777777777777!2sSwastik%20Architect%20%26%20Engineering%20Solution!5e0!3m2!1sen!2sin!4v1709583272020!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
