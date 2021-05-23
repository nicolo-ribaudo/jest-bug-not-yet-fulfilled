test("test", async () => {
  await Promise.all([
    import("../packages/file1.js"),
    import("../packages/file2.js"),
  ]);
});
