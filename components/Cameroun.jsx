
import React from 'react';
import Image from 'next/image';
import styles from '@/components/Cameroun.module.css';
import Link from 'next/link';

// Exemple de données des plats
const plats = [
  { id: 1, image: '/Assets/rizotto.webp', description: "Melange de riz et d'aissonnement local", nom: 'RIZOTTO' },
  { id: 2, image: '/Assets/poulet_frite.webp', description: "Poulet frite et marine a la main", nom: 'POULET FRITE' },
  { id: 3, image: '/Assets/poisson.webp', description: "Poisson de mer de la region de l'Ouest", nom: "POISSON D'EAU DOUCE" },
  { id: 4, image: '/Assets/plat_entre.webp', description: "Plat d'entree pour preparer son palais", nom: "SALADE DE FRUIT" },
  { id: 5, image: '/Assets/crevettes.webp', description: "Mixture de riz Jaune et crevettes de Mer", nom: "CREVETTES" },
  { id: 6, image: '/Assets/sudhi.webp', description: "Imitation d'origine Japonaise", nom: "CAMER-SUSHI" },
  
];

const Cameroun = () => {
  return (
    <div className={styles.cameroun_container}>
      <section className={styles.presentation_section}>
        <h1>Présentation du Cameroun</h1>
        <p>
          Le Cameroun est un pays riche en culture et en saveurs culinaires. 
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

export default Cameroun;
