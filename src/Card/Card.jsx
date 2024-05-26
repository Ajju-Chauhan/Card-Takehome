import Tooltip from '@mui/material/Tooltip';
import img from './img.jpg';
import styles from '../Card/Card.module.css';


const Card =() => {
  return (
    <Tooltip
      title="42 songs"
      arrow
    >
      <div className={`${styles.cardbox} ${styles.title} ${styles.cardcontainer}`} >
        <div className={styles.card}>
          <div className={styles.cardimage}>
            <img src={img} alt="random img" />
          </div>
          <div className={styles.cardtext}>
            <h5>12417 Follows</h5>
          </div>
        </div>
        <div className={styles.title}>Lighthearted Childhood</div>
      </div>
    </Tooltip>
  );
};

export default Card;