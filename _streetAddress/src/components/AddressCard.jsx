import { useContext } from "react"
import { Context } from "../App"

export const AddressCard = () => {
  // * The addressData needs to be exactly the same as the file for the context to make it work
  const { addressData } = useContext(Context)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {addressData?.map((item) => (
        <div className="bg-blue-400 p-4" key={item.id}>
          <p>City : {item.city}</p>
          <p>Street Name : {item.street_name}</p>
          <p>Zip Code : {item.zip_code}</p>
        </div>
      ))}
    </div>
  )
}
