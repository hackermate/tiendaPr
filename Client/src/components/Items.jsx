import { useQuery }  from '@tanstack/react-query'
import { getItems } from '../api/items'

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['items'],
    queryFn: getItems
  })
  
  if(isLoading) return <div>Loading ...</div>
  else if(isError) return <div>Error: {error.message}</div>

  return (
  <>
    <div>
      {JSON.stringify(data)}
    </div>
  </>
);
}

export default Items;