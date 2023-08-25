enum AccountType {
    STUDENT = 'student',
    PARENT = 'parent',
}
interface User {
    firstName: number,
    lastName: string,
    accountType: AccountType,
}

export {
    AccountType,
    User,
};
