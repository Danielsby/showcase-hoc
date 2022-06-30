export const Hello = (props) => {
 return (
     <h1 onClick={() => {alert("Hello from component")}} {...props}>Hello {props.username}</h1>
 )
}
