'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../fragments/RecordTitle'
import { RecordDescription } from '../fragments/RecordDescription'
import RecordCarousel from '../RecordCarousel/RecordCarousel'
// import RecordCarousel from '../RecordCarousel/RecordCarousel'

interface Props {
  // probably every component should be responsibe for fetching its own data, so this prop should be removed, and i should fetch it here, so far its just for testing
  data?: unknown[]
}

export const RecordHeader: React.FC<Props> = () => {
  return (
    <Box>
      <RecordTitle title={'Minimum Dwelling'} />
      <RecordDescription
        description={
          'Objects are morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum  Objects are morbi leo risus, porta ac consectetur ac, vestibulum '
        }
      />
      <RecordCarousel
        imageUrls={[
          'https://picsum.photos/500/500',
          'https://picsum.photos/1000/500',
          'https://picsum.photos/600/500',
          'https://picsum.photos/700/500',
          'https://picsum.photos/800/500',
          'https://picsum.photos/900/500',
        ]}
      />
      {/* <RecordImage url={'https://picsum.photos/1920/1226'} /> */}
    </Box>
  )
}
