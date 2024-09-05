import Link from 'next/link'
import Styles from './styles.module.css'

import {Press_Start_2P} from 'next/font/google'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Carreira(){
    return(
        <section className={Styles.Carreira} id='Carreira'>
          <p className={`${fontGame.className} ${Styles.tituloCarreira}`}>Carreira</p>
          <section className={Styles.Vagas}>
            <Link href={'./pagina-formulario'} className={Styles.link}>
                <div className={Styles.caixaVagas}>
                    <p>Desenvolvedor C++ Júnior</p>
                    <span>DEV</span>
                    <span>Remoto</span>
                </div>
            </Link>
            <div className={Styles.caixaVagas}>
                <p>Desenvolvedor C++ Pleno</p>
                <span>DEV</span>
                <span>Remoto</span>
            </div>
            <div className={Styles.caixaVagas}>
                <p>Engenheiro de Software</p>
                <span>Engenheiro</span>
                <span>Remoto</span>
            </div>
            <div className={Styles.caixaVagas}>
                <p>Artista Técnico</p>
                <span>Arte</span>
                <span>Remoto</span>
            </div>
            <div className={Styles.caixaVagas}>
                <p>Representante Comercial</p>
                <span>Comercial</span>
                <span>Remoto</span>
            </div>
          </section>
        </section>
    )
}