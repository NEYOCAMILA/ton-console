import { ComponentProps, FunctionComponent, useEffect } from 'react';
import { Box, Flex, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import { H4, Overlay, MenuButtonDefault, ArrowIcon } from 'src/shared';
import { AnalyticsHistoryTable, analyticsHistoryTableStore } from 'src/features';
import { Link } from 'react-router-dom';

const HistoryPage: FunctionComponent<ComponentProps<typeof Box>> = () => {
    useEffect(() => {
        analyticsHistoryTableStore.loadFirstPage();
    }, []);

    return (
        <Overlay display="flex" flexDirection="column">
            <Flex align="flex-start" justify="space-between" mb="5">
                <H4>History</H4>
                <Menu placement="bottom-end">
                    <MenuButtonDefault rightIcon={<ArrowIcon />} w="146px">
                        New Request
                    </MenuButtonDefault>
                    <MenuList w="146px">
                        <MenuItem as={Link} to="../query">
                            Query
                        </MenuItem>
                        <MenuItem as={Link} to="../graph">
                            Graph
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <AnalyticsHistoryTable flex="1" />
        </Overlay>
    );
};

export default HistoryPage;
