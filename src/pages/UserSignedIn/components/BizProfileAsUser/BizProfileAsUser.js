import React from 'react'
import { Box, Flex, Image, Heading, useDisclosure, Icon, ListItem, Button, List, TagLeftIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';
import OneBizMap from '../../../../components/maps/OneBizMap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilePic from '../../../../assets/stock-profile.jpeg';
import mapPreview from '../../../../assets/Map-Default-Link-Image.png';
import BizProfileCard from '../../../BusinessSignedIn/components/BizProfile/BizProfileCard';

const BizProfileAsUser = () => {

    const { id } = useParams();

    const [posts, setPosts] = useState(null);
    const [business, setBusiness] = useState(null)

    const getPosts = async () => {
        const posts = await axios.get('http://localhost:8080/api/businessPosts')
            .catch((err) => {
                console.log(err);
            });
        setPosts(posts)
        console.log(posts.data);
    };

    const getBusiness = async () => {
        const bizInfo = await axios.get('http://localhost:8080/api/businesses')
            .catch((err) => {
                console.log(err);
            });
        setBusiness(bizInfo.data)
        console.log(business)
    }

    useEffect(() => {
        getPosts()
        getBusiness()
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex paddingTop={'2rem'}>
                <BizProfileCard />
                <Flex paddingRight={'2rem'} h={'6rem'} direction={'column'} align={'flex-start'}>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Business Name:</Box> {posts?.data[1]?.businesses.biz_name}
                    </Heading>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Location:</Box> {posts?.data[1].businesses.address}
                    </Heading>
                </Flex>
                <Box>
                    <Button size={'small'} onClick={onOpen}>
                        <Image boxSize={'8rem'} src={mapPreview} alt={'map preview link img Markt'} />
                    </Button>
                    <p><Box as={'span'} textColor={'red.500'}>Locate</Box> {posts?.data[1]?.businesses.biz_name}</p>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                                <OneBizMap />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>
            </Flex >
            <Flex paddingTop={'2rem'} flexDirection={'column'} >
                <Flex justifyContent={'space-between'} paddingBottom={'1rem'}>
                    <Heading as={'h3'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}>Current Posts from</Box> {posts?.data[1]?.businesses.biz_name}
                    </Heading>
                </Flex>
                { }
                <List spacing={3}>
                    <ListItem><StarIcon marginRight={'1rem'} />
                        {posts?.data[0].body}
                    </ListItem>
                    <ListItem><StarIcon marginRight={'1rem'} />
                        {posts?.data[1].body}
                    </ListItem>
                    <ListItem><StarIcon marginRight={'1rem'} />
                        {posts?.data[2].body}
                    </ListItem>
                </List>
            </Flex>
        </>
    )
}

export default BizProfileAsUser