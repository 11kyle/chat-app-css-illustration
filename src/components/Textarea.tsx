export default function Textarea() {
  return (
    <div className="absolute bottom-[10px] left-[7.5px] right-[7.5px]">
      <div className="relative flex flex-col justify-center bg-white rounded-full px-[17px]">
        <textarea 
          className="placeholder:text-[#C5C9CC] placeholder:text-[9px] placeholder:-leading-[0.07px] text-[9px] -leading-[0.07px] py-[10px] resize-none"
          placeholder="Type a message..."
          rows={1}
        ></textarea>
        <div className="absolute top-1/2 -translate-y-1/2 right-1 w-[25px] h-[25px] rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
            <ellipse cx="12.1359" cy="12.9544" rx="12.1359" ry="12.1103" fill="#3E2753"/>
            <path d="M10.0642 8.46502C10.5017 8.02847 11.1901 7.99489 11.6661 8.36428L11.7805 8.46502L15.4212 12.0981C15.8587 12.5347 15.8924 13.2216 15.5222 13.6967L15.4212 13.8108L11.7805 17.4439C11.3065 17.9168 10.5381 17.9168 10.0642 17.4439C9.62671 17.0073 9.59306 16.3204 9.96324 15.8453L10.0642 15.7312L12.8459 12.9544L10.0642 10.1777C9.62671 9.74112 9.59306 9.05419 9.96324 8.57911L10.0642 8.46502Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
