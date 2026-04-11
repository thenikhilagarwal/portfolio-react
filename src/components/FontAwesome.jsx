export default function FontAwesome({style, name, className}){
    return(
        <i className={`fa-${style} fa-${name} ${className}`}></i>
    )
}