const test02_1 = (req, res) => {
    try { 
        const arr = [];
        const idx = Math.floor(Math.random() * 100);
        const string = "가나다라마바사아자차카파타하";
        
        for (let i = 0; i <= idx; i++) {
            if (Math.floor(Math.random() * 10) > 5) {
                arr.push(string.charAt(Math.floor(Math.random() * 10)) + string.charAt(Math.floor(Math.random() * 10)));
            } else {
                arr.push(Math.floor(Math.random() * 100))
            }
        }
        res.json(arr);
    } catch(e) {
        console.log(e);
    }
    
}

module.exports = test02_1;
/* 

    const stringArr = arr.filter(e => e <= "하");
    const numArr = arr.filter(e => e < 100).sort((a,b) => {return a-b;}).reverse();
    console.log(numArr)
    stringArr.sort()
    console.log(arr)
window.onload = () => {
    document.getElementById("resultString").innerHTML = stringArr.map(e => e);
    document.getElementById("resultNumber").innerHTML = numArr.map(e => e);
}

*/