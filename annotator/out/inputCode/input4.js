function main(x, y, z, type) {
    type = true;
    if (type) {
        //questo è un commento
        evaluateX(x);
        evaluateY(z);
    }
    else {
        evaluateZ(z);
    }
    //questo è un commento
    evaluateX(x);
}
function evaluateX(x) {
    if (x > 0) {
        return 0;
    }
    else {
        return 5;
    }
}
function evaluateY(y) {
    if (y > 0) {
        return 0;
    }
    else {
        return 5;
    }
}
function evaluateZ(z) {
    if (z > 0) {
        return 0;
    }
    else {
        return 5;
    }
}
function z() {
    // miniSL: call randomFN()
    return 0;
}
main(1, 2, 3, true);
//# sourceMappingURL=input4.js.map