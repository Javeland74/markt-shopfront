import React from 'react'
import { Box, Flex, Image, Heading, Button, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import mapPreview from '../../../../assets/Map-Default-Link-Image.png';
import BizProfileCard from './BizProfileCard';
import BizProfilePost from './BizProfilePost';
import { useParams } from 'react-router-dom';


const BizProfile = () => {

    const [posts, setPosts] = useState(null);
    const [business, setBusiness] = useState(null)

    const { bizID } = useParams();


    const getPosts = async () => {
        const posts = await axios.get(`http://localhost:8080/api/businessPosts/${bizID}`)
            .catch((err) => {
                console.log(err);
            });
        setPosts(posts.data)
        console.log(posts.data)
    };

    const getBusiness = async () => {
        const business = await axios.get('http://localhost:8080/api/businesses')
            .catch((err) => {
                console.log(err);
            });
        setBusiness(business.data)
    };

    useEffect(() => {
        getBusiness()
        getPosts()
    }, [])
    return business === null ? null : (
        <>

            <Flex paddingTop={'2rem'}>
                {business.filter(thisBiz => thisBiz.id === parseInt(bizID)).map(biz => {
                    return (
                        <>
                            <Box>
                                <BizProfileCard name={biz.owner} />
                            </Box><Flex paddingRight={'2rem'} h={'6rem'} direction={'column'} align={'flex-start'}>
                                <Heading as={'h2'} size={'l'}>
                                    <Box as={'span'} textColor={'red.500'}> Business Name:</Box> {biz.biz_name}
                                </Heading>
                                <Heading as={'h2'} size={'l'}>
                                    <Box as={'span'} textColor={'red.500'}> Location:</Box> {biz.address}
                                </Heading>
                            </Flex>
                        </>)
                })}


                <Box>
                    <Image boxSize={'6rem'} src={mapPreview} alt={'map preview link img Markt'} />
                </Box>
            </Flex>
            <Flex paddingTop={'2rem'} flexDirection={'column'} >
                <Flex justifyContent={'space-between'} paddingBottom={'1rem'}>
                    <Heading as={'h3'} size={'l'}>
                        Featured Products/Services
                    </Heading>
                    <Box>
                        <Button marginLeft={'2rem'} >Add New</Button>
                    </Box>
                </Flex>
                <List>
                    <ListItem>
                        {posts?.map((postItem) => {
                            return (
                                <BizProfilePost
                                    key={postItem.id}
                                    post={postItem} />
                            )
                        })}
                    </ListItem>
                </List>
            </Flex>
        </>
    )
}

export default BizProfile