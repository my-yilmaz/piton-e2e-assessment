Feature: Login Module

Scenario: TC01 - User should see login form if not authenticated. Login Form should contain username password and login button

Given I am on the login page
Then I should see username field the login form
Then I should see password field the login form
Then I should see login button at the login form

Scenario: TC02 - User should see validation errors if click the login button without fill the login form

Given I am on the login page
When I go to the login page and click the login button without filling out the form
Then I should see validation errors for the username and password fields

Scenario: TC03 - User should navigate to the dashboard and see welcome message if authenticate successfully

Given I am on the login page
When I login with username and password
Then I should see a welcome message on the dashboard
