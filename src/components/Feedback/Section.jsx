import PropTypes from 'prop-types';
import css from './Css/Section.module.css'

const Section = ({ title, children }) => {
    return (
      <div className={css.wrapper_title}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    );
  };

  Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

export default Section;