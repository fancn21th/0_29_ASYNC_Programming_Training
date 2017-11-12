// error not caught as expected
// since context is already lost when callback function is running
try {
  setTimeout(() => {
    throw new Error("OH NOES!!!!");
  }, 4000);
} catch (e) {
  console.log("I caught the error: " + e.message);
}

// error caught as expected
try {
  throw new Error("OH NOES!!!!");
} catch (e) {
  console.log("I caught the error: " + e.message);
}
