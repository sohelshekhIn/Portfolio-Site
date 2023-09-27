import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="bg p-2 md:p-10 mx-auto h-[100vh] ">
      {/* 404 error page */}
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-9xl font-moda text-primary mt-1/2">404</h1>
        <h1 className="text-2xl font-poppins text-white">Page Not Found</h1>
        <Link
          href="/"
          className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
