import React from 'react'
import { Box, Flex, Image, Heading, useDisclosure, Icon, ListItem, Button, Link, List, TagLeftIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AllBizMap from '../../../../components/maps/AllBizMap';
import UserProfileCard from './UserProfileCard';
import { useParams } from 'react-router-dom';
import UserFollowed from './UserFollowed';

const UserProfile = () => {

    const [businesses, setBusinesses] = useState(null);
    const [user, setUser] = useState(null)

    const { userid } = useParams();

    const getFollowedBusinesses = async () => {
        const businesses = await axios.get('http://localhost:8080/api/followedbusinesses')
            .catch((err) => {
                console.log(err);
            });
        setBusinesses(businesses.data)
    };

    const getUserInfo = async () => {
        const info = await axios.get('http://localhost:8080/api/users')
            .catch((err) => {
                console.log(err);
            });
        setUser(info.data)

    }



    useEffect(() => {
        getFollowedBusinesses()
        getUserInfo()
    }, [])

    const [stopFollow, setStopFollow] = useState({
        id: '',
        biz_name: ''
    });

    const { isOpen, onOpen, onClose } = useDisclosure()

    return user === null ? null : (
        <Flex paddingTop={'2rem'} justifyContent={'center'} w={'90vw'}>
            <Flex >
                {user.filter(thisUser => thisUser.id === parseInt(userid)).map(user => {
                    return (
                        <UserProfileCard username={user.username} location={user.address} />
                    )
                })}

            </Flex>
            <Flex paddingTop={'5rem'} paddingLeft={'5rem'} flexDirection={'column'} >
                <Flex paddingBottom={'1rem'}>
                    <Heading as={'h3'} size={'l'} textColor={'red.500'}>
                        Followed Local Businesses:
                    </Heading>
                </Flex>
                <Flex flexDirection={'column'}>
                    <List>
                        <ListItem>
                            {businesses.map(followedBusiness => {
                                return (
                                    <UserFollowed
                                        key={followedBusiness.lat}
                                        bizid={followedBusiness.id}
                                        name={followedBusiness.biz_name}
                                        type={followedBusiness.business_type}
                                    />
                                )
                            })}
                        </ListItem>
                    </List>
                    <Box>
                        <Button marginTop={'2rem'} onClick={onOpen}>Discover More</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalBody>
                                    <AllBizMap />
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );

}

export default UserProfile;