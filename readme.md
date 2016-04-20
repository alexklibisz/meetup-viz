# Meetup Viz

[alexklibisz.github.io/meetup-viz](http://alexklibisz.github.io/meetup-viz)

### What is it?

Real-time visualization of streaming data from the [Meetup.com open events RSVP API](http://www.meetup.com/meetup_api/docs/rsvp/).

Visualize events as a map with markers and a bar chart showing the most frequent countries, states (USA), and names.

### Built with:

- React
- Alt.js
- Leaflet
- D3.js
- Webpack

### The Talk

- This was presented at the KnoxvilleJS meetup on April 18, 2016: http://www.meetup.com/Knoxvillejs/events/229148319/
- Here are the slides from the presentation: https://github.com/alexklibisz/meetup-viz/blob/master/talk-slides.pdf

### Running the project

First, make sure you have node (version 4 or above) and npm installed. 
NVM is a good tool for setting your node version easily: https://github.com/creationix/nvm

To run the development environment:

1. Clone the repo: `$ git clone https://github.com/alexklibisz/meetup-viz`
2. Go into the folder: `$ cd meetup-viz`
3. Install packages: `$ npm install`
4. Run the dev environment: `$ npm run dev`

If you want to make the production build, run `$ npm run build`, and it will put the bundled assets in the `dist` directory.
