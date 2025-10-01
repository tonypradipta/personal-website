import { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    'Informatic Student',
    'Web Developer',
    'UI/UX Designer',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's Tony</h1>
        <h3>
          <span className="typing-text">{text}</span>
        </h3>

        <div className="social-icons">
          <a href="https://github.com/tonypradipta" className="bx bxl-github"></a>
          <a href="https://www.linkedin.com/in/i-putu-tonyco-satria-pradipta-b93365334/" className="bx bxl-linkedin-square"></a>
          <a href="https://www.instagram.com/tonypradiptaa?igsh=MThlaTZxa2s5a2xo" className="bx bxl-instagram"></a>
          <a href="https://wa.me/085923159636" className="bx bxl-whatsapp"></a>
        </div>

        <div className="btn-group">
          <a href="#" className="btn">Download CV</a>
        </div>
      </div>

      <div className="home-img">
        <img src="/Profilepic.png" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;