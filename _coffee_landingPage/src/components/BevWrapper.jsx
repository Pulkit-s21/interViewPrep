/* eslint-disable react/prop-types */
export const BevWrapper = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img className="cursor-pointer" src={props.img} alt="Bev Name" />
      <p className="text-xl">{props.name}</p>
    </div>
  )
}
