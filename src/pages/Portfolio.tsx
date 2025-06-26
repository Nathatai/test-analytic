import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow Dashboard',
      category: 'web',
      description: 'A comprehensive analytics dashboard for SaaS companies with real-time data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'FitTracker Mobile',
      category: 'mobile',
      description: 'A fitness tracking app with workout plans, progress monitoring, and social features.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'EcoShop Platform',
      category: 'ecommerce',
      description: 'Sustainable e-commerce platform with advanced filtering and eco-friendly product focus.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'MindfulSpace App',
      category: 'design',
      description: 'Meditation and mindfulness app design with calming aesthetics and intuitive navigation.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Principle', 'Adobe XD', 'Sketch'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'CloudSync Enterprise',
      category: 'web',
      description: 'Enterprise file sharing and collaboration platform with advanced security features.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'AWS', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'FoodieFinds App',
      category: 'mobile',
      description: 'Restaurant discovery app with AR menu viewing and social dining features.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'ARCore', 'Google Maps', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                // id={`portfolio_filter_${category.id}`}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span id={`portfolio_filter_${category.id}`}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <a
                        href={project.liveUrl}
                        id={`project_live_${project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                        className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        id={`project_code_${project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                        className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      id={`project_view_live_${project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                    >
                      View Live
                      <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      id={`project_view_code_${project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                      className="text-gray-600 hover:text-gray-700 font-medium flex items-center group"
                    >
                      View Code
                      <Github className="ml-1 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our portfolio speaks for itself with measurable results and satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                150+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and see how we can help you achieve 
            your digital goals with our proven expertise.
          </p>
          <Link
            to="/contact"
            id="portfolio_cta_start_project"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center group shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;