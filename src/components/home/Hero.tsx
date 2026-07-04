import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          Find Your
          <span className="text-blue-600"> Dream Job</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Discover thousands of opportunities from top companies and take the
          next step in your career.
        </p>

        <SearchBar />
        
      </div>
    </section>
  );
};

export default Hero;