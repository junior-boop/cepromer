import styles from './index.module.css'
import { A } from '@solidjs/router'

import capef from '../../src/assets/capef.png'
import cifor from '../../src/assets/Centre-de-recherche-forestière-internationale-CIFOR.png.webp'
import cicc from '../../src/assets/cicc.png'
import cub from '../../src/assets/CUB.png'
import cvuc from '../../src/assets/cvuc.jpg'
import iitap from '../../src/assets/IITA.png'
import irad from '../../src/assets/irad.png'
import sodecao from '../../src/assets/Logo-SODECAO.jpg'
import mipromalo from '../../src/assets/mipromalo.jpg'
import Titre from '../titre'

export default function Partenaire(){
    return(
        <section>
            <Titre titre={'Nos Partenaires'} style = {{ width : '80vmin', margin : 'auto', 'text-align' : 'center', 'margin-bottom': '3rem'}} />
            <div class={styles.partenaire_Container}>
                <PartenaireItem image={cvuc} />
                <PartenaireItem image={capef} />
                <PartenaireItem image={cicc} />
                <PartenaireItem image={sodecao} />
                <PartenaireItem image={irad} />
                <PartenaireItem image={cifor} />
                <PartenaireItem image={iitap} />
                <PartenaireItem image={mipromalo} />
                <PartenaireItem image={cub} />

            </div>
        </section>
    )
}

function PartenaireItem({image, url}){
    return(
        <A class={styles.partenaire} href='/'>
            <img src={image}  height={'100%'}/>
        </A>
    )
}