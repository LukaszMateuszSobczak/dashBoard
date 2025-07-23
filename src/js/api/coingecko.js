import { updateCrypto } from '../ui/crypto.js';

const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

const vsCurrency = 'usd';
const coins = ['bitcoin', 'dogecoin', 'ethereum', 'litecoin'];
const endpoint = `/coins/markets?vs_currency=${vsCurrency}&ids=${coins.join(',')}&x_cg_demo_api_key=${apiKey}`;

export const getCrypto = async () => {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3${endpoint}`);
        const data = await res.json();
        updateCrypto(data);
    } catch (error) {
        console.log(error);
    }
};
