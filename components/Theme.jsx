function Theme({ nom }) {
  return (
    <div className=" border-solid border-[1px] my-2 text-center border-lightText py-3 font-semibold rounded-lg text-niceBlue bg-lightButton hover:bg-hoverButton hover:cursor-pointer w-36">
      {nom}
    </div>
  );
}

export default Theme;
