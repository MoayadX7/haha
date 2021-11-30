//---------------------------------------------//


function xx1() {
    var k1 = d.toDateString().replace(/\s/g, '');
    var text = document.getElementById('t1').value;
    var k2 = document.getElementById('t2').value;

    var key = '';
    for (var m1 = 0, m2 = 0; key.length < k1.length + k2.length;) {
        if (m1 < k1.length) {
            key += k1[m1];
            ++m1;
        }
        if (m2 < k2.length) {
            key += k2[m2];
            ++m2;
        }
    }
    var zz, mm;
    var text2 = '';
    for (var i = 0; i < text.length; i++) {
        zz = key[i % key.length];
        if (i % 2) mm = 1
        else mm = -1;
        text2 += (String.fromCharCode(text[i].charCodeAt(0) + zz.charCodeAt(0) * mm));
    }
    key = key.split('');
    var key2 = '';
    for (var i in key) {
        key2 += String.fromCharCode(key[i].charCodeAt(0) + 1523);
    }
    document.getElementById('t1').value = key2 + text2;
    var final = document.getElementById('t1');
    final.select();
    final.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(final.value);
}

function xx2() {
    var text = document.getElementById('t1').value;
    var kkey = text.slice(0, 12 + document.getElementById('t2').value.length),
        key = '';
    kkey = kkey.split('');
    for (var i = 0; i < 12 + document.getElementById('t2').value.length; i++) {
        key += String.fromCharCode(kkey[i].charCodeAt(0) - 1523);
    }

    text = text.slice(12 + document.getElementById('t2').value.length);
    text = text.split('');


    var zz, mm;

    var text2 = '';
    for (var i = 0; i < text.length; i++) {
        if (i % 2) mm = -1
        else mm = 1;
        zz = key[i % key.length];
        // if (String.fromCharCode(text[i].charCodeAt(0) + zz.charCodeAt(0) * mm) == '^') console.log(text[i] + '\n' + key[i % key.length]);
        text2 += (String.fromCharCode(text[i].charCodeAt(0) + zz.charCodeAt(0) * mm));

    }
    document.getElementById('t1').value = text2;
}

//---------------------------------------------//
var d = new Date;
//---------------------------------------------//