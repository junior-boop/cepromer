import { createEffect, createSignal } from 'solid-js'
import Container from '../../composants/container/container'
import Titre from '../../composants/titre'
import styles from './index.module.css'


const [selfPaiement, setSelfPaiment] = createSignal(false)


export default function Inscription (){
    const [nom, setNom] = createSignal('')
    const [prenom, setPrenom] = createSignal('')
    const [ville, setVile] = createSignal('')
    const [tel, setTel] = createSignal('+237 ')
    const [PersRef, setPersRef] = createSignal('+237 ')
    const [mail, setMail] = createSignal('')
    const [prof, setProf] = createSignal('')

    const handleName = (e) => {
        
    }
    return(
        <div>
            <Container>
                <div class={styles.inscriptionHeader}>
                    <Titre titre={"INSCRIPTION"} />
                </div>
                <div style={{ padding : '24px', "background-color" : '#f8f8f8', "margin-bottom" : '35px'}}> 
                    <h4 style = {{margin : 0, "font-size" : '18px'}}>Ce dossier de candidature engage le candidat dans la formation. Les informations fournies permettrons au CEPROMER d'organiser la formation dans les meilleurs conditions</h4>
                    <p>A compléter et à renvoyer au CEPROMER 15 jours minimum avant la date de la formation</p>
                </div>
                <HeaderTitre titre={'Affiliation du Stagiaire'} number={1} />
                <Input titre={'NOM'} placeholder={"Votre Nom"} value  = {nom()} onChange={e => setNom(e.target.value)} />
                <Input titre={'PRENOM'} placeholder={"Votre Prenom"} value = {prenom()} onChange={e => setPrenom(e.target.value)} />
                <Input titre={'VILLE'} type = {'select'} value = {ville()}  onChange={e => setVile(e.target.value)}/>
                <Input titre={'NUMERO DE TELEPHONE'} type={'tel'} value = {tel()} placeholder={'numero de'} onChange={e => setTel(e.target.value)} />
                <Input titre={'PERSONNE DE REFERENCE CONTACT TELEPHONE'} type={'tel'} value = {PersRef()} onChange={e => setPersRef(e.target.value)}/>
                <Input titre={'COURIEL'} type={'email'} value = {mail()} placeholder={'Votre adresse e-mail'} onChange={e => setMail(e.target.value)} />
                <Input titre={'PROFESSION'} type={'text'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)}/>

                <HeaderTitre titre={'Prise en charge financiere de la formation'} number={2} />
                <Input titre={'Vous-meme'} type='check' onChange={e => setSelfPaiment(e.target.checked)} placeholderName={"Nom de votre Employeur"} placeholderAdress={'Addresse de votre employeur'} />

                <HeaderTitre titre={'Situation Personnel'} number={3} />
                <div style = {{ "font-size" : "18px", "font-weight" : "600", "text-transform" : "uppercase"}} >Vous êtes :</div>
                <Input titre={'Salarier du secteur privé'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'name'} />
                <Input titre={'Salarier du secteur public'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'name'} />
                <Input titre={'Travailleur Independant'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'name'} />
                <Input titre={'Demandeur d\'emploi (Inscrit au Font National de l\'Emploi)'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'name'} />
                <Input titre={'Autre (Préciser)'} type={'text'} value = {prof()} placeholder={"Préciser ici"} onChange={e => setProf(e.target.value)} name={'name'} />
                <Input titre={'Votre diplôme le plus élevé'} type={'text'} value = {prof()} placeholder={"Préciser ici"} onChange={e => setProf(e.target.value)} />

                <HeaderTitre titre={'Titre des formations de courte durée'} number={4} />
                <Input titre={'Culture intensive de Maïs'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Culture intensive de la banane plantain'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Technique de multiplication végétavie'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Culture intensive du Cacao'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Culture intensive du palmier à huile'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Élevage des poulets a chair et pondeuse'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Aquaculture sur bac'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Maintenance des infrastructure hydraulique, Forage, puits, pompe, Drainage et irrigation'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Utilisation et maintenance des engins agricoles'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Production des semences et multiplication végétative'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Élevage des porcs'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Culture intensive des champignons'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />
                <Input titre={'Clture Maraichères'} type={'radio'} value = {prof()} placeholder={"votre profession"} onChange={e => setProf(e.target.value)} name={'formation'} />

            </Container>
            <div style = {{ height : '5rem'}}></div>
        </div>
    )
}


function HeaderTitre({titre, number}){
    return (
        <div class = {styles.bloc}>
            <div class={styles.titre}>
                <h2 style = {{ margin : 0}}>{titre}</h2>
                <span>{number}</span>
            </div>
        </div>
    )
}

const Input = ({ value, onChange, titre, type = 'text', ville, placeholder, onChangeEmployeurName, onChangeEmployeurAddress, placeholderName, placeholderAdress, name }) => {
    if (type === 'text'){
        return(
            <div class={styles.input}>
                <label htmlFor="">{titre}</label>
                <input type={type} value = {value} onInput={onChange} placeholder={placeholder}/>
            </div>
        )
    }
    if (type === 'email'){
        
        return(
            <div class={styles.input}>
                <label htmlFor="">{titre}</label>
                <input type={'email'} value = {value} onInput={onChange} placeholder={placeholder}/>
            </div>
        )
    }
    if (type === 'check'){
        
        return(
            <div data-checked = {selfPaiement()} class={styles.check} data-check = {false}>
                <div>
                    <label htmlFor="">{titre}</label>
                    <div class={styles.status} style={{ color : !selfPaiement() ? '#ff1818' : '#4C9B1F'}}>
                        {
                            selfPaiement() 
                            ? 'oui' 
                            : 'Non'
                        }
                    </div>
                    <input class={styles.inputCheck} type={'checkbox'}   onClick={onChange}  />
                </div>
                {
                    selfPaiement() === false 
                    ? (
                    <div class={styles.note}>
                        <div>
                            C'est mon employeur qui s'occupe de tous mes frais de scolarité pour ma formation
                        </div>
                        <div class={styles.input}>
                            <label htmlFor="">Nom de votre Employeur</label>
                            <input type={'text'} onInput={onChangeEmployeurName} placeholder={placeholderName}/>
                        </div>
                        <div class={styles.input}>
                            <label htmlFor="">L'addresse de votre Employeur</label>
                            <input type={'text'} onInput={onChangeEmployeurAddress} placeholder={placeholderAdress}/>
                        </div>
                    </div>)
                    : null
                }
            </div>
        )
    }

    if(type === 'radio'){
        return(
            <div class={styles.radio}>
                <label htmlFor="">{titre}</label>
                <input type={'radio'} onClick={onChange} name={name}/>
            </div>
        )
    }
    if (type === 'select'){
        return(
            <div class={styles.input}>
                <label htmlFor="">{titre}</label>
                <select name="ville" value={value} onChange={onChange}>
                    <option value={''}>Selectionner Votre ville</option>
                    <option value={"Yaounde"}> Yaounde</option>
                    <option value={"Douala"}> Douala</option>
                    <option value={"Bertoua"}> Bertoua</option>
                    <option value={"Bafoussam"}> Bafoussam</option>
                    <option value={"Ebolowa"}> Ebolowa</option>
                    <option value={"Edea"}> Edea</option>
                    <option value={"Dchang"}> Dchang</option>
                    <option value={"Ngaoundere"}> Yaounde</option>
                    <option value={"Garoua"}> Yaounde</option>
                    <option value={"Maroua"}> Yaounde</option>
                </select>
            </div>
        )
    }
    if (type === 'tel'){
        return(
            <div class={styles.input}>
                <label htmlFor="">{titre}</label>
                <input type={type} value = {value} onInput={onChange} placeholder={placeholder} />
            </div>
        )
    }
}