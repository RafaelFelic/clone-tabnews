import React from "react";

function Home() {
  const config = {
    title: "Estamos Construindo Algo Incrível!",
    subtitle:
      "Fique ligado para novidades. Em breve estaremos de volta com um site novo e incrível.",
  };

  const globalCSS = `
    * { box-sizing: border-box; }
    body, html { 
      margin: 0; 
      padding: 0; 
      width: 100%; 
      height: 100%; 
      overflow-x: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    #__next { 
      height: 100vh; 
      height: -webkit-fill-available; 
      min-height: 100vh;
      min-height: -webkit-fill-available;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .loader {
      margin: auto;
      width: 50px;
      height: 50px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #667eea;
      border-radius: 50%;
      animation: spin 1.5s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* iOS Safari viewport fix */
    @supports (-webkit-touch-callout: none) {
      .ios-fix { 
        height: 100vh !important;
        height: -webkit-fill-available !important;
        min-height: 100vh !important;
        min-height: -webkit-fill-available !important;
      }
      body, html, #__next {
        height: -webkit-fill-available !important;
      }
    }
    
    /* Additional mobile viewport fixes */
    @media screen and (max-width: 768px) {
      .mobile-container {
        height: 100vh;
        height: 100dvh; /* Dynamic viewport height for newer browsers */
        min-height: 100vh;
        min-height: -webkit-fill-available;
      }
    }
  `;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      minHeight: "-webkit-fill-available",
      height: "100vh",
      height: "100dvh", // Dynamic viewport height for modern mobile browsers
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "'Arial', sans-serif",
      padding: "env(safe-area-inset-top) 1rem 0 1rem",
      position: "relative",
      width: "100%",
    },
    card: {
      textAlign: "center",
      padding: "2rem",
      maxWidth: "450px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    heading: {
      fontSize: "2rem",
      margin: "0 0 1rem",
      color: "#333",
    },
    subheading: {
      fontSize: "0.9rem",
      color: "#666",
      marginBottom: "1.5rem",
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <div style={styles.container} className="ios-fix mobile-container">
        <div style={styles.card}>
          <h1 style={styles.heading}>{config.title}</h1>
          <p style={styles.subheading}>{config.subtitle}</p>
          <div className="loader" />
        </div>
      </div>
    </>
  );
}

export default Home;
