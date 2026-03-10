import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Star, Quote, MapPin, Building2 } from 'lucide-react';
import { Navbar, Footer } from '../components/Shared';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Balaram Jena",
    role: "Local Guide",
    projectType: "Residential House Plan",
    location: "Rourkela",
    content: "I wanted to take a moment to express my sincere gratitude for your help in creating my house plan. Your humble and friendly approach made the entire process smooth and enjoyable.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Balaram+Jena&background=1e3a8a&color=fff"
  },
  {
    id: 2,
    name: "Subham Thakur",
    role: "Home Owner",
    projectType: "Villa Construction",
    location: "Chhend Colony",
    content: "I had a wonderful experience with Swastik Architect and Engineering Solutions. Their team is highly professional, creative, and detail-oriented. From the initial planning to the final execution.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Subham+Thakur&background=1e3a8a&color=fff"
  },
  {
    id: 3,
    name: "Pabitra Rana",
    role: "Client",
    projectType: "Commercial Building",
    location: "Civil Township",
    content: "Swastik architect & engineering solutions is excellent! They respond very quickly to my needs. I loved their flexible appointment times, which made it easy for me.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Pabitra+Rana&background=1e3a8a&color=fff"
  },
  {
    id: 4,
    name: "Anita Dash",
    role: "Business Owner",
    projectType: "Office Interior",
    location: "Udit Nagar",
    content: "The interior design provided by the team was beyond our expectations. They perfectly captured our brand identity and created a highly functional workspace.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Anita+Dash&background=1e3a8a&color=fff"
  }
];

const CLIENT_LIST = [
  { name: "Mr. Rajesh Kumar", type: "Residential Villa", city: "Rourkela", year: "2023" },
  { name: "TechNova Solutions", type: "Commercial Office", city: "Bhubaneswar", year: "2023" },
  { name: "Dr. S. Mohanty", type: "Clinic Design", city: "Rourkela", year: "2022" },
  { name: "GreenLeaf Apartments", type: "Multi-story Residential", city: "Cuttack", year: "2022" },
  { name: "Sunrise Retail", type: "Retail Store", city: "Rourkela", year: "2021" },
  { name: "Mrs. K. Pradhan", type: "House Renovation", city: "Rourkela", year: "2021" },
  { name: "BlueWave Hotel", type: "Hospitality", city: "Puri", year: "2020" },
  { name: "Mr. A. Nayak", type: "Duplex House", city: "Rourkela", year: "2020" }
];

export default function Clients() {
  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Client Testimonials | Swastik Architect Rourkela</title>
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=2070" 
            alt="Happy Clients"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Happy <span className="text-accent">Clients</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We take pride in delivering exceptional architectural and engineering solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-3xl relative shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full shadow-md" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10 text-lg">
                  "{t.content}"
                </p>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" /> {t.projectType}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" /> {t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold">Client Showcase</h2>
            <p className="text-slate-500 mt-4 max-w-2xl">A selected list of our esteemed clients and the projects we've successfully delivered for them.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5 text-primary border-b border-primary/10">
                    <th className="p-6 font-bold uppercase text-xs tracking-wider">Client Name</th>
                    <th className="p-6 font-bold uppercase text-xs tracking-wider">Project Type</th>
                    <th className="p-6 font-bold uppercase text-xs tracking-wider">City</th>
                    <th className="p-6 font-bold uppercase text-xs tracking-wider">Completion Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CLIENT_LIST.map((client, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-primary/5 transition-colors"
                    >
                      <td className="p-6 font-bold text-slate-800">{client.name}</td>
                      <td className="p-6 text-slate-600">{client.type}</td>
                      <td className="p-6 text-slate-600">{client.city}</td>
                      <td className="p-6 text-slate-600 font-medium">{client.year}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
