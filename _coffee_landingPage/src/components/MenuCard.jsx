/* eslint-disable react/prop-types */
import { OrderBtn } from "./OrderBtn"
export const MenuCard = (props) => {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-3 bg-LightBrown text-left font-Poppins text-Albescent max-w-96">
      <img className="rounded-xl" src={props.foodImg} alt="Food Image" />
      <p className="font-bold text-3xl">{props.foodName}</p>
      <p>{props.desc}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">$ {props.price}</p>
        <OrderBtn>Order now</OrderBtn>
      </div>
    </div>
  )
}
