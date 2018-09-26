import { autorun, toJS } from 'mobx'
import store from 'store'


export default function autoSave(appStore) {
    let firstRun = true;

    autorun(() => {
        // on load check if there's an existing store on localStorage and extend the store
        if (firstRun) {
            const existingStore = store.get("appStore");

            if (existingStore) {
                console.log(existingStore);
            }
        }

        // from then on serialize and save to localStorage
        store.set("appStore", toJS(appStore))
    });

    firstRun = false
}
