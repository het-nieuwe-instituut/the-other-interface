import { Flex, Spinner } from '../../configs/chakra'

export function Loader() {
  return (
    <Flex justify={'center'} align={'center'} height={'100%'}>
      <Spinner />
    </Flex>
  )
}
