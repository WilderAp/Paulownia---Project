import arrow from '../../../public/pictures/arrow.png';
import news from '../../../public/pictures/news.png';
import tree from '../../../public/pictures/tree.jpeg';
import world from '../../../public/pictures/world.png';
import { Layout } from './Layout';

function Hero() {
  return (
    <div>
      {/* Mobile */}
      <div className='px-[10px] py-[50px] block lg:hidden'>
        <section>
          <img
            src={tree}
            alt='treeMobile'
            style={{ borderRadius: '32px' }}
            content='cover'
          />
        </section>
        <section className='mt-4'>
          <div className=' text-primary'>
            <h1
              style={{
                fontFamily: 'Raleway',
                fontSize: '22px',
                fontWeight: '700',
              }}
            >
              El árbol de nuestros sueños lo hemos encontrado. Te contamos por
              qué.
            </h1>
          </div>
          <div>
            <button
              type='button'
              className='bg-secondary w-[176px] py-3 rounded-lg text-white my-4 flex items-center gap-3 justify-center'
            >
              Seguir leyendo
              <img src={arrow} alt='arrow' />
            </button>
            <div className='flex flex-col text-start text-customGrey'>
              <p>¿Quienes hablan de nosotros?</p>
              <figure className='flex gap-7 py-2'>
                <img src={world} alt='world' />
                <img src={news} alt='news' />
              </figure>
            </div>
          </div>
        </section>
      </div>
      {/* Desktop */}
      <div className='py-20 hidden lg:block h-fit'>
        <Layout>
          <div className='grid lg:grid-cols-12  items-center gap-[60px]'>
            <section className=' lg:col-span-7 flex flex-col justify-center gap-5  h-[634px] '>
              <div className=' text-primary max-w-[887px]'>
                <h1 className='text-[50px] font-bold font-raleway'>
                  El árbol de nuestros sueños lo hemos encontrado. <br /> Te
                  contamos por qué.
                </h1>
              </div>
              <div>
                <button
                  type='button'
                  className='bg-secondary w-[176px] p-2 rounded-lg text-white my-10'
                >
                  Seguir leyendo
                </button>
                <div className='flex flex-col text-start text-customGrey'>
                  <p>¿Quienes hablan de nosotros?</p>
                  <figure className='flex gap-7 py-2'>
                    <img src={world} alt='world' />
                    <img src={news} alt='news' />
                  </figure>
                </div>
              </div>
            </section>
            <section className=' mx-auto  lg:col-span-5 flex  h-[666px]'>
              <div>
                <img
                  src={tree}
                  alt='tree'
                  className='object-cover w-full h-full rounded-[32px]'
                />
              </div>
            </section>
          </div>
        </Layout>
      </div>
    </div>
  );
}
export default Hero;
