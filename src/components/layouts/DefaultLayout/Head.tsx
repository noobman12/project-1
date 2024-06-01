import { Link } from "react-router-dom";
import Navigation from "../../Navigation";
import styles from "./Head.module.css";
export function Header() {
  return (
    <header>
      <div className='container'>
        <div className={styles.header_main + " flex text-white h-[70px]"}>
          <div className='header-logo'>
            <Link to='/' className={styles.logo}>
              Electrician
            </Link>
          </div>

          <Navigation></Navigation>
        </div>
      </div>
    </header>
  );
}
