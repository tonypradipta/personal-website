const Projects = () => {
  const projects = [
    {
      image: '/project1.png',
      title: 'Personal Website',
      description: 'Create an unique personal portfolio or a blog site with modern design and intuitive navigation. Showcase your work, skills, and experiences while keeping it professional and easy to navigate.',
      buttonText: 'Live Demo',
      link: '#https://tonypradipta-portofolio.vercel.app/'
    },
    {
      image: '/project2.png',
      title: 'Sedarah Website',
      description: 'A platform designed to connect blood donors with those in need, fostering a supportive community for sharing life-saving donations. Users can find donation centers, track their donations.',
      buttonText: 'Source Code?',
      link: 'https://github.com/tonypradipta/Sedarah'
    },
    {
      image: '/project3.png',
      title: 'Simple Property Website',
      description: 'A sleek and interactive real estate website for showcasing properties. Allow users to browse, filter, and search listings with detailed information, including photos, prices, and descriptions',
      buttonText: 'Live Demo',
      link: 'https://property-web-eight.vercel.app/'
    },
    {
      image: '/project4.png',
      title: 'Background Remover',
      description: 'A simple and efficient tool for automatically removing backgrounds from images. Perfect for creating clean, professional photos or for use in design projects and e-commerce sites.',
      buttonText: 'Live Demo',
      link: 'https://remove-bg-psi-blond.vercel.app/'
    },
    {
      image: '/project5.png',
      title: 'Video Manager',
      description: 'A powerful and user-friendly video management platform. Organize, upload, and manage your video content efficiently while offering easy access for sharing and viewing.',
      buttonText: 'Source Code?',
      link: 'https://github.com/tonypradipta/video-manajer'
    },
    {
      image: '/project6.png',
      title: 'Multi Chat AI',
      description: 'A multi-model chat AI platform capable of conversing on various topics. This application allows seamless interaction with multiple AI models, offering versatility in responses.',
      buttonText: 'Live Demo',
      link: 'https://multichat-ai-tau.vercel.app/'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-box">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
              {project.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;