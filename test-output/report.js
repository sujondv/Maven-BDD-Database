$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginDatabase.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "As a valid user I want a login page sothat only authentic user have access",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17390800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a valid user goes to techfios site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "techfios site should display",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user logs in with valid credentials UserName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "DatabaseLoginSteps.a_valid_user_goes_to_techfios_site()"
});
formatter.result({
  "duration": 7741304300,
  "status": "passed"
});
formatter.match({
  "location": "DatabaseLoginSteps.techfios_site_should_display()"
});
formatter.result({
  "duration": 3013295600,
  "status": "passed"
});
formatter.match({
  "location": "DatabaseLoginSteps.user_logs_in_with_valid_credentials_UserName_and_Password()"
});
formatter.result({
  "duration": 2469888800,
  "status": "passed"
});
formatter.match({
  "location": "DatabaseLoginSteps.dashboard_page_should_display()"
});
formatter.result({
  "duration": 3654409000,
  "status": "passed"
});
});