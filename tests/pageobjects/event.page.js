

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EventPage extends Page {
    /**
     * define selectors using getter methods
     */
    get createEvent () {
        return $("//span[@class='mat-button-wrapper']");
    }

    get createEventTitle(){
        return $("//h1[text()='Create Event']");
    }

    get btnCreateNewEventSubmit () {
        return $("//span[text()='Create New Event']");
    }

    get requiredEventNameMessage(){
        return $("//*[text()='Event name field is required']");
    }

    get requiredEventDateMessage(){
        return $("//*[text()='Please choose a valid date']");
    }

    get requiredFirstNameMessage(){
        return $("//*[text()='Participant name is required']");
    }

    get requiredLastNameMessage(){
        return $("//*[text()='Participant last name is required']");
    }

    get requiredContactMessage(){
        return $("//*[text()='Please enter email or phone number']");
    }
    
    get btnAddParticipant(){
        return $("//*[text()='Add Participant']");
    }

    get newParticipant(){
        return $("(//tr[@class='ng-star-inserted'])[2]");
    }
    
    get removeParticipant(){
        return $("(//*[text()='delete'])[1]");
    }
    
    get pleaseAddParticipant(){
        return $("//*[text()='Please add participant!']");
    }

    get eventNameBox(){
        return $("//*[@id='name']");
    }
    get eventDescriptionBox(){
        return $("//*[@id='description']");
    }
    get eventDateBox(){
        return $("//*//*[text()='Event Date']");
    }

    get eventDateBoxIcon(){
        return $("//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted']");
    }

    get clickDate(){
        return $("//*[text()=' 1 ']");
    }

    get clickDate2(){
        return $("//*[text()=' 2 ']");
    }

    get firstNameBox(){
        return $("//*[@data-placeholder='Enter first name']");
    }

    get lastNameBox(){
        return $("//*[@data-placeholder='Enter last name']");
    }

    get cantactBox(){
        return $("//*[@data-placeholder='Enter email or phone']");
    }

    get createSuccessMessage(){
        return $("//*[text()='Event created successfully']");
    }

    get btnEdit(){
        return $("//*[text()='edit']");
    }

    get btnUpdateEvent(){
        return $("//*[text()='Update Event']");
    }
    get updateSuccessMessage(){
        return $("//*[text()='Event updated successfully']");
    }
}

export default new EventPage();
