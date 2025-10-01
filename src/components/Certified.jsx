const Certified = () => {
  const certifications = [
    {
      icon: 'bxl-html5',
      title: 'HTML Basic',
      description: 'Create the structure and framework of a website consisting of several elements. HTML also functions as a content display on our website.'
    },
    {
      icon: 'bxl-css3',
      title: 'CSS Basic',
      description: 'Give style to each element on the website using CSS, such as giving colors to elements, positioning elements, providing background images, making the display responsive'
    },
    {
      icon: 'bxl-javascript',
      title: 'JS Basic',
      description: 'Make a website more interactive by adding several programs written using JavaScript.'
    },
    {
      icon: 'bx-data',
      title: 'SQL Basic',
      description: 'Measures basic knowledge of SQL (Structured Query Language), a language used to manage and manipulate relational databases. This certificate indicates that the recipient has basic skills in working with SQL.'
    },
    {
      icon: 'bx-code-block',
      title: 'C Basic',
      description: 'Programming skills using the C language. This certificate is awarded after someone completes a basic programming course or training using the C language'
    },
    {
      icon: 'bx-code-curly',
      title: 'C++ Basic',
      description: 'Understand the basic structure of code in C++, including how to declare variables, use of data types, operators, and control structures (such as loops and conditions).'
    }
  ];

  return (
    <section className="certified" id="certified">
      <h2 className="heading">My <span>Certify</span></h2>
      
      <div className="certified-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">
              <i className={`bx ${cert.icon}`}></i>
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href="#" className="cert-btn">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certified;