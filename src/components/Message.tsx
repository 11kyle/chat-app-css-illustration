import clsx from "clsx"

type MessageProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode
  type: "sent" | "received"
  href?: string
}

export default function Message({ children, type, href, ...props }: MessageProps) {
  let className = clsx(
    type === "sent" ? "self-end bg-white rounded-bl-[10px] rounded-br-[4px] text-[#6E5D7E]" : "bg-[#EEE5F4] rounded-bl-[4px] rounded-br-[10px] text-[#9341C8]",
    props.className,
    "max-w-[128px] rounded-t-[10px] text-[8px] leading-[11px] px-[8px] py-[6px]",
  )

  let Component = href ? "img" : "p"
  
  return (
    <div className={className} {...props}>
      <p>
        {children}
      </p>
    </div>
  )
}
