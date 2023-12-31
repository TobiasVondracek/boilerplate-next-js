import styles from '../styles/Home.module.css'
import { HeroUnit } from '../models/content-types/hero_unit';
import { NextPage } from 'next';

const HeroLayout = ( heroUnit:HeroUnit ) => {
  return (
    <main >
      <div className={styles.hero}>
        <h1 className="append-dot">{heroUnit.elements.title.value}</h1>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: heroUnit.elements.marketingMessage.value }}>
        </div>
      </div>
    </main>
  )
}

  export default HeroLayout