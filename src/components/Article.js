// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop called title
// a <small> element displaying the date of the article, passed as a prop called date
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop called preview

function Article({title,date,preview}){
    return (
        <>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970" }</small>
        <p>{preview}</p>
        </>
    )
}

export default Article
