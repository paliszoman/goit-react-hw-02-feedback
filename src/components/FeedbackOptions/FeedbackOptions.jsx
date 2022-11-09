import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback})=> {

        return (
            <ul className={css.btnFrame} >
                {options.map(option=> <button key={option} type="button" onClick={onLeaveFeedback} className={css.btn}>{option}</button>)}                
            </ul>
        
        );
    
};