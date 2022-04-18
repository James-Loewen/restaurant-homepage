const generateHome = () => {

  // Header h1 element:
  const header = document.createElement('h1');
  header.classList.id = 'home-heading';
  header.innerHTML = "This Restaurant is a <span class=\"strike\">Very Good</span> Restaurant";

  // Sub-heading h2 element:
  const subHeading = document.createElement('h2');
  subHeading.id = 'sub-heading';
  subHeading.textContent = "Don't believe me? I totally didn't write, uh, the following:";

  // Card div factory attempt:
  function cardFactory(quote, source) {
    // h3 quote
    const quoteElem = document.createElement('h3');
    quoteElem.classList.add('testimonial');
    quoteElem.textContent = quote;

    // span attributed to
    const sourceElem = document.createElement('span');
    sourceElem.classList.add('credit');
    sourceElem.textContent = source;

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.appendChild(quoteElem);
    cardDiv.appendChild(sourceElem);

    return cardDiv;
  }

  return [header, subHeading, cardFactory('What this place served me can only be described as "food."', "A customer"), cardFactory("I dated the owner's daughter, I think... I'm not sure I'm reviewing the right restaurant.", "Almost son-in-law"), cardFactory("I don't really understand how this guy can afford to pay his bills...", "Greg, the landlord"), cardFactory("Meow.", "Local dumpster resident")];
}

export default generateHome