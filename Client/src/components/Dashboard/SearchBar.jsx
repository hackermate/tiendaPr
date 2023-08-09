import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const SearchBar = ({ handleCreateVisible, handleSearch }) => {
  return(
    <div className="col col-span-3">
      <div className="flex w-full h-full items-center justify-center gap-5">
        <div className="flex justify-between border-2 border-gray-400 rounded-md w-3/6 h-3/6">
          <input
          type="text"
          className="px-4 bg-transparent w-full"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)} 
          />
          <button className="px-4 bg-transparent">
            <AiOutlineSearch className="text-gray-600 hover:text-gray-400 transition-all duration-300 ease-in-out cursor-pointer"/>
          </button>
        </div>
        <button className="px-4 bg-yellow-200 text-gray-900 rounded-ms h-3/6 w-1/6 flex justify-center gap-2 hover:text-yellow-200 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer" type="button" onClick={handleCreateVisible}>
          <AiOutlinePlus /> Agregar
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleCreateVisible: PropTypes.func.isRequired,
  handleSearch : PropTypes.func.isRequired
}

export default SearchBar;