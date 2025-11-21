// Test JavaScript file for Semgrep scanning
function testFunction(input) {
  // Potential security issue for testing
  eval(input); // This should be flagged by Semgrep
  
  const password = "hardcoded123"; // This might also be flagged
  
  return input;
}
