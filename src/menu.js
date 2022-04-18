import uglyPasta from './ugly-pasta.jpg';

const generateMenu = () => {

  // Header h1 element:
  const header = document.createElement('h1');
  header.classList.id = 'home-heading';
  header.innerHTML = "Here, we serve some of the following:";

  // Sub-heading h2 element:
  const subHeading = document.createElement('h2');
  subHeading.id = 'sub-heading';
  subHeading.textContent = "We'd like to serve it all, but I'm not the best chef...";

  // Div factory, baby:
  const cardFactory = (imageSrc, imageAltText, name, description) => {
    // Image:
    const foodImg = new Image();
    foodImg.src = imageSrc;
    foodImg.classList.add('menu-image');
    foodImg.imageAltText = imageAltText;

    // Item Name:
    const menuItem = document.createElement('h3');
    menuItem.classList.add('menu-item');
    menuItem.textContent = name;

    // Item Description:
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('menu-description');
    itemDescription.textContent = description;

    // Card:
    const foodCard = document.createElement('div');
    foodCard.classList.add('card');

    foodCard.appendChild(menuItem);
    foodCard.appendChild(foodImg);
    foodCard.appendChild(itemDescription);

    return foodCard;
  }

  return [header, subHeading, cardFactory(uglyPasta, "A picture of some ugly, wet pasta", "Wet Pasta", "Pasta with some type of meat, just like grandma used to make. Served in your choice of a take-out chinese container or in the cupped palms of my outstretched hands.")];
}

export default generateMenu;