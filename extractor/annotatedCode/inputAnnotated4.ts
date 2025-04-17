namespace miniSLAnnotated4 {
    // miniSL: function main(x,  y,  z,  type)
    function main(x: number, y: number, z: number, type: boolean): void {
        // miniSL: if(type)
        if (type) {
            // miniSL: invoke evaluateX(x)
            evaluateX(x);
            // miniSL: invoke evaluateY(z)
            evaluateY(z);
        }// miniSL: else
        else {
            // miniSL: invoke evaluateZ(z)
            evaluateZ(z);
            // miniSL: end
        }
        // miniSL: end
    }

    // miniSL: function evaluateX(x)
    function evaluateX(x: number): number {
        // miniSL: if(x > 0)
        if (x > 0) {
            return 0;
        }// miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }

    // miniSL: function evaluateY(y)
    function evaluateY(y: number): number {
        // miniSL: if(y > 0)
        if (y > 0) {
            return 0;
        }// miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }

    // miniSL: function evaluateZ(z)
    function evaluateZ(z: number): number {
        // miniSL: if(z > 0)
        if (z > 0) {
            return 0;
        }// miniSL: else
        else {
            return 5;
            // miniSL: end
        }

        // miniSL: end
    }

    // miniSL: function z()
    function z(): number {
        // miniSL: call randomFN()
        return 0;
        // miniSL: end
    }

    // miniSL: invoke main(1,2,3, true)
    main(1, 2, 3, true);
}