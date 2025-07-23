//function for setting image
export const setImage = (imgUrl, author, authorUrl, unsplashUrl) => {
    const bgcImage = document.querySelector('#bgcImage');
    const loader = document.querySelector('#loader');
    const imgAuthor = document.querySelector('#imageAuthor');

    loader.style.display = 'none';
    bgcImage.style.backgroundImage = `url("${imgUrl}")`;
    bgcImage.style.display = 'block';
    createAuthor(author, authorUrl, unsplashUrl, imgAuthor);
};

// function for author element
const createAuthor = (author, authorUrl, unsplashUrl, destinationElement) => {
    const fragment = document.createDocumentFragment();

    destinationElement.textContent = 'Photo by ';

    const anchorAuthor = document.createElement('a');
    anchorAuthor.href = authorUrl;
    anchorAuthor.target = '_blank';
    anchorAuthor.textContent = author;
    fragment.appendChild(anchorAuthor);

    const textNode = document.createTextNode(' on ');
    fragment.appendChild(textNode);

    const anchorUnsplash = document.createElement('a');
    anchorUnsplash.href = unsplashUrl;
    anchorUnsplash.target = '_blank';
    anchorUnsplash.textContent = 'Unsplash';
    fragment.appendChild(anchorUnsplash);

    destinationElement.appendChild(fragment);
};