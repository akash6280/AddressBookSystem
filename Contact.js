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
try{
    let contact = new Contact("Tony","Stark","Hosur","Banglore","Karnataka",567654,8789878656,"stark@gmail.com");
    console.log(contact.toString());
}catch(e){
    console.error(e);
}