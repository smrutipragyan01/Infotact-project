import { useState } from "react";

const FileUpload = () => {
  const [status, setStatus] = useState("");

  const handleUpload = () => {
    setStatus("Uploading & indexing SOP...");
    setTimeout(() => {
      setStatus("SOP indexed successfully ✅");
    }, 2000);
  };

  return (
    <div className="card">
      <h2>Upload SOP Document</h2>
      <input type="file" accept=".pdf" />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default FileUpload;
