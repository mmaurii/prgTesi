var miniSL5;
(function (miniSL5) {
    // miniSL: defCall map(jobs,index)
    function map(jobs, index) {
        console.log(`Mapping jobs for index ${index}`);
    }
    // miniSL: defCall reduce(jobs,mapIndex,reduceIndex)
    function reduce(jobs, mapIndex, reduceIndex) {
        console.log(`Reducing jobs for mapIndex ${mapIndex} and reduceIndex ${reduceIndex}`);
    }
    // miniSL: function makeWork(jobs,m, r)
    function makeWork(jobs, m, r) {
        // miniSL: for(i,m)
        for (let i = 0; i < m; i++) {
            // miniSL: call map(jobs,i)
            map(jobs, i);
            // miniSL: for(j,r)
            for (let j = 0; j < r; j++) {
                // miniSL: call reduce(jobs,i,j)
                reduce(jobs, i, j);
                // miniSL: end
            }
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: function main(jobs,m,r)
    function main(jobs, m, r) {
        // miniSL: invoke makeWork(jobs,m,r)
        makeWork(jobs, m, r);
        // miniSL: end
    }
})(miniSL5 || (miniSL5 = {}));
//# sourceMappingURL=input5.1.js.map