import styles from './Header.module.css'
import rocketIcon from '../assets/rocket.svg'

export function Header(){
    return(
        <>  
            <header className={styles.header}>
                <div className={styles.headerText}>
                    <img src={rocketIcon}/>
                    <h1>to<span>do</span></h1>
                </div>
            </header>
        </>
    )
}