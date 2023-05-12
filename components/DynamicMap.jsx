import dynamic from "next/dynamic";

const DynamicMainMap = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DynamicDetailsMap = dynamic(() => import("./DetailsMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function DynamicMap({ name, location, place }) {
  return name === "details" ? (
    <DynamicDetailsMap location={location} place={place} />
  ) : (
    <DynamicMainMap />
  );
}
