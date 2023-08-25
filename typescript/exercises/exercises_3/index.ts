/**

Ćwiczenie 3

Ćwiczenie:
  Uzupełnij treść poniższych funkcji wraz z ich typowaniem.
*/
type User = {
    name: string;
    type: 'user';
    languages: string[]
}

type Admin = {
    name: string;
    type: 'admin';
    role: string
}

type Person = User | Admin;

var peoples: Person[] = [
    {
        name: 'Jan',
        type: 'user',
        languages: ['php', 'js']
    },
    {
        name: 'Marek',
        type: 'admin',
        role: 'security'
    },
];
function isUser(person: Person): person is User {
    return person.type === 'user';
}
function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}
function showIntro(person: Person) {
    var additionalInformation = '';
    if (isUser(person)) {
        additionalInformation = person.languages.join(',');
    }
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    console.log("".concat(person.name, " - ").concat(additionalInformation));
}
