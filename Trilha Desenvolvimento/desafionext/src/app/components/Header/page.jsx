import {Press_Start_2P} from 'next/font/google'

import Styles from '../Header/styles.module.css'
import Link from 'next/link'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Header(){
    return(
      <header className={Styles.Cabecalho}>
        <div className={Styles.logo}>
          <img src="icon.png" alt="Logo da página, sendo uma abóbora"></img>
          <span className={fontGame.className}>J<span className={Styles.letraLaranja}>
            O</span>J<span className={Styles.letraLaranja}>O</span>S</span>
        </div>
        <span className={Styles.Menu}>
          <Link href={'/#Sobre'} className={Styles.link}>Jogos </Link>
          <Link href={'/#Sobre'} className={Styles.link}>Sobre </Link>
          <Link href={'/pagina-blog'} className={Styles.link}>Blog </Link>
          <Link href={'/#Carreira'} className={Styles.link}>
          <div className={Styles.botaoCarreira}>Carreira</div></Link>
        </span>
      </header>
    )
}