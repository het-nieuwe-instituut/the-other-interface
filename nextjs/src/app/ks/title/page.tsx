import { Title } from '@/features/ui/components/title/Title'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Times large:</p>

      <Title>Explore the Collection</Title>
      <Title asterisk>Explore the Collection</Title>
    </div>
  )
}

export default Page
