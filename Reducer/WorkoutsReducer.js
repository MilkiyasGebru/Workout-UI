export const WorkoutsReducer = (state, action) => {

    switch (action.type){

        case 'CREATE_WORKOUT':
            return {
                workouts:[action.payload, ...state.workouts]
            };

        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
            };

        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(workout => workout._id !== action.payload.id)
            };


        default:
            return state;
    }
}