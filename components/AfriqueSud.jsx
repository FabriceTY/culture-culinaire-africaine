
import React from 'react';
import Image from 'next/image';
import styles from '@/components/AfriqueSud.module.css';
import Link from 'next/link';

// Exemple de données des plats
const plats = [
  { id: 1, image: '/Assets/bobotie.webp', description: "Gratin de viande hachée classique", nom: 'BOBOTIE' },
  { id: 2, image: '/Assets/sosaties.webp', description: "Brochette marinées et épicée au curry", nom: 'SOSATIES' },
  { id: 3, image: '/Assets/chakalaka.webp', description: "Légumineuse et Épicé", nom: "CHAKALAKA" },
  { id: 4, image: '/Assets/mashonzha.webp', description: "Vers de terre cuits", nom: "MASHONZHA" },
  { id: 5, image: '/Assets/potjiekos.webp', description: "Différentes sortes de viande, de légumes frais, de riz ou de pommes de terre", nom: "POTJIEKOS" },
  { id: 6, image: '/Assets/bunnychow.webp', description: "pain blanc évidé et fourré de curry épicé, de légumes et de viande ", nom: "BUNNY CHOW" },
];

const Afriquesud = () => {
  return (
    <div className={styles.Afriquesud_container}>
      <section className={styles.presentation_section}>
        <h1>Présentation d'Afrique du Sud</h1>
        <p>
          L'Afrique du Sud est un pays riche en culture et en saveurs culinaires. 
          Découvrez les plats typiques qui font la renommée de ce beau pays africain.
        </p>
      </section>
      <section className={styles.plats_section}>
        <h2>Nos Plats</h2>
        <div className={styles.grid_container}>
          {plats.map((plat) => (
            <div key={plat.id} className={styles.grid_item}>
              <Image src={plat.image} alt={`Plat ${plat.id}`} width={300} height={200} />              
              <p className={styles.nom}>{plat.nom}</p>
              <p>{plat.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Afriquesud;
