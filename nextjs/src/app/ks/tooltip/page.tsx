import { ReadMoreTooltip } from '@/features/modules/components/ToolTip/ReadMoreTooltip'

const Page = async () => {
  return (
    <div className="flex flex-row gap-4 p-[200px]">
      <ReadMoreTooltip
        title="Asterisk"
        color="black"
        description="This object has been contextualised, reviewed and revisted by the Asterisk working group, part of the Collecting Otherwise research project. Collecting Otherwise is a process, a continuous work in progress. The descriptions we currently use will be reviewed within that process, provided with annotations and contexts - partly due to the work the intersectional working group will carry out. One of the aims of this working group is to approach sensitive subjects critically and especially with care, through its diversity of perspectives. We all carry intersections within us, points of friction, threads of coming together."
        readMoreHref={{
          pathname: '/',
        }}
        readMoreText="Read more"
      >
        <p>hover here for black</p>
      </ReadMoreTooltip>
      <ReadMoreTooltip
        title="Asterisk"
        color="blue"
        description="This object has been contextualised, reviewed and revisted by the Asterisk working group, part of the Collecting Otherwise research project. Collecting Otherwise is a process, a continuous work in progress. The descriptions we currently use will be reviewed within that process, provided with annotations and contexts - partly due to the work the intersectional working group will carry out. One of the aims of this working group is to approach sensitive subjects critically and especially with care, through its diversity of perspectives. We all carry intersections within us, points of friction, threads of coming together."
        readMoreHref={{
          pathname: '/',
        }}
        readMoreText="Read more"
      >
        <p className="text-blue-100">hover here for blue</p>
      </ReadMoreTooltip>
    </div>
  )
}

export default Page
