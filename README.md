# Project 1: iSchool Rankings App

For this project you will build an app that shows totally accurate, up to the date global rankings for iSchools all over the world. Well, maybe not exactly. In fact what it will do is always show the University of Michigan School of Information in first place and all of the rest of the iSchools in random order from 2nd place on downward. So it might be a bit biased.

See the [walkthrough video](https://youtu.be/S3gx0fhFJQo) for how the app should look and behave when you are done.

To help you out, I have provided two JavaScript files containing functions that you will need to `import` (using the JavaScript `import` statement) for use in your App.js. I have also created a default "blank" expo app for you to modify. Here are the steps you need to take to get set up to start working on the project:

1. Accept the GitHub invitation to get your personal copy of the project repository (if you're reading this, you've already done step 1!)
2. Clone the repo to your development machine.
3. After cloning to your machine, run `yarn install` in the project directory to install all of the dependencies.
4. Change the `default export` in your App.js to export a class Component rather than a function Component.
5. Figure out how you will use the exported functions from `Shuffle.js` and `iSchoolData.js` in your app, and set up your imports accordingly. DO NOT change the contents of `Shuffle.js` or `iSchoolData.js`. You do not need to nor are you allowed to.
6. Write your app!

### Notes:
- Make sure that the top-ranked iSchool is displayed as part of the list that contains all of the other schools. It should scroll with the other schools, for example (see video).
- The icon I used for the refresh button is the 'ios-refresh' icon from Ionicons. This is included with expo. To learn about using icons in Expo read the [Expo Icon Guide](https://docs.expo.io/guides/icons/). You can also use a different icon if you find one you like better.
- You can tweak the styles and colors if you like, but make sure that all style-related requirements are met for full credit.
- To get the "Updated" time and date to display correctly, you may need to refer to the [JavaScript Date docs](https://www.w3schools.com/jsref/jsref_obj_date.asp), particularly the [docs for Date.toLocaleString()](https://www.w3schools.com/jsref/jsref_tolocalestring.asp)
- You may need to look into the documentation for the React Native Text component to get long strings to render as shown in the demo video (i.e., using ... to truncate strings that don't fit in the display).
- For full credit, you will need to define a custom component (your own class that extends React.Component) to display each iSchool's information in the list. Your custom component should render *a single list item*, and the component should be rendered for each item in the ranked iSchools list.

### What to Turn In
1. Keep pushing your code to GitHub as you work.
2. Push your final version to GitHub when you are done. Your most recent commit will be used to determine when you turned the project in for the purposes of calculating a late penalty (if any).
3. When you are done, make a screencast video of your app in action and submit your video's URL to Canvas (this assignment). You will need to post your video somewhere on the web (you can use Loom, Google Drive, YouTube, etc.). 

### Grading
| No. | Requirement | Type | Points |
| --- | --- | --- | --- |
| 1 | A ranked list of iSchools is displayed when the app runs | Behavior | 75 |
| 2 | A shuffled list of ranked iSchools when they press the refresh button | Behavior |	75 |
| 3 | The University of Michigan School of Information is always listed as the number one school and other schools are listed in random order	| Behavior | 25 |
| 4 | All list items, including the top-ranked item, scroll together when the list is scrolled | Behavior | 20 |
| 5 | An app header is displayed that looks similar to the one in the demo video | Behavior | 25 |
| 6 | An updated date and time is shown in the header every time the refresh button is pressed | Behavior | 10 |
| 7 | iSchools shown in the list look similar to the ones in the demo video, with or without truncation for long names | Behavior |	25 |
| 8 | Long names are truncated using ellipses (...) in the list of iSchools | Behavior |	10 |
| 9 | Code correctly imports and uses the provided iSchoolData and Shuffle modules _without any modifications to `iSchoolData.js` or `Shuffle.js`_ | Code | 25 |
| 10 | Code correctly implements and uses a custom Component for displaying each list item | Code |	10 |
|    | **Total Points** | |  **300** |

*Note: there is no extra credit for projects. Sorry!*

