import Carousel from "@/components/carousel"
import Firstsection from "./firstsection/page"
import Navbar from "./navbar/page"
import FifthSection from "./fifthsection/page"
import Footer from "./footer/page"


const Home = () => {
  return (
    <>
      <Navbar />
      <Firstsection />
      <Carousel />
      <FifthSection />
      <Footer/>
    </>
  )
}

export default Home
