// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { foodItems } from "../utilities/foodData"
import "swiper/css"
import "swiper/css/navigation"

import { MenuCard } from "./MenuCard"

export const MenuItems = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Bev Category */}
      <h1 className="text-3xl font-semibold px-4">
        Cold <u className="decoration-Gold">Coffee</u>
      </h1>

      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        {foodItems.map((food, idx) => {
          return (
            <SwiperSlide className="p-4" key={idx}>
              <MenuCard
                foodImg={food.food}
                foodName={food.foodName}
                desc={food.desc}
                price={food.price}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
