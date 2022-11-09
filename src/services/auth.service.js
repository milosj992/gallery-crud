
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));


const login=(objectAuth)=>{

    localStorage.setItem("user", JSON.stringify(objectAuth));
    currentUserSubject.next(objectAuth);//updates with last localstorage change

};

const logout=()=> {
    localStorage.removeItem('user');
    currentUserSubject.next(null);//updates with last localstorage change
};

const AuthService = {
     login,logout, currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }//exporting function with last localstoragechange
};

export default AuthService