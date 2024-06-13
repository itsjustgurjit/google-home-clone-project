let inputbox = document.querySelector('input')
let linkdiv = document.querySelector('.link-div')

let btn = document.querySelector('button')

let baselink = `https://www.google.com/search?q=`

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let brokenwords = (inputbox.value.split(' '))
    let modifiedsearch = brokenwords.join('+')
    let freshlinkurl = baselink + modifiedsearch
    console.log(freshlinkurl)
    let freshlink = document.createElement('a')
    freshlink.setAttribute('href',freshlinkurl)
    freshlink.style.display = 'none'
    document.body.appendChild(freshlink)
    freshlink.click()
    freshlink.remove()
})