import Transportation from "./Transportation";
import ImageGallery from "./ImageGallery";
import Link from "next/link";
import Theme from "./Theme";
function Details({ data }) {
  return (
    <div className="py-8 container">
      <Link href="/app" className="ml-auto">
        <button className="text-niceBlue flex py-1 w-fit items-center justify-center font-semibold">
          <svg
            className="fill-niceBlue h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          Back to map
        </button>
      </Link>

      <div className="flex items-center justify-between flex-wrap mt-5 gap-2">
        <h1 className="text-darkBlue text-3xl font-black">{data.nom}</h1>
        <div className="flex flex-wrap gap-2">
          <Theme nom={data.categorie.nom} />
          {data.theme.map((theme) => (
            <Theme key={theme} nom={theme.nom} />
          ))}
        </div>
      </div>

      <h2 className="text-lightText mt-3 mb-5 font-medium">{data.address}</h2>

      <ImageGallery data={data.photos} />

      <div className="mb-10 ">
        <h1 className="text-2xl text-darkBlue font-bold ">About this Place</h1>
        <p className="text-lightText mt-5 font-medium text-justify">
          {data.description}
        </p>
      </div>

      {data.horaires.length > 0 && (
        <>
          <h1 className="mx-auto text-2xl text-niceBlue font-bold w-fit mb-3">
            PUBLIC ACCESS SCHEDULE
          </h1>
          <div className="shadow rounded-lg mx-auto w-full py-2 px-3 border-solid border-[2px] mb-10">
            {data.horaires.map((horaire) => (
              <div className="flex items-center justify-around w-full text-xl my-6">
                <span className="font-bold text-darkBlue">{horaire.jour}</span>
                <span className="font-semibold text-lightText">
                  {horaire.heur_ouverture.substring(0, 5)} -{" "}
                  {horaire.heur_fermeture.substring(0, 5)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      <Transportation available={data.transport} />

      {data.evenements.length > 0 && (
        <h1 className="mx-auto text-2xl text-niceBlue font-bold w-fit mb-6">
          UPCOMING EVENTS
        </h1>
      )}
      {data.evenements.map((evenement) => (
        <div className="shadow-sm mx-auto w-full py-6 px-3 border-solid border-[2px] sm:px-8">
          <div className="mx-2 flex font-bold text-lightText font w-full text-md mb-1">
            <span className="mr-1">
              {evenement.date_debut.substring(0, 10)}
            </span>
            {evenement.date_debut.substring(0, 10) !=
              evenement.date_fin.substring(0, 10) && (
              <span> -- {evenement.date_fin.substring(0, 10)}</span>
            )}
          </div>
          <div className="text-2xl font-bold text-darkBlue mb-2">
            {evenement.nom}
          </div>
          <p className="text-lightText font-medium text-justify">
            {evenement.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Details;
