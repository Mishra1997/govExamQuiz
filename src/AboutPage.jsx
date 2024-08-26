import React from 'react';
import Header from './Header';
import { Card } from 'react-bootstrap';
import './AboutPage.css'

const AboutPage = () => {
  return (
   <div id='about-container'>
   <Header />
   {/* <div style={styles.container}> */}
   
<div id='about-home'>
  <div id='side-box-left'>
  </div>
  <div id='center-box'>
<Card id="main-card">

  <Card.Title>

{/* <h4> */}
About GovExamQuiz
{/* </h4> */}

  </Card.Title>
  <p style={styles.paragraph}>
        Welcome to <strong>GovExamQuiz</strong>, your dedicated platform for mastering general knowledge and current affairs,
        specifically tailored for individuals preparing for government job exams.
      </p>
      <h2 style={styles.subtitle}>Our Mission</h2>
      <p style={styles.paragraph}>
        At GovExamQuiz, our mission is to empower aspirants by providing them with the right tools and resources to excel in competitive exams.
        We understand the challenges faced by candidates in keeping up with the vast syllabus and ever-changing patterns of government exams.
        Our goal is to simplify this process by offering a comprehensive quiz platform that covers all essential topics in an engaging and interactive manner.
      </p>

      <h2 style={styles.subtitle}>What We Offer</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Curated Quizzes:</strong> Our quizzes are meticulously designed by experts to cover a wide range of topics, including history, geography, politics,  science, and more. Each quiz is crafted to help you grasp key concepts and facts that are crucial for government exams.</li>
        <li style={styles.listItem}><strong>Current Affairs Updates:</strong> Stay up-to-date with the latest happenings around the world. We provide regularly updated quizzes on current affairs to ensure you are well-prepared for this important section of your exam.</li>
        {/* <li style={styles.listItem}>
          <strong>Performance Tracking:</strong> With our advanced performance tracking features, you can monitor your progress, identify areas for improvement, and fine-tune your preparation strategy.</li> */}
        <li style={styles.listItem}>
          <strong>User-Friendly Interface:</strong> Our platform is designed with simplicity in mind, ensuring a smooth and hassle-free experience for users of all levels. Whether you're a beginner or an experienced candidate, you'll find GovExamQuiz easy to navigate and highly effective.</li>
      </ul>
      

<h2 style={styles.subtitle}>Why Choose GovExamQuiz?</h2>
      <p style={styles.paragraph}>
      GovExamQuiz is more than just a quiz app—it's your partner in success. We are committed to providing high-quality, relevant content that will help you build a strong foundation in general knowledge. With our extensive quiz library and user-friendly features, you'll be well-equipped to tackle any government exam with confidence.
      </p>

<h2 style={styles.subtitle}>Join Us on Your Journey to Success</h2>
      <p style={styles.paragraph}>
        Start your preparation journey with GovExamQuiz today and take the first step towards achieving your goals. Together, we can make your dream of securing a government job a reality.
      </p>


</Card>

  </div>
  <div id='side-box-right'></div>
</div>

   
   </div>
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
    marginBottom: '15px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5em',
    marginTop: '10px',
    color: '#555',
  },
  paragraph: {
    marginBottom: '10px',
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

export default AboutPage;