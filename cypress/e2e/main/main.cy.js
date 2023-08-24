// describe("example to-do app", () => {
//   beforeEach(() => {
//     cy.visit("http://www.buybye.kr/");
//   });

//   it("should contain an element with h2.text-2xl class", () => {
//     cy.get("h2.text-2xl").should("exist");
//   });

//   it("should contain 4 elements with h2.text-2xl class", () => {
//     cy.get("h2.text-2xl").should("have.length", 4);
//   });
// });
describe("Client-Side Functionality", () => {
  it("should perform some client-side action on /kakao page", () => {
    // 클라이언트 코드를 테스트하는 페이지로 이동
    cy.visit("/kakao", {
      onBeforeLoad(win) {
        // window.location 객체를 모의(mock)하여 필요한 값을 할당
        cy.stub(win, "location").value({
          pathname: "/kakao"
          // 다른 필요한 속성들...
        });
      }
    });

    // 클라이언트 코드 테스트 시작
    cy.get("#button").click(); // 예시로 클릭 이벤트를 시뮬레이션
    // 클라이언트 코드 테스트 종료
  });

  it("should perform some client-side action on /onboarding page", () => {
    // 클라이언트 코드를 테스트하는 페이지로 이동
    cy.visit("/onboarding", {
      onBeforeLoad(win) {
        // window.location 객체를 모의(mock)하여 필요한 값을 할당
        cy.stub(win, "location").value({
          pathname: "/onboarding"
          // 다른 필요한 속성들...
        });
      }
    });

    // 클라이언트 코드 테스트 시작
    cy.get("#button").click(); // 예시로 클릭 이벤트를 시뮬레이션
    // 클라이언트 코드 테스트 종료
  });
});
