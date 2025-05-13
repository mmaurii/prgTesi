namespace miniSL5 {
    type Job = any;

    // miniSL: defCall map(jobs,index)
    function map(jobs: Job[], index: number): void {
        console.log(`Mapping jobs for index ${index}`);
    }

    // miniSL: defCall reduce(jobs,mapIndex,reduceIndex)
    function reduce(jobs: Job[], mapIndex: number, reduceIndex: number): void {
        console.log(`Reducing jobs for mapIndex ${mapIndex} and reduceIndex ${reduceIndex}`);
    }

    // miniSL: function makeWork(jobs,m, r)
    function makeWork(jobs: Job[], m: number, r: number): void {
        // miniSL: for(i,m)
        for (let i = 0; i < m; i++) {
            // miniSL: invoke map(jobs,i)
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
    function main(jobs: Job[], m: number, r: number): void {
        // miniSL: invoke makeWork(jobs,m,r)
        makeWork(jobs, m, r);
        // miniSL: end
    }
}