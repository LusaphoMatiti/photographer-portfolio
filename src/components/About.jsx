const About = () => {
  return (
    <section
      className="bg-white playfair relative dark:bg-gray-900 min-h-screen lg:min-h-[120vh]"
      id="about"
    >
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
        <div className="container flex flex-col justify-center w-full  px-6 py-10 pb-20 lg:pb-40 mx-auto lg:absolute lg:inset-x-0 ">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl lg:pt-15 dark:text-white">
            About <span className="text-[#e55a5a]">Luman</span> <br />
          </h1>

          <div className="mt-5 lg:pb-10 lg:mt-10 lg:flex lg:items-center">
            <img
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
              src="Luman.avif"
              alt=""
            />

            <div className=" py-10 mt-8 lg:ml-40 lg:mt-0 px-6 md:px-12 lg:px-24 md:py-20">
              <p className=" text-xl max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                Based in Cape Town, I’m a visual storyteller who captures the
                spirit of landscapes, city streets, and everyday life through
                the lens. My work is rooted in the belief that every place has a
                story — and my passion lies in bringing those stories to life
                through powerful imagery.
              </p>
              <p className="text-xl mt-6 max-w-xl text-gray-500 dark:text-gray-400">
                Over the past 7 years, I’ve explored and photographed the
                dynamic beauty of urban spaces and natural landscapes, from the
                vibrant heart of Cape Town’s CBD to the quiet strength of
                coastal horizons.
              </p>
              <p className="text-xl mt-6 max-w-xl text-gray-500 dark:text-gray-400">
                I specialize in landscape photography, cityscape storytelling,
                and visual narratives that highlight the connection between
                people and places. Every frame I capture is a moment of emotion,
                history, and identity woven together visually.
              </p>
              <p className="text-xl mt-6 max-w-xl text-gray-500 dark:text-gray-400">
                My approach is simple: observe deeply, feel the rhythm of a
                space, and share its story through thoughtful, authentic
                imagery. Photography isn’t just what you see — it’s what you
                feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
