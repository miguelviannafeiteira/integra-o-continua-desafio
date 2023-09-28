import { expect, test } from "vitest"
import { sum, div, multi, sub } from "./index"

describe("Teste da pasta index.js", () => {
    test("A soma deve retornar 5", () => {
        expect(sum(3, 2)).toBe(5)
    })

    test("A subtração deve retornar 1", () => {
        expect(sub(3, 2)).toBe(1)
    })

    test("A multiplicação deve retornar 6", () => {
        expect(multi(3, 2)).toBe(6)
    })

    test("A divisão deve retornar 2", () => {
        expect(div(4, 2)).toBe(2)
    })
})