export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQC8EEVGApW7Pg7iPq5evNckdD874MVci6U7PvBGubwwjfOkN9yPNi6Y7a_9qC079k_U8s8cBqjmTA71fpT5KiWGGc6Dtfqy3VIBg8eunN6Yx7Xqcy652PSrqjIFLYg3AE2adoGorI8psrwdXUcms0fwFFDx5zCcJviZ33ZkGxxnjiz', 
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER': return{...state, user: action.user};
        case 'SET_TOKEN': return {...state, token: action.token}
        case 'SET_PLAYLISTS': return {...state, playlists: action.playlists}
        case 'SET_DISCOVER_WEEKLY': return {...state, discover_weekly: action.discover_weekly}
        default: return state 
    }
}

export default reducer 