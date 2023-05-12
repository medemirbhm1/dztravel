import { useContext, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { authContext } from "@/context/authContext";
import axios from "axios";
import { useMapEvent, useMapEvents } from "react-leaflet";
import { useRouter } from "next/router";
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
      //  const res = await axios.get(
      //    "",
      //    {
      //      headers: {
      //        Authorization: `JWT ${access}`,
      //      },
      //    }
      //  );
      return [
        {
          nom: "test",
          img: "https://picsum.photos/200/300",
          id: 1,
          adress: "test",
          latitude: 36.7456,
          longitude: 3.0698,
        },
        {
          nom: "test",
          img: "https://picsum.photos/200/300",
          id: 2,
          adress: "test",
          latitude: 36.7456,
          longitude: 3.0698,
        },
        {
          nom: "test",
          img: "https://picsum.photos/200/300",
          id: 3,
          adress: "test",
          latitude: 36.7456,
          longitude: 3.0698,
        },
      ];
      return res.data;
    }
  );
  return (
    <form
      className={`relative flex items-center bg-white rounded-full ${
        !searchActif ? "py-3 px-3" : "px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-2">
        <select
          onChange={(e) => setSearchCategory(e.target.value)}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
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
          className={`border-none rounded-full transition-all ${
            searchActif ? "px-4 py-2 mr-2" : "w-0  p-0 mr-0"
          }`}
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="text-gray-900"
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
            data?.map(({ img, nom, id, adress }) => (
              <div
                onClick={() => {
                  router.push(`/details/${id}`);
                }}
                className="flex items-center gap-4 p-4 mb-2 hover:bg-gray-100 rounded-full cursor-pointer"
                key={id}
              >
                <img src={img} className="w-12 h-12 rounded-md" />
                <div>
                  <p className=" font-medium capitalize">{nom}</p>
                  <adress className=" text-sm italic text-gray-600">
                    {adress}
                  </adress>
                </div>
              </div>
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
