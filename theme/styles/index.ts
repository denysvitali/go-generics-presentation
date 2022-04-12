import '@slidev/client/styles/layouts-base.css'
import './swisscom.css'
import './layouts.css'
import './prism.css'
import './shiki.css'


let s = document.createElement('script');
s.setAttribute("src", "https://sdx.scsstatic.ch/v2.45.2/js/webcomponents/webcomponents/webcomponents.esm.js")
s.setAttribute("type", "module")

let head = document.getElementsByTagName('head')[0]

head.appendChild(s)

let styles = [
    "https://sdx.scsstatic.ch/v2.45.2/css/webcomponents.min.css",
    "https://sdx.scsstatic.ch/v2.45.2/css/sdx.min.css"
]

for(let s of styles){
    let style = document.createElement('link')
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", s)
    head.appendChild(style)
}
