import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import code from './icons/2.jpg';

const projectsData = [
  {
    id: '8fs-core',
    name: '8fs/core',
    title: 'Enhanced S3 Compatibility & Testing',
    description: "Verified and enhanced a comprehensive S3 API compatibility test suite (`s3_compat_test.go`, `s3_compat_listing_test.go`), covering bucket operations, object management, metadata, error handling, and advanced features like pagination and ETag validation. Also contributed AWS CLI integration docs and an automated test script to simplify developer onboarding and ensure robust functionality.",
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/8fs-io/core/pull/34?notification_referrer_id=NT_kwDOBuOOLLUxOTAyNzU3OTUyNjoxMTU1NzYzNjQ#event-19786855528'
  },
  {
    id: '8fs-core2',
    name: '8fs/core',
    title: "AWS CLI Documentation & Test Automation",
    description: 'Enhanced S3 compatibility by verifying and extending a comprehensive Go-based test suite (`s3_compat_test.go`). The tests cover a wide range of S3 API features, including bucket/object operations, metadata, and error handling. Additionally, contributed AWS CLI integration documentation and an automated shell script to validate S3 operations, simplifying developer onboarding and ensuring robust functionality.',
    image: code,
    link: 'https://github.com/8fs-io/core/issues/18#event-19753907996'
  }
  // {
  //   id: 'langchain',
  //   name: 'LangChain JS',
  //   title: 'Extending Core Functionality',
  //   description: 'Contributed to the core LangChain JS library by implementing the Gemini API chat models and embeddings. This enhancement expanded the library\'s capabilities, allowing developers to seamlessly integrate Google\'s powerful generative models into their applications.',
  //   image: 'https://images.unsplash.com/photo-1517694712202-1428bc383897?q=80&w=2070&auto=format&fit=crop',
  //   link: 'https://github.com/langchain-ai/langchainjs/pulls?q=is%3Apr+author%3Avsd10'
  // },
  // {
  //   id: 'gradio',
  //   name: 'Gradio UI',
  //   title: 'Improving User Interface Components',
  //   description: 'Submitted a pull request to the Gradio UI library, focusing on enhancing the accessibility and responsiveness of their core components. My work involved refactoring CSS and adding ARIA attributes to ensure a better user experience for everyone.',
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  //   link: 'https://github.com/gradio-app/gradio/pulls?q=is%3Apr+author%3Avsd10'
  // },
  // {
  //   id: 'fastapi',
  //   name: 'FastAPI Docs',
  //   title: 'Enhancing Developer Documentation',
  //   description: 'Improved the official FastAPI documentation by adding clearer code examples and detailed explanations for asynchronous request handling. The goal was to make it easier for new developers to get started with building high-performance APIs.',
  //   image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop',
  //   link: 'https://github.com/tiangolo/fastapi/pulls?q=is%3Apr+author%3Avsd10'
  // }
];

const OpenSource: React.FC = () => {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const activeProject = projectsData.find(p => p.id === activeTab);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        const currentIndex = projectsData.findIndex(p => p.id === activeTab);
        const nextIndex = (currentIndex + 1) % projectsData.length;
        setActiveTab(projectsData[nextIndex].id);
      }, 5000); // Switch every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, activeTab]);

  return (
    <motion.section
      id="opensource"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Open Source Contributions
        </h2>
        <p className="text-gray-400 max-w-3xl mb-12">
          I'm passionate about building in the open and collaborating with the community. Here are some of the projects I've had the pleasure of contributing to.
        </p>

        <div className="border-b border-gray-800 mb-12">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`relative whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === project.id
                    ? 'border-green-400 text-green-400'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                {project.name}
              </button>
            ))}
          </nav>
        </div>
        
        <AnimatePresence mode="wait">
            {activeProject && (
                 <motion.div
                    key={activeProject.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                 >
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">{activeProject.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">{activeProject.description}</p>
                        <a 
                            href={activeProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <span>View Contribution</span>
                            <ArrowUpRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                        <img 
                            src={activeProject.image} 
                            alt={activeProject.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                 </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default OpenSource;
