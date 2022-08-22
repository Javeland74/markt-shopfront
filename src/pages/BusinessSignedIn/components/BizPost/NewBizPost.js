import './BizPost.scss'
import { Flex, Box, Button, Image, Spacer } from '@chakra-ui/react'

const NewBizPost = () => {
    return (
        <>
            <Flex>
                <h1>
                    Product or Service Upload
                </h1>
            </Flex>
            <Flex align={'centre'}>
                <Flex>
                    <Flex align={'center'}>
                        <Button>
                            <Image />
                        </Button>
                    </Flex>
                    <Flex>
                        <Button>
                            Select Image
                        </Button>
                    </Flex>
                </Flex>
                <Box>
                    <input>Enter Post Text:</input>
                </Box>
                <Box>
                    <button>Publish</button>
                </Box>
            </Flex>
        </>
    )
}

export default NewBizPost