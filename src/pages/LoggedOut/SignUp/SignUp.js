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
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {

    const history = useHistory();

    const handleUserSubmit = (e) => {
        e.preventDefault();

        const { user_email, first_name, username, password, address } = e.target
        console.log(typeof user_email.value)
        try {
            axios.post('http://localhost:8080/api/adduser', {
                email: user_email.value,
                name: first_name.value,
                username: username.value,
                password: password.value,
                address: address.value,
            })
                .catch((err) => {
                    console.log(err)
                });
        } catch (error) {
            console.log(error)
        }
        history.push('/signin')
    }

    const handleBizSubmit = (e) => {
        e.preventDefault();

        const { email, name, business_name, password, business_type, address } = e.target

        try {
            axios.post('http://localhost:8080/api/addbusiness', {
                email: email.value,
                owner: name.value,
                name: business_name.value,
                password: password.value,
                business_type: business_type.value,
                address: address.value,
            })
                .catch((err) => {
                    console.log(err)
                });
        } catch (error) {
            console.log(error)
        }


        props.setBizLogin(true);
        sessionStorage.setItem("business", "loggedIn")
        history.push('/Bizsignin')
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
                            <FormControl id="user_email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name="user_email" type="email" />
                            </FormControl>
                            <FormControl id="first_name" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input name="first_name" type="first_name" />
                            </FormControl>
                            <FormControl id="username" isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input name="username" type="username" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password" />
                            </FormControl>
                            <FormControl id="location" isRequired>
                                <FormLabel>Location</FormLabel>
                                <Input name='address' type="location" />
                            </FormControl>
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
                            <FormControl id="biz_email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name="email" type="email" />
                            </FormControl>
                            <FormControl id="name" isRequired>
                                <FormLabel>Your name</FormLabel>
                                <Input name="name" type="name" />
                            </FormControl>
                            <FormControl id="business_name" isRequired>
                                <FormLabel>Business name</FormLabel>
                                <Input name="business_name" type="business_name" />
                            </FormControl>
                            <FormControl id="biz_password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password" />
                            </FormControl>
                            <FormControl id="business_type" name='business_type' isRequired>
                                <FormLabel>Business type</FormLabel>
                                <Select placeholder='Select Business Type'>
                                    <option>Beauty</option>
                                    <option>Food</option>
                                    <option>Coffee</option>
                                    <option>BusinessServices</option>
                                    <option>Hobbies</option>
                                    <option>Other</option>
                                </Select>
                            </FormControl>
                            <FormControl id="address" isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input name="address" type="address" />
                            </FormControl>
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