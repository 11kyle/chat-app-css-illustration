import Image from "./components/Image"
import Message from "./components/Message"
import Oval from "./components/Oval"
import Phone from "./components/Phone"
import Reminder from "./components/Reminder"
import Textarea from "./components/Textarea"

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center md:flex-row md:justify-center lg:gap-x-32">
      <div className="relative">
        <Oval />
        <Phone>
          {/* Message area - scrollable y direction */}
          <div className="flex flex-col gap-y-2 mt-[11px]">
            <Message type="received">
              That sounds great. I’d be happy to discuss more.
            </Message>
            <Message type="received">
              Could you send over some pictures of your dog, please?
            </Message>
            <div className="self-end flex gap-x-2">
              <Image 
                src="images/dog-image-1.jpg"
                alt=""
              />
              <Image 
                src="images/dog-image-2.jpg"
                alt=""
              />
              <Image 
                src="images/dog-image-3.jpg"
                alt=""
              />
            </div>
            <Message type="sent">
              Here are a few pictures. She’s a happy girl!
            </Message>
            <Message type="sent">
              Can you make it?
            </Message>
            <Message type="received">
              She looks so happy! The time we discussed works. How long shall I take her out for?
            </Message>
            <Reminder 
              text="30 minute walk"
              price="29"
            />
            <Reminder 
              text="1 hour walk"
              price="49"
            />
          </div>
          <Textarea></Textarea>
        </Phone>
      </div>
      <div className="relative mb-16">
        <div className="max-w-[445px] flex flex-col gap-y-6 text-center md:text-left mx-8">
          <h1 className="text-[#3E2753] text-[40px] font-medium">Simple booking</h1>
          <p className="text-[#A39DA9] text-[16px] leading-[28px]">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
        </div>
      </div>
    </main>
  )
}

export default App
