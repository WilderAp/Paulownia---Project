import { FaCheck } from 'react-icons/fa'
import { Layout } from '../Layout'

const images: string[] = [
  './pictures/benefits/desktop/one.jfif',
  './pictures/benefits/desktop/two.png',
  './pictures/benefits/desktop/three.jfif',
]

const list: string[] = [
  'Empleo en las comunidades locales',
  'Turismo ecológico',
  'Proyectos educativos y de concienciación',
  'Alimento para ganado',
  'Madera de alta calidad',
  'Cosmecéutica y perfumería natural',
]

const BenefitsDesktop = () => {
  return (
    <section className="hidden xl:block bg-bgSection py-[64px]">
      <Layout>
        {/* header */}
        <div className="flex  w-full items-center justify-center gap-[24px]">
          <h2 className="text-[36px] font-raleway font-bold text-title">
            Beneficios que obtenemos
          </h2>
          <div className="h-[117px] w-[1px] bg-primary" />
          <p className="w-[541px]">
            La plantación de Paulownia nos reporta directamente beneficios que
            afectan positivamente en nuestra vida. Con notas de sostenibilidad,
            desarrollo económico, avances tecnológicos y de manera ecológica.
          </p>
        </div>
        {/* container list and images */}
        <div className="mt-[90px] flex gap-10 items-center w-full h-[520px]">
          <ul className="w-[468px] h-full flex flex-col justify-around">
            {list.map((item) => (
              <li
                key={crypto.randomUUID()}
                className="text-[14px] font-raleway font-bold text-title flex items-center gap-2"
              >
                <FaCheck className="text-primary text-[20px]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="w-full h-full flex gap-4 relative">
            {images.map((img, index) => (
              <img
                src={img}
                alt="benefits"
                key={crypto.randomUUID()}
                className={`w-[260px] h-full object-cover rounded-[32px] ${
                  index === 1 ? 'drop-shadow-md' : ''
                }`}
              />
            ))}
            <img
              src="./pictures/benefits/desktop/two-plant-png.png"
              alt="benefits"
              className="absolute mx-auto bottom-[-27px] left-[-45px] z-2   object-cover"
            />
            ;
          </div>
        </div>
      </Layout>
    </section>
  )
}
export default BenefitsDesktop
