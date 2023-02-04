import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.currentTarget.delay.value);
  
  const { step, amount } = evt.currentTarget;

  for (let index = 1; index <= Number(amount.value); index++) {
    createPromise(index, delay)
      .then(data => {
        Notiflix.Notify.success(`Fulfilled promise ${data.position} in ${data.delay}ms.`);
      })
      .catch(data => {
        Notiflix.Notify.failure(`Rejected promise ${data.position} in ${data.delay}ms.`);
      });

    delay += Number(step.value);
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

