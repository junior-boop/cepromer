import Container from '../container/container'
import styles from './index.module.css'
import logo from '../../src/assets/cepromer_logo.png'
import { A } from '@solidjs/router'
import Button from '../bouton'

export default function NavBar(){
    return(
        <div class={styles.nav}>
            <div class = {styles.container}>
                <div class={styles.logo}>
                    <img src={logo} alt="logo cepromer" width = '100%' />
                </div>

                <div class={styles.menu}>
                    <ul>
                        <li>
                            <A href='/'>Accueil</A>
                        </li>
                        <li>
                            <A href='/'>A Propos</A>
                        </li>
                        <li>
                            <A href='/'>Nos Filieres</A>
                        </li>
                        <li>
                            <A href='/'>Contactez-nous</A>
                        </li>
                    </ul>
                    <Button url = {'/inscription'}>
                        Inscription
                    </Button>
                </div>
            </div>
        </div>
    )
}