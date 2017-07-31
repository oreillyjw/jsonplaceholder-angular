import { BuildingAppPage } from './app.po';

describe('building-app App', () => {
  let page: BuildingAppPage;

  beforeEach(() => {
    page = new BuildingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
