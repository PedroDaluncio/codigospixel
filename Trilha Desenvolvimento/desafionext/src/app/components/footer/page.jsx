import Styles from './styles.module.css'

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <hr className={Styles.linha}></hr>
            © JOJOS GAME STUDIO. ALL RIGHTS RESERVED
        </footer>
    )
}