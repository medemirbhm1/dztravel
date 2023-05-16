function Theme({ nom }) {
  return (
    <div className=" border-solid border-[1px] text-center px-3 py-1  border-lightText font-semibold rounded-lg text-niceBlue bg-lightButton hover:bg-hoverButton hover:cursor-pointer">
      {nom}
    </div>
  );
}

export default Theme;
