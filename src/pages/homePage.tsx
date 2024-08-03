import About from "@/components/common/About";
import Hero from "@/components/common/Hero";

export const HomePage = () => {
  return (
    <section className="min-h-screen">
      <Hero />
      <About />
    </section>
  );
};

export default HomePage;
