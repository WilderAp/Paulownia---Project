import { Layout } from './Layout'

function About() {
  return (
    <div className="bg-primary w-full">
      <Layout>
        <section
          className="text-white  w-full  p-[24px] sm:h-[352px] 
          sm:grid sm:grid-cols-12  sm:items-center
        "
        >
          <div className="w-full col-span-5">
            <h1 className="text-2xl font-raleway ">Sobre este proyecto</h1>
          </div>
          <span className="hidden sm:block bg-white w-[1px] h-[170px]  col-span-1" />
          <div className="flex flex-col gap-[30px]  mt-[24px] sm:mt-0  sm:col-span-6">
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
              <strong>Jumperland, Paulownia</strong> Cosméticos y el libro{' '}
              <strong>“El Sueño de Paulownia”</strong>
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default About
