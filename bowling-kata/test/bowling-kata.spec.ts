import { score } from "../src/bowling";

describe("Bowling Kata", () => {

    function verifyScore(throws: number[], expected: number) {
        const actual: number = score(throws);
        expect(actual).toEqual(expected);
    }

    it("All gutter balls scores 0", () => {
        verifyScore(Array(20).fill(0), 0);
    });

    it("One pin scores 1", () => {
        verifyScore([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1);
    });

    it("Two throws with one pin scores 2", () => {
        verifyScore([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 2);
    });

    it("All throws with one pin scores 20", () => {
        verifyScore(Array(20).fill(1), 20);
    });

    it("Spare counts next throw twice", () => {
        verifyScore([0, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 12);
    });

    it("Verify spare in last frame", () => {
        verifyScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1], 11);
    });

    it("Strike counts next two throws twice", () => {
        verifyScore([10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 14);
    });

    it("Perfect game scores 300", () => {
        verifyScore(Array(12).fill(10), 300);
    });
});
