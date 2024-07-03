import { cn } from '@/features/ui/utils/cn'
import styles from './Pulse.module.css'

export const Pulse = ({ className, hide }: { className: string; hide?: boolean }) => {
  return (
    <div className={cn(styles.container, 'transition-opacity opacity-100', hide && 'opacity-0')}>
      <div className={cn(styles.pulse, className)}></div>
    </div>
  )
}
