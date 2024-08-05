import { Layout } from './Layout'

const data = [
  {
    id: 1,
    title: 'Crecimiento rápido y versátil',
    text: 'Rápido crecimiento y capacidad para regenerarse después de la tala, lo que lo convierte en una fuente sostenible de madera de alta calidad.',
  },
  {
    id: 2,
    title: 'Sin complicaciones',
    text: 'Una vez adquiridos unos plantones de Paulownia de calidad, con un sistema radicular resistente, estos son capaces de crecer en suelos infértiles, incluso arcillosos y arenosos.',
  },
  {
    id: 3,
    title: 'Tecnología avanzada',
    text: 'La gestión del cultivo de Paulownia utiliza tecnologías de Blockchain, IA e IoT para optimizar la producción y garantizar la transparencia y eficiencia en cada etapa del proceso',
  },
  {
    id: 4,
    title: 'Impacto ambiental positivo',
    text: 'Contribuye significativamente a la reducción de CO2 y mejora la calidad del suelo, lo que favorece la restauración ecológica y la conservación del medio ambiente.',
  },
  {
    id: 5,
    title: 'Melífero',
    text: 'Las flores de Paulownia tienen un aroma fuerte y fragante, y son excelentes para la producción de miel. Su cultivo es ecológico, ya que no se utilizan productos químicos que puedan dañar a las abejas. La miel de Paulownia, comparable a la de acacia, tiene usos medicinales y es beneficiosa para tratar enfermedades respiratorias y mejorar la función digestiva y hepática.',
  },
]
const Advantages = () => {
  return (
    <>
      <div className="w-full grid place-content-center py-10 px-4 ">
        <h2 className="hidden lg:flex justify-center w-full mb-[64px] text-title h-[50px] text-[36px] font-semibold">
          Ventajas del cultivo Paulownia
        </h2>
        <Layout>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12  w-full h-min">
            <div className="w-full lg:max-w-[668px] h-[448px] lg:h-[1000px] col-span-1 sm:col-span-2 lg:col-span-3  xl:col-span-5">
              <img
                src="./pictures/advantages.png"
                alt="plant-paulownia"
                className=" object-cover w-full h-full rounded-[30px]"
              />
            </div>

            <h2 className="flex lg:hidden w-full text-title text-[22px] font-semibold col-span-1 sm:col-span-2 my-4">
              Ventajas del cultivo Paulownia
            </h2>

            {/* number section */}
            <div className="flex flex-col gap-4 lg:gap-8 lg:ml-[64px] col-span-1  sm:col-span-2 lg:col-span-3  xl:col-span-7 lg:h-[1000px]">
              {data.map((element) => (
                <div key={element.id} className="flex w-full gap-4 lg:gap-8">
                  <div className="">
                    <p className="text-[22px] lg:text-[30px] text-primary">
                      0{element.id}
                    </p>
                  </div>

                  <div className="h-full border-b border-primary">
                    <h2 className="text-[22px] xl:text-[30px] text-title mb-4">
                      {element.title}
                    </h2>
                    <p className="text-[14px] xl:text-[18px] text-customGrey mb-4">
                      {element.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Layout>
      </div>
    </>
  )
}
export default Advantages
