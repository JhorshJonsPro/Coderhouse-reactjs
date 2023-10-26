
import styles from "../../app.module.css";

export const ContainerBox = ({ message }) => {
  return (
    <>
      <div className={styles.txt}> {message} </div>
    </>
  )
}
