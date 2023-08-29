import { Grid, GridItem } from '@chakra-ui/react'

interface Props {
  renderFooterCenter?: JSX.Element
}

export const GalaxyFooter: React.FC<Props> = ({ renderFooterCenter }) => {
  console.log('renderFooterCenter', renderFooterCenter)
  return (
    <Grid height="60px" templateColumns="165px 1fr 230px" gap="5px" border="1px solid red">
      <GridItem border="1px solid blue">Pagination</GridItem>
      <GridItem border="1px solid blue"> {renderFooterCenter}</GridItem>
      <GridItem border="1px solid blue">Navigation</GridItem>
    </Grid>
  )
}
