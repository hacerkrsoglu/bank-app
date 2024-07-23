export class UserToLogin {
    Email = ''
    Password = ''
    constructor(email = '', password = '') {
        this.Email = email;
        this.Password = password;
    }
}

export class UserToRegister {
    Id = 0
    FirstName = ''
    LastName = ''
    Email = ''
    Password = ''
    GenderId = 0
    IdentityNumber = ''
    DateOfBirth = ''
    constructor(email = '', password = '', firstName = '', lastName = '', genderId = 0, identityNumber = '', dateOfBirth = '') {
        this.Email = email;
        this.Password = password;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.GenderId = genderId;
        this.IdentityNumber = identityNumber;
        this.DateOfBirth = dateOfBirth;
    }
}

export class UserToUpdate{
    Id = 0
    FirstName = ''
    LastName = ''
    Email = ''
    Password = ''

    constructor(id= 0, email = '', password = '', firstName = '', lastName = '') {
        this.Id = id,
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Password = password;
    
    }
}



