import css from './Section.module.css'; 


export const Section = ({title,  children}) => {
    return (
        <section
        className={css.section}>
        <h1 className={css.title}>{title ? title:null}</h1>
        {children}
        </section>
)

}