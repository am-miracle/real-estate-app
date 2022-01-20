import Link from 'next/link';
// import Image from 'next/image';
import { Flex, Box, Text, Button, VStack, useBreakpointValue, Stack } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex 
  w={'full'} 
  h={'100vh'}
  backgroundImage={imageUrl}
  backgroundPosition={'center center'}
  backgroundSize={'cover'}
  >
    <VStack 
      w={'full'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgColor={'blackAlpha.800'}
      bgBlendMode={'lighten'}
      >
      <Stack maxW={'2xl'} align='center' textAlign='center' spacing={1}>
        <Text color='gray.500' fontSize='xl' fontWeight='700'>{purpose}</Text>
        <Text color='white' fontSize='4xl' fontWeight='900'>{title1}<br />{title2}</Text>
        <Text color='white' fontSize='2xl' paddingTop='3' paddingBottom='3'>{desc1}<br />{desc2}</Text>
        <Button fontSize='xl' bg="blue.300" color="white">
          <Link href={linkName}><a>{buttonText}</a></Link>
        </Button>
      </Stack>
    </VStack>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner 
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose-for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

      />
      <Flex flexWrap="wrap" mt='10' mb={'10'}>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner 
      purpose="Buy A HOME"
      title1="Find, Buy & Own your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose-for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" mt='10'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}