const para1 = document.getElementById('p1');
const para2 = document.getElementById('p2');
const leader = document.getElementById('lead')


let count1 = 0;
let count2 = 0;
let updatecount = (i, team) => {
    if (team == 'home') {
        count1 += i
        para1.textContent = count1
    } else if (team == 'guest') {
        count2 += i
        para2.textContent = count2

    }
updateleader()
}

let updateleader=()=>{
    if(count1>count2){
        leader.textContent='HOME IS LEADING'
    }else if(count1<count2){
        leader.textContent='GUEST IS LEADING'
    }else{
        leader.textContent='SCORES ARE TIED'
    }
}


const plus1 = () => { updatecount(1, 'home') }
const plus2 = () => updatecount(2, 'home');
const plus3 = () => updatecount(3, 'home');
const p2plus1 = () => updatecount(1, 'guest');
const p2plus2 = () => updatecount(2, 'guest');
const p2plus3 = () => updatecount(3, 'guest');
const reset = () => {
    count1 = 0
    count2 = 0
    para1.textContent = count1
    para2.textContent = count2
    updateleader()
}


