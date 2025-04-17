var miniSL4;
(function (miniSL4) {
    // miniSL: function main(x, y, z, type)
    function start(x, y, z, type) {
        // miniSL: if(type)
        if (type) {
            // miniSL: invoke valuateX(x)
            valuateX(x);
            // miniSL: invoke valuateY(z)
            valuateY(z);
            // miniSL: else
        }
        else {
            // miniSL: invoke valuateZ(y)
            valuateZ(z);
        }
        // miniSL: end
    }
    // miniSL: end
    // miniSL: function valuateX(x)
    function valuateX(x) {
        // miniSL: if(x > 0)
        if (x > 0) {
            return 0;
            // miniSL: else
        }
        else {
            return 5;
        }
        // miniSL: end
    }
    // miniSL: end
    // miniSL: function valuateY(y)
    function valuateY(y) {
        // miniSL: if(y > 0)
        if (y > 0) {
            return 0;
            // miniSL: else
        }
        else {
            return 5;
        }
        // miniSL: end
    }
    // miniSL: end
    // miniSL: function valuateZ(z)
    function valuateZ(z) {
        // miniSL: if(z > 0)
        if (z > 0) {
            return 0;
            // miniSL: else
        }
        else {
            return 5;
        }
        // miniSL: end
        // miniSL: invoke z()
    }
    // miniSL: end
    // miniSL: function z()
    function z() {
        // miniSL: call randomFN()
        return 0;
    }
    // miniSL: end
    // miniSL: invoke main(1,2, 3, true)
    start(1, 2, 3, true);
})(miniSL4 || (miniSL4 = {}));
//# sourceMappingURL=input4.js.map