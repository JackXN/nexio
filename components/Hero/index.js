import React from 'react';



//  Components
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image'


const index = () => {
    return (
 <Box sx={styles.container} data-aos='fade-up' data-aos-duration='500' data-aos-delay='50'>
     <Box sx={styles.textContainer}>
<Text as='h1' style={{fontSize: ['90px' ]}} >
    Nexio
</Text>
<Text as='h3' style={{fontSize: ['25px'], position: 'relative', bottom: ['25px'], mb:['20px']}}  >
    Lighting & Climate Control
</Text>
</Box>
<Box sx={styles.headerText} >
    <Text as='h2'  color='white'>Putting The Control Of Your Home In Your Hands</Text>
    <Text as='h2'>Beautiful, Modern And Essential</Text>
</Box>
<Box sx={styles.imageContainer}>

</Box>
 </Box>
    )
}

export default index


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily:'Bebas Neue',
        backgroundImage: 'url(./bg.png)',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    },
    textContainer: {
        color: 'white',
        position: ['relative'],
        bottom: ['30px']

        
    },
    headerText:{
        mb:['150px'],
        color: 'white',
        fontSize: ['16px'],
    },
    imageContainer: {
        width:['100%'],
        height:['200px', '500px'],
        padding: ['10px'],
        content: '" "',
        backgroundImage: 'url(./displayOne.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
        

        
    }
}
