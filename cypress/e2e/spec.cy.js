describe('Chart Builder App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Chart is correctly generated', () => {
    //Navigate to line chart
    cy.findByText('Line').click();

    //Input titles
    cy.findByLabelText('Chart title').type('Cats vs Dogs');
    cy.findByLabelText('X label').type('Cats');
    cy.findByLabelText('Y label').type('Dogs');

    //Input all x and y inputs
    cy.findAllByLabelText('X').first().type('1');
    cy.findAllByLabelText('Y').first().type('3');
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(1).type('2'); 
    cy.findAllByLabelText('Y').eq(1).type('7'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(2).type('3'); 
    cy.findAllByLabelText('Y').eq(2).type('15'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(3).type('4'); 
    cy.findAllByLabelText('Y').eq(3).type('25'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(4).type('5'); 
    cy.findAllByLabelText('Y').eq(4).type('40'); 
    
    //cy.findByLabelText('Chart color').click();

    //Generate chart
    cy.findByText('Generate chart').click();

    //Assert chart image exists
    cy.findByRole('img').should('exist');
  });

  it('Chart data is maintained across pages', () => {
    //Navigate to line chart
    cy.findByText('Line').click();

    //Input titles
    cy.findByLabelText('Chart title').type('Cats vs Dogs');
    cy.findByLabelText('X label').type('Cats');
    cy.findByLabelText('Y label').type('Dogs');

    //Input all x and y inputs
    cy.findAllByLabelText('X').first().type('1');
    cy.findAllByLabelText('Y').first().type('3');
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(1).type('2'); 
    cy.findAllByLabelText('Y').eq(1).type('7'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(2).type('3'); 
    cy.findAllByLabelText('Y').eq(2).type('15'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(3).type('4'); 
    cy.findAllByLabelText('Y').eq(3).type('25'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(4).type('5'); 
    cy.findAllByLabelText('Y').eq(4).type('40'); 

    //cy.findByLabelText('Chart color').click();
    
    //Navigate to scatter
    cy.findByText('Scatter').click();

    //Assert titles maintained across pages
    cy.findByLabelText('Chart title').should('have.value', 'Cats vs Dogs');
    cy.findByLabelText('X label').should('have.value', 'Cats');
    cy.findByLabelText('Y label').should('have.value', 'Dogs');

    //Assert x and y values maintained across pages
    cy.findAllByLabelText('X').eq(0).should('have.value', '1');
    cy.findAllByLabelText('Y').eq(0).should('have.value', '3');
  
    cy.findAllByLabelText('X').eq(1).should('have.value', '2');
    cy.findAllByLabelText('Y').eq(1).should('have.value', '7');
  
    cy.findAllByLabelText('X').eq(2).should('have.value', '3');
    cy.findAllByLabelText('Y').eq(2).should('have.value', '15');
  
    cy.findAllByLabelText('X').eq(3).should('have.value', '4');
    cy.findAllByLabelText('Y').eq(3).should('have.value', '25');
  
    cy.findAllByLabelText('X').eq(4).should('have.value', '5');
    cy.findAllByLabelText('Y').eq(4).should('have.value', '40');

    //Navigate to bar
    cy.findByText('Bar').click();

    //Assert titles maintained across pages
    cy.findByLabelText('Chart title').should('have.value', 'Cats vs Dogs');
    cy.findByLabelText('X label').should('have.value', 'Cats');
    cy.findByLabelText('Y label').should('have.value', 'Dogs');

    //Assert x and y values maintained across pages
    cy.findAllByLabelText('X').eq(0).should('have.value', '1');
    cy.findAllByLabelText('Y').eq(0).should('have.value', '3');
  
    cy.findAllByLabelText('X').eq(1).should('have.value', '2');
    cy.findAllByLabelText('Y').eq(1).should('have.value', '7');
  
    cy.findAllByLabelText('X').eq(2).should('have.value', '3');
    cy.findAllByLabelText('Y').eq(2).should('have.value', '15');
  
    cy.findAllByLabelText('X').eq(3).should('have.value', '4');
    cy.findAllByLabelText('Y').eq(3).should('have.value', '25');
  
    cy.findAllByLabelText('X').eq(4).should('have.value', '5');
    cy.findAllByLabelText('Y').eq(4).should('have.value', '40');
  });

  it('Saving a chart to the “gallery” ', () => {
    //Navigate to line chart
    cy.findByText('Line').click();

    //Input titles
    cy.findByLabelText('Chart title').type('Cats vs Dogs');
    cy.findByLabelText('X label').type('Cats');
    cy.findByLabelText('Y label').type('Dogs');

    //Input all x and y inputs
    cy.findAllByLabelText('X').first().type('1');
    cy.findAllByLabelText('Y').first().type('3');
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(1).type('2'); 
    cy.findAllByLabelText('Y').eq(1).type('7'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(2).type('3'); 
    cy.findAllByLabelText('Y').eq(2).type('15'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(3).type('4'); 
    cy.findAllByLabelText('Y').eq(3).type('25'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(4).type('5'); 
    cy.findAllByLabelText('Y').eq(4).type('40'); 
    
    //cy.findByLabelText('Chart color').click();

    //Generate chart
    cy.findByText('Generate chart').click();

    //Save chart to gallery
    cy.findByText('Save chart').click();

    //Navigate to the gallery
    cy.findByText('Gallery').click();

    //Assert chart exists
    cy.findByText('Cats vs Dogs').should('exist');
  });

  it('Re-opening a saved chart', () => {
    //Navigate to line chart
    cy.findByText('Line').click();

    //Input titles
    cy.findByLabelText('Chart title').type('Cats vs Dogs');
    cy.findByLabelText('X label').type('Cats');
    cy.findByLabelText('Y label').type('Dogs');

    //Input all x and y inputs
    cy.findAllByLabelText('X').first().type('1');
    cy.findAllByLabelText('Y').first().type('3');
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(1).type('2'); 
    cy.findAllByLabelText('Y').eq(1).type('7'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(2).type('3'); 
    cy.findAllByLabelText('Y').eq(2).type('15'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(3).type('4'); 
    cy.findAllByLabelText('Y').eq(3).type('25'); 
    cy.findByText('+').click();

    cy.findAllByLabelText('X').eq(4).type('5'); 
    cy.findAllByLabelText('Y').eq(4).type('40'); 
    
    //cy.findByLabelText('Chart color').click();

    //Generate chart
    cy.findByText('Generate chart').click();

    //Save chart to gallery
    cy.findByText('Save chart').click();

    //Navigate to the gallery
    cy.findByText('Gallery').click();

    //Open chart
    cy.findByText('Cats vs Dogs').click();

    //Assert chart exists
    cy.findByRole('img').should('exist');

    //Assert titles maintained
    cy.findByLabelText('Chart title').should('have.value', 'Cats vs Dogs');
    cy.findByLabelText('X label').should('have.value', 'Cats');
    cy.findByLabelText('Y label').should('have.value', 'Dogs');

    //Assert x and y values saved
    cy.findAllByLabelText('X').eq(0).should('have.value', '1');
    cy.findAllByLabelText('Y').eq(0).should('have.value', '3');
  
    cy.findAllByLabelText('X').eq(1).should('have.value', '2');
    cy.findAllByLabelText('Y').eq(1).should('have.value', '7');
  
    cy.findAllByLabelText('X').eq(2).should('have.value', '3');
    cy.findAllByLabelText('Y').eq(2).should('have.value', '15');
  
    cy.findAllByLabelText('X').eq(3).should('have.value', '4');
    cy.findAllByLabelText('Y').eq(3).should('have.value', '25');
  
    cy.findAllByLabelText('X').eq(4).should('have.value', '5');
    cy.findAllByLabelText('Y').eq(4).should('have.value', '40');
  });
})