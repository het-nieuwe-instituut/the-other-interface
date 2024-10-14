import {
  AsteriskAnnotationGroup,
  AsteriskAnnotationItem,
} from '@/features/ui/components/Sources/AsteriskAnnotations'
import {
  AsteriskSourceBlock,
  AsteriskSourceBlockGroup,
} from '@/features/ui/components/Sources/AsteriskSource'
import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
} from '@/features/ui/components/Sources/ExternalSource'
import { AsteriskTooltip } from '@/features/ui/components/tooltip/AsteriskTooltip'
import { ExternalSourceTooltip } from '@/features/ui/components/tooltip/ExternalSourceTooltip'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <div className="flex w-60 flex-col gap-4 bg-red-50 py-20">
        <p>ExtenralSource </p>

        <ExternalSourceBlockGroup>
          <ExternalSourceTooltip title="Some title" place={'right'}>
            <ExternalSourceBlock>Some test </ExternalSourceBlock>
          </ExternalSourceTooltip>
          <ExternalSourceBlock>This 1</ExternalSourceBlock>
          <ExternalSourceBlock>This 2 </ExternalSourceBlock>
          <ExternalSourceBlock>
            IS this still looking good? because i would be sad if it doesnt
          </ExternalSourceBlock>
          <ExternalSourceBlock>Another one</ExternalSourceBlock>
        </ExternalSourceBlockGroup>

        <AsteriskSourceBlockGroup>
          <AsteriskTooltip title="Some title" place={'right'}>
            <AsteriskSourceBlock>Some test </AsteriskSourceBlock>
          </AsteriskTooltip>
          <AsteriskSourceBlock>This 1</AsteriskSourceBlock>
          <AsteriskSourceBlock>This 2 </AsteriskSourceBlock>
          <AsteriskSourceBlock>
            IS this still looking good? because i would be sad if it doesnt
          </AsteriskSourceBlock>
          <AsteriskSourceBlock>Another one</AsteriskSourceBlock>
        </AsteriskSourceBlockGroup>
      </div>
      <div className="flex flex-col">
        <AsteriskAnnotationGroup count={0}>
          <AsteriskAnnotationItem title="Some title">{`Some test`}</AsteriskAnnotationItem>
          <AsteriskAnnotationItem title="Some title">{`Some test`}</AsteriskAnnotationItem>
        </AsteriskAnnotationGroup>
      </div>
    </>
  )
}

export default Page
