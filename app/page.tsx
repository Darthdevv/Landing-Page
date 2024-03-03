import Carousel from "@/components/carousel"
import Firstsection from "./firstsection/page"
import Navbar from "./navbar/page"
import FifthSection from "./fifthsection/page"
import Footer from "./footer/page"
import FourthSection from "./fourthsection/page"
import ThirdSection from "./thirdsection/page"
import SecondSection from "./secondsection/page"


const Home = () => {
  return (
    <>
      <Navbar />
      <Firstsection />
      <Carousel />
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection />
      <Footer/>
    </>
  )
}

export default Home
