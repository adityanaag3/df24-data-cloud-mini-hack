import { LightningElement } from 'lwc';

export default class Consent extends LightningElement {

    rendered = false;

    optInDisabled = false;
    optOutDisabled = false;

    renderedCallback(){
        if(!this.rendered){
            this.rendered = true;
            if(SalesforceInteractions?.currentConsentOptInExists()){
                this.optInDisabled = true;
            } else {
                this.optOutDisabled = true;
            }
        }
    }

    handleOptIn(){
        /** CODE TO OPT IN GOES HERE */
        this.optInDisabled = true;
        this.optOutDisabled = false;
    }

    handleOptOut(){
        /** CODE TO OPT OUT GOES HERE */
        this.optOutDisabled = true;
        this.optInDisabled = false;
    }

}