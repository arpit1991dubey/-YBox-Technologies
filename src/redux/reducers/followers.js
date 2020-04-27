const stateTree = {
    followers_list:[
        {
            image:require('../../assets/m1.jpg'),
            name:'Arpit',
            userName:'arpit119'
        },
        {
            image:require('../../assets/m2.jpg'),
            name:'Ankit',
            userName:'advvait119'
        },
        {
            image:require('../../assets/m3.jpg'),
            name:'RobP',
            userName:'Robkl119'
        },
        {
            image:require('../../assets/m4.jpg'),
            name:'Rony',
            userName:'ronuo9'
        },
        {
            image:require('../../assets/f1.jpg'),
            name:'Alexa',
            userName:'alx119'
        },
        {
            image:require('../../assets/f2.jpg'),
            name:'Dadora',
            userName:'Dio119'
        },
        {
            image:require('../../assets/m5.jpg'),
            name:'Logan',
            userName:'Logk19'
        },
        {
            image:require('../../assets/f4.jpg'),
            name:'Rosher',
            userName:'Ros119'
        },
        {
            image:require('../../assets/m6.jpg'),
            name:'Ernys',
            userName:'Ensy119'
        },
        
    ]
}

function reducer(state= stateTree,action){
    switch(action.type){
        case 'UPDATE_FOLLOWERS':
            return {
                ...state,
                followers_list:action.data
            }
        default:
            return state

    }

}

export default reducer