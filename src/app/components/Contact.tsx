"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../style/contact.module.css" // Import custom CSS

// Define FormData interface
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  // Initialize form state with type FormData
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Handle form data changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update corresponding field
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Check if required fields are filled
    if (!formData.firstname || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setSuccess("Your message has been sent successfully!");

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Me</h1>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.formTitle}>Let&apos;s work together</h3>
            <p className={styles.formDescription}>
              Let&apos;s collaborate and create something amazing!
            </p>

            {/* Conditionally render success or error message */}
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Firstname"
                className={styles.input}
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Lastname"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className={styles.input}
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className={styles.input}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className={styles.textarea}
              />
              <button type="submit" className={styles.submitButton}>
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;