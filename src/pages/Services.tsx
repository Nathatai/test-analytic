import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Performance Optimization'],
      price: 'Starting at $5,000'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment'],
      price: 'Starting at $8,000'
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $3,000'
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-600" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: <Database className="w-12 h-12 text-red-600" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS/Azure Setup', 'Database Design', 'DevOps', 'Monitoring'],
      price: 'Starting at $4,000'
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: 'Security Consulting',
      description: 'Comprehensive security audits and implementation of best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Training'],
      price: 'Starting at $6,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our team develops a comprehensive strategy and project roadmap tailored to your needs.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'We create beautiful, user-centered designs that align with your brand and objectives.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers bring the designs to life using cutting-edge technologies and best practices.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution works flawlessly across all devices and browsers.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive digital solutions 
            that drive growth and deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </span>
                    <Link
                      to="/contact"
                      id={`service_quote_${service.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                    >
                      Get Quote
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered 
              on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can help bring your vision to life with our 
            comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              id="services_cta_get_started"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              id="services_cta_view_work"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;