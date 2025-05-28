var miniSL1;
(function (miniSL1) {
    function main(deta, length) {
        for (let i = 0; i < length; i++) {
            postMessage(deta, i);
        }
        printMessage(deta);
    }
    function printMessage(messages) {
        for (let i = 0; i < messages.length; i++) {
            console.log("New " + i + " message: " + messages[i]);
        }
    }
    function postMessage(messages, position) {
        fetch("https://example.com/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: messages[position] })
        });
    }
})(miniSL1 || (miniSL1 = {}));
//# sourceMappingURL=overviewExample.js.map