// Add Empty Line to stdout
console.log();

// Printing a Literal
console.log("Hello World");
console.log(22);
console.log(true);
console.log(Symbol("Log"));
console.log(["HTML", "CSS", "JS"]);
console.log({ name: "Shivi", age: 22 });

// Printing Variables
const [a, b, c, d, e, f] = ["Hello", 10, false, Symbol("Const"), [1, 2, 3, 4], { name: "SHivangam Soni", age: 22 }];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// Comma Separated Values are printed together space Separated
console.log("Hello", "World", 2077);

// Using Placeholders
console.log("This is a Number: %d | This is a String: %s", 90, "Hello World");

// Clearing Console
console.clear();

// Counting Outputs
console.count("Shivangam");
console.count("JS");
console.count("Shivangam");
console.count("Shivangam");
console.count(9);
console.count("JS");
// Resetting a Count
console.countReset("Shivangam");
console.count("Shivangam");
console.count("Shivangam");

// Printing Errors to 'stderr'
console.error("Some Error Occurred");
// Printing Warnings to 'stderr'
console.warn("Some Warning");

// Timing a Code using console
console.time("100K Loop");
for (let i = 0; i < 100000; i++) {
  let a = i;
}
console.timeEnd("100K Loop");
