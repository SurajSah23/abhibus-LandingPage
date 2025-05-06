import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do you do online bus reservation on AbhiBus?",
    answer:
      "Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from (Origin City) -- Going to (destination city) details along with the date you wish to travel in the bus search option on the site. Within seconds you will be given a list of available running buses for your route. Select the bus that best suits you, then just follow the bus ticket booking process by selecting your seat, providing passenger details and completing the payment process. Upon successful booking confirmation, you will receive an e-ticket over SMS/whatsapp and email.",
  },
  {
    question: "Do I need to create an account to book bus tickets on AbhiBus?",
    answer:
      "Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability, ticket details and other features which will help you book faster during future transactions.",
  },
  {
    question: "How to sign-up AbhiBus?",
    answer:
      "Ans: You can sign-up using your mobile number. AbhiBus offers a one-step sign-up & login process with just an OTP received on your mobile.",
  },
  {
    question: "Can I book Government SRTC bus tickets on AbhiBus?",
    answer: `Ans: Yes, you can book SRTC (State Road Transport Corporation) bus tickets using our website or mobile app. Some of the major SRTC includes.

• APSRTC - Andhra Pradesh State Road Transport Corporation
• TGSRTC - Telangana State Road Transport Corporation
• GSRTC - Gujarat State Road Transport Corporation
• HRTC - Himachal Road Transport Corporation
• MSRTC - Maharashtra State Road Transport Corporation
• RSRTC - Rajasthan State Road Transport Corporation
• MSRTC - Maharashtra State Road Transport Corporation
• PRTC - Puducherry Road Transport Corporation
• BSRTC - Bihar State Road Transport Corporation
• UPSRTC - Uttar Pradesh State Road Transport Corporation
• OSRTC - Odisha State Road Transport Corporation
• Kerala RTC - Kerala State Road Transportation Corporation`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Online Bus Booking FAQ’s</h2>
      <div className="rounded-2xl border shadow-sm">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 px-6 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="flex justify-between items-start">
              <p className="font-semibold">Q. {faq.question}</p>
              <span className="text-gray-500 mt-1">
                {openIndex === index ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </span>
            </div>
            {openIndex === index && faq.answer && (
              <p className="mt-2 text-gray-600 text-sm whitespace-pre-line">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="text-right mt-2">
        <button className="text-red-500 text-sm hover:underline">
          View all FAQs
        </button>
      </div>
    </div>
  );
}
