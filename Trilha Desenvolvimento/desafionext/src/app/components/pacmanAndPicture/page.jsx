import Styles from './styles.module.css'

import {Press_Start_2P} from 'next/font/google'


const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })


export default function PacmanAndPicture(){
    return (
        <>
            <h1 className={`${fontGame.className} ${Styles.pacman}`}>Pacman</h1>
            <img src="pacmanprincipal.svg" alt="foto do pacman fugindo dos fantasmas" className={Styles.foto}></img>
        </>
    )

}

