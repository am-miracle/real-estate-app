import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';

import {filterData, getFilterValues, values} from '../utils/filterData'

const SearchFilters = () => {
    const [ filters, SetFilters ] = useState(filterData);

    const searchProperties = (filterValues) => {
        const path = router.pathname;
    }

    return(
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) =>(
                <Box key={filter.queryName}>
                    <select
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={(e)=> searchProperties({ [filter.queryName]: e.target.values} )}
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters;