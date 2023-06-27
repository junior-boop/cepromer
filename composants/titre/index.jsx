import styles from './index.module.css'

export default function Titre({titre, style}) {
    return(
        <div class={styles.titre} style = {{...style}}>{titre}</div>
    )
}