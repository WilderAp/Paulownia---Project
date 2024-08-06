import { FaCheck } from 'react-icons/fa'
import { Layout } from '../Layout'

const items: string[] = [
  'Empleo en las comunidades locales',
  'Proyectos educativos y concienciación',
  'Turismo ecológico',
  'Alimento para ganado',
  'Cosmecéutica y perfumería natural',
  'Madera de alta calidad',
]

const BenefitsMobile = () => {
  return (
    <section className="xl:hidden pt[42px]">
      <Layout>
        {/* container image , texts and list */}
        <div className="flex flex-col md:flex-row md:gap-5">
          {/* image */}
          <div className="mx-auto md:mx-0 w-full  md:w-[50%] ">
            <figure className="w-full h-[204px] mb-[16px]">
              <img
                src="/pictures/benefits/mobile/one.png"
                alt="a"
                className="rounded-[16px] lg:rounded-[32px]  w-full h-full object-cover"
              />
            </figure>
            <div
              className="
              w-full mx-auto py-[12px] pr-[24px] pl-[16px] flex flex-col gap-[16px]
             text-customGrey
             "
            >
              <h2 className="text-[16px] font-raleway font-bold">
                Beneficios que obtenemos
              </h2>
              <p className="font-normal text-[14px]  font-ptSans">
                La plantación de Paulownia nos reporta directamente beneficios
                que afectan positivamente en nuestra vida. Con notas de
                sostenibilidad, desarrollo económico, avances tecnológicos y de
                manera ecológica.
              </p>
            </div>
          </div>
          {/* list */}
          <ul className="w-[90vw] mx-auto md:mx-0 flex flex-col gap-[20px] mt-[16px] flex-1">
            {items.map((item) => (
              <li
                key={crypto.randomUUID()}
                className="flex gap-[8px] items-center text-[12px] font-ptSans"
              >
                <FaCheck className="text-primary text-[20px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* container images and text */}
        <div className="w-[90vw] md:w-full mx-auto mt-[60px] flex flex-col  gap-[16px]  md:flex-row md:justify-around md:gap-5">
          <div className="flex flex-col  w-full  gap-[16px] mx-auto md:mx-0 md:w-[50%]">
            <figure className="h-[500px] w-full">
              <img
                src="/pictures/benefits/mobile/two.jfif"
                alt="b"
                className="rounded-[16px] lg:rounded-[32px]  w-full h-full object-cover"
              />
            </figure>
            <div className="bg-[#F8F8F8] w-full rounded-[16px] lg:rounded-[32px] py-[32px] px-[30px] h-[230px] grid place-content-center">
              <h3 className="font-bold font-raleway text-[16px]">Visión</h3>
              <p className="font-normal font-ptSans text-[14px] mt-5">
                Combinar innovación, naturaleza y sostenibilidad para generar un
                impacto positivo ambiental y socioeconómico de manera sencilla,
                accesible y cercana, que implique al mayor número de agentes
                sociales.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 mx-auto md:mx-0 md:w-[50%]">
            <figure className="h-[500px] w-full">
              <img
                src="/pictures/benefits/mobile/three.jfif"
                alt="b"
                className="rounded-[16px] lg:rounded-[32px] w-full h-full object-cover"
              />
            </figure>
            <div className="bg-[#F8F8F8] w-full rounded-[16px] lg:rounded-[32px] py-[32px] px-[30px] h-[230px] grid place-content-center">
              <h3 className="font-bold font-raleway text-[16px]">Misión</h3>
              <p className="font-normal font-ptSans text-[14px] mt-5">
                Aportamos un valor diferencial en la industria de la madera
                sostenible y la cosmética natural, a través del equilibrio entre
                tecnología avanzada y recursos naturales. Lideramos un impacto
                social que recupera la España vaciada y genera una conciencia
                colectiva en la sociedad del fast content.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}
export default BenefitsMobile
