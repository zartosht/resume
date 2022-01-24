console.log('run1')
console.log(stage_cart_total_price)
document.addEventListener('readystatechange', function() {
    console.log('run')
    console.log(window.location.href);
    console.dir(shop)
})
