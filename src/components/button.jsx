import PropTypes from 'prop-types';

export const CustomButton = ({ width, content, onClick }) => {
  return (
    <button style={{ width: width }} className="bg-[#FFE749] px-3.5 py-2.5 rounded-md text-[#141416] text-center capitalize text-base cursor-pointer" onClick={onClick}>
      {content}
    </button>
  );
};

CustomButton.propTypes = {
  width: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

