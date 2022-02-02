<div align="center">
  <a href="https://github.com/sf-adams/ClanHub">
    <img src="client/src/assets/images/santa_favicon.svg" alt="Logo" width="125" height="125">
  </a>
  <h1>ClanHub</h1>

A platform that extends the community of CodeClan, allowing Students and Staff to share insights, experiences and opportunities. As an open source, decentralized community, ClanHub hopes to help those throughout their whole CodeClan journey. Whether student or staff, everyone has something to share, or someone new to meet.

<!-- <img src = "static/demo_part_one.gif" width ="400" /> <img src = "static/demo_part_two.gif" width ="400" /> -->

[Report Issue](https://github.com/sf-adams/ClanHub/issues)
·
[CodeClan Website](https://codeclan.com/)

</div>

## Features
- Feed and Forum, categorised and searchable
- Layered authentication so that Admin, users and non-users all have different levels of access
- Request Login details when new to the CodeClan community
- Profile section with LinkedIn and GitHub details

## Tech Stack
- JavaScript
- React
- Axios
- Spring Boot H2
- Java 11
- SASS CSS
- Various NPM libraries (npm install is required, as directed in 'Getting Started')

## Getting Started
1. In `IntelliJ IDEA CE` or other IDE:

```zsh
- run ClanHub Application
```

2. In `client` folder:

```zsh
Your local machine terminal:
- npm install
- npm start (should be listening on port 3000)
```

2. In `client` folder on new tab:

```zsh
Your local machine terminal:
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


We have chosen to create a content-sharing and networking platform. Admin staff will create a profile, which will then be sent to users, where they can identify with any number of options (Cohort, GitHub, LinkedIn, Portfolio site link). As a key feature, our web app will center around a forum, allowing for the posting of information, which can be categorized and voted on.

1. **Forum**: Users will be able to create, read, update and delete posts, as well as add votes for content they like. The first version will contain a limited number of categories, as well as limited sorting features. We would also like to have the following features: 
    - How to say Merry Christmas
    - Main Day Celebrated On
    - Christmas Meal
2. **Quiz** - To maintain educational purpose, the user will be able to click on a button that takes them to a quiz, to test their learning from the Christmas app
3. **Joke** - For some entertaining festive spirit, the user will be able to click on a button that reveals a random Christmas joke
4. **Design** - BBC Theme, Christmas Colour Palette, Well Rounded Design (as a minimum) for the MVP.

Forum - 
The first version will contain a limited number of categories, as well as limited sorting features
Users can see who made a post, and click on their file to be taken to the profile page of that user
When you click on a forum post, you will be taken to a separate post page, with the ability to make comments
Authentication/Authorisation - Users will be able to sign up and log in to their account, with different users having different levels of access.
Job Section - For those in the process of job hunting, or simply looking to see what jobs are available with partners, this section will be able 
Open Source - To allow for Students or Staff to make improvements to the site, through a Feature Request Section, or at least through the GitHub repository
Design - CodeClan Theme, CC Colour Palette, Mobile-First Design



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