import styles from './index.module.css'
import image  from '../../src/assets/pro-ve.png'
import banniere from '../../src/assets/hyg.jpg'
import Container from '../../composants/container/container'
import Titre from '../../composants/titre'
import cibler from '../../src/assets/cibler.png'
import Critere from '../../composants/critere'
import Partenaire from '../../composants/partenaire'
import back from '../../src/assets/Groupes_cercle.png'

export default function ProductionV(){
    return(
        <div>
            <div class={styles.filiereHeader}>
                <div>
                    <div style = {{ "background-color" : '#527D24'}}>
                        <div>
                            <img src={image} height={'100%'} alt="" />
                        </div>
                        <span>
                            Production Végétale
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
                        La demande en qualité et en quantité de nourriture n'est pas 
                        satisfaite au Cameroun. Il devient donc primordial de multiplier et 
                        consolider les activités de productions d'aliments tels que les tubercules, 
                        légumes, fruits et autres produits végétaux
                    </p>
                </div>

                <div class = {styles.bloc}>
                    <Titre titre={'Objectifs'} />
                    <p>
                    IL est question de transmettre de solides connaissances techniques en 
                    ce qui concerne la production des spéculations végétales et la 
                    gestion des intrants agricoles.
                    </p>
                </div>

                <div class = {styles.blocTech}>
                    <div>
                        <Titre titre={'Cible'} />
                        <p>
                            Cette formation est destinée aux jeunes scolairisés ou non, 
                            toute personne voulant se reconvertir dans le domaine agricole, entrepreneur, etc...
                        </p>
                    </div>
                        <div>
                            <img src={cibler} alt="" />
                        </div>
                </div>
                <div class = {styles.bloc}>
                    <Titre titre={'Au terme de la formation vous pouvez devenir:'} />
                    
                        <ul>
                            <li> Chargé d'étude des projets agricoles</li>
                            <li> Pépiniériste spécialisé</li>
                            <li> Producteur spécialisé</li>
                            <li> Vulgarisateur spécialisé</li>
                            <li> Phyto-technicien</li>
                            <li> Conducteur mécanicien d'engin agricole</li>
                            <li>Vendeur spécialisé des produits agricoles</li>
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