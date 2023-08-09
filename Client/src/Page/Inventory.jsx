import { useQuery } from "@tanstack/react-query";

import Navbar from "../components/Dashboard/Navbar";
//import  SearchBar  from "../components/Dashboard/SearchBar";
import Stock from "../components/Dashboard/Stock";
//import Drawer from "../components/utils/Drawer";
import CreateItem from "../components/Inventory/forms/Create";
import EditItem from "../components/Inventory/forms/Edit";
import ViewDetails from "../components/Inventory/forms/ViewDetails";
import ModalDelete from "../components/utils/modal/Delete";
import { getItem  } from "../api/items";

const Inventory = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getItem
  })

  if(isLoading) return <div>Loading...</div>
  else if(isError) <div>Error: {error.message}</div>
  return(
    <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen bg-neutral-200">
     <Navbar />
     
      


    </div>
  )
}

export default Inventory;