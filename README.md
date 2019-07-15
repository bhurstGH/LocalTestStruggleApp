# Local Test Struggle App

This repository is to demonstrate setting up various components for local testing of Slack app and Netlify Functions implementations. It's purpose is for those that wish to contribute to the JDSB StruggleApp/StruggleBot Slack project, but also contains basic information that would carry over to using these tools in general.

## Create your own Slack workspace

<details>
  
<summary>Show instructions</summary>
  
You should already have a Slack account and be signed in at https://slack.com.

Navigate to https://slack.com/create and enter the email address that you wish to use for this workspace. You'll be asked for a confirmation number that you should receieve via email shortly.

After entering the confirmation number, you will be asked to name your team. This will be the initial name of both your Slack workspace and the URL, e.g. "My Team" and `myteam.slack.com`. The next step requests a project that your team is working on. This will be designated as a default channel in your workspace and can be whatever you like. If you enter "My StruggleApp function", `#my-struggleapp-function` channel will be created.

If you're working solo or not sure who you're going to invite yet, you can skip the step for inviting team mates.

You should now be looking at your very own workspace in the Slack browser app. If you use the Slack desktop app and wish to add the workspace there:

1. Click the + plus sign button on the far left side of the app, or choose "Sign in to another workspace" from the sidebar dropdown menu or the `Window` drop down in the menu bar.
1. No matter which method you chose, you will be directed to https://slack.com/ssb/add -- enter your workspace URL as prompted.
1. If you aren't logged into your workspace on Slack's website, you will be asked for the email address and password tied to this workspace.
1. You should then be prompted to open the workspace in the Slack desktop application.

A quick note on adding the workspace to your Slack mobile app:
You should be able to access your workspaces on your mobile app by tapping the icon that looks 4 squares ina 2x2 formation. The onscreen instructions should make it fairly obvious how to add the workspace from there.

Slack will prompt you to finish signing up:

![](../images/finishsigningup.png)

Here are some quick steps to handle that:

1. Set your name and password, and check whether or not to allow Slack to email you. Click next.
1. Change your workspace name and Slack URL to something else if you'd like. Click next.
1. Provide the email addresses of people you would like to invite, or generate an invite link. This is optional, click finish when you're done.

Your workspace is all set! Slackbot will introduce itself and you can poke around and play with whatever you like.

</details>

## Create your own Slack App

<details>

<summary>Show instructions</summary>

Navigate to https://api.slack.com. This is your first stop for familiarizing yourself with the Slack api and how to work with apps and bots. Peruse the wealth of information at your leisure, but for now, let's create an app.

### Create your app

Click "Your Apps" in the upper right corner, right next to "Documentation" and "Tutorials". Alternatively, navigate directly to https://api.slack.com/apps.

Click "Create new app" and a dialog will appear asking for a name and a workspace. Try naming your app "LocalTestStruggleApp" and selecting the workspace you created earlier. Keep in mind that while you can rename an app, it is forever tied to the workspace you choose here. Click "Create app" to continue.

You should now be looking at your app's Basic Information page. Note that while your app exists, it is not yet installed to your workspace and has no functionality. Also note the App Credentials section.

<!-- TODO: Build a slash command, integrate with Netlify/connect the dots, provide deployable example function in repo, etc -->

#### Points of interest:

- API References: Explore the [Web](https://api.slack.com/web), [Events](https://api.slack.com/events-api), [Conversations](https://api.slack.com/conversations-api), and [Real Time Messaging](https://api.slack.com/rtm) APIs.

- [Block Kit Builder](https://api.slack.com/tools/block-kit-builder): Learn more about constructing Slack messages with their Block Kit and good ol' JSON.

- [Slack Developer Tools](https://devtools.builtbyslack.com/): Special shout out to SDT. Install this in your workspace and have the Slack API docs at your fingertips with the `/sdt` command.

- [Tools built by Slack](https://api.slack.com/tools): Check out tools like [Bolt](https://github.com/slackapi/bolt), the official framework for building Slack apps quickly.

</details>

## Ngrok

<details>

<summary>Show instructions</summary>

Ngrok is a useful tool for exposing your local webserver to the internet.

### Ngrok download and setup

https://ngrok.com/ and sign up for free. Using your GitHub eases this process along.

https://dashboard.ngrok.com/get-started Follow the installation and setup steps. On Mac, you could take this approach to installation:

Download the appropriate version of ngrok. From your terminal, enter this command: `unzip path/to/downloaded/nkrok.zip -d /usr/local/bin`. This uses the `-d` switch to unzip the contents of your ngrok download to the specified folder. In this case, to `/usr/local/bin`. This will allow the `ngrok` command to be used in any folder on your system. Read the top answer on [this stackexchange question](https://unix.stackexchange.com/questions/8656/usr-bin-vs-usr-local-bin-on-linux) for why you would want to put it here.

You could, of course, also just keep it in any folder of your choice, add it to `$PATH`, or install it through a package manager like Homebrew.

The page provides the authtoken command for you to paste in to terminal in the third step, but you can retrieve your token at any time by clicking on "Auth" in the sidebar.

### Using ngrok

You should now be able to type `ngrok http 3000` to open up a redirect to your localhost:3000. Ngrok will expose your local server with a randomly generated URL in the form of _randomstuff_.ngrok.io.

If you try to access this URL when you aren't currently running a local server, you will redirect to an error page. You can still observe the bad requests from your terminal running ngrok or from http://localhost:4040/inspect/http.

To truly see ngrok in action, run one of your local projects and initiate an `ngrok http [port number your run your project on]` and navigate to the URL ngrok provides. If you don't have a project handy but you've cloned this repository locally, I've provided a simple http server in Node that runs on port 3000. Run `node server.js` from this repository's directory in one terminal window, and `ngrok http 3000` in another. You should see the same result on `localhost:3000` as you do when you try to access the ngrok fowarding URL.

To really see the magic that is happening here, grab your mobile device and navigate to the ngrok URL. You will see your local project running there.

### Notes on localhost and ngrok URLs

On the free account, ngrok will generate a new random URL everytime you start it up. Keep in mind these aren't permanant and that any hooks or code will have to be redirected to the new URL if you restart ngrok.

However, the URL will persist as long as you keep ngrok running. Feel free to start and stop your local server as many times as you like. Using the earlier example, run ngrok and navigate to the URL to be redirected to the expected error page. Next, run the server.js from this repository and reload the ngrok URL to see that it is now forwarding your local project. If you stop the Node server, the ngrok URL will return the error page on reload, but the URL will persist for the next time you start up your local server.

</details>

## netlify-lambda cli

## Netlify Dev tool
