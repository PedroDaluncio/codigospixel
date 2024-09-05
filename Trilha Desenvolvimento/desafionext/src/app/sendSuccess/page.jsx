'use client'


import { useRouter } from 'next/navigation'
import Styles from './styles.module.css'

import {Press_Start_2P} from 'next/font/google'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function SendSuccess(){
    const router = useRouter()
    setTimeout(() =>{
        router.replace('/pagina-formulario')
    },5000)
    return(
        <>
            <section className={Styles.box}>
                <h1 className={`${fontGame.className} ${Styles.title}`}>Formulário enviado com sucesso</h1>
                <img src='certo.png'></img>
            </section>
        </>
    )
}