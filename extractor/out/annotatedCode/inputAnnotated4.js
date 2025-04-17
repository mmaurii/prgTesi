var miniSLAnnotated4;
(function (miniSLAnnotated4) {
    // miniSL: function main(x,  y,  z,  type)
    function main(x, y, z, type) {
        // miniSL: if(type)
        if (type) {
            // miniSL: invoke evaluateX(x)
            evaluateX(x);
            // miniSL: invoke evaluateY(z)
            evaluateY(z);
        } // miniSL: else
        else {
            // miniSL: invoke evaluateZ(z)
            evaluateZ(z);
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: function evaluateX(x)
    function evaluateX(x) {
        // miniSL: if(x > 0)
        if (x > 0) {
            return 0;
        } // miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: function evaluateY(y)
    function evaluateY(y) {
        // miniSL: if(y > 0)
        if (y > 0) {
            return 0;
        } // miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: function evaluateZ(z)
    function evaluateZ(z) {
        // miniSL: if(z > 0)
        if (z > 0) {
            return 0;
        } // miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: function z()
    function z() {
        // miniSL: call randomFN()
        return 0;
        // miniSL: end
    }
    // miniSL: invoke main(1,2,3, true)
    main(1, 2, 3, true);
})(miniSLAnnotated4 || (miniSLAnnotated4 = {}));
//# sourceMappingURL=inputAnnotated4.js.map