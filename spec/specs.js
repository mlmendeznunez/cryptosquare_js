describe('factorial', function() {
  it("returns phrase stripped of whitespace and punctuation", function() {
    expect(punctuationLess("Javasrcipt & JQUERY are fun!")).to.equal("javasrciptjqueryarefun");
  });

  it("encrypted phrase without spaces", function() {
    expect(encrypt("Hello World!")).to.equal("holewdlolr");
  });
});
