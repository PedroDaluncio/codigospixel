import Styles from './styles.module.css'

import {Press_Start_2P} from 'next/font/google'

import Header from "@/app/components/Header/page"
import Footer from "@/app/components/footer/page"

import {GET} from '../api/route'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Blog(){
    return(
        <>
            <Header />
            <h1 className={`${fontGame.className} ${Styles.blogTitulo}`}>BLOG</h1>
            {GET()}
            <Footer />
        </>
    )
}