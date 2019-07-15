# Local test environment setup for the JDSB Struggle App

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

Click "Create new app" and a dialog will appear asking for a name and a workspace. Try naming your app "LTEStruggleApp" and selecting the workspace you created earlier. Keep in mind that while you can rename an app, it is forever tied to the workspace you choose here. Click "Create app" to continue.

You should now be looking at your app's Basic Information page. Note that while your app exists, it is not yet installed to your workspace and has no functionality. Also note the App Credentials section.

<!-- TODO: Build a slash command, integrate with Netlify/connect the dots, provide deployable example function in repo, etc -->

#### Points of interest:

- API References: Explore the [Web](https://api.slack.com/web), [Events](https://api.slack.com/events-api), [Conversations](https://api.slack.com/conversations-api), and [Real Time Messaging](https://api.slack.com/rtm) APIs.

- [Block Kit Builder](https://api.slack.com/tools/block-kit-builder): Learn more about constructing Slack messages with their Block Kit and good ol' JSON.

- [Slack Developer Tools](https://devtools.builtbyslack.com/): Special shout out to SDT. Install this in your workspace and have the Slack API docs at your fingertips with the `/sdt` command.

- [Tools built by Slack](https://api.slack.com/tools): Check out tools like [Bolt](https://github.com/slackapi/bolt), the official framework for building Slack apps quickly.

</details>

## netlify-lambda cli

## Netlify Dev tool

## Ngrok
