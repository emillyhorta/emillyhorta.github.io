import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <Image
        src={`/photo-me.jpg`}
        width={700}
        height={50}
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          Emilly Horta
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          UX/UI Designer
        </h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="https://www.linkedin.com/in/emillyhortadev/"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
