const skillReducer = (lang=[], action) => {
 
    switch(action.type){
        case "addL":
            return [ ...lang, action.payload];
        case "removeL":
            let arr = [...lang]
            arr.splice(action.payload, 1);
            return arr;
        default:
            return lang;
    }
}
export default skillReducer