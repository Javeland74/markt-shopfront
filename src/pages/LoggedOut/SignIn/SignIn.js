import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    FormErrorMessage
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = (props) => {

    const [userID, setUserID] = useState(null)
    const history = useHistory();

    const getUserID = async () => {
        const userID = await axios.get('http://localhost:8080/api/users')
            .catch((err) => {
                console.log(err);
            })
        setUserID(userID.data);
    }

    useEffect(() => {
        getUserID()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = e.target
        props.setUserLogin(true);
        props.setLoggedInUser(userID);

        const userInfo = userID?.filter(user => user.email === email.value);
        history.push(`profile/${userInfo[0].id}`)
    }

    return (
        <Flex as={'form'} onSubmit={handleSubmit}
            minH={'100vh'}
            w={'100vw'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'red.500'}>Sign In</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input name='email' type="email" />
                        </FormControl>
                        {(
                            <FormErrorMessage>Email is required.</FormErrorMessage>

                        )}
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Link href='/' color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button type={'submit'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default SignIn