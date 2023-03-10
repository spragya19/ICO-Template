
import Apps from '../src/Components/Apps'
import Banner from '../src/Components/Banner'
import Contact from '../src/Components/Contact'
import Faq from '../src/Components/SwitchTabs/index.js'
import Footer from '../src/Components/Footer'
import Header from '../src/Components/Header'
import ICO from '../src/Components/ICO'
import ProblemSol from '../src/Components/ProblemsSol'
import styles from '../styles/Home.module.css'
import SwitchTabs from '../src/Components/SwitchTabs/index.js'
import RoadMap from '../src/Components/RoadMap'
import Team from '../src/Components/Team'

export default function Home() {
  return (
    <>
    
  <Banner />
  <ICO />
  <ProblemSol />
  <RoadMap />
  <Apps />
  <Team />
 <SwitchTabs />
  <Contact />
  <Footer />
  </>
    )
}
