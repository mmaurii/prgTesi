namespace miniSLAnnotated4 {
    var pippo = true;

    // miniSL: function main(x,  y,  z,  type)
    function main(x: number, y: number, z: number, type: boolean): void {


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

    function evaluateX(x: number): number {
        if (x > 0) {
            return 0;
        } else {
            return 5;
        }
    }

    // miniSL: function evaluateY(y)
    function evaluateY(y: number): number {
        // miniSL: if(y > 0)
        if (y > 0) {
            // miniSL: invoke z() 
            return z();
        } // miniSL: else
        else {
            return 5;
            // miniSL: end
        }
        // miniSL: end
    }

    function evaluateZ(z: number): number {
        if (z > 0) {
            return 0;
        } else {
            return 5;
        }

    }

    // miniSL: function z()
    function z(): number {
        // miniSL: call randomFN()
        return 0;
        // miniSL: end
    }

    main(1, 2, 3, true);
}