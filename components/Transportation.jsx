function Transportation({ available }) {
  const allTransportation = [
    "Car",
    "Train",
    "Bus",
    "Metro",
    "Trame",
    "CableCar",
  ];
  const transportaionIcons = [
    <svg
      key="car"
      className="h-12 w-12 m-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </svg>,
    <svg
      key="train"
      className="h-12 w-12 m-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>,
    <svg
      key="bus"
      className="h-12 w-12 m-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z" />
    </svg>,
    <svg
      key="metro"
      className="h-14 w-14 m-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 304 304"
    >
      <circle
        cx="150.96"
        cy="153"
        r="149.96"
        stroke="#000"
        strokeMiterLimit="10"
      />
      <path
        d="M141.64,197.13H260.37c7.83-1.14,9.43-9.11,9.75-12.49v-.1l-.13-2.82c-.14-3.18-.28-6.46-.46-9.57a.79.79,0,0,0,.07-.37l-2.48-37c-.05-.75-1.86-18.57-66-18.57h-.17c-64.18,0-66,17.82-66,18.57l-2.48,37a.79.79,0,0,0,.07.37c-.18,3.1-.32,6.37-.46,9.53l-.13,2.86v.1C132.2,188,133.8,196,141.64,197.13Zm40.2-92.35,0,.1c.7,3.23,2.76,4.92,4.44,4.92h29.39c1.68,0,3.75-1.69,4.44-4.91l0-.12v0a13.09,13.09,0,0,0,0-3.68V101l0-.11c-.69-3.23-2.75-4.92-4.44-4.92H186.3c-1.68,0-3.74,1.68-4.44,4.91l0,.11V101a15.29,15.29,0,0,0-.13,1.84,15.87,15.87,0,0,0,.13,1.84Zm86.48,126.29a18.73,18.73,0,0,0,.6-13.12,14.38,14.38,0,0,0-8.09-8.94,13.61,13.61,0,0,0-5.24-1c-6.55,0-12.84,4.56-15.64,11.35-3.7,8.93-.33,18.82,7.49,22.06a13.79,13.79,0,0,0,5.24,1C259.23,242.41,265.52,237.85,268.32,231.07ZM146.41,208a13.61,13.61,0,0,0-5.24,1c-7.82,3.24-11.19,13.13-7.49,22.06,2.8,6.78,9.09,11.34,15.64,11.34a13.79,13.79,0,0,0,5.24-1c7.82-3.24,11.18-13.13,7.49-22.06C159.25,212.53,153,208,146.41,208ZM308.48,91.52A152,152,0,1,0,353,199,151.55,151.55,0,0,0,308.48,91.52ZM201,340.41A140.85,140.85,0,0,1,140.78,327H261.22A140.85,140.85,0,0,1,201,340.41Zm-68.48-29.29L138,300.73H264l5.5,10.39Zm119-33.79,5.51,10.39H144.93l5.51-10.39Zm-95.74-10.17,2-3.81h86.31l2,3.81ZM257,251.82c-.81.11-1.55.18-2.25.21-.52,0-.93,0-1.31,0H148.57c-.38,0-.78,0-1.3,0-.73,0-1.46-.1-2.24-.21a25.69,25.69,0,0,1-4.72-1.11l-.05,0-.07,0h-.05c-9.48-2.42-14.86-7.31-16.91-15.42-1.83-7.22-.73-16.07.34-24.62.18-1.47.36-2.93.52-4.36v-.11l5.69-94.4c.75-12.33,12.06-22.37,25.22-22.37h92c13.16,0,24.47,10,25.21,22.37l5.69,94.36v.11c.15,1.35.32,2.72.5,4.11l0,.28c1.07,8.55,2.17,17.4.34,24.61-2,8.11-7.41,13-16.87,15.43h-.06l0,0h-.06A25,25,0,0,1,257,251.82ZM301,299c-1.24,1.25-2.52,2.46-3.81,3.66l-9.41-11-24.21-28.36c.85-.05,1.69-.14,2.51-.26,16.84-2.47,28.4-17.51,26.89-35L282.45,106a27.28,27.28,0,0,0-10.11-18.59,33.13,33.13,0,0,0-21.13-7.56H218.59c-1-2.67-3-4.37-5.31-4.37H188.72c-2.3,0-4.34,1.7-5.31,4.37H150.78a33.15,33.15,0,0,0-21.13,7.56A27.32,27.32,0,0,0,119.54,106L109,228c-1.5,17.48,10.07,32.52,26.91,35,.81.12,1.65.21,2.5.26l-24.15,28.29-9.47,11.1c-1.29-1.2-2.57-2.41-3.81-3.66a141.41,141.41,0,1,1,200,0Z"
        transform="translate(-49 -47)"
        fill="#fff"
      />
    </svg>,
    <svg
      key="tram"
      className="h-12 w-12 m-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M86.8 48c-12.2 0-23.6 5.5-31.2 15L42.7 79C34.5 89.3 19.4 91 9 82.7S-3 59.4 5.3 49L18 33C34.7 12.2 60 0 86.8 0H361.2c26.7 0 52 12.2 68.7 33l12.8 16c8.3 10.4 6.6 25.5-3.8 33.7s-25.5 6.6-33.7-3.7L392.5 63c-7.6-9.5-19.1-15-31.2-15H248V96h40c53 0 96 43 96 96V352c0 30.6-14.3 57.8-36.6 75.4l65.5 65.5c7.1 7.1 2.1 19.1-7.9 19.1H365.3c-8.5 0-16.6-3.4-22.6-9.4L288 448H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H43c-10 0-15-12.1-7.9-19.1l65.5-65.5C78.3 409.8 64 382.6 64 352V192c0-53 43-96 96-96h40V48H86.8zM160 160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H160zm32 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </svg>,
    <svg
      key="cable car"
      className="h-12 w-12 m-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 56a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 288c0-35.3 28.7-64 64-64H232V157.5l-203.1 42c-13 2.7-25.7-5.7-28.4-18.6s5.7-25.7 18.6-28.4l232-48 232-48c13-2.7 25.7 5.7 28.4 18.6s-5.7 25.7-18.6 28.4L280 147.5V224H416c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V288zm64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H96zm112 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H352z" />
    </svg>,
  ];
  const availableTransportation = [];

  for (let i = 0; i < 6; ++i) {
    available.map((mean) =>
      mean.nom == allTransportation[i]
        ? availableTransportation.push(transportaionIcons[i])
        : null
    );
  }

  return (
    <div className="shadow text-center rounded-lg mx-auto w-full py-6 px-1 border-solid border-[2px] border-button mb-10 sm:px-10">
      <div className="mx-auto text-xl text-niceBlue font-bold w-fit mb-6">
        AVAILABLE TRANSPORTATION
      </div>
      <div className="flex justify-around flex-wrap items-center w-full">
        {availableTransportation}
      </div>
    </div>
  );
}

export default Transportation;