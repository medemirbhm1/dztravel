import { authContext } from "@/context/authContext";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import Comments from "./Comments";

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
      <Comments id={id} />
    </div>
  );
}

export default Place;
