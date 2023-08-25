/*
  Ćwiczenie 1

  Utwórz typ płatności zawierający kwotę, walutę (tylko 'PLN') oraz datę
*/

interface Payment {
    amount: number;
    curreny: 'PLN';
    date: Date;
}


/*
  Ćwiczenie 2

  Utwórz typ produktu zawierający nazwę, cenę, ilość dostępnych sztuk, rodzaj produktu (tylko 'telefon' i 'komputer')
*/

interface Product {
    name: string;
    price: number;
    availability: number;
    type: 'phone' | 'computer'
}


/*
  Ćwiczenie 3

  Utwórz typ zamówienia zawierający informację o płatności (ćwiczenie 1), produkcie (ćwiczenie 2) oraz datę zamówienia oraz statusem (tylko 'rozpoczęta', 'w trakcie', 'zakończona')
*/

interface Order {
    payment: Payment;
    product: Product;
    date: Date;
    status: 'started' | 'finished' | 'in progress'
}



/*
  Ćwiczenie 4

  Utwórz funkcję która zwróci informację o produkcie (ćwiczenie 2) z przekazanego do niej zamówienia (ćwiczenie 3)
*/


function getProduct(order: Order): Product {
    return order.product;
}


/*
  Ćwiczenie 5

  Utwórz funkcję która zwróci informację o płatnośći (ćwiczenie 1) z przekazanego do niej zamówienia (ćwiczenie 3)
*/

function getPayment(order: Order): Payment {
    return order.payment;
}


