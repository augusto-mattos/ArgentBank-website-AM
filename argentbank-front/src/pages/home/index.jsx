import Navbar from "../../components/_nav";
import Hero from "../../components/_hero";
import Features from "../../components/_features";

function Home() {
    
    return (
      <>
        <Navbar />
        <main>
            <Hero />
            <Features />
        </main>
      </>
    );
  }
  
  export default Home;