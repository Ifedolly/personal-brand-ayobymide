import ayoImg1 from "../assets/images/ayoImg1.jpg";

export default function Hero() {
  return (
    <section 
     className="relative h-screen w-full flex items-center px-4 text-white"
      style={{
        backgroundImage: `url(${ayoImg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <p className="font-brand">Hola Espana</p>
      <p className="text-sm uppercase tracking-widest">
        Fashion • Media • Creative
      </p>

      <h1 className="text-4xl font-bold leading-tight mt-4">
        Bold Visual Stories Through Fashion & Media
      </h1>

      <p className="mt-4 text-base opacity-80">
        I help brands and individuals express identity through creative fashion design and visual storytelling.
      </p>

      <button className="mt-6 bg-black text-white px-5 py-3">
        View Work
      </button>
    </section>
  );
}