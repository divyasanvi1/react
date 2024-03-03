function randomrender(element,container)
{
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
    /* domElement.setAttribute('href',reactElement.props.href)
     domElement.setAttribute('type',reactElement.props.target) */
    for(const prop in reactElement.props ) 
    {   if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]); 
    }
    containerElement.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props :{
        href :'https://google.com',
        target :'_blank'
    },
    children :"click goooogle"
}
const containerElement=document.querySelector('#root');
randomrender(reactElement,containerElement);

