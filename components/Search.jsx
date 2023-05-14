import { useContext, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { authContext } from "@/context/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const categories = [
  "musé",
  "plage",
  "forét",
  "ville",
  "montagne",
  "campagne",
  "lac",
  "rivière",
  "désert",
  "grotte",
  "falaise",
  "chute d'eau",
  "volcan",
];

function Search() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchActif, setSearchActif] = useState(false);
  const { access } = useContext(authContext);
  const { data } = useQuery(
    ["search", searchCategory, searchText],
    async () => {
      if (searchText === "") return [];
      const res = await axios.get(
        `https://modulus-project.onrender.com/search/?search=${searchText}&categorie=${searchCategory === "all" ? "" : searchCategory}`,
        {
          headers: {
            Authorization: `JWT ${access}`,
          },
        }
      );
      return res.data;
    }
  );
  return (
    <form
      className={`relative flex items-center bg-white rounded-full ${
        !searchActif ? "py-3 px-3" : "px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-2 transition-all">
        <select
          onChange={(e) => setSearchCategory(e.target.value)}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/3 ${
            searchActif ? "" : "hidden"
          }`}
        >
          <option defaultValue>all</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          className={`border-none rounded-full transition-all  ${
            searchActif ? "px-4 py-2 mr-1 sm:mr-2 w-2/4" : "w-0  p-0 mr-0"
          }`}
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="text-gray-900 transition"
        onClick={() => setSearchActif((old) => !old)}
      >
        {searchActif ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <MagnifyingGlassIcon className="h-6 w-6" />
        )}
      </button>
      {searchActif && searchText ? (
        <div className="absolute top-[calc(100%+1rem)] left-0 w-full bg-white rounded-lg shadow-lg p-3">
          {data?.length ? (
            data?.map(({ img, nom, id, address, photos }) => (
              <Link
                href={`/details/${id}`}
                className="flex items-center gap-4 p-4 mb-2 hover:bg-gray-100 rounded-full cursor-pointer"
                key={id}
              >
                <img
                  src={`https://modulus-project.onrender.com${photos[0]?.photo}`}
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <p className=" font-medium capitalize">{nom}</p>
                  <adress className=" text-sm italic text-gray-600">
                    {address}
                  </adress>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-800 py-4">No result !</p>
          )}
        </div>
      ) : null}
    </form>
  );
}

export default Search;
