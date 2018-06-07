# ![TubeScraper Logo](/public/assets/images/tubeScraper.png)
# TubeScraper
A `Node.js` &amp; `MongoDB` webapp that scrapes news data from [YouTube](https://www.youtube.com/) and allows users to comment about the videos. Users can also delete unwanted comments.

Checkout the deployed app on Heroku [here](http://tube-scraper.herokuapp.com/).


## How it works
On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `handlebars` for templating each video and `materialize` as a styling framework. The app also uses `jQuery` and `AJAX` to help with making post requests.

And for webscraping, the app uses the `request` and `cheerio` node packages. All webscrapping code can be found in the `controllers.js` file.


## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your computer
    * [Here](https://github.com/dannyvassallo/mongo_lesson) is a helpful tutorial.
  2. Once you are set up, `cd` into this repo and run `npm install`.
  3. Then open another bash or terminal window and run `mongod`
  4. Run the script with `node server.js`.
  5. Navigate to `localhost:3000` in your browser.


## Screenshots
#### The `/videos` route renders all the videos organized in article format
![All Videos](/screenshots/content.png)

#### Click on the Details icon to view the details of the video.
![Video Content](/screenshots/video.png)

#### Click the Add Comment icon to add a comment via the `/add/comment/:id` post route
![Add Comment](/screenshots/add-comment.png)

#### Click the Comments icon to view comments
![View Comment](/screenshots/view-comment.png)

#### Click the Delete button to remove rude comments via the `remove/comment/:id` route
![Delete Comment](/screenshots/delete-comment.png)

#### Scraping occurs on the `/scrape` route.
#### When visiting the index route, `/`, express redirects to `/scrape` and then `/videos` routes
