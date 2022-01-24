console.log('run1')
document.addEventListener('readystatechange', function() {
    console.log('run')
    console.log(window.location.href);
    console.dir(shop)
})
