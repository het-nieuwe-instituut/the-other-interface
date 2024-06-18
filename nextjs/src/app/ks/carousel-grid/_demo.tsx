'use client'
import {
  CarouselGrid,
  CarouselGridCard,
  CarouselGridCardWrapper,
  CarouselGridDescription,
  CarouselGridFooter,
  CarouselGridLink,
  CarouselGridPagination,
  CarouselGridTitle,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { useState } from 'react'
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
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
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
]

export default function Demo() {
  return (
    <div>
      <h1>Carousel Grid</h1>
      <Carousel cols={2} />
      <Carousel cols={3} />
      <Carousel cols={4} />

      <h1>Carousel Grid mobile</h1>
      <Carousel cols={1} />

      <h1>Responsive carousel in action</h1>
      <Carousel cols={4} className="hidden lg:block" />
      <Carousel cols={1} className="lg:hidden" />
    </div>
  )
}
export function Carousel({ cols, className }: { cols: 1 | 2 | 3 | 4; className?: string }) {
  const lastPage = Math.ceil(stubData.length / cols) || 1
  const limitedData = stubData.slice(0, cols)
  const [page, setPage] = useState(1)
  const [nodes, setNodes] = useState(limitedData)

  return (
    <div className={className}>
      <CarouselGrid>
        <CarouselGridTitle>Pellente sem lacinia</CarouselGridTitle>
        <CarouselGridDescription>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper.
        </CarouselGridDescription>
        <CarouselGridCardWrapper cols={cols}>
          {nodes.map(item => (
            <CarouselGridCard
              key={item.id}
              title={item.title}
              description={item.caption}
              image={item.src}
              href={item.href}
              alt={''}
            ></CarouselGridCard>
          ))}
        </CarouselGridCardWrapper>
        <CarouselGridFooter>
          <CarouselGridLink href="">Explore this</CarouselGridLink>
          <CarouselGridPagination
            onNext={() => {
              const newPage = page + 1
              if (newPage > lastPage) {
                return
              }
              const newNodes = stubData.slice((newPage - 1) * cols, newPage * cols)
              setPage(newPage)
              setNodes(newNodes)
            }}
            onPrevious={() => {
              const newPage = page - 1
              if (newPage < 1) {
                return
              }
              const newNodes = stubData.slice((newPage - 1) * cols, newPage * cols)
              setPage(newPage)
              setNodes(newNodes)
            }}
            hidePrevious={page === 1}
            hideNext={page === lastPage || lastPage === 1}
          />
        </CarouselGridFooter>
      </CarouselGrid>
    </div>
  )
}
