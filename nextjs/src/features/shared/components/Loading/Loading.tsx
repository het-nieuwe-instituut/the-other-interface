import { Flex, Spinner } from '@chakra-ui/react'

export function Loader() {
  return (
    <Flex justify={'center'} align={'center'} height={'100%'}>
      <Spinner />
    </Flex>
  )
}
