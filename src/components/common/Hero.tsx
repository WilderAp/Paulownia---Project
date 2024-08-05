import arrow from '../../../public/pictures/arrow.png'
import news from '../../../public/pictures/news.png'
import tree from '../../../public/pictures/tree.jpeg'
import world from '../../../public/pictures/world.png'
import { Layout } from './Layout'

function Hero() {
  return (
    <div>
      {/* Mobile */}
      <div className="p-4 block sm:hidden">
        <section>
          <img
            src={tree}
            alt="treeMobile"
            style={{ borderRadius: '32px' }}
            content="cover"
          />
        </section>
        <section className="mt-4">
          <div className=" text-primary">
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
              type="button"
              className="bg-secondary w-[176px] py-3 rounded-lg text-white my-4 flex items-center gap-3 justify-center"
            >
              Seguir leyendo
              <img src={arrow} alt="arrow" />
            </button>
            <div className="flex flex-col text-start text-customGrey">
              <p>¿Quienes hablan de nosotros?</p>
              <figure className="flex gap-7 py-2">
                <img src={world} alt="world" />
                <img src={news} alt="news" />
              </figure>
            </div>
          </div>
        </section>
      </div>
      {/* Desktop */}
      <div className="pt-20 pb-10 hidden sm:block">
        <Layout>
          <div className="grid grid-cols-2 justify-items-end content-center">
            <section className="flex flex-col gap-5">
              <div className=" text-primary max-w-[887px]">
                <h1
                  style={{
                    fontFamily: 'Raleway',
                    fontSize: '58px',
                    fontWeight: '500',
                  }}
                >
                  El árbol de nuestros sueños lo hemos encontrado.
                </h1>
                <h1
                  style={{
                    fontFamily: 'Raleway',
                    fontSize: '58px',
                    fontWeight: '500',
                  }}
                >
                  Te contamos por qué.
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-secondary w-[176px] p-2 rounded-lg text-white my-10"
                >
                  Seguir leyendo
                </button>
                <div className="flex flex-col text-start text-customGrey">
                  <p>¿Quienes hablan de nosotros?</p>
                  <figure className="flex gap-7 py-2">
                    <img src={world} alt="world" />
                    <img src={news} alt="news" />
                  </figure>
                </div>
              </div>
            </section>
            <section className="flex">
              <div className="mx-auto w-[588px] h-[666px]">
                <img
                  src={tree}
                  alt="tree"
                  style={{ borderRadius: '32px' }}
                  content="cover"
                  height={'100%'}
                  width={'100%%'}
                />
              </div>
            </section>
          </div>
        </Layout>
      </div>
    </div>
  )
}
export default Hero
