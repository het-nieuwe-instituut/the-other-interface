import { SkeletonGroup, SkeletonParagraph, SkeletonSubtitle, SkeletonTitle } from './Skeletons'

export const EditorialSkeleton = () => {
  return (
    <SkeletonGroup>
      <div>
        <SkeletonTitle />
        <SkeletonParagraph lines={5} />
      </div>
      <div>
        <SkeletonSubtitle />
        <SkeletonParagraph lines={3} />
      </div>
    </SkeletonGroup>
  )
}
