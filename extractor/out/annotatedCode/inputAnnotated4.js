var miniSLAnnotated4;
(function (miniSLAnnotated4) {
    var pippo = true;
    // miniSL: function main(x,  y,  z,  type)
    function main(x, y, z, type) {
        let a;
        /*     a = 1+a;
            a = evaluateX;
            a = 1+evaluateX(x);
            a = 1+x.toString();
            a = 1+a.x;
            a = a===a;
            a = 1===1; */
        a = 1 + 5;
        // miniSL: if(6>0)
        if (a > 0) {
            //questo è un commento
            evaluateX(x);
            // miniSL: invoke evaluateY(z)
            evaluateY(z);
        } // miniSL: else
        else {
            evaluateZ(z);
            // miniSL: end
        }
        //questo è un commento
        evaluateX(x);
        // miniSL: end
    }
    function evaluateX(x) {
        if (x > 0) {
            return 0;
        }
        else {
            return 5;
        }
    }
    // miniSL: function evaluateY(y)
    function evaluateY(y) {
        // miniSL: if(y > 0)
        if (y > 0) {
            return; // miniSL: invoke z() 
            z();
        } // miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }
    function evaluateZ(z) {
        if (z > 0) {
            return 0;
        }
        else {
            return 5;
        }
    }
    // miniSL: function z()
    function z() {
        // miniSL: call randomFN()
        return 0;
        // miniSL: end
    }
    main(1, 2, 3, true);
})(miniSLAnnotated4 || (miniSLAnnotated4 = {}));
//# sourceMappingURL=inputAnnotated4.js.map