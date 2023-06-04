export const Reducer = (state , action) =>{
    switch(action.type) {
        CASE "ADD": 
        {
            return [action.payload, ...state]
        }
        default:
            return state;
    };
    
}
export default Reducer;