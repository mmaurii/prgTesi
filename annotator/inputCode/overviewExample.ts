namespace miniSL1 {
    function main(deta: string[], length: number): void {
        for (let i = 0; i < length; i++) {
            postMessage(deta, i);
        }

        printMessage(deta);
    }

    function printMessage(messages: string[]): void {
        for (let i = 0; i < messages.length; i++) {
            console.log("New " + i + " message: " + messages[i]);
        }
    }
 
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