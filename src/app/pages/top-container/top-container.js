import styles from "./top-container.module.css"
export default function TopContainer(){
    return (
        <>
            <div className={styles.container}>
                <h3 style={{margin:'0px'}}>NEWS</h3>
                <ul>
                <li>Technovert is now Microsoft partner in Information Security Solutions</li><br/>			    
                <li> We deliver one of the larges book information stores in the world</li><br/>	
                <li>Our team deliered the first Windows 8 Metro style application for the Windows Phone group at Microsoft</li><br/>	
			    <li>Technovert partners with a strategic technology CTO group</li>
                </ul>
            </div>
        </>
    );
}