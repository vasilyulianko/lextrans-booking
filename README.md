# lextrans-booking


## Development

### Start all

`./gradlew bootRun`

### Frontend start

`cd src/main/resources/public`

`npm install`

`npm start`

## Deployment to heroku

### First time:
`heroku buildpacks:add heroku/nodejs`
`heroku buildpacks:add heroku/gradle`

`git push heroku master`

or

`git push origin master` (in  case heroku builds from GitHub)