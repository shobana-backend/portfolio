interface TagProps {
  children: string
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-background-secondary px-2.5 py-1 font-mono text-xs text-ink-soft">
      {children}
    </span>
  )
}