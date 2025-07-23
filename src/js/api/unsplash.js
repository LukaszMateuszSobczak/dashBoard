import { setImage } from '../ui/background.js';

const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY

//function for connecting with api and downloading url for image from api or from localStorage
export const getBackground = async () => {
    try {
        loader.style.display = 'flex';
        bgcImage.style.display = 'none';

        const cached = JSON.parse(localStorage.getItem('bgImageData'));
        const now = Date.now();

        const hourInMilliseconds = 3600 * 1000;

        // checking if localStorage exist or if interval of new image is bigger than 1 hour
        if (cached && now - cached.timestamp < hourInMilliseconds) {
            setImage(cached.imgUrl, cached.author, cached.authorUrl, cached.unsplashUrl);
            return;
        }
        const typeOfImage = 'nature';
        // api connect
        const res = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${unsplashApiKey}&orientation=landscape&query=${typeOfImage}`
        );
        const data = await res.json();
        const imgUrl = data.urls.full;
        const author = data.user.name;
        const authorUrl = data.user.portfolio_url;
        const unsplashUrl = 'https://unsplash.com/?utm_source=mementum_app_2&utm_medium=referral';

        //waiting for image, showing spinner
        const img = new Image();
        img.src = imgUrl;
        img.onload = async () => {
            await fetch(data.links.download_location + `?client_id=${unsplashApiKey}`); //unsplash info about using photo
            localStorage.setItem(
                'bgImageData',
                JSON.stringify({
                    imgUrl,
                    author,
                    authorUrl,
                    timestamp: now,
                    unsplashUrl,
                })
            );
            setImage(imgUrl, author, authorUrl, unsplashUrl);
        };
    } catch (error) {
        console.log(error);
        setImage(
            'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3ODA2NTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTMwMTI3NTF8&ixlib=rb-4.1.0&q=85',
            'Nitish Meena',
            'http://www.medium.com/@nitishq',
            'https://unsplash.com/?utm_source=mementum_app_2&utm_medium=referral'
        );
    }
};
