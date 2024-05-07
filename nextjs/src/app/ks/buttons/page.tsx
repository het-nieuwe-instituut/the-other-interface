import { Button } from '@/features/ui/components/button/component'
import { IconButton } from '@/features/ui/components/icon-button/icon-button'
import { times } from 'lodash'
import type { NextPage } from 'next'
import ArrowLeft from './arrow-left.svg'
import ArrowRight from './arrow-right.svg'
import Search from './search.svg'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100">
      <p>Times large:</p>
      <div className="grid grid-cols-6 gap-4">
        <p className="col-span-1">Default</p>
        <p className="col-span-1">Hover</p>
        <p className="col-span-1">Active</p>
        <p className="col-span-1">Disabled</p>
        <p className="col-span-1">Loading</p>
        <p className="col-span-1">Error</p>

        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
            >
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'secondary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'tertiary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
            >
              Button
              <ArrowRight />
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'secondary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
              <ArrowRight />
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'tertiary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
              <ArrowRight />
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
            >
              <ArrowLeft />
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'secondary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              <ArrowLeft />
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'tertiary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              <ArrowLeft />
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'inverted'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'large'}
            >
              Button
            </Button>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <Button
              intent={'inverted'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
            </Button>
          </div>
        ))}

        <div className="col-span-6">
          <hr />
          <h1> Icon button</h1>
        </div>
        {times(6).map(i => (
          <div key={i}>
            <IconButton
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'large'}
              icon={<Search />}
            />
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <IconButton
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
              icon={<Search />}
            />
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <IconButton
              intent={'ghost'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
              icon={<Search />}
            />
          </div>
        ))}
        {/* {times(6).map(i => (
          <div key={i}>
            <IconButton
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
            </IconButton>
          </div>
        ))}
        {times(6).map(i => (
          <div key={i}>
            <IconButton
              intent={'primary'}
              disabled={i === 3}
              state={i === 4 ? 'loading' : i === 5 ? 'error' : undefined}
              size={'small'}
            >
              Button
            </IconButton>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Page
