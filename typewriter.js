const sentence = "hello there from lighthouse labs";

let x = 0;

for (const char of sentence) {
  // process.stdout.write(char);
setTimeout(() => {
  process.stdout.write(char)
}, x)
  x += 50;
};

