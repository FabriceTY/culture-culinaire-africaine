// 'use client'
// import { useState } from 'react';
// import styes from './FormHook.module.css'
// import { useForm } from 'react-hook-form'
// import emailjs from '@emailjs/browser';

// export default function FormHook() {
//     const [result, setResult]= useState('')
//     const [success, setSuccess]= useState(true)

//     const {
//         register, handleSubmit, watch, getValues,
//         formState: { errors }
//     } = useForm({
//         defaultValues: {
//             nom:'',
//             email: '',
//             object:'',
//             message:'',
//             password: '',
//             rePassword: ''
//         }
//     });

//     const passObserve = watch('password');

//     const handleSubmitPerso = () => {
//         console.log('OK')
//         const values = getValues()

//         console.log(`Email : ${values.email} Password : ${values.password}`)
//     }
//     const sendmail =()=>{
//         const values = getValues();
//         const templateParams={
//             name: values.nom,
//             subject: values.subject,
//             email: values.email,
//             message: values.message,
//         }
//         emailjs.send(
//             'service_vs4lh5p', // service id
//             'template_i83uvwi', // template_ID
//             templateParams,
//             'vbiiQT0-tMRyRp6Yn'// user public key
//         ).then(
//             (response)=>{
//                 setResult("Message envoye avec succes");
//                 setSuccess(true)
//             },
//             (errors)=>{
//                 setResult("Message non envoye")
//                 setSuccess(false)
//             }
//         )
//     }


//     return <>
//         <form className={styes.form} onSubmit={handleSubmit(sendmail)}>
//             <div>
//                 <label>
//                     Email:
//                     <input
//                         type="text"
//                         placeholder='votre email'
//                         {...register("email",
//                             {
//                                 required: 'Ce champ est obligatoire',
//                                 pattern: {
//                                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                                     message: 'Email invalide'
//                                 }
//                             }
//                         )
//                         }
//                     />
//                 </label>
//                 <div className={styes.erreur}>{errors.email?.message}</div>
//             </div>
//             <div>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         placeholder='password'
//                         {...register("password",
//                             {
//                                 required: "Ce champ est obligatoire",
//                                 minLength: { value: 8, message: "8 carateres min" }
//                             }
//                         )}
//                     />
//                 </label>
//                 <div className={styes.erreur}>{errors.password?.message}</div>
//             </div>

//             <div>
//                 <label>
//                     RePassword:
//                     <input
//                         type="password"
//                         placeholder='Ressaisir password'
//                         {...register("rePassword",
//                             {
//                                 required: "Ce champ est obligatoire",
//                                 minLength: { value: 8, message: "8 carateres min" },
//                                 validate: value => value === passObserve || 'Les mots de passe doivent être identiques'
//                             })}
//                     />
//                 </label>
//                 <div className={styes.erreur}>{errors.rePassword?.message}</div>
//             </div>
//             <button type='submit'>Envoyer</button>
//         </form>
//     </>
// }

'use client'
import { useState } from 'react';
import styles from './FormHook.module.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function FormHook() {
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState(true);

    const {
        register, handleSubmit, watch, getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            email: '',
            subject: '',
            message: '',
            password: '',
            rePassword: ''
        }
    });

    const passObserve = watch('password');

    const sendmail = () => {
        const values = getValues();
        const templateParams = {
            name: values.nom,
            subject: values.subject,
            email: values.email,
            message: values.message,
        };
        emailjs.send(
            'service_vs4lh5p', // service id
            'template_i83uvwi', // template id
            templateParams,
            'vbiiQT0-tMRyRp6Yn' // user public key
        ).then(
            (response) => {
                setResult("Message envoyé avec succès");
                setSuccess(true);
            },
            (error) => {
                setResult("Message non envoyé");
                setSuccess(false);
            }
        );
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(sendmail)}>
                <div>
                    <label>
                        Nom:
                        <input
                            type="text"
                            placeholder='Votre nom'
                            {...register("nom", { required: 'Ce champ est obligatoire' })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.nom?.message}</div>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="text"
                            placeholder='Votre email'
                            {...register("email", {
                                required: 'Ce champ est obligatoire',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Email invalide'
                                }
                            })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.email?.message}</div>
                </div>
                <div>
                    <label>
                        Objet:
                        <input
                            type="text"
                            placeholder='Objet'
                            {...register("subject", { required: 'Ce champ est obligatoire' })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.subject?.message}</div>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            placeholder='Votre message'
                            {...register("message", { required: 'Ce champ est obligatoire' })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.message?.message}</div>
                </div>
                <div>
                    <label>
                        Mot de passe:
                        <input
                            type="password"
                            placeholder='Mot de passe'
                            {...register("password", {
                                required: 'Ce champ est obligatoire',
                                minLength: { value: 8, message: '8 caractères min' }
                            })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.password?.message}</div>
                </div>
                <div>
                    <label>
                        Confirmez le mot de passe:
                        <input
                            type="password"
                            placeholder='Confirmez le mot de passe'
                            {...register("rePassword", {
                                required: 'Ce champ est obligatoire',
                                minLength: { value: 8, message: '8 caractères min' },
                                validate: value => value === passObserve || 'Les mots de passe doivent être identiques'
                            })}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.rePassword?.message}</div>
                </div>
                <button type='submit'>Envoyer</button>
                {result && <p className={success ? styles.success : styles.error}>{result}</p>}
            </form>
        </div>
    );
}
