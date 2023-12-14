export default function CardMenu (props){
    return(
        <article className="card-menu">
            <a href="">{props.emoji}</a>
            <h2>{props.title}</h2>
            <h5>{props.content}</h5>
        </article>
      
    )
}