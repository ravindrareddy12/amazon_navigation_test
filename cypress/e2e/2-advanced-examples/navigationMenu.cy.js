describe('Amazon Navigation Test', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com'); 
  });

  it('should select a different location', () => {
    cy.get('#nav-global-location-popover-link').click();
    cy.get('#glow-ingress-line2').should('contain', 'India');
    cy.get('#unifiedLocation1ClickAddress').should('have.value', 'add-new');
  });

  it('should perform a search', () => {
    const searchText = 'laptop'; 
    cy.get('#twotabsearchtextbox')
      .type(searchText)
      .should('have.value', searchText);
    cy.get('#nav-search-submit-button').click();
    cy.url().should('include', '/s?k=laptop&ref=nb_sb_noss');
  });

  it('should open "Hello, sign in" link', () => {
    cy.get('#nav-link-accountList').click();
    cy.url().should('include', '/ap/signin');
  });

  it('should open "Returns & Orders" link', () => {
    cy.get('#nav-orders').click();
    
  });

  it('should open shopping cart', () => {
    cy.get('#nav-cart').click();
    cy.url().should('include', '/gp/cart/view.html');
  });


});
