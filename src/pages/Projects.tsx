import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { Navbar, Footer } from '../components/Shared';
import { cn } from '../lib/utils';

const PROJECTS = [
  {
    id: 1,
    name: "Modern Villa Residence",
    type: "Residential",
    location: "Chhend Colony, Rourkela",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Skyline Commercial Complex",
    type: "Commercial",
    location: "Civil Township, Rourkela",
    status: "Completed",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Luxury Apartments",
    type: "Apartment",
    location: "Koel Nagar, Rourkela",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Eco-Friendly House",
    type: "Residential",
    location: "Basanti Colony, Rourkela",
    status: "Completed",
    year: "2021",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Tech Park Office",
    type: "Commercial",
    location: "Udit Nagar, Rourkela",
    status: "Completed",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Riverside Villa",
    type: "Villa",
    location: "Panposh, Rourkela",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687931-cebf10cb4cb0?auto=format&fit=crop&q=80&w=800"
  }
];

const ONGOING_PROJECTS = [
  {
    id: 7,
    name: "Grand Plaza Mall",
    location: "Ring Road, Rourkela",
    completionDate: "Dec 2024",
    progress: 75,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Green Valley Residences",
    location: "Kalinga Vihar, Rourkela",
    completionDate: "Mar 2025",
    progress: 40,
    image: "https://images.unsplash.com/photo-1541888087525-2bf54dea9b72?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Architectural Projects in Rourkela | Swastik Architect</title>
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Architecture"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our <span className="text-accent">Projects</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our completed and ongoing architectural and construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold">Completed Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <div className="space-y-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {project.status}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Completed in {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">In Progress</span>
            <h2 className="text-3xl md:text-4xl font-bold">Currently Ongoing Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ONGOING_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                  <div className="space-y-3 text-slate-600 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" /> Expected: {project.completionDate}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>Progress</span>
                      <span className="text-primary">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Locations Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Locations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Find our completed architectural projects across the city.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <MapPin className="w-4 h-4 text-accent" /> {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
