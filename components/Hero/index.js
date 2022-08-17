import React from 'react';



//  Components
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image'


const index = () => {
    return (
 <Box sx={styles.container}>
     <Box sx={styles.textContainer}>
<Text as='h1' style={{fontSize: ['90px', ]}}>
    Nexio
</Text>
<Text as='h3' style={{fontSize: ['25px'], position: 'relative', bottom: ['25px'], mb:['20px']}}  >
    Lighting & Climate Control
</Text>
</Box>
<Box sx={styles.headerText}>
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
        fontFamily:'Bebas Neue'
    },
    textContainer: {
        color: 'white',
        position: ['relative'],
        bottom: ['30px']

        
    },
    headerText:{
        mt: ['40px'],
        color: 'white',
        fontSize: ['23px'],
    },
    imageContainer: {
        width:['500px', '900px'],
        height:['500px'],
        content: '" "',
        backgroundImage: 'url(./displayOne.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        

        
    }
}
