import { LightningElement, track } from 'lwc';

export default class ProductTileList extends LightningElement {

    /** Current page in the product list. */
    pageNumber = 1;

    /** The number of items on a page. */
    pageSize;

    /** The total number of items matching the selection. */
    totalItemCount = 0;

    /** JSON.stringified version of filters to pass to apex */
    filters = {};

    @track products = {};


    connectedCallback() {
        this.products.data = {
            "totalSize": 16,
            "done": true,
            "records": [
              {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef1"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 25,
                "CreatedDate": "2024-03-21T03:03:13.000+0000",
                "Default_Start_Time__c": "16:00:00.000Z",
                "Description__c": "Swim alongside colorful marine life in our coral-rich tropical waters on this guided snorkeling tour.",
                "Duration_Hours__c": 4,
                "Location__c": "Coral Reef",
                "Name": "Tropical Snorkel Adventure",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 199,
                "Type__c": "Beaches & Snorkeling"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef2"
                },
                "Activity_Level__c": "High",
                "Capacity__c": 45,
                "CreatedDate": "2024-03-21T03:01:07.000+0000",
                "Default_Start_Time__c": "13:00:00.000Z",
                "Description__c": "Soar over deep canyons and lush forest canopies on our thrilling zip line tour.",
                "Duration_Hours__c": 3.5,
                "Location__c": "Canyons & Forests",
                "Name": "Canyon Zip Line Excursion",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 150,
                "Type__c": "Adventure Activities"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef3"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 30,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "10:00:00.000Z",
                "Description__c": "Join our guided meditation sessions in the tranquil serenity garden, designed to promote peace and mindfulness.",
                "Duration_Hours__c": 2,
                "Location__c": "Serenity Garden",
                "Name": "Serenity Garden Meditation",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 55,
                "Type__c": "Relaxation & Quiet Zones"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef4"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 100,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "21:00:00.000Z",
                "Description__c": "Enjoy classic films and latest blockbusters at our outdoor cinema, complete with gourmet popcorn and cozy seating.",
                "Duration_Hours__c": 6,
                "Location__c": "Outdoor Cinema Area",
                "Name": "Outdoor Movie Night",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 199,
                "Type__c": "Nightlife & Entertainment"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef5"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 20,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "16:00:00.000Z",
                "Description__c": "Escape with a book in our oceanview reading nooks, offering a quiet space to relax with stunning views.",
                "Duration_Hours__c": 3,
                "Location__c": "Library Overlooking the Ocean",
                "Name": "Oceanview Reading Nook",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 250,
                "Type__c": "Relaxation & Quiet Zones"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef6"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 55,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "10:30:00.000Z",
                "Description__c": "Greet the day with Tai Chi, a gentle exercise focusing on relaxation, held on our peaceful beachfront at sunrise.",
                "Duration_Hours__c": 1,
                "Location__c": "Beachfront",
                "Name": "Sunrise Tai Chi",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 150,
                "Type__c": "Relaxation & Quiet Zones"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef7"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 35,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "17:00:00.000Z",
                "Description__c": "Soak in our natural thermal springs, known for their healing properties and a perfect way to rejuvenate body and mind.",
                "Duration_Hours__c": 5,
                "Location__c": "Thermal Springs Area",
                "Name": "Thermal Spring Rejuvenation",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 45,
                "Type__c": "Spa & Wellness"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef8"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 55,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "16:30:00.000Z",
                "Description__c": "Experience a day of pampering with treatments that blend modern techniques with traditional holistic practices.",
                "Duration_Hours__c": 1,
                "Location__c": "Resort Spa",
                "Name": "Holistic Spa Retreat",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 25,
                "Type__c": "Spa & Wellness"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef9"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 80,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "14:00:00.000Z",
                "Description__c": "Participate in workshops focusing on wellness topics, from nutrition to stress management, led by expert practitioners.",
                "Duration_Hours__c": 3,
                "Location__c": "Wellness Center",
                "Name": "Wellness Workshops",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 149,
                "Type__c": "Spa & Wellness"
            },
            {
                "attributes": {
                    "type": "Experience__c",
                    "referenceId": "Experience__cRef10"
                },
                "Activity_Level__c": "Low",
                "Capacity__c": 50,
                "CreatedDate": "2024-03-21T23:48:18.000+0000",
                "Default_Start_Time__c": "12:00:00.000Z",
                "Description__c": "Relax in our infinity pool that merges seamlessly with the horizon, featuring underwater music and poolside service.",
                "Duration_Hours__c": 1,
                "Location__c": "Infinity Pool",
                "Name": "Infinity Pool Lounge",
                "Picture_URL__c": "https://res.cloudinary.com/btahub/image/upload/v1709063519/wftuwsl4rbsvf7y9rnzs.jpg",
                "Price__c": 50,
                "Type__c": "Swimming Pools"
            },
            ]
        };
        
    }

    handleSearchKeyChange(event) {
        this.filters = {
            searchKey: event.target.value.toLowerCase()
        };
        this.pageNumber = 1;
    }

    handleFilterChange(message) {
        this.filters = { ...message.filters };
        this.pageNumber = 1;
    }

    handlePreviousPage() {
        this.pageNumber = this.pageNumber - 1;
    }

    handleNextPage() {
        this.pageNumber = this.pageNumber + 1;
    }
}
