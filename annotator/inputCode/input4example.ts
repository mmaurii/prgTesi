namespace miniSL {
    function main(x: number, y: number, type: boolean): void {
        if (type) {
            evaluateX(x);
            evaluateY(y);
        } else {
            evaluateX(x);
        }
    }

    function evaluateX(x: number): number {
        if (x > 0) {
            return 0;
        }
        return 5;
    }

    function evaluateY(y: number): number {
        y = 1 + y; 

        if (y > 0) {
            y = 1 + y;
            if (y > 0) {
                return generateNumber(y);
            }
        } else {
            return 5;
        }

        return 0;
    }

    function generateNumber(y:number): number {
        // miniSL: call random()
        return random();
    }

    // miniSL: defCall random()
    function random(): number {
        console.log("Random external service called");
        return Math.random();
    }
}