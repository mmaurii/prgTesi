namespace miniSL1 {
    // miniSL: function main(deta,  length)
    function main(deta: string[], length: number): void {
        // miniSL: for(i, length)
        for (let i = 0; i < length; i++) {
            // miniSL: call postMessage(deta, i)
            postMessage(deta, i);
            // miniSL: end
        }

        printMessage(deta);
        // miniSL: end
    }

    function printMessage(messages: string[]): void {
        for (let i = 0; i < messages.length; i++) {
            console.log("New " + i + " message: " + messages[i]);
        }
    }

    // miniSL: defCall postMessage(messages, position)
    function postMessage(messages: string[], position: number): void {
        fetch("https://example.com/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: messages[position] })
        })
    }
}