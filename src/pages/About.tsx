import React from 'react';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Purpose-Driven',
      description: 'Every solution we create serves a meaningful purpose and drives real impact.'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: 'Visionary Thinking',
      description: 'We see beyond the present to anticipate future needs and opportunities.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Human-Centered',
      description: 'People are at the heart of everything we do, from design to delivery.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in tech innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technical architect passionate about scalable solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative strategist focused on user-centered design.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Nexus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate innovators, designers, and technologists 
              united by a shared vision: to create digital experiences that make 
              the world a better place.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Nexus began as a small startup with a big dream: 
                  to bridge the gap between cutting-edge technology and human needs. 
                  What started as a two-person team in a garage has grown into a 
                  global company serving thousands of clients worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, 
                  and an unwavering commitment to excellence. We've weathered challenges, 
                  celebrated victories, and always kept our focus on what matters most: 
                  creating value for our clients and their communities.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders, but we 
                  remain humble and hungry for the next challenge. Our story is 
                  still being written, and we're excited about the chapters ahead.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="font-bold">Award Winner</div>
                    <div className="text-sm opacity-90">Innovation 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the culture 
              we've built at Nexus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind Nexus, each bringing unique expertise 
              and passion to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              To empower individuals and organizations with innovative technology 
              solutions that drive positive change, foster connection, and unlock 
              human potential in an increasingly digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-blue-100 text-sm">Building stronger connections</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-green-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Impact</h3>
              <p className="text-blue-100 text-sm">Creating meaningful change</p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-yellow-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-blue-100 text-sm">Pushing boundaries forward</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;