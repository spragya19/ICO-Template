import Head from 'next/head'
import Image from 'next/image'
import Apps from '../src/Components/Apps'
import Banner from '../src/Components/Banner'
import Contact from '../src/Components/Contact'
import Faq from '../src/Components/Faq'
import Footer from '../src/Components/Footer'
import Header from '../src/Components/Header'
import ICO from '../src/Components/ICO'
import ProblemSol from '../src/Components/ProblemsSol'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
  <Banner />
  <ICO />
  <ProblemSol />
  <Apps />
  {/* <Faq /> */}
  {/* <Contact /> */}
  <Footer />
  </>
    )
}
