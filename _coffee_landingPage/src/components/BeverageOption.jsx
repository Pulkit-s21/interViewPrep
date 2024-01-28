import hot from "../assets/hot-coffee.png"
import cold from "../assets/cold-coffee.png"
import dessert from "../assets/dessert.png"
import tea from "../assets/tea.png"
import { BevWrapper } from "./BevWrapper"

export const BeverageOption = () => {
  const bevList = [
    { img: hot, name: "Hot Coffee" },
    { img: cold, name: "Cold Coffee" },
    { img: tea, name: "Tea" },
    { img: dessert, name: "Dessert" },
  ]
  return (
    <div className="bg-Albescent p-4 grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-6 md:rounded-full place-items-center font-Poppins">
      {bevList.map((bev, idx) => {
        return <BevWrapper key={idx} img={bev.img} name={bev.name} />
      })}
    </div>
  )
}
