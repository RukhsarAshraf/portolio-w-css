import Image from 'next/image';
import styles from '../style/about.module.css'; 


const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Image Section */}
          <div className={styles.imageWrapper}>
            <Image
              src="/pro.png" 
              alt="Rukhsar Ashraf"
              className={styles.profileImage}
              width={150}
              height={150}
            />
          </div>

          {/* Text Section */}
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              About <span className={styles.highlight}>Me!</span>
            </h1>
            <p className={styles.description}>
              Hello! I&apos;m Rukhsar Ashraf, a passionate Full Stack Developer. I started my journey with GIAIC. With a solid grasp of HTML, CSS, and JavaScript or TypeScript, I enjoy building engaging web applications using frameworks like Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;