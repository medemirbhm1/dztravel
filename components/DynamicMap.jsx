import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function DynamicMap() {
  return <DynamicHeader />;
}
