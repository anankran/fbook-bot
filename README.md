# meteor-chat

Basic application to post messages with Meteor.js.

You'll have to have an Meteor project. To do this, read the <a href="https://guide.meteor.com/?_ga=2.169674854.650383976.1497288145-851991966.1493327724" target="_blank">documentation</a>.

To use this, you'll have to install a few packages with commands below.

To make HTTP requests:

<pre>meteor add http</pre>

<pre>meteor add iron:router</pre>

To tests:

<pre>meteor add practicalmeteor:mocha</pre>

<pre>meteor add practicalmeteor:chai</pre>

And remove the package insecure so no databse request can be made from the client:

<pre>meteor remove insecure</pre>

To test, use the command

<pre>meteor test --driver-package practicalmeteor:mocha --port 3100</pre>

To active the application, use

<pre>meteor</pre>
