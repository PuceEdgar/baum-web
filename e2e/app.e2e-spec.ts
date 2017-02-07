import { BaumPage } from './app.po';

describe('baum App', function() {
  let page: BaumPage;

  beforeEach(() => {
    page = new BaumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
