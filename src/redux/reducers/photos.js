const stateTree = {
    photos_list:[
        require('../../assets/img1.jpg'),
        require('../../assets/img2.jpg'),
        require('../../assets/img3.jpg'),
        require('../../assets/img4.jpg'),
        require('../../assets/img5.jpg'),
        require('../../assets/img6.jpg'),
        require('../../assets/img7.jpg'),
        require('../../assets/img8.jpg'),
        require('../../assets/img9.jpg'),
        require('../../assets/img10.jpg'),
        require('../../assets/img11.jpg'),
        require('../../assets/img12.jpg'),
        require('../../assets/img13.jpg'),
        require('../../assets/img14.jpg'),
        require('../../assets/img15.jpg'),
        require('../../assets/img16.jpg'),
        require('../../assets/img17.jpg'),
        require('../../assets/img18.jpg'),
        require('../../assets/img19.jpg'),
        require('../../assets/img20.jpg'),
        
    ],
}

function reducer(state =stateTree,action){
    switch(action.type){
        case 'UPDATE_PHOTO':
            return{
                ...state,
                photos_list:action.data
            }
        default:
            return state
    }
}

export default reducer