describe("punctuationLess", function() {
  it("returns phrase stripped of whitespace and punctuation", function() {
    expect(punctuationLess("Javasrcipt & JQUERY are fun!")).to.equal("javasrciptjqueryarefun");
  });
});

describe("insertSpaces", function() { //mocha is our Javascript test framework
  it("returns phrase with spaces inserted at every n chars", function() {
    expect(insertSpaces(2, "himom")).to.equal("hi mo m"); //chai uses expect and .equal
  });
});

describe("encrypt", function() {
  it("returns encrypted phrase with correct spacing", function() {
    expect(encrypt("Hello World!")).to.equal("holew dlolr ");
  });
});
