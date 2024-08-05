// import { Layout } from './Layout'

// const ADVANTAGES = [
//   {
//     number: '01',
//     title: 'Crecimiento rápido y versátil',
//     description:
//       'Rápido crecimiento y capacidad para regenerarse después de la tala, lo que lo convierte en una fuente sostenible de madera de alta calidad.',
//   },
//   {
//     number: '02',
//     title: 'Sin complicaciones',
//     description:
//       'Una vez adquiridos unos plantones de Paulownia de calidad, con un sistema radical resistente, estos son capaces de crecer en suelos infértiles, incluso arcillosos y arenosos.',
//   },
//   {
//     number: '03',
//     title: 'Tecnología avanzada',
//     description:
//       'La gestión del cultivo de Paulownia utiliza tecnologías de Blockchain, IA e IoT para optimizar la producción y garantizar la transparencia y eficiencia en cada etapa del proceso.',
//   },
//   {
//     number: '04',
//     title: 'Impacto ambiental positivo',
//     description:
//       'Contribuye significativamente a la reducción de CO2 y mejora la calidad del suelo, lo que favorece la restauración ecológica y la conservación del medio ambiente.',
//   },
//   {
//     number: '05',
//     title: 'Melífero',
//     description:
//       'Las flores de Paulownia tienen un aroma fuerte y fragante, y son excelentes para la producción de miel. Su cultivo es ecológico, ya que no se utilizan productos químicos que puedan dañar a las abejas. La miel de Paulownia, comparable a la de acacia, tiene usos medicinales y es beneficiosa para tratar enfermedades respiratorias y mejorar la función digestiva y hepática.',
//   },
// ];

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
      <div className="w-full grid place-content-center py-10 px-4">
        <h2 className="hidden lg:flex justify-center w-full mb-[64px] text-[#314E52] h-[50px] text-[32px] font-semibold">
          Ventajas del cultivo Paulownia
        </h2>

        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12 max-w-[1200px] w-full h-min">
          <div className="w-full lg:max-w-[668px] h-[448px] lg:h-[980px] col-span-1 sm:col-span-2 lg:col-span-3  xl:col-span-5">
            <img
              src="./pictures/advantages.png"
              alt="plant-paulownia"
              className=" object-cover w-full h-full rounded-[30px]"
            />
          </div>

          <h2 className="flex lg:hidden w-full text-[#314E52] text-[22px] font-semibold col-span-1 sm:col-span-2 my-4">
            Ventajas del cultivo Paulownia
          </h2>

          {/* number section */}
          <div className="flex flex-col gap-4 lg:gap-8 h-[144px] lg:ml-[64px] col-span-1  sm:col-span-2 lg:col-span-3  xl:col-span-7">
            {data.map((element) => (
              <div key={element.id} className="flex w-full gap-4 lg:gap-8">
                <div className="">
                  <p className="text-[22px] lg:text-[32px] text-[#0C7333]">
                    0{element.id}
                  </p>
                </div>

                <div className="h-full border-b border-[#0C7333]">
                  <h2 className="text-[22px] xl:text-[32px] text-[#314E52] mb-4">
                    {element.title}
                  </h2>
                  <p className="text-[14px] xl:text-[18px] text-[#707070] mb-4">
                    {element.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  )
}
export default Advantages

// <section className='py-[50px] h-[1317px] lg:h-[1200px]'>
//       <Layout>
//         <h2 className='text-center text-[42px] hidden lg:block font-bold text-title font-raleway my-8'>
//           Ventajas del cultivo Paulownia
//         </h2>
//         {/* container */}
//         <article className='h-[1064px] flex flex-col lg:flex-row lg:items-center lg:gap-[64px]'>
//           {/* img */}
//           <img
//             src='/pictures/advantages.png'
//             alt='advantages picture'
//             className='h-[448px] w-full object-cover  mx-auto lg:h-full lg:w-[668px]
//             rounded-[16px] lg:rounded-[32px]
//             '
//           />
//           {/* texts container */}
//           <div className='h-[811px]  w-full lg:h-[1011px]  lg:w-[884px] '>
//             <h2 className='text-left text-[25px] lg:hidden font-bold text-title font-raleway mt-4'>
//               Ventajas del cultivo Paulownia
//             </h2>
//             {/* list container  */}
//             <div className='w-full h-[811px]  lg:mt-0 flex flex-col items-center justify-center gap-[32px]'>
//               {ADVANTAGES.map((advantage, index) => (
//                 //  list items
//                 <div
//                   key={index}
//                   className='flex gap-1 font-ptSans max-w-[700px] h-[115px] lg:h-[171px]'
//                 >
//                   <div className='w-1/12 text-primary font-normal text-[22px] '>
//                     {advantage.number}
//                   </div>
//                   <div className='w-11/12'>
//                     <h3 className='text-[22px] font-normal mb-2 text-title'>
//                       {advantage.title}
//                     </h3>
//                     <p className='text-customGrey text-[14px]'>
//                       {advantage.description}
//                     </p>
//                     <span className='block h-[1px] w-full bg-primary mt-5' />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </article>
//       </Layout>
//     </section>
