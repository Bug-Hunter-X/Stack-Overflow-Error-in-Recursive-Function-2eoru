function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (a < 0) {
    return b; // Handle negative inputs
  }
  // Using iteration instead of recursion to prevent stack overflow
  let result = b;
  for (let i = 0; i < a; i++) {
    result += a - i; 
  }
  return result;
}