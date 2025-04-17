import Gallery from "./Gallery";

const Portfolio = () => {
  return (
    <section className="relative playfair p-10 " id="gallery">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl lg:pt-15 dark:text-white sm:pb-8">
        My <span className="text-[#e55a5a]">Gallery</span> <br />
      </h1>

      <Gallery />
    </section>
  );
};
export default Portfolio;
