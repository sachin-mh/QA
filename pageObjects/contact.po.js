const { expect}= require("@playwright/test");

exports.ContactPage = class ContactPage{
    constructor(page){
        this.page=page;
        this.addcontact='//button[@id="add-contact"]';
        this.firstname='#firstname';
        this.lastname='#lastname';
        this.dob='//inpot[@placeholder="address 1"]';
        this.email='//input[@id="email"]';
        this.phone='//input[@id="phone"]';
        this.address = '//input[@placeholder="Address 1"]';
        this.city = '//input[@placeholder="City"]';
        this.state = '//input[@placeholder="State or Province"]';
        this.postal ='//input[@placeholder="Postal Code"]';
        this.summit='';

    }
}