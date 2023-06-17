import { authContext } from "@/context/authContext";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Comments from "./Comments";
import DynamicMap from "./DynamicMap";
import Details from "./Details";
import Loader from "./Loader";

function Place({ id }) {
  const { access } = useContext(authContext);
  const { data, isLoading } = useQuery(["details", id], async () => {
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
  if (isLoading) return <Loader />;
  return (
    <div className="bg-[#FAFAFA]">
      {data ? (
        <>
          <Details data={data} />
          <DynamicMap
            name="details"
            place={data.details.nom}
            location={[data.details.latitude, data.details.longitude]}
          />
          <Comments id={id} />
        </>
      ) : null}
    </div>
  );
}

export default Place;
