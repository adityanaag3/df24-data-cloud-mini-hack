import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    
    selectedProduct;
    
    handleSelected(event){
        this.selectedProduct = event.detail;

        /** SEND CATALOG EVENT */
    }
}
