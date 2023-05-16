import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100dvh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading color="purple.500" textAlign={'center'}>
            SIGN UP
          </Heading>

          <Avatar boxSize={'32'} alignSelf={'center'} />

          <Input
            placeholder="Enter your Name"
            type="text"
            focusBorderColor="purple.500"
            required
          />

          <Input
            placeholder="Enter your Email"
            type="email"
            focusBorderColor="purple.500"
            required
          />

          <Input
            placeholder="Password"
            type="password"
            focusBorderColor="purple.500"
            required
          />

          <Button colorScheme="purple" type="submit">
            SignUp
          </Button>
          <Text textAlign={'right'}>
            Existing User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
