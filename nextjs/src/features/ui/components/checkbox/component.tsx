import { Paragraph } from '../Paragraph/Paragraph'
import { cn } from '../../utils/cn'

interface CheckboxProps {
  className?: string
  name?: string
  label: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, name, label, defaultChecked, onChange } = props

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <input
        className="size-4 rounded border-gray-300 text-blue-100 focus:ring-blue-100"
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={e => onChange?.(e.target.checked)}
      />
      <Paragraph>{label}</Paragraph>
    </div>
  )
}
