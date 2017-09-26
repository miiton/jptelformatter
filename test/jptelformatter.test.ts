import jptelfmt from "../src/jptelformatter"

const okCases = [
  { input: "0312345678", result: "03-1234-5678" },
  { input: "0612345678", result: "06-1234-5678" },
  { input: "0423345678", result: "042-334-5678" },
  { input: "0422345678", result: "0422-34-5678" },
  { input: "05000000000", result: "050-0000-0000" },
  { input: "06000000000", result: "060-0000-0000" },
  { input: "07000000000", result: "070-0000-0000" },
  { input: "08000000000", result: "080-0000-0000" },
  { input: "09000000000", result: "090-0000-0000" },
  { input: "0997123456", result: "0997-12-3456" }
]

/**
 * Dummy test
 */
describe("format test", () => {
  for (let i = 0; i < okCases.length; i++) {
    const c = okCases[i]
    it(`${c.input} => ${c.result}`, () => {
      const result = jptelfmt(c.input)
      expect(result).toEqual(c.result)
    })
  }
})

const ngCases = [
  { input: "312345678", result: "false" },
  { input: "612345678", result: "false" },
  { input: "423345678", result: "false" },
  { input: "422345678", result: "false" },
  { input: "5000000000", result: "false" },
  { input: "6000000000", result: "false" },
  { input: "7000000000", result: "false" },
  { input: "8000000000", result: "false" },
  { input: "9000000000", result: "false" },
  { input: "997123456", result: "false" }
]

/**
 * Dummy test
 */
describe("ng test", () => {
  for (let i = 0; i < ngCases.length; i++) {
    const c = ngCases[i]
    it(`${c.input} => ${c.result}`, () => {
      const result = jptelfmt(c.input)
      expect(result).toEqual(c.result)
    })
  }
})
