type PhoneProps = {
  children: React.ReactNode
}

export default function Phone({ children }: PhoneProps) {
  return (
    <div className="w-[247px] h-[505px] bg-white rounded-[30px] shadow-[0_30px_60px_-10px_rgba(62,39,83,0.25)] px-[9.5px] py-[11px] my-16">
      <div className="relative w-full h-full bg-[#F5F3F7] border border-[#3e2752] border-opacity-5 rounded-[20px] px-[7.5px]">
        <div className="relative w-[calc(100%+15px)] h-[66px] bg-gradient-to-tr from-[#8739FF] to-[#E844FF] rounded-t-[20px] rounded-b-[6px] shadow-[0_0_13px_0_rgba(62,39,83,0.25)] -mx-[7.5px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[129px] h-[29px] bg-white rounded-b-[14px]"></div>
          <div className="absolute top-[30px] left-[15.5px] right-[16.5px]">
            <div className="flex items-center gap-x-2">
              <div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="10" viewBox="0 0 4 10" fill="none" aria-hidden="true">
                    <path d="M2.10557 0.552792C2.35256 0.0588133 2.95324 -0.141411 3.44721 0.105578C3.90591 0.334925 4.11131 0.869235 3.94056 1.3399L3.89443 1.44722L2.118 5.00001L3.89443 8.55279C4.12377 9.01149 3.96751 9.56218 3.54851 9.83626L3.44721 9.89443C2.98852 10.1238 2.43783 9.96752 2.16374 9.54852L2.10557 9.44722L0.105573 5.44722C-0.0150818 5.20591 -0.0323182 4.92798 0.0538637 4.67621L0.105573 4.55279L2.10557 0.552792Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <div className="w-6 h-6 rounded-full border border-white box-border overflow-hidden">
                <img src="/images/avatar.jpg" alt="Avatar for Samuel Green" />
              </div>
              <div className="flex flex-col gap-y-[2px]">
                <h2 className="text-white text-[11px] font-medium">Samuel Green</h2>
                <span className="text-[#D99EFF] text-[8px]">Available to Walk</span>
              </div>
              <div className="ml-auto">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="8" viewBox="0 0 2 8" fill="none" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1ZM2 4C2 4.55228 1.55228 5 1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4ZM1 8C1.55228 8 2 7.55228 2 7C2 6.44772 1.55228 6 1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
