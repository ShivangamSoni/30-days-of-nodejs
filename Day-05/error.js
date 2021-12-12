const myError = new Error("This is an Error Message");

try {
  Error.captureStackTrace(myError);
  throw myError;
} catch (e) {
  console.error(e);
}
