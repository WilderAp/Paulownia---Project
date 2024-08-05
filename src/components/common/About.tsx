import { Layout } from './Layout'

function About() {
  return (
    <div className="bg-primary min-h-[352px] flex items-center">
      {/* Mobile */}
      <section className="text-white block sm:hidden p-4">
        <h1 className="font-bold mx-auto" style={{ fontFamily: 'Raleway' }}>
          Sobre este proyecto
        </h1>
        <div className="flex flex-col gap-4 pt-4">
          <p>
            Este proyecto se distingue por ser un cultivo innovador que fusiona
            de manera única la naturaleza y la tecnología para generar un
            impacto positivo multidimensional. Se enfoca en el cultivo
            sostenible de Paulownia, empleando tecnologías avanzadas como la
            tokenización de cultivos y la gestión mediante Blockchain, IA e IoT.
          </p>
          <p>
            Paulownia además se diversifica en tres subproyectos adicionales:{' '}
            <b>Jumperland, Paulownia</b> Cosméticos y el libro{' '}
            <b>“El Sueño de Paulownia”</b>.
          </p>
        </div>
      </section>
      {/* Desktop */}
      <section className="sm:grid md:grid-cols-2 text-white items-center hidden">
        <div className="flex justify-between">
          <h1 className="text-2xl mx-auto" style={{ fontFamily: 'Raleway' }}>
            Sobre este proyecto
          </h1>
        </div>

        <div className="flex justify-between gap-6  max-w-[700px] ">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span className="bg-white mr-10" style={{ width: '2px' }}></span>
          <div className="">
            <p>
              Este proyecto se distingue por ser un cultivo innovador que
              fusiona de manera única la naturaleza y la tecnología para generar
              un impacto positivo multidimensional. Se enfoca en el cultivo
              sostenible de Paulownia, empleando tecnologías avanzadas como la
              tokenización de cultivos y la gestión mediante Blockchain, IA e
              IoT.
            </p>
            <p>
              Paulownia además se diversifica en tres subproyectos adicionales:{' '}
              <b>Jumperland, Paulownia</b> Cosméticos y el libro{' '}
              <b>“El Sueño de Paulownia”</b>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About
