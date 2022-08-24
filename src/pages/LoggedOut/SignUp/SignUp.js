import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Select,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {

    const history = useHistory();

    const handleBizSubmit = (e) => {
        e.preventDefault();
        props.setBizLogin(true);
        history.push('/BizProfile')
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        props.setUserLogin(true);
        history.push('/Profile')
    };

    return (
        <Flex
            minH={'100vh'}
            w={'100vw'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'100vw'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'red.500'}>Sign Up</Heading>
                </Stack>
                <Stack>
                    <Text as={'span'}>I am a...</Text>
                </Stack>
                <Flex>
                    <Box as={'form'} onSubmit={handleUserSubmit}
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                        mr={8}
                    >
                        <Stack spacing={4}>
                            <Text color={'red.500'} pb={'5px'}>...Consumer</Text>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="username" isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input type="username" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl id="location" isRequired>
                                <FormLabel>Location</FormLabel>
                                <Input type="location" />
                            </FormControl>
                            <Button>Upload Profile Image</Button>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                </Stack>
                                <Button type={'submit'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign Up
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box as={'form'} onSubmit={handleBizSubmit}
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Text color={'red.500'} pb={'5px'}>...Business</Text>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="name" isRequired>
                                <FormLabel>Your name</FormLabel>
                                <Input type="name" />
                            </FormControl>
                            <FormControl id="business-name" isRequired>
                                <FormLabel>Business name</FormLabel>
                                <Input type="business-name" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl id="business-type" isRequired>
                                <FormLabel>Business type</FormLabel>
                                <Select placeholder='Select Type'>
                                    <option>Beauty</option>
                                    <option>Food</option>
                                    <option>Coffee</option>
                                    <option>BusinessServices</option>
                                    <option>Hobbies</option>
                                    <option>Other</option>
                                </Select>
                            </FormControl>
                            <FormControl id="location" isRequired>
                                <FormLabel>Location</FormLabel>
                                <Input type="location" />
                            </FormControl>
                            <Button>Upload Profile Image</Button>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                </Stack>
                                <Button type={'submit'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign Up
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Flex>
            </Stack >
        </Flex >
    );
}

export default SignUp