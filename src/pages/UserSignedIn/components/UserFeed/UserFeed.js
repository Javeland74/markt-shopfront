import {
    List,
    ListItem,
    Heading
} from '@chakra-ui/react'
import axios from "axios";
import FeedItem from "./FeedItem";
import { useState } from "react";
import { useEffect } from "react";

const UserFollowed = () => {

    const [feed, setFeed] = useState(null)

    const fetchUserFeed = async () => {
        const userFeed = await axios.get('http://localhost:8080/api/followedBusinessPosts')
            .catch((err) => {
                console.log(err);
            });
        setFeed(userFeed.data)
    };

    useEffect(() => {
        fetchUserFeed()
    }, []);


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

export default UserFollowed;