//import styles from './Destination.module.css';
//import santorini from '../../assets/destination/image-santorini.png';
//function Destination() {
 // return (
    //<div className={styles.destination}>
       // <img 
          //   className={styles.image}
           //  src={santorini} 
           //  alt="Santorini"    
       // />
       // <h2 className={styles.destination__title}>Santorini</h2>
        //<p className={styles.pays}>Greece</p>
       // <p className={styles.description}>découvrez les magnifiques paysages des iles grecques </p>
       // <h3 className={styles.prix}>1200dt</h3>
   // </div>

  //)}export default Destination;
import styles from "./Destination.module.css";
import { useState } from "react";

function Destination(props) {
  const [afficher, setAfficher] = useState(false);
  const[favoris,setFavoris]=usestate(false);]

  function swap() {
    setAfficher(!afficher);
  }

  return (
    <div className={styles.destination}>
      <img
        src={props.image}
        alt={props.nom}
        className={styles.image}
      />
      <h2 className={styles.titre}>{props.nom}</h2>
      <p className={styles.pays}>{props.pays}</p>

      {afficher && <p className={styles.description}>{props.description}</p>}

      <button onClick={swap}>
        {afficher ? "Masquer la description" : "Afficher la description"}
      </button>

      <h3 className={styles.prix}>{props.prix} DT</h3>
    </div>
  );
}

export default Destination;