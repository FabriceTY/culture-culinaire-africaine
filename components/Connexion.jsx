'use client';

import styles from './Connexion.module.css';
import { useForm } from 'react-hook-form';

export default function ConnexionForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: ''
        }
    });
    
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className={styles.connexion_container}>
            <form className={styles.connexion_form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.connexion_form__label}>
                    Nom:
                    <input
                        type="text"
                        {...register("nom", {
                            required: 'Champ obligatoire',
                        })}
                        placeholder='votre nom'
                        className={styles.connexion_form__input}
                    />
                    <div className={styles.connexion_form__error}>{errors.nom?.message}</div>
                </label>
                <label className={styles.connexion_form__label}>
                    Courriel:
                    <input
                        type="email"
                        {...register("courriel", {
                            required: 'Champ obligatoire',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })}
                        placeholder='votre courriel'
                        className={styles.connexion_form__input}
                    />
                    <div className={styles.connexion_form__error}>{errors.courriel?.message}</div>
                </label>
                <button type="submit" className={styles.connexion_form__button}>Envoyer</button>
            </form>
        </div>
    );
}
