const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const item = ingredients.map((ingredien)=>{
  const item = document.createElement("li");
  item.textContent= ingredien;
  item.classList.add("item")
  return item
})

list.append(...item)
