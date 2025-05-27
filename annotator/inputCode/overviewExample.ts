namespace miniSL1 {
    function main(deta: string[], length: number): void {
        for (let i = 0; i < length; i++) {
            if (i < 0 || i >= length) {
                // miniSL: call postMessage(deta, i)
                postMessage(deta, i);
            } else {
                console.error("Index out of bounds: " + i);
            }
        }

        printMessage(deta);

        // miniSL: call postMessage(deta, i)
        postMessage(deta, length - 1);
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