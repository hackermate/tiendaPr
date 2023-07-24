import { useMutation } from '@tanstack/react-query'
import { createOrder} from '../api/orders'

const OrderForm = () => {

  const addOrderMutation = useMutation({
    mutationFn: createOrder
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const order = Object.fromEntries(formData);
    addOrderMutation.mutate(order)
  }
  return (
    <form  onSubmit={handleSubmit} className="flex flex-col m-3" >
      <label htmlFor="createdate">Create Date: </label>
      <input className="border-2 text-black m-3"type="date" id="createdate" name="createdate"/>
      <label htmlFor="status">Status: </label>
      <select className="text-black m-3" name="status">
        <option value="aprove">Approve</option>
        <option value="cancel">Cancel</option>
        <option value="delivery">Delivery</option>
        <option value="traveling">Traveling</option>
      </select>
      <label htmlFor="client">Client:</label>
      <input className="border-2 text-black m-3" type="text"id="client" name="client" />
      <label htmlFor="shippindaddress">ShippingAdrress: </label>
      <input className="text-black m-3" type="text" id="shippingaddress" name="shippingaddress"/>
      <label htmlFor="shippingpromise">ShippingPromise: </label>
      <input className="text-black m-3" type="date" id="shippingpromise" name="shippingpromise"/>
      <label htmlFor='items'>Items</label>
      

      <button className="border-solid border-2 border-sky-500 m-10">Add Order</button>

    </form>
    )

}

export default OrderForm;