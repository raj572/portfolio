import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Database, Rocket, Zap, Shield, MessageCircle, Instagram, Youtube } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.workflow-step').forEach((element) => {
      observer.observe(element);
    });

    setIsVisible(true);
    
    // Staggered animations for hero section
    const timer1 = setTimeout(() => setShowSubtitle(true), 1000);
    const timer2 = setTimeout(() => setShowDescription(true), 2000);
    const timer3 = setTimeout(() => setShowTags(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const workflowSteps = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Building robust applications using cutting-edge technologies",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend",
      description: "Implementing scalable server architecture and database systems",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Ensuring application security and data protection",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency across all platforms",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment",
      description: "Seamless deployment and continuous integration",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-16 sm:py-24">
        <div className={`w-full max-w-6xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Profile Image Container */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-8 sm:mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow-reverse opacity-75 blur-sm"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-gray-50 to-white rounded-full"></div>
            <img
              src="https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/474464441_2285294008510195_5307979756454677228_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jLgcOc_GfggQ7kNvgEeEWG_&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=A80BNZv3gdc0Frv8bC6duiJ&oh=00_AYASQ7uJ5YjW0wkGvajHpqJt6wtIczoJYxmWKQwMNmUrMg&oe=67971F0F"
              alt="Avinash Kumar"
              className="absolute inset-3 rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 md:px-8">
            <h1 className="typing-container text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient leading-tight mx-auto">
              Hi, I'm Avinash Kumar
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <div className={`transform transition-all duration-700 ${showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Full Stack Developer & AI Content Creator
                </p>
              </div>
              <div className={`transform transition-all duration-700 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                  Crafting digital experiences through code, creating engaging AI content, and driving growth with strategic social media advertising
                </p>
              </div>
              <div className={`transform transition-all duration-700 ${showTags ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-6">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                    Full Stack Development
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                    AI Content Creation
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500/10 to-pink-600/10 text-pink-700 rounded-full text-xs sm:text-sm font-medium">
                    Social Media Marketing
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <a href="https://github.com/raj572" className="social-icon-link" aria-label="GitHub Profile">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.linkedin.com/in/rajvinus/" className="social-icon-link" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.instagram.com/rajvinus/" className="social-icon-link" aria-label="Instagram Profile">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.youtube.com/@rajvinus" className="social-icon-link" aria-label="Instagram Profile">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="mailto:avinash.pro.dev@gmail.com" className="social-icon-link" aria-label="Email">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 sm:bottom-12 animate-float p-2 hover:text-blue-600 transition-colors"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </section>

      {/* Workflow Roadmap Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              My Development Workflow
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/20 to-purple-600/20 transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`workflow-step relative w-full flex ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  } md:justify-center items-center`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${step.color} transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow`}
                  ></div>

                  <div 
                    className={`
                      w-full md:w-[calc(50%-2rem)] p-6 transform opacity-0 translate-y-8
                      ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}
                      group
                    `}
                  >
                    <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${step.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View Project 
                    <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="https://wa.me/8935894362"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
          >
            <span>Get in Touch</span>
            <MessageCircle size={20} className="ml-2 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Avinash Kumar</h3>
              <p className="text-gray-400">Full Stack Developer crafting beautiful digital experiences</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="flex gap-4">
              <a href="https://github.com/raj572" className="social-icon-link" aria-label="GitHub Profile">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.linkedin.com/in/rajvinus/" className="social-icon-link" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.instagram.com/rajvinus/" className="social-icon-link" aria-label="Instagram Profile">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.youtube.com/@rajvinus" className="social-icon-link" aria-label="Instagram Profile">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="mailto:avinash.pro.dev@gmail.com" className="social-icon-link" aria-label="Email">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-8 text-center">
            <p className="text-gray-400">© 2024 Avinash Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Blogging Platform",
    description: "A full-stack blogging platform with real-time updates and social features.",
    image: "https://scontent.fpat1-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQNWeTH_f6rFkEF1Z0Eyh1LKo0LZLXYInqDovDGZRV6807Y5VH81D3C9RgUhxL_9HKQyO9IGLIk-YHeYVnRND7pvGJp20liX8B03x-a0KpVhVJbxwoYEyyNkTNQ7_PCF1NNzz158DIf3j_U9gZmmrN8sM13i.jpeg?_nc_ht=scontent.fpat1-1.fna.fbcdn.net&_nc_cat=105&ccb=9-4&oh=00_AYAzcbV9lbIP6OFpZF4WPubCSbj-66Wi0di0ecyCkPZnFQ&oe=67930F45&_nc_sid=5b3566",
    technologies: ["React", "Node.js"],
    link: "https://wonderful-dragon-440b85.netlify.app/",
    target: "_blank"
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website with a sleek and modern design.",
    image: "https://scontent.fpat1-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQN8tHDjxwFIBVaR-rjqaXgMYi_sXQSJoXW8mgSnE7ULlilIvZ2w6WLf1CwznqQyiQcl4j7FwvQ-GmF3e6hg8BxEgW6AcV8P3zTFLZYR37chzc56HQkpMlb3ysR4-BPahtfBgwb76hsAQCbb9X6MiGjzT9twpg.jpeg?_nc_ht=scontent.fpat1-1.fna.fbcdn.net&_nc_cat=109&ccb=9-4&oh=00_AYAiC9pJkTdNnSenfLPpmEKqZlLJS3FbiuiALDVsj90XRg&oe=67931C39&_nc_sid=5b3566",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://raj572.github.io/Portfolio-old",
    target: "_blank"
  },
  {
    title: "Business Website",
    description: "A business website with a sleek and modern design.",
    image: "https://scontent.fpat1-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQPaJzzhyOKNFSxFsBb_rr940Z20EiwVCv3ruPahLqpHGkWubP9L0d5XluU985JTm6x-SrO8weP9oaUBMmLGDGfEv7HyopmsLpXqRPmuHXULi0LPIog4sRk7eeWjL-Jr4r2WBALbeIgT9pqQcOcgHqmi2P_WDw.jpeg?_nc_ht=scontent.fpat1-1.fna.fbcdn.net&_nc_cat=103&ccb=9-4&oh=00_AYA7nlkAXLBkvlbjVmpgU8c1RzCYDsQa8MEcPKwxGnsYRw&oe=679309FB&_nc_sid=5b3566",
    technologies: ["React", "SpringBoot", "TypeScript", "Tailwind CSS"],
    link: "https://sysclu.com/",
    target: "_blank"
  },
  {
    title: "Landing Page",
    description: "A landing page with a sleek and modern design.",
    image: "https://scontent.fpat1-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQOX_dFNYicJiGfNrkw1KnQqBu4w9iaPZ-veI4nK-Bsfq2kTTLClI_OVTEDeMFblqaBnSBtlx5oXX2FdWv0zD0sUc3zK9QDy1ZtbtWO0vrlxuwKHNlygrAq3qiwyq34oNQqoe9b-JrOIuRDjSRAOFhKqOj86SA.jpeg?_nc_ht=scontent.fpat1-1.fna.fbcdn.net&_nc_cat=103&ccb=9-4&oh=00_AYB2AYxA1SU2lPWU1-uHYIDQ12hihCzsWZ4r1L6DG9bCeA&oe=67933C6B&_nc_sid=5b3566",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://raj572.github.io/instech",
    target: "_blank"
    
  }
];

export default App;
