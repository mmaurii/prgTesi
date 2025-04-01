
// miniSL: invoke main()
function main1(): void {
    // miniSL: function calc011()
    function calc011(): number {
        // miniSL: invoke calc012()
        return calc012();
        // miniSL: function calc012()
        function calc012(): number {
            // miniSL: invoke calc013()
            return calc013() + 1000;
            // miniSL: function calc013()
            function calc013(): number {
                // miniSL: invoke calc014()
                return calc014() + 500;
                // miniSL: function calc014()
                function calc014(): number {
                    // miniSL: invoke calc015()
                    return calc015();
                    // miniSL: function calc015()
                    function calc015(): number {
                        // miniSL: invoke calc012()
                        return Math.random() * 1000;
                    }
                    // miniSL: end
                }
                // miniSL: end
            }
            // miniSL: end
        }
        // miniSL: end
    }
    // miniSL: end

    // miniSL: invoke calc011()
    calc011();
}
// miniSL: end
