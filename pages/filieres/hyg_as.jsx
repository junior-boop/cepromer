import styles from './index.module.css'
import image  from '../../src/assets/hy-as.png'
import banniere from '../../src/assets/hyg.jpg'
import Container from '../../composants/container/container'
import Titre from '../../composants/titre'
import cibler from '../../src/assets/cibler.png'
import Critere from '../../composants/critere'
import Partenaire from '../../composants/partenaire'
import back from '../../src/assets/Groupes_cercle.png'

export default function Hygienes(){
    return(
        <div>
            <div class={styles.filiereHeader}>
                <div>
                    <div>
                        <div>
                            <img src={image} height={'100%'} alt="" />
                        </div>
                        <span>
                            Hygienes & Assainissement 
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
                    Un assainissement est une mise en oeuvre de moyen d'hygiene pour promouvoir la sante par la prevention de tous contact humains avec les risque lies aux dechets.
Il est question ici des dechets organiques de milieu agrcole, ainsi que le traitement et l'elimination des eaux usees et des eaux sales sont inclus.
                    </p>
                </div>

                <div class = {styles.bloc}>
                    <Titre titre={'Objectifs'} />
                    <p>
                    Il est question de transmettre de solides connaisances techniques en ce qui concerne les regles d'hygiene et les moyens pour eradiquer les differents microbes ou agents vecteurs responsables des maladies.
                    </p>
                </div>

                <div class = {styles.blocTech}>
                    <div>
                        <Titre titre={'Cible'} />
                        <p>
                            Cette formation est destinée aux jeunes scolairisés ou non, agent d'entretien, entrepreneur, etc...
                        </p>
                    </div>
                        <div>
                            <img src={cibler} alt="" />
                        </div>
                </div>
                <div class = {styles.bloc}>
                    <Titre titre={'Au terme de la formation vous pouvez devenir:'} />
                    
                        <ul>
                            <li> Chargé d'etude en assainissement</li>
                            <li> Expert ATPC "Assainissement Total Piloté Par les Communautés"</li>
                            <li> Animateur WASH dans les villages</li>
                            <li> Agent d'entretien des espaces ruraux</li>
                            <li> Conseil et gestion de la salubrité des communes</li>
                            <li> Paysagiste rural</li>
                            <li>Agent de recyclage des dechets plastiques</li>
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