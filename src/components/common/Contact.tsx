import { Layout } from './Layout'

interface Props {
  title: string
  textBtn: string
}

const Contact = ({ title, textBtn }: Props) => {
  return (
    <section className="py-[42px] lg:mt-[50px]">
      <Layout>
        <div
          style={{
            margin: '0 auto',
            background: 'url(/pictures/contact-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-[90vw] md:w-full h-[200px] md:h-[360px] px-4 text-center rounded-[16px] lg:rounded-[32px]"
        >
          <div className="w-full h-full grid place-content-center text-white">
            <h4 className="font-raleway font-bold text-[16px] md:text-[32px]">
              {title}
            </h4>
            <button
              type="button"
              className="
             font-ptSans font-bold w-[160px]  mx-auto h-btnMobileH md:h-btnDesktopH  md:w-[154px]
             rounded-[12px] border-2 border-white text-[14px] mt-4 md:text-[20px] md:border-3 
             hover:bg-white transition duration-300 hover:text-black
             "
            >
              <a href="#example" target="_blank" rel="noreferrer">
                {textBtn}
              </a>
            </button>
          </div>
        </div>
      </Layout>
    </section>
  )
}
export default Contact
