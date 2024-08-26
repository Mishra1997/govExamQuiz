import React from 'react';
import {Card} from 'react-bootstrap'
import './AboutPage.css'
import Header from './Header';
const HireMePage = () => {
  return (
    <div id='about-container'>
    <Header />
    {/* <div style={styles.container}> */}
    
 <div id='about-home'>
   <div id='side-box-left'>
    <Card>
      1
    </Card>
   </div>
   <div id='center-box'>
 <Card id="main-card">
 
   <Card.Title>
   {/*  */}
   <h3 >Hire Me</h3>
 
   </Card.Title>
{/* <Card> */}

I'm a passionate React Developer at Tata Consultancy Services, with experience in creating dynamic web applications (Indian Passport). My expertise in React, coupled with a commitment to lifelong learning and continuous self-improvement, makes me a valuable asset. I'm eager to contribute to your projects—let's connect and discuss how I can help you achieve your goals!
{/* </Card> */}

       <section style={styles.section}>
         <h2 style={styles.subtitle}>Why You Should Hire Me</h2>
         <p style={styles.paragraph}>
           As a passionate <strong>React Developer</strong>, I bring a unique combination of skills, experience, and dedication to every project I undertake.
           Here’s why I would be a valuable addition to your team:
         </p>
         <ul style={styles.list}>
           <li style={styles.listItem}><strong>Strong Front-End Expertise:</strong> Solid foundation in front-end technologies, focusing on React.js, JavaScript, HTML, and CSS.</li>
           <li style={styles.listItem}><strong>Problem-Solving Mindset:</strong> Excel at analyzing complex problems and implementing effective, efficient solutions.</li>
           <li style={styles.listItem}><strong>Continuous Learning:</strong> Committed to continuous learning and staying updated with the latest industry trends.</li>
           <li style={styles.listItem}><strong>Collaboration & Communication:</strong> Thrive in collaborative environments, emphasizing strong communication.</li>
           <li style={styles.listItem}><strong>Passion for Excellence:</strong> Passionate about coding and delivering the best possible results.</li>
         </ul>
       </section> 
 
 </Card>
 
   </div>
   <div id='side-box-right'></div>
 </div>
 
    
    </div>
    // <div style={styles.container}>
    //   <h1 style={styles.title}>Hire Me</h1>

    //   <section style={styles.section}>
    //     <h2 style={styles.subtitle}>Why You Should Hire Me</h2>
    //     <p style={styles.paragraph}>
    //       As a passionate <strong>React Developer</strong>, I bring a unique combination of skills, experience, and dedication to every project I undertake.
    //       Here’s why I would be a valuable addition to your team:
    //     </p>
    //     <ul style={styles.list}>
    //       <li style={styles.listItem}><strong>Strong Front-End Expertise:</strong> Solid foundation in front-end technologies, focusing on React.js, JavaScript, HTML, and CSS.</li>
    //       <li style={styles.listItem}><strong>Problem-Solving Mindset:</strong> Excel at analyzing complex problems and implementing effective, efficient solutions.</li>
    //       <li style={styles.listItem}><strong>Continuous Learning:</strong> Committed to continuous learning and staying updated with the latest industry trends.</li>
    //       <li style={styles.listItem}><strong>Collaboration & Communication:</strong> Thrive in collaborative environments, emphasizing strong communication.</li>
    //       <li style={styles.listItem}><strong>Passion for Excellence:</strong> Passionate about coding and delivering the best possible results.</li>
    //     </ul>
    //   </section>

    //   <section style={styles.section}>
    //     <h2 style={styles.subtitle}>Key Skills</h2>
    //     <ul style={styles.list}>
    //       <li style={styles.listItem}>React.js & Redux</li>
    //       <li style={styles.listItem}>JavaScript (ES6+)</li>
    //       <li style={styles.listItem}>HTML5 & CSS3</li>
    //       <li style={styles.listItem}>Responsive Web Design</li>
    //       <li style={styles.listItem}>RESTful APIs</li>
    //       <li style={styles.listItem}>Version Control (Git)</li>
    //       <li style={styles.listItem}>Agile Methodologies</li>
    //       <li style={styles.listItem}>Problem Solving & Debugging</li>
    //     </ul>
    //   </section>

    //   <section style={styles.section}>
    //     <h2 style={styles.subtitle}>Projects</h2>
    //     <ul style={styles.list}>
    //       <li style={styles.listItem}>
    //         <strong>GovQuizPrep:</strong> Developed a quiz app for individuals preparing for government exams. The app features curated quizzes, performance tracking, and a user-friendly interface.
    //       </li>
    //       <li style={styles.listItem}>
    //         <strong>Project X:</strong> Brief description of another project highlighting your role and key achievements.
    //       </li>
    //     </ul>
    //   </section>

    //   <section style={styles.section}>
    //     <h2 style={styles.subtitle}>Let’s Work Together</h2>
    //     <p style={styles.paragraph}>
    //       I’m currently looking for new opportunities where I can contribute to exciting projects and collaborate with a dynamic team.
    //       If you’re interested in hiring a dedicated React Developer who is ready to make an impact, let’s get in touch!
    //     </p>
    //   </section>

    //   <section style={styles.section}>
    //     <h2 style={styles.subtitle}>Contact Me</h2>
    //     <p style={styles.paragraph}>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    //     <p style={styles.paragraph}>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
    //     <p style={styles.paragraph}>GitHub: <a href="#">github.com/yourusername</a></p>
    //   </section>
    // </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5em',
    marginTop: '20px',
    color: '#555',
  },
  section: {
    marginBottom: '30px',
  },
  paragraph: {
    marginBottom: '15px',
    fontSize: '1em',
    color: '#666',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
};

export default HireMePage;