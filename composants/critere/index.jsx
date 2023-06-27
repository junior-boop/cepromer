import Container from '../container/container'
import styles from './index.module.css'
import { A } from '@solidjs/router'

export default function Critere(){
    return(
        <Container>
            <div class={styles.blockCritete}>
                <div class={styles.critere}>
                    <div class={styles.element}>
                        Formulaire de candidature à retirer au centre  sis à Mandjou ou à la Délégation Régionale de l’Emploi et de la Formation Professionnelle de l’Est ;
                    </div>
                    <div class={styles.element}>
                        Demande manuscrite adressée à Monsieur le Directeur du Centre de Promotion des métiers Ruraux ; 
                    </div>
                    <div class={styles.element}>
                        Photocopie carte Nationale d’identité ;
                    </div>
                    <div class={styles.element}>
                        Photocopie du dernier diplôme;
                    </div>
                    <div class={styles.element}>
                        Frais de dépôt des dossiers (10000 FCFA) ;
                    </div>
                    <div class={styles.element}>
                        Les candidats des filières agricoles disposeront en plus, une attestation de propriétés d’une surface de terre supérieure ou égale à 2 ha dans son village signé par le chef de village ;
                    </div>
                    <div class={styles.element}>
                    Avoir une lettre de recommandation du Maire de votre circonscription de résidence. 
                    </div>
                </div>
                <div></div>
            </div>
            <A href='/inscription' style={{width : '70vmin', display : 'block', margin: '2rem auto', }}>
                <button style={{ width : '100%', "justify-content" : 'center', "font-size" : 'calc(10px + 1vmin)'}}>
                    Inscrivez-vous ici
                </button>
            </A>
        </Container>
    )
}