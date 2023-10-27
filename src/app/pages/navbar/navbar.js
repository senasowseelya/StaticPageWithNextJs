import styles from "./navbar.module.css";
export default function Navbar(){
    return (
        <>
            <div className={styles.navbar}>
                <b><a href="#">HOME</a></b>
                <b><a href="#">SERVICES</a></b>
                <b><a href="#">CAREERS</a></b>
                <b><a href="#">CONTACT</a></b>
		    </div>
        </>
    );
}