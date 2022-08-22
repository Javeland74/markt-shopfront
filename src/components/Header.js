// import { Link } from "react-router-dom";
// import {
//     List,
//     ListItem,
//     Flex
// } from '@chakra-ui/react'
// import { render } from "@testing-library/react";

// const Header = () => {

//     renderLoggedOut = () => {
//         return (
//             <List spacing={'3'} w={'100%'}>
//                 <Flex justify={'space-evenly'}>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/about">About</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/SignUp">Sign Up</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/SignIn">Sign In</Link>
//                         </ListItem>
//                     </Flex>
//                 </Flex>
//             </List>
//         )
//     };

//     renderUserLoggedIn = () => {
//         return (
//             <List spacing={'3'} w={'100%'}>
//                 <Flex justify={'space-evenly'}>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/logout">Logout</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/userProfile">Profile</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/userFeed">Feed</Link>
//                         </ListItem>
//                     </Flex>
//                 </Flex>
//             </List>
//         )
//     };

//     renderBusinessLoggedIn = () => {
//         return (
//             <List spacing={'3'} w={'100%'}>
//                 <Flex justify={'space-evenly'}>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/logout">Logout</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/bizProfile">Profile</Link>
//                         </ListItem>
//                     </Flex>
//                     <Flex align={'centre'} border='2px' borderColor={'black'} borderStyle={"solid"} pl={'12vw'} pr={'12vw'}>
//                         <ListItem>
//                             <Link to="/addPost">Add New</Link>
//                         </ListItem>
//                     </Flex>
//                 </Flex>
//             </List>
//         )
//     };

//     if (userLogin) return renderUserLoggedIn();
//     if (bizLogin) return renderBusinessLoggedIn();
//     if (!userLogin && !bizLogin) return renderLoggedOut();


// }

// export default Header