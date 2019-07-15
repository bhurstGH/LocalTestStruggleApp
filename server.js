const express = require("express");
const app = express();

const PORT = 3000;

// Parses the application/x-www-form-urlencoded payload from Slack slash commands and appends it to the req.body object.
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Everyday I'm Strugglin'"));
app.post("/lts", (req, res) => {
    // View the data sent from Slack in console.
    console.log(req.body);

    // This object tells Slack how to parse the message you send back.
    const success = {
        // Returns an ephemeral message that only you can see.
        response_type: "ephemeral",
        // The text content of the message response.
        text: "Slash command is go!",
        // Return the arguments you provided after the slash command, i.e. /localteststruggle This Text Is Echoed Back
        attachments: [
            {
                text: `${req.body.text}`
            }
        ]
    };

    // Parses the success object as JSON and returns it to Slack.
    res.json(success);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
