/* eslint-disable no-param-reassign */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// commands.js 파일
Cypress.Commands.add("setCustomWindowProperties", () => {
  cy.window().then(win => {
    // window 객체의 속성들을 원하는 값으로 설정
    win.someProperty = "mocked value";
    // 다른 필요한 속성들...
  });
});
Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:3000/members/signUp",
    body: {
      formData: {
        birthDate: "2000-01-01",
        email: "hi@naver.com",
        gender: "male",
        kaKaoId: 12345,
        nickName: "하이",
        salary: 2
      }
    }
  }).then(response => {
    window.localStorage.setItem("EXIT_LOGIN_ACCESS_TOKEN", response.data.accessToken);
  });
});
