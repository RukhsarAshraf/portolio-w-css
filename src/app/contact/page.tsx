import Contact from "../components/Contact";
import styles from '../style/contact.module.css'; 

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Contact /> 
    </div>
  );
};

export default ContactPage;