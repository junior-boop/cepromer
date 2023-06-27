import styles from './index.module.css'

export default function Banniere({image}) {
    return(
        <div class = {styles.banniere} style={{"background-image" : `url(${image})`}}>
           
        </div>
    )
}