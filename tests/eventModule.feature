Feature: Event Module

Scenario: TC01 - User should view create event form if click the Create Event button on dashboard
Given I am on the login page
When I login with username and password
When I click the Create Event button
Then I should see the create event title and Create New Event button at the form

Scenario: TC02 - User should view validation errors if click the Create Event button without fill the event form
When I click the Create button without filling the form fields
Then I should see validation errors for the title and user data date fields

Scenario: TC03 - User should be able to add new participant when click the Add Participant button
When I click the Add Participant button
Then I should see a new participant field added to the form

Scenario: TC04 - User should view error message if removes all participants
Given I am on the login page
When I login with username and password
When I click the Create Event button
When I remove all participants from the form
Then I should see an error message saying that "Please add participant!"

Scenario: TC05 - User should be able to create new event if fills all required fields and redirect to dashboard page with create successful message
When I fill in the form fields with valid data
When I click the Create New button
Then I should see a success message saying that the event was created successfully
Then I should be redirected to the dashboard page

Scenario: TC06 - User should be able to edit event. When user click the edit button all event fields must be filled according to editing event
When I click the Edit button for the event
Then I should see the edit event form, with the fields pre-filled with the existing event data

Scenario: TC07 - User should be able to update event if required fields filled and redirect to dashboard page with update successful message
When I fill in the Description field
When I click the Update button
Then I should see a success message saying that the event was updated successfully
Then I should be redirected to the dashboard page



