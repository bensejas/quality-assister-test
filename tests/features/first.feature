Feature: Example feature
  As a user of Quality Assister
  I want to have a quality assister
  So that I can concentrate on creating quality software

  Scenario: Reading title
    Given I am a user
    When I go to the Quality Assister main webpage
    Then I should see "Quality Assister" as the page title