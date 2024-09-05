'use client'

import Styles from './styles.module.css'
import {Press_Start_2P} from 'next/font/google'

import Header from "@/app/components/Header/page"
import Footer from "@/app/components/footer/page"
import { useRouter } from 'next/navigation'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Forms(){
    const router = useRouter()

    const handleSubmit = (event) =>{
        event.preventDefault()
        router.replace('/sendSuccess')
    }
    return(
        <>
            <Header />
            <main>
                <h1 className={`${fontGame.className} ${Styles.title}`}>Formulário de Vaga</h1>
                <form className={Styles.forms} onSubmit={ handleSubmit } >
                    <label htmlFor='insertName'> <p>Nome:</p>
                        <input type='text' name='insertName' id='insertName' className={Styles.input} required></input>
                    </label>
                    <label htmlFor='insertEmail'> <p>Email:</p>
                        <input type='email' name='insertEmail' id='insertEmail' className={Styles.input} pattern='.+@.+..+'
                        required></input>
                    </label>
                    <label htmlFor='insertPortfolio'> <p>Link para portfólio:</p>
                        <input type='url' name='insertPortfolio' id='insertPortfolio' className={Styles.input}
                            pattern='https://.*' required defaultValue='https://seulink'></input>
                    </label>
                    <label htmlFor='insertText'> <p>Por que você quer fazer parte da Jojos?</p>
                        <textarea name='insertText' id='insertText' className={Styles.insertName} required></textarea>
                    </label>
                    <button className={Styles.submit}>Enviar Formulário</button>
                </form>
            </main>
            <Footer />
        </>
    )
}