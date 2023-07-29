require('dotenv').config() // this is a smell for demonstrations sake. you should instead be requiring dotenv in your webpack.config.js file and building your envs for the browser/front-end-code inside there. then your code inside here can access them.

console.log(`Hello ${process.env.HELLO}`) // this value is actually coming from webpack.config.js line 19. the require above is just ignored. it's a common front-end code smell and should be removed

