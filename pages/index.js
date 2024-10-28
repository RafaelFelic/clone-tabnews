import React from "react";

function Home() {
  return (
    <>
      <style>
        {`
          .loader {
          margin: auto;
            width: 50px;
            height: 50px;
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Estamos Construindo Algo Incrível!</h1>
          <p style={styles.subheading}>
            Fique ligado para novidades. Em breve estaremos de volta com um site
            novo e incrível.
          </p>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Arial', sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "2rem",
    maxWidth: "500px",
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
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1.5rem",
  },
};

export default Home;
