import { Text, Box } from '@chakra-ui/react'

interface Props {
  title: string
}

export const RecordTitle: React.FC<Props> = props => {
  return (
    <Box width="100%" backgroundColor={'inherit'}>
      <Text textStyle="h1" as={'h1'}>
        {props.title}
      </Text>
    </Box>
  )
}
