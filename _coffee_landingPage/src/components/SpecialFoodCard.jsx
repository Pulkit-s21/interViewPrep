/* eslint-disable react/prop-types */
import { OrderBtn } from "./OrderBtn"
export const SpecialFoodCard = (props) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-LightBrown font-Poppins text-Albescent rounded-xl text-left">
      <img className="rounded-xl" src={props.img} alt="Special Menu item" />
      <p className="text-lg">{props.name}</p>
      <div className="flex justify-between items-center">
        <p className="">$ {props.price}</p>
        <OrderBtn>Order now</OrderBtn>
      </div>
    </div>
  )
}
