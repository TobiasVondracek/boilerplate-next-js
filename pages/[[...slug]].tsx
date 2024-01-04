import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";
import type { ReactElement } from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring'
import { IndexProps } from '../models/indexProps';
import HeroLayout  from '../layouts/HeroLayout'
import type { NextPageWithLayout } from './_app'

interface IParams extends ParsedUrlQuery {
    slug: string[]
}


const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  if(page.props.heroUnit){
    return (
      <div>
        <HeroLayout {...page.props.heroUnit} />
      </div>
    )
  }
  return <p>no component</p>
}
 
export default Page


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