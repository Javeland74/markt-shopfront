import React from 'react'
import { StarIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Flex, ListItem, Box, } from '@chakra-ui/react'

const BizProfilePost = (props) => {
    console.log(props)
    return (
        <Flex justifyContent={'space-between'}>
            <StarIcon marginRight={'1rem'} />
            {props.post.body}
            <Box>
                <EditIcon />
                <DeleteIcon marginLeft={'0.5rem'} />
            </Box>
        </Flex>
    )
}
export default BizProfilePost