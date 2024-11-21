const Card = () => {
  return (
    <div className="group w-full border-2 border-black bg-emerald-300">
      <div
        className="-m-0.5 border-2 border-black bg-emerald-300"
        // style="transform: none;"
      >
        <div
          className="relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black bg-emerald-300 p-8"
          // style="transform: none;"
        >
          <p className="flex items-center text-2xl font-medium uppercase">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            Dynamic
          </p>
          <div>
            <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem doloremque vitae minima.
            </p>
            <button className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              LET'S GO
            </button>
          </div>
          <svg
            width="100"
            height="100"
            className="pointer-events-none absolute z-10 rounded-full animate-spin-slow"
            // style="top: 0px; right: 0px; transform: translateX(50%) translateY(-50%) scale(0.75) rotate(87.5808deg);"
          >
            <path
              id="circlePath"
              d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
              fill="none"
            ></path>
            <text>
              <textPath
                href="#circlePath"
                fill="black"
                className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              >
                LEARN MORE • LEARN MORE • LEARN MORE •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

const ProjectCards = () => {
  return (
    <section className="bg-white px-8 py-24">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card />
      </div>
    </section>
  );
};

export default ProjectCards;
