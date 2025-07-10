export default function About() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Quem sou eu?
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Graduada em Sistemas de Informação (Mauricio de Nassau- PI), Técnica
            em Informática (IFPI - Campus Parnaiba).Faço pós graduação em empreendedorismo e Inovação, e de front-end Enginner. Atualmente trabalho como UX/UI designer como freelance, mas já trabalhei por quase 4 anos com criação de
            sites para parlamentares, e utilizava tecnologias como
            Gatsby,Wordpress, e Next.js além de atuar também como Freelancer
            criando soluções inovadoras e fazendo Interfaces para sistemas e
            e-commerce.Atuo em comunidades que empoderam e incentivam mulheres
            na Tecnologia como PyLadies.
          </p>
        </div>

        <div className="flex items-center justify-center grid gap-3 rounded-lg bg-indigo-800 p-6 md:gap-8 md:p-8">
          <div className="flex flex-col text-center items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              My Skills
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              SoftSkills
            </div>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Liderança
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              e trabalho em equipe
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Proatividade
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Autogerenciamento
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Comunicação
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              e Resolução de problemas
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-center text-white sm:text-x2 md:text-2x1">
              Compartilhar conhecimentos
            </div>
            <div className="text-sm text-indigo-200 sm:text-base">
              Criar comunidades
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
