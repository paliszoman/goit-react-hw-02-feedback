import css from './FeedbackOptions.module.css'
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback})=> {

        return (
            <ul className={css.btnFrame} >
                {options.map(option=> <button key={option} type="button" onClick={onLeaveFeedback} className={css.btn}>{option}</button>)}                
            </ul>
        
        );
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}