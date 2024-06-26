'use client'

import { useClientPagination } from '@/features/editorial/components/useClientPagination'
import {
  CardGrid,
  CardGridCard,
  CardGridCardWrapper,
  CardGridDescription,
  CardGridFooter,
  CardGridLink,
  CardGridPlaceholder,
  CardGridTitle,
} from '@/features/ui/components/card-grid/CardGrid'

const stubData = [
  {
    id: 1,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/JEL_Lfa28_22_b9d654ab5c.webp',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get  long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get  long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    title: 'My title 1',
    width: 1080,
    height: 428,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 2,
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1858,
    title: 'My title 2',
    height: 2400,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 3,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/MAAX_3155_4a39942bdb.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 2400,
    title: 'My title 3',
    height: 757,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 4,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Ree_14_f649476088.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1600,
    title: 'My title 4',
    height: 2400,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 5,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/MAAX_3155_4a39942bdb.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 2400,
    title: 'My title 3',
    height: 757,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 6,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Ree_14_f649476088.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1600,
    title: 'My title 4',
    height: 2400,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 7,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Ree_14_f649476088.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1600,
    title: 'My title 4',
    height: 2400,
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
]

export default function Demo() {
  return (
    <div>
      <h1>Card Grid</h1>
      <Grid cols={3} />
      <Grid cols={1} />
    </div>
  )
}
export function Grid({ className }: { cols: 1 | 3; className?: string }) {
  const { nodes } = useClientPagination({
    items: stubData,
    itemsInPage: 6,
    preservePreviousLimitedData: true,
  })

  return (
    <div className={className}>
      <CardGrid>
        <CardGridTitle>Pellente sem lacinia</CardGridTitle>
        <CardGridDescription>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper.
        </CardGridDescription>
        <CardGridCardWrapper>
          <CardGridPlaceholder fallback={1} title="No more content" subTitle="No more content" />
          {nodes.map(item => (
            <CardGridCard
              key={item.id}
              title={item.title}
              description={item.caption}
              image={item.src}
              href={item.href}
              alt={''}
            ></CardGridCard>
          ))}
        </CardGridCardWrapper>
        <CardGridFooter>
          <CardGridLink href="/">Explore this</CardGridLink>
        </CardGridFooter>
      </CardGrid>
    </div>
  )
}
