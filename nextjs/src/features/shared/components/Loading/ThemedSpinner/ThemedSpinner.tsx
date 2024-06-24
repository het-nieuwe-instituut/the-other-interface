'use client'

import Loader from '@/features/ui/icons/loading.svg'
import { cn } from '@/features/ui/utils/cn'

export const ThemedSpinner: React.FC = () => (
  <Loader className="mb-[12vh] size-10 animate-spin text-blue-100" />
)

export const InlineThemedSpinner = ({ className }: { className?: string }) => (
  <Loader className={cn('size-8 animate-spin text-pink-100', className)} />
)
