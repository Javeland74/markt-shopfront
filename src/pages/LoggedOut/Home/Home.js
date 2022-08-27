import React from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/Markt-homepage-hero.png'


const Home = () => {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Supporting Local{' '}
                    <Text as={'span'} color={'red.500'}>
                        made easy
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Take supporting local to the next level. Markt will
                    connect you with every type of small business within
                    walking or cycling distance of your location. Never
                    miss out on a neighbourhood gem and discover all the
                    wonder that takes place nearby! Find, follow, and support
                    local with Markt.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Link to="/SignUp">
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.500'}
                            _hover={{ bg: 'gray.500' }}>
                            Get started
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button rounded={'full'} px={6}>
                            Learn more
                        </Button>
                    </Link>
                </Stack>
                <Flex w={'full'}>
                    <Image src={HeroImg} alt='markt-neighbourhood-hero' />
                </Flex>
            </Stack>
        </Container>
    );

}
export default Home;
