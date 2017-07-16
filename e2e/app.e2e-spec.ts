import { ProjectMayhemPage } from './app.po';

describe('project-mayhem App', () => {
  let page: ProjectMayhemPage;

  beforeEach(() => {
    page = new ProjectMayhemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
