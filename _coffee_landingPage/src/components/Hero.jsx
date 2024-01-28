import { OrderBtn } from "./OrderBtn"
import coffee from "../assets/coffee.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center gap-4">
      {/* image div */}
      <div className="flex justify-center bg-gradient-to-r to-50% from-white from-50% to-Gold ">
        <img src={coffee} alt="Coffee Cup" />
      </div>

      {/* text div */}
      <div className="flex flex-col gap-3 md:gap-6 px-4 md:py-4 items-start md:justify-center font-Poppins">
        <h1 className="text-4xl sm:text-5xl md:max-w-[20ch] md:tracking-wider font-semibold leading-12">
          The <span className="text-Gold">coffee</span> you will fall in{" "}
          <span className="text-Gold">love</span> with
        </h1>

        <p className="text-sm sm:text-lg md:text-xl sm:max-w-[55ch] tracking-wide text-neutral-500 leading-6">
          Sip,savor and spread the love - where every cup is a caffeinated hug
          at our cozy coffee haven!
        </p>

        <OrderBtn>
          Order now{" "}
          <FontAwesomeIcon
            icon={faCartShopping}
            className="bg-Gold rounded-full p-2"
          />
        </OrderBtn>
      </div>
    </div>
  )
}
