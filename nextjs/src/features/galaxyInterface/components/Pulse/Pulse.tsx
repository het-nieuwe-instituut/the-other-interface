import { cn } from '@/features/ui/utils/cn'
import styles from './Pulse.module.css'

export const Pulse = ({ className }: { className: string }) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.pulse, className)}></div>
    </div>
  )
}
