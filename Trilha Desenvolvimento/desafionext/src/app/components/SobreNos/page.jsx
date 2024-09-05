import Styles from './styles.module.css'

import {Press_Start_2P} from 'next/font/google'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })


export default function SobreNos(){
    return(
        <section className={Styles.sobreNos} id='Sobre'>
          <span className={fontGame.className}>Sobre Nós</span>
          <div className={Styles.TextoImagem}>
            <div className={Styles.Texto}>
              <p>
                      Bem-vindo à Jojos, uma empresa de jogos retrô brasileira!
                Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos
                que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras,
                nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado.
                Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.
              </p>
              <p>
                  Acreditamos que os jogos retrô têm o poder de unir gerações,
                despertar memórias afetivas e proporcionar momentos de pura diversão.
                Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados
                cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.
              </p>
              <p>
                  Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games,
                estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras.
                Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios.
                Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
              </p>
            </div>
            <img src='fotoLugar.png' alt='foto da loja' className={Styles.fotoLugar}></img>
          </div>
        </section>
    )
}