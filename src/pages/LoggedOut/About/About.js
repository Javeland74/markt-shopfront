import React from 'react';
import {
    Container,
    Heading,
    Stack,
    Text,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const About = () => {
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
                    lineHeight={'110%'}
                    noOfLines={2}>
                    What is Markt?{' '}
                    <Text as={'span'} color={'red.500'}>
                        (pronounced "Market")
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Markt was born from an understanding of the struggles of
                    small businessses to cut through and connect with their local
                    markets along with the growing desires of consumers to shop
                    and support local. Markt is a place where both parties can come
                    together, where small businesses can showcase their goods
                    and services and add some colour and personality to their brand.
                    And where consumers can find businesses nearby that may
                    otherwise have missed due to lack of online details, map
                    presence, or simply not knowing what the company does.
                    On top of local connections, Markt focusses on small businesses
                    that can be reached by a consumer by foot or by bike.
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
                </Stack>
            </Stack>
        </Container>
    );

}
export default About;