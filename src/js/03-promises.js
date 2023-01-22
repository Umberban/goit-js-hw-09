import Notiflix from 'notiflix';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  if (shouldResolve) {
    setTimeout((()=>resolve({position,delay})),delay)}
  else {
    setTimeout((()=>reject({position,delay})),delay)}
  })
};
const formEl = document.querySelector('.form');
function handleAction(event){
  event.preventDefault();
  let delayValue = Number(formEl.elements.delay.value);
  const delayStep = Number(formEl.elements.step.value);
  const amount = formEl.elements.amount.value;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delayValue)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayValue+=delayStep;
  }
}
formEl.addEventListener('submit', handleAction);