var tl = gsap.timeline()

const stickySections = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section){
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section')
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}
var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},3200)

const menu = document.querySelector(".menu")
menu.addEventListener('click', (e)=>{
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = 'flex'
})
const closebtn = document.querySelector(".closebtn")
closebtn.addEventListener('click',(e)=>{
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = 'none' 
})
