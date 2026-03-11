function debounce(fn, wait, immediate = false) {
    return function () {
        if (immediate) {
            fn()
            immediate = false
            return
        }
        let timer = null
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(),
            timer = null
        }, wait)
    }
}

function throttle(fn, wait, immediate = false) {
    return function(){
        if (immediate) {
            fn()
            immediate = false
            return
        }
        let timer = null
        let args = arguments
        if(timer) return
        timer = setInterval(()=>{
            fn(args)
            timer = null
        },wait)
    }
}