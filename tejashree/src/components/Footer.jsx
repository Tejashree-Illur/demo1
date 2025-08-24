// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
      <ul style={styles.links}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
        <li><a href="#menu" style={styles.link}>Menu</a></li>
      </ul>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "20px"
  },
  links: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
    padding: 0
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
};

export default Footer;
