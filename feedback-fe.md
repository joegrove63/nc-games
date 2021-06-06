# Joe Grove - FE Feedback (28/05/2021)

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [ ] Basic styling added
- [ ] Responsive design (check on multiple screen sizes + on mobile)
- [ ] Items aligned
- [ ] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn’t cause an issue on sub-pages <- check this once hosted
- [ ] Make sure you clear any console warnings / errors (e.g. "Received NaN for the `children` attribute. If this is expected, cast the value to a string.")
- [ ] Posts give user indication of loading (disabling the button would help while posting a comment, otherwise many of the same comment can be posted)
- [ ] Bonus: format the dates to a more human readable format. I would recommend using a library like [dayjs](https://day.js.org/) or [date fns](https://date-fns.org/).
- [ ] For now, put the Reviews component on `/` until you get the home page sorted. Then you can deploy and put on your CV and update it later.

## Functionality

### Login

- [ ] Add some indication of who is logged in
- [ ] Finish `/users` page and allow people to select which user they're logged in as

## Reviews

- [ ] Sorting dropdown is cool! The many if/elses feels a bit WET though. Any way around this?

## Comments

- [ ] Posted comments don't display properly

## Error Handling

- [ ] Bad url - Make sure you have some default page if someone visits some random endpoint (e.g. `/banana`)
- [ ] Bad topic slug in url (e.g. `/categories/banana`) - catch the error and indicate to the user that something has gone wrong
- [ ] Bad article id in url (e.g. `/articles/banana` or `/articles/999`)

## Code

- [ ] Do `reviews` need to be in App state? Could they be lower down the component tree?
- [ ] Does `votesUpdate` need to be in App state? Could it be lower down the component tree?
- [ ] Fix any warnings in terminal
- [ ] Give `sortOrder` and `sortBy` state initial values
- [ ] Downvote / upvote functions look very similar. Could they be more DRY?
- [ ] Downvote button has unnecessary `if` statement now that button gets disabled
- [ ] Check dependencies in `useEffect`s. Some unnecessary things?
- [ ] Remove `console.log`s / comments
- [ ] Remove unnecessary files (e.g. old react icons)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END
