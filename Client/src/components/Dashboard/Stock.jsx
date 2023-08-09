import PropTypes from "prop-types";
import { AiFillEdit, AiFillEye} from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

const Stock = ({
  handleRemoveVisible,
  handleEditVisible,
  handleViewVisible,
  items
}) => {
  return(
    <div className="col-spam-3">
      <div className="flex justify-center py-8">
        <div className="relative overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-xs text-left dark:text-gray-400">
            <thead className="text-xs uppercase bg-transparent dark:text-gray-400">
                <tr className="text-neutral-900">
                  <th scope="col" className="px-6 py-3">
                    nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    descripción
                  </th>
                  <th scope="col" className="px-6 py-3">
                    cantidad  
                  </th>
                  <th scope="col" className="px-6 py-3">
                    precio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
            </thead> 
            <tbody>
              {items.map((product) => (
                <tr
                  key={product._id}
                >
                  <td scope="row" className="px-6 py-4">
                    {product.title}  
                  </td>
                  <td scope="row" className="px-6 py-4">
                    {product.description}
                  </td>
                  <td scope="row" className="px-6 py-4 text-center">
                    {product.quantity}
                  </td>
                  <td scope="row" className="px-6 py-4 text-center">
                    ${product.price}
                  </td>
                  <td scope="row" className="px-6 py-4 flex gap-2">
                    <button
                    className="font-medium hover:text-neutral-500"
                    onClick={()=>handleViewVisible(product)}
                    >
                      <AiFillEye size={24} />
                    </button>
                    <button
                      className="font-medium hover:text-neutral-500"
                      onClick={(e)=> handleEditVisible(product)}
                    >
                      <AiFillEdit size={24} />
                    </button>
                    <button
                      className="font-medium hover:text-neutral-500"
                      onClick={() => handleRemoveVisible(product.id)}
                    >
                      <FiTrash size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>  
  );
};

Stock.PropTypes ={
  handleRemoveVisible: PropTypes.func.isRequired,
  handleEditVisible: PropTypes.func.isRequired,
  handleViewVisible: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Stock;

