import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Index() {
    return (
        <div className={styles.container}>
            <Link href={'Grid'}><a>Grid学习</a></Link>
        </div>
    )
}
