import {
  AsteriskSourceBlock,
  AsteriskSourceBlockGroup,
} from '@/features/ui/components/Sources/AsteriskSource'
import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
} from '@/features/ui/components/Sources/ExternalSource'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="flex w-60 flex-col gap-4 bg-red-50 py-20">
      <p>ExtenralSource </p>

      <ExternalSourceBlockGroup>
        <ExternalSourceBlock>Some test </ExternalSourceBlock>
        <ExternalSourceBlock>This 1</ExternalSourceBlock>
        <ExternalSourceBlock>This 2 </ExternalSourceBlock>
        <ExternalSourceBlock>
          IS this still looking good? because i would be sad if it doesnt
        </ExternalSourceBlock>
        <ExternalSourceBlock>Another one</ExternalSourceBlock>
      </ExternalSourceBlockGroup>

      <AsteriskSourceBlockGroup>
        <AsteriskSourceBlock>Some test </AsteriskSourceBlock>
        <AsteriskSourceBlock>This 1</AsteriskSourceBlock>
        <AsteriskSourceBlock>This 2 </AsteriskSourceBlock>
        <AsteriskSourceBlock>
          IS this still looking good? because i would be sad if it doesnt
        </AsteriskSourceBlock>
        <AsteriskSourceBlock>Another one</AsteriskSourceBlock>
      </AsteriskSourceBlockGroup>
    </div>
  )
}

export default Page
