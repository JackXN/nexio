import React from 'react';



// Components
import {Box,Text} from '@chakra-ui/react';
import Image from 'next/image'; 
import Features from './Features';
import Products from './Products';

const index = () => {
    return (
       <Box sx={styles.container}>
           <Box sx={styles.wrapper}>
               <Text as='h1' sx={styles.title}>Smart Lighting</Text>
               <Box sx={styles.imageContainer}>
                </Box>
                <Text as='p' sx={styles.productMotto}>
                    Touchable Switch  <br/> That Matches Your Wall Decor
                </Text>
                <Text as='p' sx={styles.descriptionOne}>
                The Nature switch adopts Touch Pro technology and brings ultimate touch experience for lighting. It is also designed with DIY Colorful LED indicator, you can turn on the light easily in the dark. The cover adopts tempered glass with oleophobic coating, which is wear resistant and easy for cleaning & maintenance.
                </Text>
                
           </Box>
           <Features/>
           <Products/>
           </Box>
    )
}

export default index



const styles = {
    container: {
        backgroundImage: '/blackbg.png',
        backgroundPosition:'center',
        // backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height:'100%',
        width:'100%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: ['column'],
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        h1: {
            color: 'white',
            fontFamily:'Bebas Neue',
            fontSize: ['35px'],

        }

    },
    imageContainer: {
        height: ['300px'],
        width: ['300px'],
        backgroundImage: '/NatureSwitchOne.png',
        backgroundPosition: 'center',
    },
    productMotto: {
        color: 'rgba(255,255,255, 0.3)',
        fontFamily: 'Catamaran',
        fontWeight: '700',
        
    },
    descriptionOne: {
        fontFamily:'Catamaran',
        color: 'lightgray',
        fontWeight: '700',
        padding: ['25px']
    },
    title: {
        mt: ['50px'],
        mb: ['50px'],
    }
}