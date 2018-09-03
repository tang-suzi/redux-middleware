import { createStore, applyMiddleware } from './redux/index'

let counter = (state=0,action) => {
    if(action){
        switch(action.type){
            case "ADD":
                return state + 1;
            case "SUB":
                return state - 1;
            default:
                return state;
        }
    }else{
        return state;
    }
}

let logger = store => next => action => {
    console.log(store.getState());
    console.log(action);
    // next(action);
    console.log(store.getState())
}

let store = applyMiddleware(logger)(createStore)(counter)
store.dispatch({type:'ADD'})