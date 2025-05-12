class Search {
  fromInputSelector = 'input[role="combobox"][placeholder="Where from"]';
  toInputSelector = 'input[role="combobox"][placeholder="Where to"]';
  departureDateInputSelector = 'input[placeholder="Date of Travel"]';
  returnDateInputSelector = 'input[placeholder="Date of Return"]';
  searchButtonSelector = 'button[type="submit"]';
  flightCardsSelector = 'swiper-container.swiper-initialized.swiper-horizontal.swiper-backface-hidden';
  paginationButtonsSelector = 'ul[aria-label="Pagination"] button';
  calendarDaySelector = '.dp__cell_inner';
  itineraryButtonSelector = 'button:contains("Itinerary Summary")';
  selectFlightButtonSelector = 'button.bg-primary:contains("Select")';
  itineraryModalSelector = '.modal-content';

  enterFromCity(city = 'London') {
    cy.get(this.fromInputSelector)
      .should('be.visible')
      .click()
      .clear()
      .type(city, { delay: 100 });

    cy.get('[role="option"]')
      .contains(new RegExp(city, 'i'))
      .should('be.visible')
      .first()
      .click();
  }

  enterToCity(city = 'Amsterdam') {
    cy.get(this.toInputSelector)
      .should('be.visible')
      .click()
      .clear()
      .type(city, { delay: 100 });

    cy.get('[role="option"]')
      .contains(new RegExp(city, 'i'))
      .should('be.visible')
      .first()
      .click();
  }

  setTravelDates(departureDate = '') {
    cy.get(this.departureDateInputSelector)
      .should('be.visible')
      .invoke('removeAttr', 'readonly')
      .clear({ force: true })
      .type('{selectall}{backspace}')
      .type(departureDate, { delay: 50 });

    cy.wait(1000);
  }

  selectReturnDate(day = '31') {
    cy.get(this.returnDateInputSelector)
      .should('be.visible')
      .click();

    cy.get(this.calendarDaySelector)
      .contains(new RegExp(`^${day}$`))
      .should('be.visible')
      .click();
  }

  clickSearchButton() {
    cy.get(this.searchButtonSelector)
      .contains('Search')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  verifyFlightCardsVisible() {
    cy.get(this.flightCardsSelector)
      .should('exist')
      .and('be.visible');
  }

  checkPaginationIsVisible() {
    cy.get(this.paginationButtonsSelector)
      .should('exist')
      .and('be.visible');
  }

  verifyNumberOfPages(expectedCount) {
    cy.get('ul[aria-label="Pagination"]')
      .find('button span')
      .should('have.length', expectedCount);
  }

  selectFlight() {
    cy.get(this.selectFlightButtonSelector)
      .first()
      .should('be.visible')
      .click();
  }

  checkItineraryCount(expectedCount = '1') {
    cy.contains('button', 'Itinerary Summary')
      .should('be.visible')
      .within(() => {
        cy.get('span')
          .contains(expectedCount)
          .should('be.visible');
      });
  }

  checkItinerary() {
    cy.contains('button', 'Itinerary Summary')
      .should('be.visible')
      .click();

    cy.get(this.itineraryModalSelector)
      .should('be.visible')
      .within(() => {
        cy.contains('Flight Details').should('be.visible');
      });
  }
}

export default new Search();