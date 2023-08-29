import { Burger, BurgerData } from './../../common/types';

type BurgerResponse = {
    [id: string]: BurgerData
}

export const getBurgers = async (): Promise<Burger[]> => {
    const response = await fetch('https://rest-api-b6410.firebaseio.com/burgers.json');
    const data: BurgerResponse = await response.json();
    const formattedData = Object.keys(data).map(key => ({ ...data[key], id: key }));

    return formattedData;
}

export const getBurger = async (id: string): Promise<BurgerData> => {
    const response = await fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`);
    const data = await response.json();

    if (!data) {
        throw Error('The response was null')
    }

    return data;
}

export const postBurger = async (data: BurgerData): Promise<Response> => {
    return fetch(`https://rest-api-b6410.firebaseio.com/burgers.json`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export const deleteBurger = async (id: string): Promise<Response> => {
    return fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`, {
        method: 'DELETE'
    });
}