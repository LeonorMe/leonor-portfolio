function goToIndex() {
    let a = window.location.href;
    //console.log(a);
    let b = 'contact.html';
    let c = 'project.html';
    if(a.slice(-12) == b) {
        let s = a.replace(b, ''); //a.indexOf(b);
        //console.log(s);
        location.href = s;
    }
    else if (a.slice(-12) == c) {
        let s = a.replace(c, '');
        location.href = s;
    }
}
