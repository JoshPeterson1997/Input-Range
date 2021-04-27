const p = document.querySelector('p');

document
  .querySelector('input[type="range"]')
  .addEventListener('change', event => {
    p.innerText = event.target.value;
  });

document
  .querySelector('input[type="color"]')
  .addEventListener('change', event => {
    p.innerText = event.target.value;
  });

const ul = document.body.appendChild(document.createElement('ul'));

function rendermaxPrice(maxPrice) {
  ul.innerHTML = maxPrice
    .map(
      ({ id, task }) => `
    <li>
    <input type="checkbox" id="${id}">
    <label for="{id}">${task}</label>
    </li>
    `,
    )
    .join(``);
}

function renderminPrice(minPrice) {
  ul.innerHTML = minPrice
    .map(
      ({ id, task }) => `
    <li>
    <input type="checkbox" id="${id}">
    <label for="{id}">${task}</label>
    </li>
    `,
    )
    .join(``);
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now();

  const maxPrice = null;
  const minPrice = null;

  maxPrice.push({
    task: event.target.elements[0].value,
    completed: false,
    id,
  });

  minPrice.push({
    task: event.target.elements[1].value,
    completed: false,
    id,
  });

  rendermaxPrice(maxPrice);
  renderminPrice(minPrice);
});
