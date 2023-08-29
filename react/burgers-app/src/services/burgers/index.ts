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