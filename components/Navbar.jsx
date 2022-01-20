import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, HStack, MenuDivider, useDisclosure, useColorModeValue, Stack, Avatar, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch }  from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  {
    name: 'Home',
    url: '',
    icon: 'FcHome'
  },
  {
    name: 'Search',
    url: 'search',
    icon: 'BsSearch'
  },
  {
    name: 'Buy Property',
    url: 'search?purpose=for-sale',
    icon: 'FcAbout'
  },
  {
    name: 'Rent Property',
    url: 'search?purpose=for-rent',
    icon: 'FiKey'
  },
];



const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize="3xl" fontWeight="bold">
                <Link href="/" paddingLeft="2">R-Estate</Link>
            </Box>
          </HStack>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'underline',
                  background: 'black'
                }}
                key={link.name} 
                href={link.url}>{link.name}</Link>
              ))}
            </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link.name} href={link.url}>{link.name}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar;


{/* <Flex p="2" borderBottom="1px" borderColor="gray.100">
<Box fontSize="3xl" color="blue.400" fontWeight="bold">
    <Link href="/" paddingLeft="2">R-Estate</Link>
</Box>
<Spacer />
<Box>
    <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
        <MenuList>
            <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
        </MenuList>
    </Menu>
</Box>
</Flex> */}