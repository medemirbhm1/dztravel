import { authContext } from "@/context/authContext";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import Comments from "./Comments";
import DetailPage from "./DetailPage";

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
  return data ? (
    <div className="bg-[#FAFAFA]">
      <DetailPage data={data} />
    </div>
  ) : null;
}

export default Place;
