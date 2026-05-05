import ayotest from "../assets/images/ayotest.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center px-6 text-white"
      style={{
        backgroundImage: `url(${ayotest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg">

        <p className="uppercase tracking-widest text-xs md:text-sm opacity-90">
          Fashion • Media • Creative
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-">
          Bold Visual Stories
          <br />
          Through Fashion & Media
        </h1>

        <p className="mt-4 text-sm md:text-base opacity-90">
          I help brands express identity through creative fashion and visual storytelling.
        </p>

        <button className="mt-6 bg-black px-6 py-3 text-sm md:text-base">
          View Work
        </button>

      </div>
    </section>
  );
}