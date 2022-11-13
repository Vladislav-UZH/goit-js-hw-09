import Notiflix from 'notiflix';
const form = document.querySelector('.form');
form.addEventListener('submit',onSubmit)

console.log(form.elements);
  function onSubmit(ev) {
    ev.preventDefault();
    const { delay, step, amount } = form.elements;  
    const amountValue = Number(amount.value);
    const delayValue = Number(delay.value);
    const stepValue = Number(step.value);
    let upDelay = delayValue;
     
    for (let i = 1; i <= amountValue; i += 1){
      upDelay += stepValue;
      createPromise(i, upDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
        });
    }
    form.reset()
  }
// console.log(getValue());
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       return resolve({position,delay})
      } else {
        return reject({position,delay})
      }
     
    }, delay);
      
  });

}
