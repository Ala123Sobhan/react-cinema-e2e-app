describe("add employee test", () => {
  const employeeList = [
    { firstname: "ala", lastname: "bella" },
    { firstname: "picky", lastname: "micky" },
    { firstname: "ela", lastname: "nela" },
    { firstname: "sunny", lastname: "muny" },
    { firstname: "shah", lastname: "ilk" },
  ];

  employeeList.forEach((emp) => {
    it(`check add employee for ${emp.firstname}`, () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.get("button[type='submit']").click();

      cy.contains("PIM").click();
      cy.contains("Add Employee").click();
      cy.get("input[placeholder='First Name']").type(emp.firstname);
      cy.get("input[placeholder='Last Name']").type(emp.lastname);
      cy.getRandomId().then((randomId) => {
        cy.log(randomId);
        cy.get("div input[class='oxd-input oxd-input--active']")
          .last()
          .type(randomId);
      });
      cy.get("button[type='submit']").click();
      cy.contains(emp.firstname).should("be.visible");
      cy.contains(emp.lastname).should("be.visible");
      cy.contains("Add Employee").click();
    });
  });
});
