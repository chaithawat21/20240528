// ------------------change content--------------------
const img = document.querySelector('.container01')
const headContent = document.querySelector('.container02-head')
const pContent = document.querySelector('.container02-p')
const next = document.querySelector('.rightButton')
const back = document.querySelector('.leftButton')

const text = [
    { head: 'Discover innovative ways to decorate', p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", imgDesktop: 'url(./images/desktop-image-hero-1.jpg)', imgMobile: 'url(./images/mobile-image-hero-1.jpg)' },
    { head: 'We are available all across the globe', p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", imgDesktop: 'url(./images/desktop-image-hero-2.jpg)', imgMobile: 'url(./images/mobile-image-hero-2.jpg)' },
    { head: 'Manufactured with the best materials', p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", imgDesktop: 'url(./images/desktop-image-hero-3.jpg)', imgMobile: 'url(./images/mobile-image-hero-3.jpg)' },

]

next.addEventListener('click', () => {

    let idx = text.findIndex(el => el.head === headContent.textContent)

    if (headContent.textContent === text[idx].head && window.innerWidth > 375) {
        idx = (idx + 1) % text.length
        headContent.textContent = text[idx].head
        pContent.textContent = text[idx].p
        img.style.backgroundImage = text[idx].imgDesktop
    } else if (headContent.textContent === text[idx].head && window.innerWidth <= 375) {
        idx = (idx + 1) % text.length
        headContent.textContent = text[idx].head
        pContent.textContent = text[idx].p
        img.style.backgroundImage = text[idx].imgMobile
    }

})

back.addEventListener('click', () => {

    let idx = text.findIndex(el => el.head === headContent.textContent)

    if (headContent.textContent === text[idx].head && window.innerWidth > 375) {
        idx = (idx - 1 + text.length) % text.length;
        headContent.textContent = text[idx].head
        pContent.textContent = text[idx].p
        img.style.backgroundImage = text[idx].imgDesktop
    } else {
        idx = (idx - 1 + text.length) % text.length;
        headContent.textContent = text[idx].head
        pContent.textContent = text[idx].p
        img.style.backgroundImage = text[idx].imgMobile
    }

})

window.addEventListener('resize', () => {
    let idx = text.findIndex(el => el.head === headContent.textContent)
    if (window.innerWidth > 375) {
        img.style.backgroundImage = text[idx].imgDesktop
    } else {
        img.style.backgroundImage = text[idx].imgMobile
    }
});



// ---------------------click pop-up menubar----------------

const menubar = document.querySelector('.menubar')
const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const btnClose = document.querySelector('.close')
const logo = document.querySelector('.logo')
const overlay = document.querySelector('.overlay')


hamburger.addEventListener('click', () => {

    if (window.innerWidth <= 375) {
        menubar.style.cssText = `
            align-items: center;
            height: 7rem;
            gap: 0;
            margin: 0;
            background-color: white;
            `
        overlay.style.display = 'block'
        hamburger.style.display = 'none'
        logo.style.display = 'none'
        list.style.display = 'flex'

    }

})

btnClose.addEventListener('click', () => {

    if (window.innerWidth <= 375) {
        menubar.style.cssText = `
        align-items: ;
        height: ;
        gap: 7.5;
        background-color: ;
        `
        overlay.style.display = 'none'
        hamburger.style.display = 'inline-block'
        logo.style.display = 'inline-block'
        list.style.display = 'none'
    }

})