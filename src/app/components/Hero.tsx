import styles from '../style/hero.module.css'; 
import Image from 'next/image'; 

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Text and button section */}
        <div className={styles.heroText}>
          <h1>Hello, I am <span className={styles.name}>Rukhsar Ashraf</span></h1>
          <p>I am a passionate Full Stack Developer creating engaging web applications.</p>
        </div>

        {/* Profile image section */}
        <div className={styles.heroImage}>
          
          <Image
            src="/pro.png" 
            alt="Rukhsar Ashraf"
            width={250}  
            height={250}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;