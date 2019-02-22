describe(`Dave's rad Cypress tests`, () => {
  it(`Shows "Medium" for standard run`, () => {
    cy.visit('/').contains('Your new shift size: Medium');
  });

  it(`Shows "Large" for large run`, () => {
    cy.visit('/?scenario=large').contains('Your new shift size: Large');
  });
});
