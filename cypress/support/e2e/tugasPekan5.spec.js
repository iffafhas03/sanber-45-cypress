describe("Login Flow", () => {
  it("fill email only and get error message", () => {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.contains("kasirAja");
    cy.get("#email").type("trial2-toko@gmail.com");
    // cy.get("#password").type("");
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();

    cy.contains('"password" is not allowed to be empty');
  });

  it("Success Login to Dashboard Page", () => {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.get("#email").type("trial2-toko@gmail.com");
    cy.get("#password").type("password");
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
    cy.url().should("include", "/dashboard");
    cy.contains("kasirAja");

    it("Success Login to Dashboard Page", () => {
      cy.contains("kasirAja");
    });
  });
});
describe("Product Flow", () => {
  beforeEach(function () {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.get("#email").type("trial2-toko@gmail.com");
    cy.get("#password").type("password");
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
    cy.url().should("include", "/dashboard");
  });
  it("Success to add Product", () => {
    //masuk halaman produk
    cy.get('[href="/products"] > .css-ewi1jp').click();
    cy.url().should("include", "/products");
    cy.get(".css-1piskbq").click();
    cy.contains("dashboard / produk / baru");

    cy.get("#nama").type("Permen")
    cy.get("#deskripsi").type("snack")
    cy.get("#harga\\ beli").type("300")
    cy.get("#harga\\ jual").type("500")
    cy.get("#stok").type("100")
    cy.get(".chakra-input__right-addon")
      .click()
    cy.get(":nth-child(7) > .css-u3dlpe").click()
    cy.get(".chakra-button").click();
  });

  //masuk halaman produk
});
describe("Category Flow", () => {
  beforeEach(function () {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.get("#email").type("trial2-toko@gmail.com");
    cy.get("#password").type("password");
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
    cy.url().should("include", "/dashboard");
  });
  it("Success to add Category", () => {
    // //masuk halaman kategori
    cy.get('[href="/categories"] > .css-ewi1jp').click();
    cy.url().should("include", "/categories");

    cy.get(".css-1piskbq").click();
    cy.contains("dashboard / kategori");
    cy.get("#nama").type("Rumah Tangga");
    cy.get("#deskripsi").type("ijin coba");
    cy.get(".chakra-button").click();
  });

  //masuk halaman produk
});
