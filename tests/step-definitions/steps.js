import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import EventPage from '../pageobjects/event.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {

    await pages[page].open()
});
Then('I should see username field the login form', async () => {
    // login formunun username alanini icerip icermedigini kontrol ediyorum
    await expect(LoginPage.inputUsername).toBeExisting();
});

Then('I should see password field the login form', async () => {
    // login formunun password alanini icerip icermedigini kontrol ediyorum
    await expect(LoginPage.inputPassword).toBeExisting();

});
Then('I should see login button at the login form', async () => {
    // login formunun login button'unu icerip icermedigini kontrol ediyorum
    await expect(LoginPage.btnSubmit).toBeExisting();
});

When('I go to the login page and click the login button without filling out the form', async () => {
    // Kullanici bilgilerini girmeden login butonuna tikladim
    await LoginPage.btnSubmit.click();
});

Then('I should see validation errors for the username and password fields', async () => {
   // Username hata mesajinin "Username field is required" metni icerip icermedigini kontrol ediyorum
    await expect(LoginPage.requiredUsernameMessage).toHaveTextContaining("Username field is required");
    // Username hata mesajnin "Password field is required" metni icerip icermedigini kontrol ediyorum
    await expect(LoginPage.requiredPasswordMessage).toHaveTextContaining("Password field is required");
});

When('I login with username and password', async () => {
    // Kullanici bilgileri ile giris yapiyorum
    await LoginPage.login()
    
});

Then('I should see a welcome message on the dashboard', async () => {
    // login yaptiktan sonra karsimiza "Welcome Automation Test User" yazisinin cikip cikmadigini kontrol ediyorum
    await expect(LoginPage.welcomeMessage).toHaveTextContaining("Welcome Automation Test User");
});

When(/^I click the Create Event button$/, async () => {
    // Kullanici bilgileri ile giris yapiyorum
    await EventPage.createEvent.click();
});

Then('I should see the create event title and Create New Event button at the form', async () => {
    // Create event butonuna bastiktan sonra create event basligini Create New Event butonunu gormeliyim 
    await expect(EventPage.createEventTitle).toHaveTextContaining("Create Event");
    await expect(EventPage.btnCreateNewEventSubmit).toBeExisting();
});

When('I click the Create button without filling the form fields', async () => {
    // Create event butonuna tikliyorum
    await EventPage.btnCreateNewEventSubmit.click();
});

Then('I should see validation errors for the title and user data date fields', async () => {
    // Hata mesajlarini olup olmadigini kontrol ediyorum
    await expect(EventPage.requiredEventNameMessage).toHaveTextContaining("Event name field is required");
    await expect(EventPage.requiredEventDateMessage).toHaveTextContaining("Please choose a valid date");
    await expect(EventPage.requiredFirstNameMessage).toHaveTextContaining("Participant name is required");
    await expect(EventPage.requiredLastNameMessage).toHaveTextContaining("Participant last name is required");
    await expect(EventPage.requiredContactMessage).toHaveTextContaining("Please enter email or phone number");
});


When('I click the Add Participant button', async () => {
    // Add Participant butonuna tikliyorum
    await EventPage.btnAddParticipant.click();
});
Then('I should see a new participant field added to the form', async () => {
    // Yeni Add Participant olusup olusmadigini kontrol ediyorum
    await expect(EventPage.newParticipant).toBeDisplayed();
});

When('I remove all participants from the form', async () => {
    // Butun Participant siliyorum
    await EventPage.removeParticipant.click();
});
Then('I should see an error message saying that "Please add participant!"', async () => {
    // "Please add participant!" uyarisinin olup olmadigini kontrol ediyorum
    await expect(EventPage.pleaseAddParticipant).toBeDisplayed();
});

When('I fill in the form fields with valid data', async () => {
    // Gerekli bilgileri dolduruyorum
    await EventPage.eventNameBox.setValue('Blue');
    await browser.pause(1000);
    await EventPage.eventDateBoxIcon.click();
    await browser.pause(1000);
    await EventPage.clickDate.click();
    await browser.pause(1000);
});

When('I click the Create New button', async () => {
    // Create New butto tikliyorum
    await EventPage.btnCreateNewEventSubmit.click();
});

Then('I should be redirected to the dashboard page', async () => {
    // dashboard yonlendirildigimi kontrol ediyorum
    await expect(EventPage.createEvent).toBeDisplayed;
});

Then('I should see a success message saying that the event was created successfully', async () => {
    // Etkinligin basariyla olusturuldugunu belirten bir basari mesajı gormeliyim
    await expect(EventPage.createSuccessMessage).toBeDisplayed();
});

When('I click the Edit button for the event', async () => {
    // Edit button tikliyorum
    await EventPage.btnEdit.click();
});

Then('I should see the edit event form, with the fields pre-filled with the existing event data', async () => {
    // Bilgileri guncelleyebilmdigimi kontrol ediyorum
    await browser.pause(2000);
    await expect(EventPage.createSuccessMessage).toBeDisplayed();
    await expect(EventPage.eventDateBox).toBeDisplayed();
    await expect(EventPage.eventDescriptionBox).toBeDisplayed();
});
When('I fill in the Description field', async () => {
    // Description alanini dolduruyorum
    await EventPage.eventDescriptionBox.setValue('BlueRed');
});

Then('I click the Update button', async () => {
    // UpdateEvent tikladim
    await EventPage.btnUpdateEvent.click();
   
});

Then('I should see a success message saying that the event was updated successfully', async () => {
    // Update Success Message  gormeliyim
    await expect(EventPage.updateSuccessMessage).toBeDisplayed();
   
});

Then('I visit the dashboard page', async () => {
    // dashboard sayfasinda olmaliyim
    await expect(getUrl()).toEqual('https://e2e-assessment.piton.com.tr/dashboard');
   
});