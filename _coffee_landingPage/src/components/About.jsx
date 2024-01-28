import { OrderBtn } from "./OrderBtn"
import barista from "../assets/barista.jpg"

export const About = () => {
  return (
    <div className="bg-Albescent flex flex-col md:flex-row gap-4 items-center md:justify-center md:gap-12 font-Poppins p-4">
      <img
        className="border-4 border-white max-w-96"
        src={barista}
        alt="Barista"
      />
      <div className="flex flex-col gap-4 items-start justify-evenly">
        <p className="text-5xl font-semibold">
          About <u className=" decoration-Gold">us</u>{" "}
        </p>
        <p className="text-3xl font-semibold">Sip into Perfection</p>
        <p className="text-neutral-500 text-xl md:text-2xl md:max-w-[60ch]">
          Our coffee World, where passion meets precision in every brew,
          bringing you a symphony of flavors and a journey throguh the richm
          aromatic realms of coffee craftsmanship.
        </p>
        <OrderBtn>Start your order</OrderBtn>
      </div>
    </div>
  )
}
