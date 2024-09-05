import Styles from './styles.module.css'

export default function PushaseValueAndBuyButton(){
    return (
        <>
            <div className={Styles.valorComprar}>
                Valor: R$10,00
                <button className={Styles.comprar}>Comprar</button>
            </div>
        </>
    )
}