#PAC
##Pet Approval Council

###Pre-prerequisites
* NodeJs
* Git (e.g Git for windows)
* Adroid Studio (or Android SDK)
* iOS dev tools
* Java 7 (or above)
* Apache Ant
* Gradle

###Set Up Environment Variables
* JAVA_HOME
* ANDROID_HOME (points to Android SDK base dir)
* ANT_HOME
* GRADLE_HOME

PATH variable should also contain:
* %ANDROID_HOME%\tools
* %ANDROID_HOME%\platform-tools
* %JAVA_HOME%\bin
* %ANT_HOME%\bin
* %GRADLE_HOME%\bin

###Set up git identity
1. Launch Git Bash icon from command prompt
2. `git config --global user.name "John Doe"`
3. `git config --global user.email johndoe@example.com`
4. `git config --list`


###Get Atom editor to work on work-supplied-laptop behind corporate proxy/firewall
1. Create a file called ~/.atom/.apmrc
2. Put these inside the file
<pre>
https-proxy=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
http-proxy=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
strict-ssl=false
</pre>

###Get ionic/npm/git to work on work-supplied-laptop behind corporate proxy/firewall
Note: you will need to append proxy to ionic commands that downloads stuff from the internet. eg.
`PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic start PAC tabs`

1. Launch Git Bash icon for command prompt
2. `git config --global http.proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080`
3. `git config --global https.proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080`
4. `git config -–global http.sslVerify false`
5. `npm config set registry http://registry.npmjs.org`
6. `npm config set proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080`
7. `npm config set https-proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080`
8. `npm config set strict-ssl false`
9. `npm cache clean && npm install -g cordova ionic gulp sass`
10. `PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic setup sass`


###Downgrade NodeJs verion to v0.10.29
Later on, you will execute the command
`ionic platform add android`
but it won't work because Cordova 5.0.0 (the current version) doesn't work with NodeJS 0.12.2 (the current version) behind corporate firewall/proxy. See defect
* https://github.com/driftyco/ionic-cli/issues/321
* https://issues.apache.org/jira/browse/CB-8662

To get around this, you need to:
* Download NVM (Node Version Manager). This will allow you to installa multiple version of NodeJs and switch between those version.
* Download NodeJs version 0.10.29

`nvm install 0.10.29`

* Switch to the NodeJs version 0.10.29

`nvm use 0.10.29`

* Take a look at all the versions of NodeJs in your system

`nvm list`

It should show that you have
* 0.12.2
* 0.10.29 (Currently using)


###Set up PAC project
* Launch Git Bash icon for command prompt
* `git clone https://github.com/message-pac-org/PAC.git`
* `PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic platform add android`
* Switch back to the latest version of NodeJs (0.12.2)

`nvm use 0.12.2`

* Test your app on the browser `PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic serve --lab`

* This will launch your app in `http://localhost:8100/ionic-lab`


### I can't get this to work
* Plug in your android phone into your PC
* Install and run the app on your phone
`PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic run android`
