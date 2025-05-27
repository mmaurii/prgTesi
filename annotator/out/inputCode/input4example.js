var miniSL;
(function (miniSL) {
    function main(x, y, type) {
        if (type) {
            evaluateX(x);
            evaluateY(y);
        }
        else {
            evaluateX(x);
        }
    }
    function evaluateX(x) {
        if (x > 0) {
            return 0;
        }
        return 5;
    }
    function evaluateY(y) {
        y = 1 + y;
        if (y > 0) {
            y = 1 + y;
            if (y > 0) {
                return generateNumber(y);
            }
        }
        else {
            return 5;
        }
    }
    function generateNumber(y) {
        // miniSL: call random()
        return random();
    }
    // miniSL: defCall random()
    function random() {
        console.log("Random external service called");
        return Math.random();
    }
})(miniSL || (miniSL = {}));
//# sourceMappingURL=input4example.js.map