export class ProjectEstimator {

    // developers = QA Need
    // 0            0
    // 1 - 3        1
    // 4 - 6        2
    // 7 - 10       3
    // > 10         add another 1 for every 5 developers (e.g. 11 - 15 => 4, 16 - 20 => 5)
    public calculateQaNeed(developerCount: number) : number {

        if (developerCount <= 0) {
            return 0;
        }
        if (developerCount > 0 && developerCount <= 3) {
            return 1;
        }
        if (developerCount < 7) {
            return 2;
        }
        if (developerCount < 10) {
            return 3;
        } else {
            return 3 + (developerCount - 5) / 5 | 0;
        }
    }

}