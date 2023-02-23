
const initialState = {count:0};

const BadgeReducer = (state = initialState,action) => {
      switch(action.type){
            case "UPDATE_BADGE":
                  return {...state,count:action.payload}   
            default:
                  return state
      }
}

export default BadgeReducer