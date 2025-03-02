const Resume = () => {
  return (
    <div className="h-screen w-screen">
      <object
        data="/Sohel Shekh Resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a target="_blank" href="/Sohel Shekh Resume.pdf">
            Download PDF
          </a>
        </p>
      </object>
    </div>
  );
};

export default Resume;
