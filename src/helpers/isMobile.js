const isMobile = () => { return window.innerWidth <= 1024 }

window.addEventListener('resize', isMobile)

export default isMobile