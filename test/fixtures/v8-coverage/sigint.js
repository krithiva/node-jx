const a = 99;
if (true) {
  const b = 101;
} else {
  const c = 102;
}
process.kill(process.pid, "SIGINT");
