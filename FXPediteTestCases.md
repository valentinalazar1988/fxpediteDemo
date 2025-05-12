# FXPedite Cyprus LTD – QA Assessment by Valentina Lazar

## 1. Bug Report

### **Bug Title**: Cabin Class Filter Returns No Results

- **Steps to Reproduce**:
    1. Navigate to [https://web.demotm.journeymentor.net](https://web.demotm.journeymentor.net)
    2. Select a valid origin and destination (e.g., OTP → LHR)
    3. Choose departure date(s)
    4. Select **Business** or **First Class** as the cabin
    5. Click **Search**

- **Expected Result**:
  > Relevant Business or First Class flights should be listed.

- **Actual Result**:
  > No results are shown, even for popular international routes.

- **Environment**:
    - Browser: Chrome 123.0
    - OS: macOS Ventura 13.6

- **Severity**: **High**

---

## 2. Test Case Writing (Core Feature: Search Functionality)

| Test Case ID | Scenario                          | Steps                                                                 | Expected Result                             | Priority |
|--------------|-----------------------------------|-----------------------------------------------------------------------|---------------------------------------------|----------|
| TC-001       | One-way flight search             | Enter origin, destination, date, click "Search"                       | Matching flights are displayed               | High     |
| TC-002       | Round trip with return date       | Select round-trip, fill both dates                                    | Round trip flights are listed                | High     |
| TC-003       | Invalid airport code              | Input random 3-letter code like `XXX`                                 | Error or “no results” shown                  | Medium   |
| TC-004       | Bags exceed allowed limit         | Choose 1 adult, attempt to add 3 bags                                 | Restriction or warning shown                 | High     |
| TC-005       | Business class availability       | Select Business cabin for a major route                               | Business flights shown or informative message| High     |
| TC-006       | Filter yields no results          | Add restrictive filters                                               | “No flights found” message appears           | Medium   |
| TC-007       | Browser Back button behavior      | Perform a search, hit browser back                                    | Previous search form is restored             | High     |
| TC-008       | Mobile date picker usability      | Open on mobile, tap date input                                        | Calendar opens and input works properly      | Medium   |

###Bonus: Gherkin Syntax

```gherkin
Scenario: Selecting a round-trip flight
Given I open the flight booking site
And I select "Round Trip"
When I enter "OTP" as origin and "LHR" as destination
And I pick valid departure and return dates
Then I should see round-trip flight results