# Setup

# Pre-requisite
IDE - Visual Studio Code
Node.js - includes NPM and NPX
Cypress version : 9.2

# installation (this is only if you dont have any cypress project in this case we dont need this command)
In terminal in visual code type: npm init
                               npm install cypress --save-dev
                               npx cypress open   --> This will open cypress ui where you can manualy run test cases
                               
# Mocha framework instllation
  npm install mocha --save-dev
  npm install chai --save-dev
  npx mocha 
 
# Mocha awesome rpeort installation and running
  npm install --save-dev mochawesome  
  npx mocha --reporter mochawesome  
  
# For running multiple test cases from command line 
  For 1. task "UI testing" in terminal or cmd type :
   (project path location) .\node_modules\.bin\cypress run --spec .\cypress\integration\ui\*.js --browser chrome
    
  For 2. task "API testing" in terminal or cmd type:
    (project path location) .\node_modules\.bin\cypress run --spec .\cypress\integration\api\*.js --browser chrome
