<div align="center">
  <a href="https://github.com/sf-adams/ClanHub">
    <img src="client/src/assets/images/santa_favicon.svg" alt="Logo" width="125" height="125">
  </a>
  <h1>ClanHub</h1>

A prototype of a Christmas-themed educational app for primary-aged children; fictitiously commissioned by the BBC. It offers interactive learning and testing of Christmas-related facts from around the world, as well as some festive entertainment features.

<img src = "static/demo_part_one.gif" width ="400" /> <img src = "static/demo_part_two.gif" width ="400" />

[Report Issue](https://github.com/sf-adams/sleigh_ride/issues)
·
[Group Repository](https://github.com/heathercking/BBCSleighRide)

</div>

## Features
- Interactive Map with facts about Christmas around the world
- Quiz to test your new Christmas knowledge
- Random Joke Generator
- Chatbot Santa
- Let It Snow feature!

## Tech Stack
- JavaScript
- React
- MongoDB
- CSS
- Various NPM libraries (npm install is required, as directed in 'Getting Started')

## Getting Started
1. In `server` folder:

```zsh
Your local machine terminal:
- npm install
- npm run seeds
- npm run server:dev (should be listening on port 5000)
```

2. In `client` folder:

```zsh
Your local machine terminal:
- npm install
- npm start (should be listening on port 3000)
```

## The Team

While I have made some changes to our [group project](https://github.com/heathercking/BBCSleighRide), the original Sleigh Ride app was built by our team:

<div align="center">
  <a href="https://github.com/heathercking">@heathercking</a>
  •
  <a href="https://github.com/Gazian">@Gazian</a>
  •
  <a href="https://github.com/O-Marsters-1997">@O-Marsters-1997</a>
  •
  <a href="https://github.com/sf-adams">@sf-adams</a>
</div>

## Full Brief

### Minimum Viable Product

We chose to create educational content about Christmas around the world; fictitiously commissioned by the BBC. As a key feature, our web app centres around an interactive world map. 

1. **Map**: Users will be able to select a country from the map and see some key facts about Christmas in that country. The prototype will include a limited selection of countries, including at least one from each continent. When you click on the country, you will see these key facts: 
    - How to say Merry Christmas
    - Main Day Celebrated On
    - Christmas Meal
2. **Quiz** - To maintain educational purpose, the user will be able to click on a button that takes them to a quiz, to test their learning from the Christmas app
3. **Joke** - For some entertaining festive spirit, the user will be able to click on a button that reveals a random Christmas joke
4. **Design** - BBC Theme, Christmas Colour Palette, Well Rounded Design (as a minimum) for the MVP.

### Extensions

Identified below are ideas for further development. Some of them have been implemented, as indicated.

To help improve the user experience, some additional features include:
- A Santa Chatbot (npm library) (complete)
- 'Let it snow' button triggering falling snow (complete)
- Quiz Interactivity (complete):
    - Visual representations or indications of results or progress
    - Candy Cane life counter
    - Christmas Colour palette used to full
    - Results saved to database
- Interactive game, such as tic-tac-toe (in development - 'present' placeholder created)
- Music/Audio - Potential previews of a country’s song, as well as some audio effects for things like Christmas Crackers and Sledges
- Search Bar - To help users who don’t know the location of a particular country, the app will include a search bar
- Joke/Fact - add a fact into the jokes area, and make it like pulling a Christmas cracker that has a joke on one side and a random fact on the other
- Extra Design - Interactivity with buttons, enhanced versions of the MVP:
    - Loading Screen - Sleigh
    - Custom Pins on Map - candy canes
- Blog Content
    - Ability to scale the level of content with further information in mind (Without intruding on the user experience)
    - Also potential work with the BBC API, to filter the stories according to Christmas topics
    - Signposting towards other resources, that would allow for further years to interact with the app