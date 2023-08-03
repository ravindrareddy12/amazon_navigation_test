// File: navigationMenu.spec.js
describe("Amazon Navigation Menu Test", () => {
    beforeEach(() => {
      cy.visit("https://www.amazon.com/");
    });
  
    it("should verify the visibility of the navigation menu", () => {
      cy.get("#nav-belt").should("be.visible");
    });
  
    it("should contain main categories in the navigation menu", () => {
      const mainCategories = [
        "Shop by Department",
        "Today's Deals",
        "Best Sellers",
        "Customer Service",
        "New Releases",
        "Find a Gift",
      ];
      mainCategories.forEach((category) => {
        cy.contains(category).should("be.visible");
      });
    });
  
    // Add more test cases for the remaining scenarios
  });
  