import { Button } from '@/features/ui/button/component'
import { times } from 'lodash'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="gap-4 flex flex-col">
      <p>Times large:</p>
      <div className="grid grid-cols-6 gap-4">
        <p className="col-span-1">Default</p>
        <p className="col-span-1">Hover</p>
        <p className="col-span-1">Active</p>
        <p className="col-span-1">Disabled</p>
        <p className="col-span-1">Loading</p>
        <p className="col-span-1">Error</p>

        {times(6).map(i => (
          <div>
            <Button
              key={i}
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
            >
              Button
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
