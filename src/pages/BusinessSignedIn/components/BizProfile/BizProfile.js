import React from 'react'
import { Box, Flex, Image, Heading, Stack, Icon, UnorderedList, ListItem, Button, List, TagLeftIcon } from '@chakra-ui/react';
import axios from 'axios';
import OneBizMap from '../../../../components/maps/OneBizMap';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import profilePic from '../../../../assets/stock-profile.jpeg';
import mapPreview from '../../../../assets/Map-Default-Link-Image.png';

const BizProfile = () => {

    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        const posts = await axios.get('http://localhost:8080/api/businessPosts')
            .catch((err) => {
                console.log(err);
            });
        setPosts(posts)
        console.log(posts.data);
    };

    useEffect(() => {
        getPosts()
    }, [])
    // console.log(posts.data[2].body)

    return (
        <>
            <Flex paddingTop={'2rem'}>
                <Box paddingRight={'2rem'}>
                    <Image boxSize={'8rem'} src={profilePic} alt={'stock portrait image Markt'} />
                </Box>
                <Flex paddingRight={'2rem'} h={'6rem'} direction={'column'} align={'flex-start'}>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Business Name:</Box> {posts?.data[0]?.businesses.biz_name}
                    </Heading>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Location:</Box> {posts?.data[0].businesses.address}
                    </Heading>
                </Flex>
                <Box>
                    <Image boxSize={'6rem'} src={mapPreview} alt={'map preview link img Markt'} />
                    {/* <OneBizMap /> */}
                </Box>
            </Flex>
            <Flex paddingTop={'2rem'} flexDirection={'column'} >
                <Flex justifyContent={'space-between'} paddingBottom={'1rem'}>
                    <Heading as={'h3'} size={'l'}>
                        Featured Products/Services
                    </Heading>
                    <Box>
                        <Button>Edit/Remove Items</Button>
                        <Button marginLeft={'2rem'} >Add New</Button>
                    </Box>
                </Flex>
                <List spacing={3}>
                    <ListItem><Icon />
                        {posts?.data[0].body}
                    </ListItem>
                    <ListItem><Icon />
                        {posts?.data[1].body}
                    </ListItem>
                    <ListItem><Icon />
                        {posts?.data[2].body}
                    </ListItem>
                </List>
            </Flex>
        </>
    )
}

export default BizProfile