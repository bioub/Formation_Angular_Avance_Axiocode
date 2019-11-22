import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-root h1')).getText();
  }
  fillInputTodo(text) {
    element(by.css('todo-form input')).sendKeys(text);
  }
  submitForm() {
    element(by.css('todo-form form')).submit();
  }
  getTodoItems() {
    return element(by.css('todo-list')).all(by.css('todo-item'));
  }
}
