'use client';
import styles from './contact.module.css';
import { useRef, useState } from 'react';

export default function FormNonControlle() {
    const nomRef = useRef(null);
    const courrielRef = useRef(null);
    const [erreurNom, setErreurNom] = useState('');
    const [erreurCourriel, setErreurCourriel] = useState('');
    const [envoiReussi, setEnvoiReussi] = useState(false);
    const courrielRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        const nom = nomRef.current.value;
        const courriel = courrielRef.current.value;
        let erreur = false;

        if (!nom) {
            setErreurNom("Ce champ doit être rempli");
            erreur = true;
        } else {
            setErreurNom('');
        }

        if (!courriel || !courrielRegex.test(courriel)) {
            setErreurCourriel("Ce courriel est invalide");
            erreur = true;
        } else {
            setErreurCourriel('');
        }

        if (erreur) {
            setEnvoiReussi(false);
            return;
        }

        setEnvoiReussi(true);
    };

    return (
        <div className={styles.contact_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label>Nom:
                        <input type="text" ref={nomRef} className={styles.input} />
                        {erreurNom && <div className={styles.erreur}>{erreurNom}</div>}
                    </label>
                </div>
                <div className={styles.field}>
                    <label>Email:
                        <input type="email" ref={courrielRef} className={styles.input} />
                        {erreurCourriel && <div className={styles.erreur}>{erreurCourriel}</div>}
                    </label>
                </div>
                <button type="submit" className={styles.button}>Envoyer</button>
                {envoiReussi && <div className={styles.result}>Informations envoyées avec succès. Nom = {nomRef.current.value} et Courriel = {courrielRef.current.value}</div>}
            </form>
        </div>
    );
}
