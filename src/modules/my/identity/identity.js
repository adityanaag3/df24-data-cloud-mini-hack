import { LightningElement } from 'lwc';

export default class Login extends LightningElement {
    
    rendered = false;
    
    anonymousId;

    renderedCallback(){
        if(!this.rendered){
            this.rendered = true;
            this.anonymousId = SalesforceInteractions?.getAnonymousId();
        }
    }
}