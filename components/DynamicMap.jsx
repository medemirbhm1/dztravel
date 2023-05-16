import dynamic from "next/dynamic";
import Loader from "./Loader";

const DynamicMainMap = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <Loader />,
});
const DynamicDetailsMap = dynamic(() => import("./DetailsMap"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function DynamicMap({ name, location, place }) {
  return name === "details" ? (
    <DynamicDetailsMap location={location} place={place} />
  ) : (
    <DynamicMainMap />
  );
}
