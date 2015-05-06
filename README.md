#PAC
##Pet Accident Commission

###Pre-prerequisites
* NodeJs
* Git for windows
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
1. Launch Git Bash icon for command prompt
2. git config --global user.name "John Doe"
3. git config --global user.email johndoe@example.com
4. git config --list


###Get Atom editor to work on work-supplied-laptop behind corporate proxy/firewall
1. Create a file called ~/.atom/.apmrc
2. Put these inside the file
<pre>
https-proxy=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
http-proxy=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
strict-ssl=false
</pre>

###Get ionic/npm/git to work on work-supplied-laptop behind corporate proxy/firewall
1. Launch Git Bash icon for command prompt
2. git config --global http.proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
3. git config --global https.proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
4. git config -–global http.sslVerify false
5. npm config set registry http://registry.npmjs.org/
6. npm config set proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
7. npm config set https-proxy http://yourusername:yourpassword@mycompanyproxyaddress.com:8080
8. npm config set strict-ssl false
9. npm install -g cordova ionic gulp
10. `PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic setup sass`

###Set up PAC project
Note: you will need to append proxy to ionic commands that downloads stuff from the internet. eg.
`PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic start PAC tabs`

1. Launch Git Bash icon for command prompt
2. git clone https://github.com/message-pac-org/PAC.git
3. PROXY=http://yourusername:yourpassword@mycompanyproxyaddress.com:8080 ionic platform add android
4. ionic serve
5. Plug in your android phone into your PC
6. ionic run android
