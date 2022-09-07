import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

export const PocMenu: React.FC = () => {
    return (
        <Flex>
            <Button as={'a'} href={'/poc/galaxy'}>
                galaxy
            </Button>
            <Button as={'a'} href={'/poc/starSystem'}>
                Star system
            </Button>
            <Button as={'a'} href={'/poc/dynamicObjects'}>
                objects
            </Button>
            <Button as={'a'} href={'/poc/galaxyUpdates'}>
                Galaxy updates
            </Button>
            <Button as={'a'} href={'/poc/boundaries'}>
                Boundaries
            </Button>
        </Flex>
    )
}
