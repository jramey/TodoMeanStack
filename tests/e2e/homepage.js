describe('Mean Todo Homepage', function() {
  it('Page should have a title', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Mean Todo Lists');
  });
});

 