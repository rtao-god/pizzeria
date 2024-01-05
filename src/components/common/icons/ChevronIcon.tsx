interface ChevronProps {
  className?: string
  style?: React.CSSProperties
}

export default function ChevronIcon({ className, style }: ChevronProps) {
  return (
    <svg viewBox="0 0 9 6" className={className} style={{ ...style }}>
      <path d="M8.06287 0.385432L8.81048 1.04956L4.56003 5.83436L0.30957 1.04956L1.05719 0.385432L4.56003 4.32863L8.06287 0.385432Z"></path>
    </svg>
  )
}
