
import React, { useState } from "react";
import Image from "next/image";
import styles from '@/components/Home.module.css';
import BannerBackground from "../public/Assets/home-banner-background.webp";
import BannerImage from "../public/Assets/home-banner-image.webp";
import CamerounFlag from "../public/Assets/cameroun.webp";
import SenegalFlag from "../public/Assets/senegal.webp";
import AfriqueSudFlag from "../public/Assets/afriquedusud.webp";
import Cameroun from './Cameroun';
import Senegal from './Senegal';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'
import { FiArrowRight } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home({ setPage }) {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
      <div className={styles.home_container}>
        <div className={styles.home_banner_container}>
          <div className={styles.home_bannerImage_container}>
            <Image src={BannerBackground} alt="imageBackground" />
          </div>
          <div className={styles.home_text_section}>
            <h1 className={styles.primary_heading}>
              Vos repas favoris cuisines avec soins 
              par des chefs issus du grand continent 
              servis et livrés à chaud.
            </h1>
            <p className={styles.primary_text}>
              N&apos;hésitez plus, peu importe vos origines, venez à la rencontre des saveurs 
              des coins du continent africain.
            </p>

            {/* Insertion du carrousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image className="d-block w-100" src={CamerounFlag} alt="First slide" />
                  <button 
                    className={styles.secondary_button} 
                    onClick={() => setActiveSection(activeSection === 'cameroun' ? null : 'cameroun')}
                  >
                    Cameroun <FiArrowRight />
                  </button>
                </div>
                <div className="carousel-item">
                  <Image className="d-block w-100" src={SenegalFlag} alt="Second slide" />
                  <button 
                    className={styles.secondary_button} 
                    onClick={() => setActiveSection(activeSection === 'senegal' ? null : 'senegal')}
                  >
                    Senegal <FiArrowRight />
                  </button>
                </div>
                <div className="carousel-item">
                  <Image className="d-block w-100" src={AfriqueSudFlag} alt="Third slide" />
                  <button 
                    className={styles.secondary_button} 
                    onClick={() => setActiveSection(activeSection === 'afriqueSud' ? null : 'afriqueSud')}
                  >
                    Afrique du Sud <FiArrowRight />
                  </button>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Fin du carrousel */}

            <div className={styles.payStyle}>
              <button 
                className={styles.secondary_button} 
                onClick={() => setActiveSection(activeSection === 'cameroun' ? null : 'cameroun')}
              >
                Cameroun <FiArrowRight />
              </button>
              <button 
                className={styles.secondary_button} 
                onClick={() => setActiveSection(activeSection === 'senegal' ? null : 'senegal')}
              >
                Senegal <FiArrowRight />
              </button>
              <button 
                className={styles.secondary_button} 
                onClick={() => setActiveSection(activeSection === 'afriqueSud' ? null : 'afriqueSud')}
              >
                Afrique du Sud <FiArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.home_image_section}>
            <Image src={BannerImage} alt="exemple de plat" />
          </div>
        </div>
        {activeSection === 'cameroun' && <Cameroun />}
        {activeSection === 'senegal' && <Senegal />}
        {activeSection === 'afriqueSud' && <Testimonials/>}
        {/* Contenu About et Testimonials */}
        <About/>
        <Testimonials/>
      </div>
    </div>
  );
};
