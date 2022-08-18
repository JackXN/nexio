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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
{/* AOS */}
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>
      </Head>
      <Navbar/>
      <Hero/>
      <SmartLighting/>
    </Box>
  )
}


const styles = {
  container: {
    overflowX: 'hidden',
    backgroundColor: '#C9C9C9',
    height: '100%',
    backgroundPosition: 'center',
  
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }
}