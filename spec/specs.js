describe('factorial', function() {
  it("returns phrase stripped of whitespace and punctuation", function() {
    expect(punctuationLess("Javasrcipt & JQUERY are fun!")).to.equal("javasrciptjqueryarefun");
  });

  it("returns phrase with spaces inserted at every n chars", function() {
    expect(insertSpaces(2, "himom")).to.equal("hi mo m");
  });

  it("returns encrypted phrase with correct spacing", function() {
    expect(encrypt("Hello World!")).to.equal("holew dlolr ");
  });
});
