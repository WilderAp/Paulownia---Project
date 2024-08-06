import { Layout } from '../Layout'

const BentoGrid = () => {
  return (
    <Layout>
      <div className="w-full hidden xl:flex h-[900px]  gap-[16px] mt-[50px] ">
        {/* 1 */}
        <div className="flex-[35%] h-full flex flex-col gap-[16px]">
          <img
            src="/pictures/benefits/desktop/left-top.jpg"
            alt="benefits"
            className="w-full h-full object-cover rounded-[16px] "
          />
          <div className="h-[374px] bg-bgBox rounded-[16px] flex-2 p-[30px]">
            <h4 className="font-raleway font-bold text-[24px]">Misión</h4>
            <p className="mt-4 font-normal font-ptSans text-[16px]">
              Aportamos un valor diferencial en la industria de la madera
              sostenible y la cosmética natural, a través del equilibrio entre
              tecnología avanzada y recursos naturales. Lideramos un impacto
              social que recupera la España vaciada y genera una conciencia
              colectiva en la sociedad del fast content.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex-[25%] h-full flex flex-col  gap-[16px]">
          <img
            src="/pictures/benefits/desktop/middle-top.jfif"
            alt="benefits"
            className="w-full h-full object-cover rounded-[16px] flex-1"
          />
          <img
            src="/pictures/benefits/desktop/middle-bottom.jfif"
            alt="benefits"
            className="w-full h-full object-cover rounded-[16px] flex-2"
          />
        </div>
        {/* 3 */}
        <div className="flex-[35%] h-full  flex flex-col  gap-[16px]">
          <div className="h-[374px]  bg-bgBox rounded-[16px] p-[30px] flex-1">
            <h4 className="font-raleway font-bold text-[24px]">Visión</h4>
            <p className="mt-4 font-normal font-ptSans text-[16px]">
              Combinar innovación, naturaleza y sostenibilidad para generar un
              impacto positivo ambiental y socioeconómico de manera sencilla,
              accesible y cercana, que implique al mayor número de agentes
              sociales.
            </p>
          </div>
          <img
            src="/pictures/benefits/desktop/right-bottom.jfif"
            alt="benefits"
            className="w-full h-full object-cover rounded-[16px] flex-2"
          />
        </div>
      </div>
    </Layout>
  )
}
export default BentoGrid
