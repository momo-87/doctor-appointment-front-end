import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Doctor = ({ doctor, isLoading, error }) => (
  <div className="md:flex md:justify-between md:pr-5 md:ml-5">
    {isLoading && (<p>Is Loading</p>)}
    {error && (<p>{error}</p>)}
    {(!isLoading && !error) && (
      <>
        <div className="md:mt-[100px] md:w-[40%] md:ml-[20%] mt-[80px]">
          <img src="https://i.ibb.co/TrK90p2/doctor.png" alt="doctor" />
        </div>

        <div className="mt-[20px] flex flex-col gap-5 px-2 md:w-[25%] md:mt-[100px] items-center">
          <div className="flex flex-col items-center gap-1 px-2">
            <p className="font-bold text-xl">
              { doctor.name }
            </p>
            <p>
              Specialization:
              <span className="font-bold">{` ${doctor.specialization}`}</span>
            </p>
          </div>

          <div className="bg-color-gray flex flex-col items-end gap-5 px-2 py-3 w-full">
            <p className="w-full flex justify-between">
              Hospital:
              <span className="font-bold">{` ${doctor.hospital}`}</span>
            </p>
            <p className="w-full flex justify-between">
              Rate:
              <span className="font-bold">
                $
                {doctor.rate}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 px-2 py-3 border border-color-gray">
            <h2 className="font-bold text-lg">Bio</h2>
            <p className="pl-0 text-justify">{doctor.bio}</p>
          </div>
          <NavLink
            to="new-appointement"
            className="mb-5 h-[50px] bg-color-green py-2.5 text-white text-lg w-[220px] rounded-[30px] flex items-center justify-center"
          >
            Book an appointement
          </NavLink>
        </div>
      </>
    )}
  </div>
);

export default Doctor;

Doctor.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    specialization: PropTypes.string,
    hospital: PropTypes.string,
    bio: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
