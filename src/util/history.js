import { createBrowserHistory } from 'history';
import qs from 'qs';

const _history = createBrowserHistory();

function addLocationQuery(history){
    if (!history.location.search) return;
    history.location = Object.assign(history.location, {query: qs.parse(history.location.search.substring(1)) });
}

addLocationQuery(_history);

_history.listen(() => {
    addLocationQuery(_history);
});

export default _history;