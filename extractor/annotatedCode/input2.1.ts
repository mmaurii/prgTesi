namespace input0 {
    // miniSL: defCall PremiumService()
    function PremiumService(): void {
        console.log(`Premium service called`);
    }

    // miniSL: defCall BasicService()
    function BasicService(): void {
        console.log(`Basic service called`);
    }

    // miniSL: defCall IsPremiumUser(username)
    function IsPremiumUser(username: string): boolean {
        return username === 'premiumUser';
    }

    // miniSL: function main(username)
    function main(username: string): void {
        // miniSL: if(IsPremiumUser(username))
        if (IsPremiumUser(username)) {
            // miniSL: call PremiumService()
            PremiumService();
            // miniSL: else
        } else {
            // miniSL: call BasicService()
            BasicService();
            // miniSL: end
        }
        // miniSL: end
    }
}