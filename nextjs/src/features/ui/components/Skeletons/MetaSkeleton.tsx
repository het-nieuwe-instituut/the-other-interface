import { SkeletonGroup, SkeletonMetaLabel, SkeletonMetaValue } from './Skeletons'

export const MetaSkeleton = () => {
  return (
    <SkeletonGroup className="flex-row flex-wrap gap-0 gap-y-4 ">
      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel className="w-1/3" />
        <SkeletonMetaValue />
      </div>
      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel />
        <SkeletonMetaValue />
        <SkeletonMetaValue className="w-1/3" />
      </div>

      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel />
        <SkeletonMetaValue className="w-1/3" />
      </div>

      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel className="w-2/3" />
        <SkeletonMetaValue className="w-1/3" />
      </div>

      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel />
        <SkeletonMetaValue className="w-2/3" />
      </div>

      <div className="flex w-1/2 flex-col gap-1 pr-4 md:w-1/3 lg:w-full">
        <SkeletonMetaLabel className="w-2/3" />
        <SkeletonMetaValue />
        <SkeletonMetaValue />
        <SkeletonMetaValue className="w-1/3" />
      </div>
    </SkeletonGroup>
  )
}
