export const workoutsReducer = (state, action) => {

    switch (action.type){

        case 'CREATE_WORKOUT':
            return {
                workouts:[action.payload, ...state.workouts]
            }

        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
            };

        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(workout => workout.id !== action.payload.id)
            }


    }
}