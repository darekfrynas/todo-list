import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faEdit, faSearch, faKeyboard, faCheck, faSave, faUndo, faTrash, faTimes
} from '@fortawesome/free-solid-svg-icons';


export default function fontAwesomeInitialize() {
    library.add(faEdit, faSearch, faKeyboard, faCircle, faCheck, faSave, faUndo, faTrash, faTimes);
}
