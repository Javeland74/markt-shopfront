import { Image, Header, Flex, Box, Stack, Text, Heading } from '@chakra-ui/react';
import React from 'react'

const FeedItem = (props) => {
    return (
        <Stack>
            <Image maxH={'30px'} maxW={'30px'} src={props.feed.image} />
            <Box>
                <Text size={'xl'}>{props.feed.businesses.biz_name}: {props.feed.body}</Text>
            </Box>
        </Stack>
    )
}

export default FeedItem;