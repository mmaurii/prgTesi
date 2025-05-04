var pippo = true;

function main(x: number, y: number, z: number, type: boolean): void {
    let a;
/*     a = 1+a;
    a = evaluateX;
    a = 1+evaluateX(x);
    a = 1+x.toString();
    a = 1+a.x;
    a = a===a;
    a = 1===1; */
    a = 1+5;
    if (a>0) {
        //questo è un commento
        evaluateX(x);
        evaluateY(z);
    } else {
        evaluateZ(z);
    }

    //questo è un commento
    evaluateX(x);

}

function evaluateX(x: number): number {
    if (x > 0) {
        return 0;
    } else {
        return 5;
    }
}

function evaluateY(y: number): number {
    if (y > 0) {
        return z();
    } else {
        return 5;
    }
}

function evaluateZ(z: number): number {
    if (z > 0) {
        return 0;
    } else {
        return 5;
    }

}

function z(): number {
    // miniSL: call randomFN()
    return 0;
}

main(1, 2, 3, true);