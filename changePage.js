function goToIndex() {
    let a = window.location.href;
    //console.log(a);
    let c = 'contact.html';
    let p0 = 'project_0.html';
    let p1 = 'project_1.html';
    let p2 = 'project_2.html';
    if(a.slice(-12) == c) {
        let s = a.replace(c, ''); //a.indexOf(b);
        //console.log(s);
        location.href = s;
    }else{
        let s = a.replace(a.slice(-14), "");
        location.href = s;
    }
}

function goToProject0(){
    let a = window.location.href;
    let c = "project_0.html";
    console.log(a + c);
    location.href = a + c;
}
function goToProject1() {
    let a = window.location.href;
    let c = "project_1.html";
    location.href = a + c;
}
function goToProject2() {
    let a = window.location.href;
    let c = "project_2.html";
    location.href = a + c;
}