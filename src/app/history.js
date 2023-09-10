import { createBrowserHistory } from "history";

// create a history object that can be used by react-router and components outside of react
// (e.g. auth async actions)
const history = createBrowserHistory();
export default history;
