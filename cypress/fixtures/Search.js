class Search {
  getFromInput = () => cy.get('input[placeholder="Where from"]');
  getToInput = () => cy.get('input[placeholder="Where to"]');

  getDepartureDateInput = () =>
    cy.get('input[placeholder="Date of Travel"]').should('exist');

  getReturnDateInput = () =>
    cy.get('input[placeholder="Date of Return"]').should('exist');

  getSearchButton = () =>
    cy.get('button[type="submit"]').contains('Search');

  getFlightCards = () =>
    cy.get('div.flex.flex-col.gap-y-8.rounded-2xl.border');

  getPaginationButtons = () =>
    cy.get('ul[aria-label="Pagination"] button');

  selectFlight = () =>
    cy.get('[data-cy="select-flight-button"]');

  selectFirstFlight() {
    this.selectFlight().first().click();
  }

  checkItineraryCount = () => {
    return cy.contains('span', 'Itinerary Summary')
             .parent()
             .find('span.bg-danger');
  }

  checkItineraryBadge(expectedCount = '1') {
    this.checkItineraryCount()
      .should('be.visible')
      .and('contain', expectedCount);
  }

  selectCityFromDropdown = (city) => {
    cy.get('[role="option"]')
      .contains(new RegExp(city, 'i'))
      .first()
      .click();
  }

  enterFromCity(city) {
    this.getFromInput().clear().type(city);
    this.selectCityFromDropdown(city);
  }

  enterToCity(city) {
    this.getToInput().clear().type(city);
    this.selectCityFromDropdown(city);
  }

  setTravelDates(departureDate, returnDate) {
    this.getDepartureDateInput()
      .invoke('removeAttr', 'readonly')
      .clear()
      .type(departureDate);

    this.getReturnDateInput()
      .invoke('removeAttr', 'readonly')
      .clear()
      .type(returnDate);
  }

  searchFlights(fromCity, toCity, departureDate, returnDate) {
    this.enterFromCity(fromCity);
    this.enterToCity(toCity);
    this.setTravelDates(departureDate, returnDate);
    this.getSearchButton().click();
  }

  verifyFlightCardsVisible() {
    this.getFlightCards()
      .should('exist')
      .and('have.length.greaterThan', 0)
      .each((card) => {
        cy.wrap(card).should('be.visible');
      });
  }

  checkPaginationIsVisible() {
    cy.get('ul[aria-label="Pagination"]')
      .should('exist')
      .and('be.visible');
  }

  verifyNumberOfPages(expectedCount) {
    this.getPaginationButtons()
      .not('[aria-disabled=true]')
      .should('have.length', expectedCount);
  }
}

export default new Search();