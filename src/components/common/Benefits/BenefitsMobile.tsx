import { Layout } from '../Layout';
import { FaCheck } from 'react-icons/fa';

const items = [
  'Empleo en las comunidades locales',
  'Proyectos educativos y concienciación',
  'Turismo ecológico',
  'Alimento para ganado',
  'Cosmecéutica y perfumería natural',
  'Madera de alta calidad',
];

const BenefitsMobile = () => {
  return (
    <section className='xl:hidden  py-[64px]'>
      <Layout>
        {/* container image , texts and list */}
        <div className='flex flex-wrap'>
          <div className='mx-auto  '>
            <figure className='w-[396px] h-[204px]'>
              <img
                src='/pictures/benefits/mobile/one.png'
                alt='a'
                className='rounded-[16px]  w-full h-full object-cover'
              />
            </figure>
            <div className='w-[430px] mx-auto py-[12px] pr-[24px] pl-[16px] flex flex-col gap-[16px] text-customGrey'>
              <h2 className='text-[16px] font-raleway font-bold '>
                Beneficios que obtenemos
              </h2>
              <p className='font-normal text-[14px]  font-ptSans'>
                La plantación de Paulownia nos reporta directamente beneficios
                que afectan positivamente en nuestra vida. Con notas de
                sostenibilidad, desarrollo económico, avances tecnológicos y de
                manera ecológica.
              </p>
            </div>
          </div>
          <ul className='w-[398px] mx-auto flex flex-col gap-[20px] mt-4 '>
            {items.map((item) => (
              <li
                key={crypto.randomUUID()}
                className='flex gap-2 items-center text-[12px] font-ptSans'
              >
                <FaCheck className='text-primary text-[20px]' />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* container images and text */}
        <div className='w-full mx-auto mt-8 flex flex-col md:flex-row justify-between gap-2'>
          <div className='flex flex-col gap-5 w-[398px] mx-auto md:mx-0 md:w-[50%]'>
            <figure className='h-[500px] w-full'>
              <img
                src='/pictures/benefits/mobile/two.jfif'
                alt='b'
                className='rounded-[16px]  w-full h-full object-cover'
              />
            </figure>
            <div className='bg-[#F8F8F8]  rounded-[16px] py-[32px] px-[30px] h-[230px] grid place-content-center'>
              <h3 className='font-bold font-raleway text-[16px]'>Visión</h3>
              <p className='font-normal font-ptSans text-[14px] mt-5'>
                Combinar innovación, naturaleza y sostenibilidad para generar un
                impacto positivo ambiental y socioeconómico de manera sencilla,
                accesible y cercana, que implique al mayor número de agentes
                sociales.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-[398px] gap-5 mx-auto md:mx-0 md:w-[50%]'>
            <figure className='h-[500px] w-full'>
              <img
                src='/pictures/benefits/mobile/three.jfif'
                alt='b'
                className='rounded-[16px] w-full h-full object-cover'
              />
            </figure>
            <div className='bg-[#F8F8F8]  rounded-[16px] py-[32px] px-[30px] h-[230px] grid place-content-center'>
              <h3 className='font-bold font-raleway text-[16px]'>Misión</h3>
              <p className='font-normal font-ptSans text-[14px] mt-5'>
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
  );
};
export default BenefitsMobile;
