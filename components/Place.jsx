import { authContext } from "@/context/authContext";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Comments from "./Comments";
import DynamicMap from "./DynamicMap";

function Place({ id }) {
  const { access } = useContext(authContext);
  const { data } = useQuery(["details", id], async () => {
    const res = await axios.get(
      `https://modulus-project.onrender.com/lieu/${id}`,
      {
        headers: {
          Authorization: `JWT ${access}`,
        },
      }
    );
    return res.data;
  });
  return (
    <div>
      {data ? (
        <>
          <DynamicMap
            name="details"
            place={data.nom}
            location={[data.latitude, data.longitude]}
          />
          <Comments id={id} />
        </>
      ) : null}
    </div>
  );
}

export default Place;
