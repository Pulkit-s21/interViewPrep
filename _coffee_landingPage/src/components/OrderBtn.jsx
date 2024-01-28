/* eslint-disable react/prop-types */
export const OrderBtn = (props) => {
  return (
    <button className="rounded-full flex items-center gap-2 px-6 py-4 bg-Brown text-white font-semibold font-Poppins hover:bg-Albescent hover:text-Brown transition-all">
      {props.children}
    </button>
  )
}
