import therapy from "../assets/images/therapy.png";

const StatesSection = () => {
  const states = [
    {
      img: therapy,
      name: "Arizona",
      desc: "In-person and Virtual appointment",
    },
    {
      img: therapy,
      name: "Washington",
      desc: "Virtual appointment",
    },
    {
      img: therapy,
      name: "Oregon",
      desc: "Virtual appointment",
    },
  ];

  return (
    <section className="bg-[#F5EFE6] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-walkun text-center mb-14">
          Now Accepting Patients In The <br /> Following States
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {states.map((state, index) => (
            <div key={index} className="text-center">
              <div className="w-[280px] h-[150px] mx-auto overflow-hidden rounded-t-full">
                <img src={state.img} className="w-full h-full object-cover" />
              </div>

              <h3 className="mt-4 text-2xl font-walkun text-center font-semibold">
                {state.name}
              </h3>

              <p className="text-1xl text-gray-500">{state.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
