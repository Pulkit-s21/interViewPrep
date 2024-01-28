import star from "../assets/star-icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const Newsletter = () => {
  return (
    <div className="p-6 bg-Albescent text-Brown flex gap-2 items-center font-Poppins">
      <img className="w-11" src={star} alt="Star" />
      <div className="flex flex-col items-start gap-2">
        <p className="text-2xl font-semibold">
          Sign up to our coffee reward program!
        </p>
        <button className="group">
          Learn More{" "}
          <span className="group-hover:pl-2 transition-all">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  )
}
