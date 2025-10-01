const Education = () => {
  const educationData = [
    {
      position: 'left',
      year: '2023',
      title: 'Ganesha University of Education',
      description: 'Enrolled at Ganesha University of Education, Faculty of Engineering and Vocational Studies, majoring in Informatics Engineering. Currently in 5th semester, actively learning web development, AI, and software engineering.'
    },
    {
      position: 'right',
      year: '2020-2023',
      title: 'SMAN 4 Denpasar',
      description: 'Graduated from high school with focus on Science and Mathematics. Started learning basic programming and developed passion for technology and computer science.'
    },
    {
      position: 'left',
      year: '2017-2020',
      title: 'SMPN 7 Denpasar',
      description: 'I attended at SMPN 7 Denpasar from 2017 to 2020. This is part my educational journey before continuing to high school. Here, i received a foundation in general knowledge, which served as the basis for further education.'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.position}`}>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;