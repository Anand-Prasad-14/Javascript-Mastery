# Projects related to DOM
## project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("Anand")
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'red') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## project 2 solution code

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```