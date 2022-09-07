import styles from "../styles/Home.module.css";
import ListAll from "../components/ListAll";

export default function Home() {
 return (
   <div className={styles.container}>
    <ListAll/>
   </div>
 );
}