import About from '@/components/common/About'
import Advantages from '@/components/common/Advantages'
import Benefits from '@/components/common/Benefits/Benefits'
import Contact from '@/components/common/Contact'
import Hero from '@/components/common/Hero'
import ScrollToTop from '@/components/common/ScrollToTop'

export const HomePage = () => {
  return (
    <section className="min-h-screen">
      <Hero />
      <About />
      <Advantages />
      <Benefits />
      <Contact
        title="¡Unete al cambio de la mano de Pawlonia!"
        textBtn="Contáctanos"
      />
      <ScrollToTop />
    </section>
  )
}

export default HomePage
