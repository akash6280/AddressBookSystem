class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { 
        return this._firstName;
     }
    set firstName(firstName) {
        let firstNameRegex=RegExp('^[A-Z][a-zA-Z0-9]{2,}$')
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw 'First name is invalid';    
    }

    get lastName() { 
        return this._lastName;
     }
    set lastName(lastName) {
        let lastNameRegex=RegExp('^[A-Z][a-zA-Z0-9]{2,}$')
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw 'Last name is invalid';   
    }

    get address() { 
        return this._address;
     }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9]{4,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else {
            throw 'Address is invalid';
        }
    }

    get city() { 
        return this._city;
     }
    set city(city) {
        let cityRegex = RegExp('^[a-zA-Z]{4,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else {
            throw "City is Invalid";
        }
    }

    get state() { 
        return this._state;
     }
    set state(state) {
        let stateRegex = RegExp('^[a-zA-Z]{4,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "State is Invalid";
        }
    }

    get zip() {
         return this._zip;
     }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9][0-9]{2}[\\s]{0,1}[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw "Zip code is invalid";
        }
    }

    get phoneNumber() { 
        return this._phoneNumber;
     }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "Phone number is Invalid";
        }
    }

    get email() {
         return this._email;
         }
    set email(email) {
        let emailRegex = RegExp("^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9](([.+-_][a-zA-Z0-9]+)?)[@][a-zA-Z0-9]+[.]([a-z]{2,3})([.][a-zA-z]{2})?$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email is Invalid";
        }
    }

    toString() {
        return "first name="+ this.firstName +",last name="+ this.lastName +", address="+ this.address+", city="+ 
                this.city+", state="+ this.state+", zip="+ this.zip+", phone="+ this.phoneNumber+", email="+ this.email;
    }

}
let contact1 = new Contact("Tony","Stark","Hosur","Bangalore","Karnataka",567654,8789878656,"stark@gmail.com");
let contact2 = new Contact("Mark","Lewis","Bellandur","Bangalore","Karnataka",567324,7364586372,"mark@gmail.com");
let addressBook=new Array();
addContact(contact1);
addContact(contact2);
function addContact(contact){
    if (!contactPresent(contact.firstName))
        addressBook.push(contact)
}
function contactPresent(firstName) {
    return addressBook.some(contact => contact.firstName == firstName);
}

function editContactInformation(choice,firstName,newValue) {
    if (contactPresent(firstName)) {
        switch (choice) {
            case 1: addressBook.find((contact) => contact.firstName == firstName).firstName = newValue;
                break;
            case 2:
                addressBook.find((contact) => contact.firstName == firstName).lastName = newValue;
                break;
            case 3:
                addressBook.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case 4:
                addressBook.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case 5:
                addressBook.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case 6:
                addressBook.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case 7:
                addressBook.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case 8:
                addressBook.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Invalid index");
        }
    }
    else {
        console.log("contact not present");
    }
}

editContactInformation(8,"Tony","tony@gmail.com");
console.log(addressBook);
function deleteContact(firstName){
    if(contactPresent(firstName))
    addressBook=addressBook.filter(contact=>contact.firstName != firstName);
}

//deleteContact("Tony");
console.log(addressBook);

function getCount(){
    let count = addressBook.reduce((total) => total+=1, 0);
    console.log(count);
}
getCount();

function searchPersonAcrossState(firstName,state) {
   console.log(addressBook.filter(contact=>contact.state==state&&contact.firstName==firstName));
}

function searchPersonAcrossCity(firstName,city) {
    console.log(addressBook.filter(contact=>contact.city==city&&contact.firstName==firstName));
}

searchPersonAcrossCity("Tony","Bangalore");
searchPersonAcrossState("Mark","Karnataka");