# Local Test Struggle App

This repository acts as a guide to setting up various components and tools that you may find useful for local testing of Slack apps and Netlify Functions. It's purpose is for those that wish to contribute to the JDSB StruggleApp/StruggleBot Slack project, but also contains basic information that would carry over to using these tools in general.

The README can be treated as a standalone guide, but it may assume you have cloned a local copy in order to access demonstrative tools, such as the `server.js`.

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

You should now be looking at your app's Basic Information page. Note that while your app exists, it is not yet installed to your workspace and has no functionality. Also take note of the App Credentials section. You'll return to these later.

For now, click on "Add features and functionality" and then "Incoming Webhooks." Webhooks are one way for an outside application or request to send a message to your Slack workspace. Click the switch to activate incoming webhooks from "off" to "on" and then click "Add New Webhook to Workspace."

You will then be prompted to choose a location for the webhook to post to. Since Slack creates #general in your workspace by default, choose that from the drop down menu for the sake of simplicity and click "Install." This will generate a new webhook URL and provide you with a sample curl request. Copy and paste the curl request into your terminal and your app will send the message "Hello, World!" to your #general channel.

Before doing anything else with your new Slack app, move on to the next section where you'll install a helpful local testing tool.

<!-- TODO: Build a slash command, integrate with Netlify/connect the dots, provide deployable example function in repo, etc -->

#### Points of interest:

- API References: Explore the [Web](https://api.slack.com/web), [Events](https://api.slack.com/events-api), [Conversations](https://api.slack.com/conversations-api), and [Real Time Messaging](https://api.slack.com/rtm) APIs.

- [Block Kit Builder](https://api.slack.com/tools/block-kit-builder): Learn more about constructing Slack messages with their Block Kit and good ol' JSON.

- [Slack Developer Tools](https://devtools.builtbyslack.com/): Special shout out to SDT. Install this in your workspace and have the Slack API docs at your fingertips with the `/sdt` command.

- [Tools built by Slack](https://api.slack.com/tools): Check out tools like [Bolt](https://github.com/slackapi/bolt), the official framework for building Slack apps quickly.

</details>

## Install and launch ngrok

<details>

<summary>Show instructions</summary>

Ngrok is a useful tool for exposing your local webserver to the internet.

### Ngrok download and setup

Navigate to https://ngrok.com/ and sign up for free. Using your GitHub account eases this process along.

After being redirected to https://dashboard.ngrok.com/get-started, follow the installation and setup steps. On Mac, you could take this approach to installation:

Download the appropriate version of ngrok. From your terminal, enter this command: `unzip path/to/downloaded/nkrok.zip -d /usr/local/bin`. This uses the `-d` switch to unzip the contents of your ngrok download to the specified folder. In this case, to `/usr/local/bin`. This will allow the `ngrok` command to be used in anywhere on your system.

Read the top answer on [this stackexchange question](https://unix.stackexchange.com/questions/8656/usr-bin-vs-usr-local-bin-on-linux) for why you would want to put it here.

You could also just keep it in any folder of your choice or install it through a package manager like Homebrew.

The third step on the getting started page provides the authtoken command for you to paste in terminal, but you can retrieve your token at any time by clicking on "Auth" in the sidebar.

### Using ngrok

You should now be able to type `ngrok http 3000` to open up a tunnel to your localhost on port 3000. Ngrok will expose your local server with a randomly generated URL in the form of _randomstuff_.ngrok.io.

If you try to navigate to this URL when not running a local server, you will redirect to an error page. You can observe the bad requests from the terminal window that is running ngrok or from http://localhost:4040/inspect/http.

To actually see ngrok in action, run one of your local projects and initiate an `ngrok http [port number your run your project on]` and navigate to the URL ngrok provides. If you don't have a project handy but you've cloned this repository, This repository provides a simple Express/Node server that runs on port 3000. Run `node server.js` from this repository's directory in one terminal window, and `ngrok http 3000` in another. You should see the same result on `localhost:3000` as you do when you access the ngrok fowarding URL.

_Note: you can stop your node and ngrok servers from running with `ctrl+C`._

To really appreciate the magic that is happening here, grab your mobile device and navigate to the ngrok URL. You will see your local project running there. This demonstrates that your local server is open to anyone your share the ngrok URL with.

### Notes on localhost and ngrok URLs

With a free account, ngrok will generate a new random URL everytime you start it up. Keep in mind these aren't permanant and that any hooks or other outside references to the URL will have to be updated to the new URL if you restart ngrok.

However, the URL will persist as long as you keep ngrok running. Feel free to start and stop your local server as many times as you like. Using the earlier example, run ngrok and navigate to the URL to be redirected to the expected error page. Next, run the server.js from this repository and reload the ngrok URL to see that it is now forwarding your local project. If you stop the Node server, the ngrok URL will return the error page on reload, but the URL will persist for the next time you start up your local server.

</details>

## Add a slash command to your Slack app

Begin by launching ngrok with `ngrok http 3000` in its own terminal window then return to https://api.slack.com/apps and select the app you created earlier.

This time, you will be selecting "Slash Commands" from either the features sidebar or the "Add features and functionality" menu.

## Netlify Dev tool

## netlify-lambda cli
