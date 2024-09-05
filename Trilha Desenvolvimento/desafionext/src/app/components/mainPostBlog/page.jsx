import Styles from './styles.module.css'


export default function PostInfo(){
    return (
        <>
            <img src='fotoPc.png' alt='foto de um pc da decada de 90' className={Styles.image}></img>
            <h1 className={Styles.title}>O impacto dos jogos retrô na indústria de desenvolvimento de jogos</h1>
            <p className={Styles.author}>Por Guilherme Santos, 23/04/2023 </p>
        </>
    )
}