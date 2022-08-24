import { Box, Link, Heading, Image, Flex, Stack } from "@chakra-ui/react";
import OneBizMap from "../../../../components/maps/OneBizMap";

const UserProfile = () => {
    return (

        <Stack>
            <Box w='10vw' height='10vw'>
                <Image></Image>
            </Box>
            <Flex direction={'column'} align={'flex-start'}>
                <Heading as={'h2'} size={'xl'}>
                    Username: Example
                </Heading>
                <Heading as={'h2'} size={'xl'}>
                    Location: Example
                </Heading>
            </Flex>
            <Box>
                <OneBizMap />
            </Box>
        </Stack>

    )
}

export default UserProfile