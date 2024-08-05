import { Layout } from './Layout'

function About() {
  return (
    <div className="bg-primary min-h-[352px] flex items-center py-5">
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
      <Layout>
        <section className="sm:grid sm:grid-cols-12 text-white  hidden  sm:items-center">
          <div className="w-full col-span-5">
            <h1 className="text-2xl font-raleway ">Sobre este proyecto</h1>
          </div>

          <span className="bg-white w-[1px] h-[170px] block col-span-1" />

          <div className="w-full flex flex-col gap-4 col-span-6">
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
        </section>
      </Layout>
    </div>
  )
}
export default About
