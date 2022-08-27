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
    FormErrorMessage,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const BizSignIn = (props) => {

    const [bizID, setBizID] = useState(null)
    const history = useHistory();

    const getbizID = async () => {
        const thisBizID = await axios.get('http://localhost:8080/api/businesses')
            .catch((err) => {
                console.log(err);
            });
        setBizID(thisBizID.data)
    }

    useEffect(() => {
        getbizID()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = e.target
        props.setBizLogin(true)
        props.setLoggedInBiz(bizID)
        const bizInfo = bizID?.filter(biz => biz.email === email.value);
        history.push(`bizprofile/${bizInfo[0].id}`)
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
                    <Heading fontSize={'4xl'} color={'red.500'}>Business Sign In</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input
                                name='email'
                                type='email'
                            />
                            {(
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl id="password" isRequired>
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
            </Stack >
        </Flex >
    );
}

export default BizSignIn;