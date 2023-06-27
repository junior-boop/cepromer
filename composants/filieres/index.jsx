import styles from './index.module.css'
import { A } from '@solidjs/router'

export default function FiliereComponent({ color, logo, titre, url = '/'}){
    return(
        <div 
            class={styles.filiere}
            style = {{
                'background-color' : color,
            }}
        >

            <div class={styles.logo} >
                <img src={logo} height={'100%'} />
            </div>

            <div>
                <div class = {styles.titre}>
                    {titre}
                </div>
                <A href={url} class= {styles.plus}>
                    Avoir plus d'information
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 24l8-8l-8-8"/></svg>
                    </span>
                </A>
            </div>

        </div>
    )
}