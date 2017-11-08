// error not caught as expected
// since context is gone within callback
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
