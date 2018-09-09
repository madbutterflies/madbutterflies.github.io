function change (el) {
    var max_len = 10;
    if (el.value.length > max_len) {
        el.value = el.value.substr(0, max_len);
    }
    document.getElementById('char_cnt').innerHTML = el.value.length;
    document.getElementById('chars_left').innerHTML = max_len - el.value.length;
    return true;
}
function postal(el) {
    if(el.value.length===2 && el.value.indexOf('-')===-1) this.value+='-';
}