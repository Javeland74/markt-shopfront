import React, { useState } from 'react'
import { Flex, Box, Button, Image, Spacer, Input, Heading } from '@chakra-ui/react'
import axios from 'axios'


const NewBizPost = () => {

    const [posts, setPosts] = useState('');

    const getPosts = async () => {
        const posts = await axios.get('http://localhost:8080/api/businessPosts')
            .catch((err) => {
                console.log(err);
            });
        setPosts(posts)
        console.log(posts.data);
    };

    return (
        <>
            <Flex p={'2rem'}>
                <Heading as={'h2'} size={'xl'}>
                    Product or Service Upload
                </Heading>
            </Flex>
            <Flex as={'form'} flexDirection={'column'} align={'center'} >
                <Flex>
                    <Flex>
                        <Button h={'4rem'} w={'8rem'}>
                            Select Image
                        </Button>
                    </Flex>
                </Flex>
                <Box p={'2rem'}>
                    <Input type={'text'} maxchar={'50'} h={'6rem'} w={'20rem'} placeholder={'Enter Post Text:'}></Input>
                </Box>
                <Box>
                    <Button h={'2.5rem'} w={'6rem'} bg='red.500' color={'#fff'} >Publish</Button>
                </Box>
            </Flex>
        </>
    )
}

export default NewBizPost