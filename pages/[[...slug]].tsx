import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { HeroUnit } from '../models/content-types/hero_unit';
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    slug: string[]
}


const Home: NextPage<IndexProps> = ({ heroUnit }) => {
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

export default Home

interface IndexProps {
  heroUnit: HeroUnit;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[][] = [['hero1'], ['hero2'], []]
  const paths = arr.map((slug) => {
      return {
          params: { slug },
      }
  })
  const fallback = false;
  return { paths, fallback}
}

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const { slug } = context.params as IParams // no longer causes error
  const heroUnit = await getHeroUnit();
  return {
    props: { heroUnit },
  };
}