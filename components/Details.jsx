import React from "react";
import Transportation from "./Transportation";
import ImageGallery from "./ImageGallery";
import Link from "next/link";

function Details({ data }) {
  return (
    <div className="py-8 px-4 sm:px-10">
      <Link href="/app" className="w-fit block">
        <button className="text-niceBlue flex py-1 w-fit items-center justify-center font-semibold mx-10">
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

      <div className="flex flex-wrap mx-4 mt-8 mb-2">
        {data.theme.map((theme) => (
          <div className="bg-niceBlue mx-0.5 my-1 md:mx-2 text-xs rounded-full px-3 py-1 text-lightButton">
            {theme.nom}
          </div>
        ))}
      </div>

      <h1 className="text-darkBlue text-4xl md:text-5xl font-black mx-3">
        {data.nom}
      </h1>

      <h2 className="text-lightText mx-5 mt-3 md:text-xl font-medium">
        {data.address}
      </h2>

      <div className="flex flex-wrap justify-between relative">
        <div className="left md:w-[55vw]">
          <div className="flex flex-wrap justify-around my-5">
            <div className=" border-solid border-[1px] my-2 text-center border-lightText py-3 font-semibold rounded-lg text-niceBlue bg-lightButton w-36">
              {data.categorie.nom}
            </div>
          </div>

          <ImageGallery data={data.photos} />

          <div className="mx-5 mb-10 ">
            <h1 className="text-2xl text-darkBlue font-bold ">
              About this Place
            </h1>
            <p className="text-lightText mt-5 font-medium text-justify">
              {data.description}
            </p>
          </div>

          <div className="lg:w-[55vw] mb-10">
            {data.evenements.length > 0 && (
              <h1 className="mx-auto text-2xl text-niceBlue font-bold w-fit mb-6">
                UPCOMING EVENTS
              </h1>
            )}
            {data.evenements.map((evenement) => (
              <div className="shadow-sm rounded-xl mb-2 mx-auto w-full py-6 px-3 border-solid border-[2px] md:px-8">
                <div className="mx-2 flex font-bold text-lightText w-full text-md mb-1">
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
        </div>

        <div className="right w-full md:ml-2 md:w-[31vw] md:sticky md:top-8 md:self-start">
          {data.horaires.length > 0 && (
            <>
              <h1 className="md:text-center mx-auto text-2xl text-niceBlue font-bold w-fit mb-3">
                PUBLIC ACCESS SCHEDULE
              </h1>
              <div className="shadow rounded-lg mx-auto w-full py-2 px-3 border-solid border-[2px] mb-10">
                {data.horaires.map((horaire) => (
                  <div className="flex items-center justify-around w-full text-xl md:text-lg my-6">
                    <span className="font-bold text-darkBlue">
                      {horaire.jour}
                    </span>
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
        </div>
      </div>
    </div>
  );
}

export default Details;
