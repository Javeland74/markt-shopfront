import { Link } from "react-router-dom";
import {
    List,
    ListItem,
    Flex,
    Heading
} from '@chakra-ui/react'
import axios from "axios";
import FeedItem from "./FeedItem";
import { useState } from "react";
import { useEffect } from "react";

const UserFeed = () => {

    const [feed, setFeed] = useState(null)

    const fetchUserFeed = async () => {
        const userFeed = await axios.get('http://localhost:8080/api/businessPosts')
            .catch((err) => {
                console.log(err);
            });
        setFeed(userFeed.data)
    };

    useEffect(() => {
        fetchUserFeed()
    }, [])
    console.log(feed);

    return (
        <>
            <Heading as={'h3'} size={'xl'}>
                Feed
            </Heading>
            <List w={'100vw'}>
                <ListItem>
                    {feed?.map((listItem) => {
                        return (
                            <FeedItem
                                key={listItem.id}
                                feed={listItem}
                            />
                        )
                    })}
                </ListItem>
            </List>
        </>
    )
};

export default UserFeed;