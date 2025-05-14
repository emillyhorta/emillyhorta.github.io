export default function Skills() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="flex items-center justify-center grid gap-3 rounded-lg bg-indigo-800 p-6 md:gap-8 md:p-8">
          <div className="flex flex-col text-center items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              My Skills
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              HardSkills
            </div>
          </div>
        </div>

        <hr></hr>
        <hr></hr>
        <hr></hr>

        <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Nextjs
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              HTML, CSS e JS
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Tailwind
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Figma
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Wordpress
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Git e Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
