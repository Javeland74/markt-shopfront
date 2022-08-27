import React from 'react'
import { useState } from 'react';
import { useDisclosure, Button, Link, Modal, ModalOverlay, ModalContent, ModalBody, Flex, Box, } from '@chakra-ui/react';
import { StarIcon, NotAllowedIcon } from '@chakra-ui/icons';



const UserFollowed = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [currentModal, setCurrentModal] = useState('')

    return (
        <Flex justifyContent={'space-between'} p={'1rem'}>
            <Box>
                <StarIcon marginRight={'1rem'} />
                <Link to={`localhost:3000/bizasuser/${props.bizid}`} >
                    {`${props.name}`}: {`${props.type}`}
                </Link>
            </Box>
            <Button onClick={onOpen} size={'xs'}>
                <NotAllowedIcon />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex flexDirection={'column'}>
                            <Box>
                                Unfollow
                            </Box>
                            <Box>
                                <Button color={'500.red'}
                                >
                                    Unfollow
                                </Button>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default UserFollowed