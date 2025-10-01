const Services = () => {
  const services = [
    {
      icon: 'bxl-figma',
      title: 'UI UX Design',
      description: 'UI/UX Design focuses on creating an attractive interface along with a seamless user experience. Its not just about visuals, but also about ensuring that the flow of an application or website is intuitive, easy to use, and enjoyable for users.'
    },
    {
      icon: 'bx-code',
      title: 'Frontend Development',
      description: 'Frontend Development is the process of building the parts of an application or website that users directly see and interact with. A frontend developer ensures that the design is transformed into responsive, fast, and accessible interactive code across different devices.'
    },
    {
      icon: 'bx-code-curly',
      title: 'Backend Development',
      description: 'Backend Development acts as the "brain" of an application or website. This is where the logic, database, and server are managed to make sure the system runs smoothly, securely, and effectively supports both user and business needs.'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-info">
              <i className={`bx ${service.icon}`}></i>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;