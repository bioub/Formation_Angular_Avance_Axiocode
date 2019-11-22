import { AppPage } from './app.po';

describe('todo-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to todo!');
  // });

  it('should add a new todo', () => {
    page.navigateTo();
    page.fillInputTodo('ABC');
    page.submitForm();
    expect(page.getTodoItems().count()).toBe(4);
  });
});
