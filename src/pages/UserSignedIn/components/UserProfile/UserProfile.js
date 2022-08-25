import React from 'react'
import { Box, Flex, Image, Heading, ListItem, Button, List, TagLeftIcon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';
import OneBizMap from '../../../../components/maps/OneBizMap';
import { useState, useEffect } from 'react';
import profilePic from '../../../../assets/stock-profile2.jpg';
import mapPreview from '../../../../assets/Map-Default-Link-Image.png';

const UserProfile = () => {

    const [businesses, setBusinesses] = useState(null);
    const [user, setUser] = useState(null)

    const getFollowedBusinesses = async () => {
        const businesses = await axios.get('http://localhost:8080/api/businesses')
            .catch((err) => {
                console.log(err);
            });
        setBusinesses(businesses)
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

    return user === null ? null : (
        <>
            <Flex paddingTop={'2rem'}>
                <Box paddingRight={'2rem'}>
                    <Image boxSize={'8rem'} src={profilePic} alt={'stock portrait image Markt'} />
                </Box>
                <Flex paddingRight={'2rem'} h={'6rem'} direction={'column'} align={'flex-start'}>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Username:</Box> {user[0]?.username}
                    </Heading>
                    <Heading as={'h2'} size={'l'}>
                        <Box as={'span'} textColor={'red.500'}> Location:</Box> {user[0]?.address}
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
                        Followed Local Businesses:
                    </Heading>
                </Flex>
                <List spacing={3}>
                    <ListItem><StarIcon />
                        {businesses?.data[0].biz_name}: {businesses?.data[0].business_type}
                    </ListItem>
                    <ListItem><StarIcon />
                        {businesses?.data[1].biz_name}: {businesses?.data[0].business_type}
                    </ListItem>
                    <ListItem><StarIcon />
                        {businesses?.data[2].biz_name}: {businesses?.data[0].business_type}
                    </ListItem>
                </List>
                <Box>
                    <Button marginTop={'2rem'}>Discover More</Button>
                </Box>
            </Flex>
        </>
    )
}

export default UserProfile;