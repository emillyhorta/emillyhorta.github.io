import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-3 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          My projects
        </h2>

        <div className="mb-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
          <a
            href="https://github.com/emillyhorta"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src={`/github.svg`}
              height={60}
              width={120}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-90"
            ></Image>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Projetos Github
            </span>
          </a>

          <a
            href="https://www.figma.com/@emillyhorta"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/Figma.svg"
              loading="lazy"
              height={50}
              width={100}
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-95 group-hover:brightness-90"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Projetos Figma
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/emillyhortadev/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/linkedIn.svg"
              loading="lazy"
              height={80}
              width={80}
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-90"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
