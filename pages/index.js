import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

//  Components
import Navbar from '../components/Navbar/index';
import Hero from '../components/Hero/index';
import SmartLighting from '../components/SmartLighting/index';
import {Container, Box} from '@chakra-ui/react';

import AOS from 'aos';

export default function Home() {

useEffect(() => {
  AOS.init({})
}, []);

  return (
    <Box sx={styles.container} width='100%' height='100%' >
      <Head>
        <title>Nexio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Catamaran:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
{/* AOS */}
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </Head>
      <Navbar />
      <Hero/>
      <SmartLighting/>
    </Box>
  )
}


const styles = {
  container: {
    overflowX: 'hidden',
    backgroundImage: 'url(./bg.png)',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }
}