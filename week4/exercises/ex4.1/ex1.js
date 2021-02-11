//select empty div, assign variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside
//create new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas are a relative of the camel';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'darkgreen';
}
