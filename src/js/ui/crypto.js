const cryptoContainer = document.querySelector('#crypto');
export const updateCrypto = (cryptoArray) => {
    const fragment = document.createDocumentFragment();

    for (let crypto of cryptoArray) {
        const cryptoBox = document.createElement('div');

        const cryptoImg = document.createElement("img")
        cryptoImg.src = crypto.image
        cryptoImg.style.width = "1em"
        cryptoImg.style.height = "1em"
        cryptoBox.append(cryptoImg)

        cryptoBox.className = 'row';
        const cryptoName = document.createElement('p');
        cryptoName.textContent = `${crypto.name}:`;
        cryptoBox.append(cryptoName);

        const cryptoValue = document.createElement('p');
        cryptoValue.textContent = `${crypto.current_price.toLocaleString()} $`;
        cryptoBox.append(cryptoValue);

        fragment.append(cryptoBox);
    }

    cryptoContainer.append(fragment);
};