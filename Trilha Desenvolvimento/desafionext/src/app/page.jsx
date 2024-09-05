import  Header  from "./components/Header/page"
import Images from "./components/images/page"
import SobreNos from "./components/SobreNos/page"
import Carreira from "./components/Carreira/page"
import Footer from "./components/footer/page"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Images />
        <SobreNos/>
        <Carreira />
      </main>
      <Footer />
    </>
    )
}
