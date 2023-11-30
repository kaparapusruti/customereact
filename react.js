//now we want to know how this custome render will work we will design its own
function customRender(reactElement,container){
    // here in this code each attribute are inserted what if it has mul attribute for that we need a loop
    /*const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)*/

    //loop
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement. props) {
       if(prop == "childern") continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
// now i want to render a tag this is a customise a tag that react element gives
const reactElement = {
type:'a',
props:{
    href:'https://google.com',
    target:'_blank'
},
childern:'click me to visit google'
}


const mainContainer=document.querySelector('#root')
// i want to inject this a tag in root element it takes 2 value what to inject and where to inject
customRender(reactElement,mainContainer)

