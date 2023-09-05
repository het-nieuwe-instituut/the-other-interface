import { Grid, GridItem } from '@chakra-ui/react'

interface Props {
  renderFooterCenter?: JSX.Element
}

export const GalaxyFooter: React.FC<Props> = ({ renderFooterCenter }) => {
  return (
    <Grid height="60px" templateColumns="165px 1fr 230px" gap="5px">
      <GridItem></GridItem>
      <GridItem>{renderFooterCenter}</GridItem>
      <GridItem></GridItem>
    </Grid>
  )
}
