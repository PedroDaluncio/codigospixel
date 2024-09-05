import Header from "@/app/components/Header/page"
import Footer from "@/app/components/footer/page"
import PacmanAndPicture from "../components/pacmanAndPicture/page"
import PushaseValueAndBuyButton from "../components/pushaseValueAndBuyButton/page"
import PacmanHistory from "../components/pacmanHistory/page"

import Styles from './styles.module.css'

export default function Jogo(){
    return(
        <>
            <Header />
            <main className={Styles.conteudoPrincipal}>
                <PacmanAndPicture />
                <PushaseValueAndBuyButton />
                <PacmanHistory />
            </main>
            <Footer />
        </>
    )
}