import styles from '../style/footer.module.css';
import { FaGithub } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Rukhsar Ashraf. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/RukhsarAshraf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub size={24} className={styles.icon} /> {/* GitHub Icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
