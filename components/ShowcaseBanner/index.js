import React from 'react';


// Components
import { Box, Text } from '@chakra-ui/react';



const data = [
    {
        id: 1,
        bgImage: '/showCaseImageOne.jpeg',
        text: 'Smart Lighting'
    },
    {
        id: 2,
        bgImage: '/showCaseImageTwo.jpeg',
        text: 'Smart Blinds',
    },
    {
        id: 3,
        bgImage: '/showCaseImageThree.jpeg',
        text: 'Smart Security',
    }
]

const index = () => {
    return (
        <Box sx={styles.container}>
<Box sx={styles.wrapper}>
    {data.map((item,index) => (
        <Box sx={styles.showCaseContainer} key={index} backgroundImage={item.bgImage}> 
            </Box>
    ))}
</Box>
        </Box>
    )
}



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center'

    }, 
    showCaseContainer: {
        height: '500px',
        width: '500px',
        content: '""',

    }
}
export default index
