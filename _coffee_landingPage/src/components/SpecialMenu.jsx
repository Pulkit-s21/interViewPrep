import { SwiperSlide } from "swiper/react"
import { specialFood } from "../utilities/specialFood"
import { SpecialFoodCard } from "./SpecialFoodCard"

export const SpecialMenu = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Bev Category */}
      <h1 className="text-3xl font-semibold px-4">
        Special menu <u className="decoration-Gold">for you</u>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {specialFood.map((food, idx) => {
          return (
            <SwiperSlide className="p-4" key={idx}>
              <SpecialFoodCard
                img={food.img}
                name={food.name}
                price={food.price}
              />
            </SwiperSlide>
          )
        })}
      </div>
    </div>
  )
}
