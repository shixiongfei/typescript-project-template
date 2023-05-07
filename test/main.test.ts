import { main } from "../src/main";

describe("main test", () => {
  test("main()", () => {
    expect(main()).toBe("Hello World!");
  });
});
