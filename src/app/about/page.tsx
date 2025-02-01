import About from '../components/About'; 
import styles from '../style/about.module.css'; 

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}> 
      <About /> 
    </div>
  );
};

export default AboutPage;