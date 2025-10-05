import styles from './styles.module.scss';
import Image from 'next/image';


export default function QuickLinks() {
    return (
        <div className = {styles.linkheader}>
            <div className={styles.container}>
                <Image 
                    src='/linkedin.png'
                    alt="LinkedIn"
                    width={50}
                    height={50}
                    >
                </Image>
            </div>
            <div className={styles.container}>
                <Image 
                    src='/resume.png'
                    alt="Resume"
                    width={50}
                    height={50}
                    >
                </Image>
                </div>
            <div className={styles.container}>
                <Image 
                    src='/aboutme.png'
                    alt="About Me"
                    width={50}
                    height={50}
                    >
                </Image>
            </div>
        </div>
    );
  }