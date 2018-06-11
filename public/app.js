const app = function() {
  catsToAdd.forEach(cat => addCat(cat.name, cat.food, cat.img));
}

const catsToAdd = [
  {
    'name': 'Boba',
    'food': 'Sock fluff',
    'img': 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
  },
  {
    'name': 'Barnaby',
    'food': 'Tuna',
    'img': 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'
  },
  {
    'name': 'Max',
    'food': 'Whiskas Temptations',
    'img': 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
  }
]

const addCat = function(name, food, img) {
  const catSection = createCatSection();
  const catName = createCatName(name);
  const catFood = createCatFood(food)
  const image = createImage(img);

  appendSections(catSection, catName, catFood, image);
}

const createCatSection = function() {
  const catSection = document.createElement('ul');
  catSection.classList.add('cat');
  return catSection;
}

const createCatName = function(name) {
  const catName = document.createElement('li');
  catName.textContent = 'Name: ' + name;
  return catName;
}

const createCatFood = function(food) {
  const catFood = document.createElement('li');
  catFood.textContent = 'Favourite Food: ' + food;
  return catFood;
}
const createImage = function(img) {
  const catImageSection = document.createElement('li');
  const catImage = document.createElement('img');
  catImage.src = img;
  catImage.width = '500';

  catImageSection.appendChild(catImage);
  return catImageSection;
}

const appendSections = function(catSection, catName, catFood, image) {
  catSection.appendChild(catName);
  catSection.appendChild(catFood);
  catSection.appendChild(image);
  const allCats = document.querySelector('#cats');
  allCats.appendChild(catSection);

}


window.onload = app;
