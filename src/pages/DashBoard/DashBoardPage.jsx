import React, { useState } from "react";
import "./DashBoardPage.css"; // Importing CSS file for styling
import FilePicker from "../../services/fileUpload";

function DashBoardPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const files = document.querySelector(".single").files;
      const result = await FilePicker(files, index, link,path);
      console.log(result, "result");
      document.querySelector(".single").value = null;
      
    } catch (error) {
      setError(error.message);
    }
  };

  const [pdfs, setPdfs] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [index, setIndex] = useState("");
  const [link, setLink] = useState("");
  const [path, setPath] = useState("");

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">PDFs List</h2>
      <ul className="pdf-list">
        {pdfs.map((pdf) => (
          <li key={pdf.id}>{pdf.name}</li>
        ))}
      </ul>
      <div style={styles.container}>
        <form
          onSubmit={handleSubmit}
          className="upload-section"
          style={styles.form}>
          <h2>Upload PDF</h2>
          <div style={styles.inputGroup}>
            <input type="file" className="single" style={styles.input}/>
          </div>
          <div style={styles.inputGroup}>
            <input
              type="text"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              placeholder="Index"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="path"
              style={styles.input}
            />
          </div>

          <button type="submit"  style={styles.button}>Submit</button>
          {uploading && <div>Uploading...</div>}
          {error && <div className="error-message">Error: {error}</div>}
        </form>
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Ensure the form fills the entire viewport height
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    width: "300px", // Adjust the width of the form as needed
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  errorMessage: {
    color: "red",
    marginTop: "10px",
  },
};



export default DashBoardPage;
