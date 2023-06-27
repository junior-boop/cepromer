import styles from './index.module.css'
import image  from '../../src/assets/prd-an.png'
import banniere from '../../src/assets/hyg.jpg'
import Container from '../../composants/container/container'
import Titre from '../../composants/titre'
import cibler from '../../src/assets/cibler.png'
import Critere from '../../composants/critere'
import Partenaire from '../../composants/partenaire'
import back from '../../src/assets/Groupes_cercle.png'

export default function ProductionA(){
    return(
        <div>
            <div class={styles.filiereHeader}>
                <div>
                    <div style = {{ "background-color" : '#E29D15'}}>
                        <div>
                            <img src={image} height={'100%'} alt="" />
                        </div>
                        <span>
                            Production Animale
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
                        La Production animale est l'ensemble des techniques relative
                        l'élevage des animaux et dont sont issus divers produits propres 
                        à la consommation, les produits halieutiques y compris.
                    </p>
                </div>

                <div class = {styles.bloc}>
                    <Titre titre={'Objectifs'} />
                    <p>
                    IL est question de transmettre de solides connaissances techniques en 
                    ce qui concerne la production des spéculations d'origine animale, la bonne maistrise de la prophylaxie
                    et surtout la pérennité de la production.
                    </p>
                </div>

                <div class = {styles.blocTech}>
                    <div>
                        <Titre titre={'Cible'} />
                        <p>
                            Cette formation est destinée aux jeunes scolairisés ou non, 
                            toute personne voulant se reconvertir dans le domaine de l'élevage, entrepreneur, etc...
                        </p>
                    </div>
                        <div>
                            <img src={cibler} alt="" />
                        </div>
                </div>
                <div class = {styles.bloc}>
                    <Titre titre={'Au terme de la formation vous pouvez devenir:'} />
                    
                        <ul>
                            <li> Chargé d'étude des projets d'élevage</li>
                            <li> Pisciculture spécialisé</li>
                            <li> Apiculture spécialisé</li>
                            <li> Génie en construction des bâtiments d'élevages</li>
                            <li> Vendeur specialisé des produits d'élevage</li>
                            <li> Producteur spécialisé (poulet, pondeuse, porcs, lapin, oiseau non conventionnel)</li>
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