import { NavLink } from 'react-router-dom';

const Doctor = () => (
  <div className="md:flex md:justify-between md:pr-5 md:ml-5">

    <div className="md:mt-[100px] md:w-[40%] md:ml-[20%] mt-[80px]">
      <img src="https://i.ibb.co/TrK90p2/doctor.png" alt="doctor" />
    </div>

    <div className="mt-[20px] flex flex-col gap-5 px-2 md:w-[25%] md:mt-[100px]">
      <div className="flex flex-col items-center gap-1 px-2">
        <p className="font-bold text-xl">
          Dr.
          <span> Lorem ipsum dolor</span>
        </p>
        <p>
          Specialization:
          <span className="font-bold"> Vim enim nominati periculis</span>
        </p>
      </div>

      <div className="bg-color-gray flex flex-col items-end gap-5 px-2 py-3">
        <p className="text-justify">
          Hospital:
          <span className="font-bold"> vis reque aeterno ei. Eos at nulla diceret conceptam</span>
        </p>
        <p className="w-full flex justify-between">
          Rate:
          <span className="font-bold">$500</span>
        </p>
      </div>

      <div className="flex flex-col items-start gap-1 px-2 py-3 border border-color-gray">
        <h2 className="font-bold text-lg">Bio</h2>
        <p className="pl-0 text-justify">
          Lorem ipsum dolor sit amet, cu eam mollis voluptaria accommodare,
          in sumo scripta mea. Autem nemore pro ut, vis reque aeterno ei.
          Eos at nulla diceret conceptam, pro magna affert at, ad ius numquam
          euripidis. Labores electram id est, sit ut erat moderatius omittantur,
          nostrud delectus vim no. Facilisis reprimique ullamcorper an pro, est
          adipisci conceptam an. Usu aliquip ocurreret intellegam ei.
        </p>
      </div>
      <NavLink
        to="new-appointement"
        className="mb-5 h-[50px] bg-color-green py-2.5 text-white text-lg w-[220px] mx-auto rounded-[30px]"
      >
        Book an appointement
      </NavLink>
    </div>
  </div>
);

export default Doctor;
