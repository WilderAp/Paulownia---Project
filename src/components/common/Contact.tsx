import { Layout } from './Layout';

const Contact = () => {
  return (
    <section className='mt-[10px] lg:mt-[50px]'>
      <Layout>
        <div
          style={{
            margin: '0 auto',
            background: 'url(/pictures/contact-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
          }}
          className='w-[90vw] md:w-full h-[200px] md:h-[360px] px-4 text-center'
        >
          <div className='w-full h-full grid place-content-center text-white'>
            <h4 className='font-raleway font-bold text-[16px] md:text-[32px]'>
              ¡Unete al cambio de la mano de Pawlonia!
            </h4>
            <button
              type='button'
              className='
            font-ptSans font-bold h-[42px] w-[160px]  mx-auto
             rounded-[12px] border-2 border-white text-[14px] mt-4 md:text-[20px] md:border-3 
             hover:bg-white transition duration-300 hover:text-black
             '
            >
              <a href='#example' target='_blank' rel='noreferrer'>
                Contáctanos
              </a>
            </button>
          </div>
        </div>
      </Layout>
    </section>
  );
};
export default Contact;
