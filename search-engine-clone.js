let inputbox = document.querySelector('#input-srh')
let linkdiv = document.querySelector('.link-div')
let search_btns = document.querySelectorAll('.search-btn')

let btn = document.querySelector('button')

let baselink = `https://www.google.com/search?q=`

search_btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        if(inputbox.value == ''){
            return
        }else{
            dothemagic()
        }
    })
});

function dothemagic(){
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
}

inputbox.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        if(inputbox.value == ''){
            return
        }
        else{
            dothemagic()
        }
    }
})