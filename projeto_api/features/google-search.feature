@search
Feature: Searching for vote cards app
  As an internet user
  In order to find out more about the itunes vote cards app
  I want to be able to search for information about the itunes vote cards app
 
  Scenario: Google search for vote cards app
    When I search Google for "Pontos turisticos em goiânia"
    Then I should see some results


  Scenario: I should see some results
    When I type query as "Teste"
    Then I submit