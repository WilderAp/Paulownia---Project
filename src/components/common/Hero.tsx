import arrow from '../../../public/pictures/arrow.png'
import news from '../../../public/pictures/news.png'
import tree from '../../../public/pictures/tree.jpeg'
import world from '../../../public/pictures/world.png'
import { Layout } from './Layout'

function Hero() {
  return (
    <div id="inicio" className="py-[calc(80px+16px)] lg:py-[calc(80px+3rem)]">
      {/* Mobile */}
      <div className="px-[16px] mt-[16px] pb-[42px] block lg:hidden  animate-fade animate-once animate-duration-1000 animate-ease-in">
        <section>
          <img
            src={tree}
            alt="treeMobile"
            className="rounded-[16px] object-cover aspect-square"
          />
        </section>
        <section className="mt-4">
          <div className=" text-primary">
            <h1 className="font-raleway text-[22px] font-bold">
              El árbol de nuestros sueños lo hemos encontrado. Te contamos por
              qué.
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="bg-secondary  hover:bg-opacity-80 w-[176px] h-[42px] py-3 rounded-lg text-white my-4 flex items-center gap-3 justify-center"
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
      <div className=" hidden lg:block animate-fade animate-once animate-duration-1000 animate-ease-in">
        <Layout>
          <div className="grid lg:grid-cols-12  items-center gap-[64px]">
            <section className=" lg:col-span-7 flex flex-col justify-center gap-5  h-[634px] ">
              <div className=" text-primary max-w-[887px]">
                <h1 className="text-[50px] font-bold font-raleway">
                  El árbol de nuestros sueños lo hemos encontrado. <br /> Te
                  contamos por qué.
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-secondary  hover:bg-opacity-80 w-[176px] h-btnMobileH md:h-btnDesktopH p-2 rounded-lg text-white my-10"
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
            <section className=" mx-auto  lg:col-span-5 flex  h-[666px]">
              <div>
                <img
                  src={tree}
                  alt="tree"
                  className="object-cover w-full h-full rounded-[32px] aspect-square"
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
