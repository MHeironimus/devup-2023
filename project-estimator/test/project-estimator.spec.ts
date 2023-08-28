import { ProjectEstimator } from "../src/project-estimator";

describe("ProjectEstimator Class", () => {

    let target: ProjectEstimator;

    beforeEach(() => {
        target = new ProjectEstimator();
    });

    describe("calculateQaNeed Method", () => {

        function verifyCalculateQaNeed(developerCount: number, expectedQaNeed: number) {
            const actual: number = target.calculateQaNeed(developerCount);
            expect(actual).toEqual(expectedQaNeed);
        }

        it("0 developers => 0 QA", () => {
            verifyCalculateQaNeed(0, 0);
        });
        it("1 developers => 1 QA", () => {
            verifyCalculateQaNeed(1, 1);
        });
        it("4 developers => 2 QA", () => {
            verifyCalculateQaNeed(4, 2);
        });
        it("8 developers => 3 QA", () => {
            verifyCalculateQaNeed(8, 3);
        });
        it("11 developers => 4 QA", () => {
            verifyCalculateQaNeed(11, 4);
        });
        it("16 developers => 5 QA", () => {
            verifyCalculateQaNeed(16, 5);
        });

    });

});
