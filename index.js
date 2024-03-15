const { WebSocket } = require('ws')

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`enviando mensagem ->> ${message}`);

        wss.clients.forEach((client) => {
            client.send(`${message}`);
        })
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

