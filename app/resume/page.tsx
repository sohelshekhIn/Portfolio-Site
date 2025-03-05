const Resume = () => {
  return (
    <div className="h-screen w-screen">
      <a
        target="_blank"
        className=" fixed bottom-10 right-10 z-50 
      bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out
      "
        href="/Sohel Shekh Resume.pdf"
      >
        Download Resume
      </a>
      <object
        data="/Sohel Shekh Resume.pdf"
        type="application/pdf"
        className="w-full h-auto lg:h-full"
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
