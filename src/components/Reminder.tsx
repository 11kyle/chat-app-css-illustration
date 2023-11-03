type ReminderProps = {
  text: string
  price: string
}

export default function Reminder({ text, price }: ReminderProps) {
  return (
    <div className="w-[160px] h-[32px] bg-gradient-to-br from-[#E844FF] to-[#8739FF] rounded-t-[10px] rounded-bl-[4px] rounded-br-[10px] pl-2 pr-4 pt-[11px]">
      <div className="w-full flex items-center gap-x-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke="#E472FF"/>
          </svg>
        </div>
        <div>
          <span className="block text-white text-[8px] leading-[11px]">{text}</span>
        </div>
        <div className="ml-auto">
          <span className="block text-white text-[12px] font-bold leading-[11px]">${price}</span>
        </div>
      </div>
    </div>
  )
}
