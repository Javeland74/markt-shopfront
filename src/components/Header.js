import { Link } from "react-router-dom";
import {
    List,
    ListItem,
    Flex
} from '@chakra-ui/react'


const Header = (props) => {
    const { userLogin, bizLogin, setUserLogin, setBizLogin } = props

    let leftLink = { name: 'About', url: '/about' }
    let centreLink = { name: 'Sign Up', url: '/signup' }
    let rightLink = { name: 'Sign In', url: '/signin' }

    if (userLogin) {
        leftLink = { name: 'Logout', url: '/logout' }
        centreLink = { name: 'Profile', url: '/profile' }
        rightLink = { name: 'Feed', url: '/feed' }
    };
    if (bizLogin) {
        leftLink = { name: 'Logout', url: '/logout' }
        centreLink = { name: 'Profile', url: '/bizprofile' }
        rightLink = { name: 'Add New', url: '/addnew' }
    };

    const logout = () => {
        setBizLogin(false)
        setUserLogin(false)
    };

    return (
        <List spacing={'3'} w={'100%'}>
            <Flex justify={'space-evenly'}>
                <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}
                    _hover={{
                        bg: 'red.500',
                        textColor: '#fff',
                    }}
                    _selected={{
                        textColor: 'red.500'
                    }}>
                    <ListItem>
                        <Link to={leftLink.url}
                            onClick={logout}
                        >{leftLink.name}</Link>
                    </ListItem>
                </Flex>
                <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}
                    _hover={{
                        bg: 'red.500',
                        textColor: '#fff',
                    }}
                    _selected={{
                        textColor: 'red.500'
                    }}>
                    <ListItem>
                        <Link to={centreLink.url}>{centreLink.name}</Link>
                    </ListItem>
                </Flex>
                <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}
                    _hover={{
                        bg: 'red.500',
                        textColor: '#fff',
                    }}
                    _selected={{
                        textColor: 'red.500'
                    }}>
                    <ListItem>
                        <Link to={rightLink.url}>{rightLink.name}</Link>
                    </ListItem>
                </Flex>
            </Flex>
        </List>
    )
};



export default Header