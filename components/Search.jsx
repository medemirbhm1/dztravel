import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
function Search() {
  const [searchActif, setSearchActif] = useState(false);
  const [name, setName] = useState("");
  return (
    <form className="ml-10 flex items-center bg-white p-3 rounded-full">
      <input
        className={`border-none rounded-full transition-all ${
          searchActif ? "px-4 py-2 mr-4" : "w-0 mr-0 p-0"
        }`}
        type="text"
        placeholder="search"
        value={name}
        onChange={(e) => setName(e.target.data)}
      />
      <button type="button" className="text-gray-900" onClick={() => setSearchActif((old) => !old)}>
        {searchActif ?(<XMarkIcon className="h-6 w-6"/>) : (<MagnifyingGlassIcon className="h-6 w-6" />)}
      </button>
    </form>
  );
}

export default Search;
