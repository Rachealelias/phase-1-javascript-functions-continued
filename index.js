function saturdayFun(game= "roller-skate"){
    return `This Saturday, I want to ${game}!`;
}
saturdayFun();

saturdayFun('bathe my dog')

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(adj = '*'){
    return function(emphatic){
    return `You are ${adj}${emphatic}${adj}!`;
    }
}
wrapAdjective();