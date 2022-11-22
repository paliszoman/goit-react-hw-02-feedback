import css from './Section.module.css'; 
import PropTypes from "prop-types";


export const Section = ({title,  children}) => {
    return (
        <section
        className={css.section}>
        <h1 className={css.title}>{title ? title:null}</h1>
        {children}
        </section>
)

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object
}