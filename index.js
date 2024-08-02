const para1 = document.getElementById('p1');
const para2 = document.getElementById('p2');


let count = 0;
let updatecount = (i, p) => {
    count += i
    p.textContent = count

}


const plus1 = () => updatecount(1, para1)
const plus2 = () => updatecount(2, para1);
const plus3 = () => updatecount(3, para1);
const p2plus1 = () => updatecount(1, para2);
const p2plus2 = () => updatecount(2, para2);
const p2plus3 = () => updatecount(3, para2);
const reset = () => {
    count = 0
    para1.textContent = count
    para2.textContent = count
}


