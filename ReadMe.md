
To Run: npm start (due to the config we did)

Create a typescript config file tsc --init   ( === tsconfig.json)

//added this to the typescript config file
    "outDir": "./build",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",  

To create pacjage json: npm init -y
To more easily run code: npm install nodemon(run node) concurrently(run multiple scripts at same time)

add this to package.json
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodomon build/index.js",
    "start": "concurrently npm:start:*"
  },

  