import React from 'react';
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
import { useHistory } from 'react-router-dom';


const BizSignIn = (props) => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setBizLogin(true);
        history.push('/BizProfile')
    };

    return (
        <Flex
            minH={'100vh'}
            w={'100vw'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'red.500'}>Business Sign In</Heading>
                </Stack>
                <Box as={'form'} onSubmit={handleSubmit}
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        <FormControl id="email" isRequired>
                            {/* // isInvalid={isError}> */}
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type={"email"}
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