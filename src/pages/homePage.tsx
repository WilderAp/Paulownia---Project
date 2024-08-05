import About from '@/components/common/About'
import Advantages from '@/components/common/Advantages'
import Benefits from '@/components/common/Benefits/Benefits'
import Hero from '@/components/common/Hero'

export const HomePage = () => {
  return (
    <section className="min-h-screen">
      <Hero />
      <About />
      <Advantages />
      <Benefits />
    </section>
  )
}

export default HomePage
