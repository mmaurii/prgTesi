// miniSL: function main()
function main1() {
    // miniSL: function calc011()
    function calc011() {
        // miniSL: invoke calc012()
        return calc012();
        // miniSL: function calc012()
        function calc012() {
            // miniSL: invoke calc013()
            return calc013() + 1000;
            // miniSL: function calc013()
            function calc013() {
                // miniSL: invoke calc014()
                return calc014() + 500;
                // miniSL: function calc014()
                function calc014() {
                    // miniSL: invoke calc015()
                    return calc015();
                    // miniSL: function calc015()
                    function calc015() {
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
// miniSL: invoke main()
main1();
//# sourceMappingURL=inputRecursive.js.map