// miniSL: function calc05()
function calc05(): number {
    // miniSL: invoke calc04()
    let a = calc04() + 500;

    // miniSL: function calc04()
    function calc04(): number {
        // miniSL: invoke calc03()
        return calc03();
        // miniSL: function calc03()
        function calc03(): number {
            // miniSL: invoke calc02()
            return calc02() + 1000;
            // miniSL: function calc02()
            function calc02(): number {
                // miniSL: invoke calc01()
                return calc01() + 500;

                // miniSL: function calc01()
                function calc01(): number {
                    // miniSL: invoke calc0()
                    return calc0();

                    // miniSL: function calc0()
                    function calc0(): number {
                        // miniSL: call randomFN()
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

    // miniSL: function calc010()
    function calc010(): number {
        // miniSL: function calc09()
        function calc09(): number {
            // miniSL: function calc08()
            function calc08(): number {
                // miniSL: function calc07()
                function calc07(): number {
                    // miniSL: function calc06()
                    function calc06(): number {
                        // miniSL: call randomFN()
                        return Math.random() * 1000;
                    }
                    // miniSL: end
                    // miniSL: invoke calc06()
                    return calc06();
                }
                // miniSL: end
                // miniSL: invoke calc07()
                return calc07() + 500;
            }
            // miniSL: end
            // miniSL: invoke calc08()
            return calc08() + 1000;
        }
        // miniSL: end
        // miniSL: invoke calc09()
        return calc09();
    }
    // miniSL: end

    // miniSL: invoke calc010()
    return calc010() + 1000 + a;
}
// miniSL: end


// miniSL: function main()
function main0(): void {
    // miniSL: invoke calc05()
    calc05();


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
                        // miniSL: call randomFN()
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
    // miniSL: invoke calc016()
    calc016();


    // miniSL: function calc016()
    function calc016(): number {
        // miniSL: function calc017()
        function calc017(): number {
            // miniSL: function calc018()
            function calc018(): number {
                // miniSL: function calc019()
                function calc019(): number {
                    // miniSL: function calc020()
                    function calc020(): number {
                        // miniSL: call randomFN()
                        return Math.random() * 1000;
                    }
                    // miniSL: end
                    // miniSL: invoke calc020()
                    return calc020();
                }
                // miniSL: end
                // miniSL: invoke calc019()
                return calc019() + 500;
            }
            // miniSL: end
            // miniSL: invoke calc018()
            return calc018() + 1000;
        }
        // miniSL: end
        // miniSL: invoke calc017()
        return calc017();
    }
    // miniSL: end
}
// miniSL: end

// miniSL: invoke main()
main0();