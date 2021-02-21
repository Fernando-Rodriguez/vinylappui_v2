export function debounce1(func, wait, immediate) {
  let timeout;

  return function() {
    const context = this,
    args = arguments;

    const callNow = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    if (callNow) {
      func.apply(context, args);
    }
  }
}

function debouncer(func, timeDelay, cancel) {
  let timeout;

  return function(...args) {
    const newThis = this;
    const callNow = cancel && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if(!cancel) {
        func.apply(newThis, ...args);
      }
    }, timeDelay);

    if(callNow) {
      func.apply(newThis, ...args);
    }
  }
}