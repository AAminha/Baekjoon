process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const result = Array.from({ length: b }, () => "*".repeat(a));
  console.log(result.join("\n"));
});
