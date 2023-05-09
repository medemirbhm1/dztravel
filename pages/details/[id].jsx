import Place from "@/components/Place";

import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useQuery } from "react-query";

function Details() {
  const { id } = useRouter().query;

  return <div>{id ? <Place id={id} /> : null}</div>;
}

export default Details;
