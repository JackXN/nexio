import React from 'react';


// Components
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image'





const data = [
    {
        id: 1,
        title: 'Nature Pro',
        color: 'white',
        image: '/NatureWhite.png'
    },
    {
        id: 2,
        title: 'Nature Pro',
        color: 'black',
        image: '/NatureBlack.png'
    }
]


const Products = () => {
    return (
      <Box sx={styles.container}>
          <Box sx={styles.wrapper}>
              {data.map((item, index) => (
                  <Box sx={styles.productContainer} key={index} backgroundImage={item.image}>
                      <Box sx={styles.textContainer}>
                        <Text as='h1'>{item.title}</Text>
                        <Text as='h1'>[{item.color}]</Text>
                          </Box>
                      </Box>
              ))}
          </Box>
      </Box>
    )
}

const styles = {
    container: {
    },
    productContainer: {
        height: ['500px'],
        width: ['400px'],
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
    },
    textContainer: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection:'column',
        fontFamily: 'Catamaran',
        fontSize: ['35px'],
        fontWeight: 'bold',
        // border: 'solid red 2px',
        
    }
}

export default Products
