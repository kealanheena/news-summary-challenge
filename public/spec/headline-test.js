var headline = new Headline("New News!!!");

describe("When 'New News!!!' is passed as an argument", () => {
  
  describe("It should have text 'New News!!!'", () => {
    assert.isEqual(headline.text, "New News!!!");
  });

  describe("It should return 'New News!!!' when returnHeadline is called", () => {
    assert.isEqual(headline.returnHeadline() , "New News!!!");
  });
});