export const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction() {
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(null, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(null, args);
  };
};
