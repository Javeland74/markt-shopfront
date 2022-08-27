import { Image, Flex, Box, Text } from '@chakra-ui/react';
import React from 'react'

const FeedItem = (props) => {
    return (
        <Flex p={'2rem'} paddingLeft={'5rem'}>
            <Image h={'5rem'} w={'5rem'} marginRight={'2rem'} src={props.feed.image} />
            <Box>
                <Text size={'xl'}>{props.feed.businesses.biz_name}: {props.feed.body}</Text>
            </Box>
        </Flex>
    )
}

export default FeedItem;