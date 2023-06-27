import Banniere from '../../composants/banniere'
import NavBar from '../../composants/navbar'
import styles from './index.module.css'

import banniere from '../../src/assets/banniere.jpg'
import hy_as from '../../src/assets/hy-as.png'
import hyd_ru from '../../src/assets/hydr-ru.png'
import pr_ve from '../../src/assets/pro-ve.png'
import pro_a from '../../src/assets/prd-an.png'
import innovation from '../../src/assets/innovation.jpg'
import communaute from '../../src/assets/communaute.jpg'
import background from '../../src/assets/Groupes_cercle.png'
import student from '../../src/assets/student.jpg'
import Titre from '../../composants/titre'
import { A } from '@solidjs/router'
import Container from '../../composants/container/container'
import FiliereComponent from '../../composants/filieres'
import Critere from '../../composants/critere'
import Partenaire from '../../composants/partenaire'


export default function Accueil(){
    return(
        <div>
            <Banniere image={banniere} />
            <section>
                <div class={styles.defi}>
                    <Titre titre={'Notre défie'}style={{'text-align' : 'center'}}/>
                    <p>
                        Permettre, en période de croisière d’assurer la formation de masse pour environ 300 jeunes pour la région en vue des projets structurants dans le domaine agricole, forestier et minier suivant la demande. 
                        <br /><br />
                        Faire des ruraux des citoyens mieux formés, intégrés dans la vie nationale, dotés des connaissances qui leur permettent une meilleure maitrise de leur environnement techniques, économiques et qui soit à mesure de les enrichir en permanence au fur et à mesure de l’évolution de cet environnement.
                    </p>
                </div>
            </section>
            <section style={{ 'max-width' : '100%'}}>
                <div style = {{ display : 'flex', 'flex-wrap' : 'wrap', "justify-content" : 'center', gap : '20px'}}>
                <FiliereComponent color={'#00D8FF'} titre = 'Hygienes & Assainissement ' logo={hy_as} url={'/filieres/hyg-as'} />
                <FiliereComponent color={'#F24141'} titre = 'Hydraulique Rural' logo={hyd_ru} url={'/filieres/hyd-ru'} />
                <FiliereComponent color={'#527D24'} titre = 'Production Végétal' logo={pr_ve} url={'/filieres/prod-veg'}/>
                <FiliereComponent color={'#E29D15'} titre = 'Production Animale' logo={pro_a} url={'/filieres/prod-an'}/>
                </div>
                <A href='/' style={{width : '70vmin', display : 'block', margin: '2rem auto', }}>
                    <button style={{ width : '100%', "justify-content" : 'center', "font-size" : 'calc(10px + 1vmin)'}}>
                        Inscrivez-vous ici
                    </button>
                </A>
            </section>
            <div style= {{"background-image" : `url(${background})`, "background-position-x" : 'center', "background-position-y" : 'top'}}>
            <section >
                <Titre titre={'Nos Valeurs'} style={{ margin : '1rem', 'text-align' : 'center', 'margin-bottom' : '48px'}}/>
                <div class= {styles.value}>
                <div class={styles.column}>
                    <div style={{ "background-color" : '#FFF6E9'}}>
                        <h1 style = {{color : '#EB0000'}}>Excellences</h1>
                        <p>Nous nous engageons à toujours rechercher l’excellence dans notre offre de formations et de services. Nos formateurs sont rigoureusement sélectionnés pour leur expertise et leur expérience. Nous créons un univers inspirant, propice à un apprentissage efficace et épanouissant.</p>
                    </div>
                    <div style={{background : 'linear-gradient(180deg, #fffaf0 9.88%, #fc9a77 100%)'}}>
                        <h1 style = {{color : '#EB0000'}}>Créativité</h1>
                        <p>
                        Notre univers et nos méthodes mettent l’accent sur le développement des compétences individuelles, afin que chacun trouve en lui le moyen de révéler ses talents. Nous accompagnons chaque participant à préciser ses aspirations et à créer une entreprise digne et capable de relever les défis de l’émergence en milieu rural et Urbain.
                        </p>
                        <div class={styles.ZoneImage}>
                            <div data-left = 'true' style={{"background-image" : `url(${innovation})`}}></div>
                        </div>
                    </div>
                </div>
                <div class={styles.column}>
                    <div style={{ "background-color" : '#f0ffd8'}}>
                        <h1 style = {{color : '#026d00'}}>Détermination</h1>
                        <p>Nous avons à cœur de transmettre notre passion aux professionnels du monde rural de demain, afin de permettre à chacun de réaliser ses rêves. Nous créons les conditions nécessaires pour que chacun prenne du plaisir, avec une équipe chaleureuse et passionnée, un espace convivial, et des méthodes innovantes de formation qui concilient technologies, animations et divertissements pour accroitre l’acquisition des connaissances.</p>
                    </div>
                    <div style={{background : 'linear-gradient(180deg, #f0ffd8 0%, #fed1d0 100%)'}}>
                        <h1 style = {{color : '#026d00'}}>Communauté</h1>
                        <p>
                        Notre univers et nos méthodes mettent l’accent sur le développement des compétences individuelles, afin que chacun trouve en lui le moyen de révéler ses talents. Nous accompagnons chaque participant à préciser ses aspirations et à créer une entreprise digne et capable de relever les défis de l’émergence en milieu rural et Urbain.
                        </p>
                        <div class={styles.ZoneImage}>
                            <div style={{"background-image" : `url(${communaute})`}}></div>
                        </div>
                    </div>
                </div>         
                </div>
            </section>
            
            <section>
                <div class={styles.centeryou}>
                    <Titre titre={'Le Centre de Promotion des Métiers Ruraux et vous'} style = {{ width : '70vmin', margin : 'auto', 'text-align' : 'center', 'margin-bottom': '3rem'}} />
                    <p>
                    Le centre propose désormais aux acteurs ruraux, animateurs de l’économie des villages, des formations selon trois axes complémentaires :
                    </p>
                    <div>
                       <div class={styles.item}>
                            <p>
                                Formation aux métiers agricoles d'élevage, de foresterie et du bois, des mines, artisanat et habitat rural.
                                il s'agira de développer les connaissances de base relative aux métiers et services, des savoir-faire et des techniques régissant une filière de production donnée, valorisation des systèmes de production par les connaissances transversales.
                            </p>
                            <div class={styles.puce}>
                                <div>1</div>
                            </div>
                       </div>
                       <div class={styles.item}>
                            <p>
                                Formation générale et éducation à la citoyenneté : ouverture sur le monde et participation  à la communicaton dans le monde moderne, renforcement des capacité d'organisation, de gestion et de négociation, alphabétisation fonctionnelle; 
                            </p>
                            <div class={styles.puce}>
                                <div>2</div>
                            </div>
                       </div>
                       <div class={styles.item}>
                            <p>
                                Information et communication à travers ICT4D
                            </p>
                            <div class={styles.puce}>
                                <div>3</div>
                            </div>
                       </div>
                    </div>
                </div>                
            </section>
            <section>
                <Container>
                    <div class={styles.plusInfos}>
                        <div style = {{ "background-image" : `url(${student})`}}></div>
                        <div>
                            <div>
                                Obtenez plus d'infos 
                            </div>
                            <span>
                                sur la formation et ses avantages
                            </span>

                            <A class={styles.lien} href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 16h21m-7-8l8 8l-8 8"/></svg>
                            </A>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Titre titre={'Comment s’inscrire au Centre de promotion des métiers Ruraux ?'} style = {{ width : '80vmin', margin : 'auto', 'text-align' : 'center', 'margin-bottom': '3rem'}} />
                <Critere />
            </section>
            <Partenaire />
            </div>
        </div>
    )
}