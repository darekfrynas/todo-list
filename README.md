# Simple TODO List

Simple yet amazing TODO List, with features like:

- __Create__ a task by typing and hitting <kbd>Enter</kbd> key, or pressing "Add" button,
- __Edit__ a task whenever you want, simply double-click on it, or press "Edit" button, (don't forget to save changes)
- __Remove__ a task when you don't need it anymore,
- Mark your tasks as __completed__,
- Live __search__ through your tasks,
- Apply __filters__ in order to see all, completed or incompleted tasks
- All data is saved in your browser localStorage, which means you can get back to your list whenever you want to


## Setup

1. Download this repository
2. Open your favorite terminal
3. Take care of your environment, recommended versions are the ones below or higher
    - `10.11.0` for [Node.js](https://nodejs.org/en/)
    - `1.9.4` for [Yarn](https://yarnpkg.com/lang/en/docs/install/)
4. `cd` to the root directory of this project
5. Install dependencies with `yarn`
6. Start TODO app with `yarn start`
7. Open your favorite web browser (tested on Chrome version 69) and go to [http://localhost:3000](http://localhost:3000)


## Possible improvements

- Validation to disallow creating/saving tasks with empty value)
- Completed tasks could be moved to the bottom of the list,
- Item id generation could be replaced with `Date.now()`, which creates possibility to introduce productivity reports (daily/weekly/monthly),
- Tasks could store more data:
    - priority,
    - labels,
    - deadlines,
- With all above, sorting would be possible,
- AutoSave - generic solution for recovering arrays/objects
- Lists could be assigned to projects
- Edit mode for task could be stored in global state instead of component state, 


## Postscriptum

In a previous projects we used redux for state management, so mobx is something new to me. 
But using the opportunity, I wanted to learn something new, so feedback is more than welcome.
For myself I can tell already, I'm not going back to redux.

Enjoy testing and reviewing. In case of questions I'm available at [darekfrynas@gmail.com](mailto:darekfrynas@gmail.com)
