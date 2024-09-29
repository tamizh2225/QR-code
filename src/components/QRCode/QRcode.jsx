import { useState } from "react";

export const QRcode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("");

  function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qr-code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading QR code", error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} className="qr-image" />}
      {loading && <p>Please wait...</p>}
      <div>
        <label htmlFor="dataInput" className="input-lable">
          Data for QR code
        </label>
        <input
          type="text"
          placeholder="Enter data for QR code"
          id="dataInput"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-lable">
          Image size (e.g.,150):
        </label>
        <input
          type="text"
          placeholder="Enter image size"
          id="sizeInput"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button
          onClick={generateQR}
          className="generate-button"
          disabled={loading}
        >
          Generate QR code
        </button>
        <button className="download-button" onClick={downloadQR}>
          Download QR code
        </button>
      </div>
      <p className="footer">
        Desinged By{" "}
        <a href="https://github.com/tamizh2225" target="black">
          Tamizh
        </a>
      </p>
    </div>
  );
};
