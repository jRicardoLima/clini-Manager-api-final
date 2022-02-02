export default {
    state:{
        showLoading: false,
        message: ''
    },
    mutations:{
        displayLoading(state,payload){
            state.showLoading = payload.showLoading;
            state.message = payload.message;
        }
    }
}