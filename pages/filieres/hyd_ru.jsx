import styles from './index.module.css'
import image  from '../../src/assets/hydr-ru.png'
import banniere from '../../src/assets/hyg.jpg'
import Container from '../../composants/container/container'
import Titre from '../../composants/titre'
import cibler from '../../src/assets/cibler.png'
import Critere from '../../composants/critere'
import Partenaire from '../../composants/partenaire'
import back from '../../src/assets/Groupes_cercle.png'

export default function Hydraulique(){
    return(
        <div>
            <div class={styles.filiereHeader}>
                <div>
                    <div style = {{ "background-color" : '#F24141'}}>
                        <div>
                            <img src={image} height={'100%'} alt="" />
                        </div>
                        <span>
                            Hydraulique Rurale 
                        </span>
                    </div>
                    <div>Inscrivez-vous ici</div>
                </div>
                <div style = {{ "background-image" : `url(${banniere})`}}></div>
            </div>
            <div style = {{ "background-image" : `url(${back})`, "background-position" : 'center', "background-repeat": 'no-repeat'}}>
            <Container>
                <div class={styles.bloc}>
                    <Titre titre={'A propos'}/>
                    <p>
                      L'hydraulique rurale constitue la science et technique relative à l'utilisation agricole et ménagère de l'eau. C'est une spécialité dans le domaine du génie rural.
                    </p>
                </div>

                <div class = {styles.bloc}>
                    <Titre titre={'Objectifs'} />
                    <p>
                         Il est question de transmettre de solides connaisancestechniques en ce qui concerne l'acheminement et la gestion de l'eau en milieu rural ou péri urbain.
                    </p>
                </div>

                <div class = {styles.blocTech}>
                    <div>
                        <Titre titre={'Cible'} />
                        <p>
                            Cette formation est destinée aux jeunes scolairisés ou non, agent technique des communes, plombiers, puisatier, entrepreneur, etc...
                        </p>
                    </div>
                        <div>
                            <img src={cibler} alt="" />
                        </div>
                </div>
                <div class = {styles.bloc}>
                    <Titre titre={'Au terme de la formation vous pouvez devenir:'} />
                    
                        <ul>
                            <li> Chargé d'etude des projets d'eaux (irrigation, drainage, pompe etc...)</li>
                            <li> Maintenancier des forages</li>
                            <li> Plombier spécialisé</li>
                            <li> Puisatier</li>
                            <li> Spécialiste en matériel hydraulique</li>
                            <li> Assainisseur spécialisé</li>
                        </ul>
                </div>
                
            </Container>
            <section>
                <Titre titre={'Comment s’inscrire au Centre de promotion des métiers Ruraux ?'} style = {{ width : '80vmin', margin : 'auto', 'text-align' : 'center', 'margin-bottom': '3rem'}} />
                <Critere />
            </section>
            <Partenaire />
            </div>
        </div>
    )
}