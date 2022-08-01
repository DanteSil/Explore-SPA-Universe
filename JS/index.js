import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/Universe', '/pages/oUniverso.html')
router.add('/Explore', '/pages/exploração.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()






const buttonHome = document.querySelector('.home')
const buttonUniverse = document.querySelector('.universe')
const buttonExploração = document.querySelector('.exploração')

buttonHome.addEventListener('click', function() {
  buttonHome.classList.add('negrito')
  buttonUniverse.classList.remove('negrito')
  buttonExploração.classList.remove('negrito')
})

buttonUniverse.addEventListener('click', function() {
  buttonHome.classList.remove('negrito')
  buttonUniverse.classList.add('negrito')
  buttonExploração.classList.remove('negrito')
})

buttonExploração.addEventListener('click', function() {
  buttonHome.classList.remove('negrito')
  buttonUniverse.classList.remove('negrito')
  buttonExploração.classList.add('negrito')
})