import Search from '../fixtures/Search';

describe('Flight Search - perform a search for flights from London to Amsterdam with specific travel dates', () => {
  const url = 'https://web.demotm.journeymentor.net';
    const fromCity = 'London';
    const toCity = 'Amsterdam';
    const departureDate = '12/06/2025';
    const returnDate = '14/06/2025';

    beforeEach(() => {
      cy.visit(url);
      Search.searchFlights(fromCity, toCity, departureDate, returnDate);
    });


    it('should display pagination controls on the search results page', () => {
      Search.checkPaginationIsVisible();
    });

    it('should show exactly 3 pages in the pagination component', () => {
      Search.verifyNumberOfPages(3);
    });

    it('should display at least one flight card in the search results', () => {
      Search.verifyFlightCardsVisible();
    });

    it('should show exactly 3 pages in the pagination component', () => {
          Search.selectFirstFlight();
        });

        it('should display at least one flight card in the search results', () => {
          Search.checkItineraryBadge();
        });


});
