const Hero = () => {
  return (
    <section className="relative playfair h-screen overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('./hero.jpg')" }}
      ></div>

      <div className="relative h-full inset-0 bg-black/55 z-10">
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Luman Photography
          </h1>
          <p className="text-white text-xl mt-8 max-w-xl">
            Visual Designer & Photographer crafting elegant stories through
            design and imagery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
