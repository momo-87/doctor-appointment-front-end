import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => (
  <div>
    <div>
      <img src={`data:image/png;base64,${doctor.image}`} alt="Doctor" />
    </div>
      <h2>{doctor.name}</h2>
      <p>{doctor.bio}</p>
  </div>
);

export default DoctorCard;

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
};