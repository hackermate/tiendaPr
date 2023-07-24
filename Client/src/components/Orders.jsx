import { useQuery, useMutation, useQueryClient }  from '@tanstack/react-query'
import { getOrders, deleteOrder, detalleOrder } from '../api/orders'
import { Link } from 'react-router-dom'

const Orders = () => {
  const queryClient = useQueryClient();
  const { isLoading, data: orders, isError, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    select: orders => orders.sort((a, b) => b.id - a.id )
  })
  const deleteOrderMutation = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries("orders");
    }
  })
  const detalleOrdenMutation = useMutation({
    mutationFn :detalleOrder
  })

  if(isLoading) return <div>Loading ...</div>
  else if(isError) return <div>Error: {error.message}</div>

  return orders.map(order =>(
  <>
    <div  className="flex">
      <Link to={'/ordenes/' + order.id}>
        <h2 className='items-center p-1 m-5'>{ order.id }</h2>
      </Link>
      <p className='items-center p-1 m-5'>{ order.createdate }</p>
      <p className='items-center p-1 m-5'>{ order.status }</p>
      <p className='items-center p-1 m-5'>{ order.client }</p>
      <p className='items-center p-1 m-5'>{ order.shippingaddress }</p>
      <p className='items-center p-1 m-5'>{ order.shippingpromise }</p>
      <button className=" border-double border-4 border-red-900 p-1 m-4 ml-0 text-xs" onClick={ ()=>{
        deleteOrderMutation.mutate(order.id)
        console.log(order.id)
      }}>Delete </button>
      <Link to='/orderform'>
        <button className=" border-double border-4 border-sky-500 p-1 ml-0 mt-4 text-xs">Create</button>
      </Link>
      <Link to={'/ordenes/' + order.id}>
      <button className=" border-double border-4 border-sky-500 p-1 ml-0 mt-4 text-xs" onClick={ () =>{
        detalleOrdenMutation.mutate(order.id)
        console.log(order.id)
      }}>Detalle</button>
     </Link> 
    </div>
  </>
  ));
}

export default Orders;