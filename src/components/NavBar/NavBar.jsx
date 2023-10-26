import { IconCar } from "../IconCar/IconCar";
import styles from "../../app.module.css";

export const NavBar = () => {
  return (  
      <nav className={styles.navBar}>
              <div>
                <button className={styles.btn}>Inicio</button>
                <button className={styles.btn}>Productos</button>
              </div>
              <div>
                <IconCar />
              </div>
      </nav>
  );
};
