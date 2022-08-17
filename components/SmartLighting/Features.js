import React from 'react'

// Components
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';



const Features = () => {
    return (
      <Box sx={styles.container}>
          <Text as='h1'>Features</Text>

          <Box sx={styles.imageContainer}>
              <Image src='/NatureFeatureShowcase.png' alt='Nature Switch Features Showcase' height='450px' width='450px'/>
          </Box>

      </Box>
    )
}



const styles = {
    container: {

    },
    imageContainer: {
        mt: ['50px'],
       height: '100%',
       width: '100%',
        // backgroundImage: '/NatureFeatureShowcase.png',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
}

export default Features




