import React from 'react'
import { Flex, Box, Button, Image, Spacer, Input, Heading } from '@chakra-ui/react'

const NewBizPost = () => {
    return (
        <>
            <Flex p={'2rem'}>
                <Heading as={'h2'} size={'xl'}>
                    Product or Service Upload
                </Heading>
            </Flex>
            <Flex flexDirection={'column'} align={'center'} >
                <Flex>
                    <Flex>
                        <Button h={'4rem'} w={'8rem'}>
                            Select Image
                        </Button>
                    </Flex>
                </Flex>
                <Box p={'2rem'}>
                    <Input type={'text'} maxChar={'50'} h={'6rem'} w={'20rem'} placeholder={'Enter Post Text:'}></Input>
                </Box>
                <Box>
                    <Button h={'2.5rem'} w={'6rem'} bg='red.500' color={'#fff'} >Publish</Button>
                </Box>
            </Flex>
        </>
    )
}

export default NewBizPost