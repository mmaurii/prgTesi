var input0;
(function (input0) {
    // miniSL: defCall PremiumService()
    function PremiumService() {
        console.log(`Premium service called`);
    }
    // miniSL: defCall BasicService()
    function BasicService() {
        console.log(`Basic service called`);
    }
    // miniSL: defCall IsPremiumUser(username)
    function IsPremiumUser(username) {
        return username === 'premiumUser';
    }
    // miniSL: function main(username)
    function main(username) {
        // miniSL: if(IsPremiumUser(username))
        if (IsPremiumUser(username)) {
            // miniSL: call PremiumService()
            PremiumService();
            // miniSL: else
        }
        else {
            // miniSL: call BasicService()
            BasicService();
            // miniSL: end
        }
        // miniSL: end
    }
})(input0 || (input0 = {}));
//# sourceMappingURL=input2.1.js.map