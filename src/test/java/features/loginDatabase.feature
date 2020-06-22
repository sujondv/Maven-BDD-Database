Feature: Login Page
	As a valid user I want a login page sothat only authentic user have access
	
	Scenario: Valid users should be able to login
	Given a valid user goes to techfios site 
	Then techfios site should display
	When user logs in with valid credentials UserName and Password
	Then Dashboard page should display
	
	
	