import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import profilePic from '../../../../assets/stock-profile.jpeg';



function BizProfileCard(props) {
    return (
        <Center paddingRight={'2rem'}>
            <Box
                maxW={'15rem'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={profilePic}
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            {/* <Text fontWeight={600}>23k</Text> */}
                            <Text fontSize={'sm'} color={'red.500'} paddingBottom={'1rem'}>
                                Owner:
                            </Text>
                            <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                                {props.name}
                            </Heading>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}

export default BizProfileCard

