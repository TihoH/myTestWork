
const toggleBtn = document.querySelector('.header__toggle-burger')
const toggleBtnClose = document.querySelector('.header__toggle-burger-close')

const headerAddaCtive = document.querySelector('.header__nav')

toggleBtn.addEventListener( 'click' ,  function() {
    headerAddaCtive.style.display = 'block'
    toggleBtn.style.display = 'none'
    toggleBtnClose.style.display = 'block'
})

toggleBtnClose.addEventListener( 'click' , function() {
    headerAddaCtive.style.display = 'none'
    toggleBtnClose.style.display = 'none'
    toggleBtn.style.display = 'block'
} )

