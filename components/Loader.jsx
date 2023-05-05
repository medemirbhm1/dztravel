import { Spinner } from "flowbite-react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <Spinner size="xl" />
    </div>
  );
}

export default Loader;
