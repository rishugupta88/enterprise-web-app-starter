// noinspection EqualityComparisonWithCoercionJS

const username = 'USERNAME';
const password = 'PASSWORD';

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Base64 library taken from https://gist.github.com/rexso/a3541c05096ba9174915                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////

const base64 = {
  table: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", decode: function (t, e, r) {
    function a(t) {
      if (-1 == (t = d.indexOf(t.charAt(0)))) throw"invalid characater detected in base64.decode";
      return t
    }

    if (!(t = "" + t).length) throw"invalid string length in base64.decode";
    let h, n, i = [], c = t.length, s = 0, d = e ? this.table.substr(0, 62) + "-_" : this.table;
    if (0 == c || c % 4 && !r) throw"invalid base64 string detected in base64.decode";
    // noinspection CommaExpressionJS
    for (c % 4 && r ? (s = 4 - c % 4, c -= 4) : "=" == t.charAt(c - 1) && (s = "=" == t.charAt(c - 2) ? 2 : 1, c -= 4), n = 0; c > n;) { // noinspection CommaExpressionJS
      h = a(t[n++]) << 18 | a(t[n++]) << 12 | a(t[n++]) << 6 | a(t[n++]), i.push(String.fromCharCode(h >> 16, h >> 8 & 255, 255 & h));
    }
    switch (s) {
      case 1:
        // noinspection CommaExpressionJS
        h = a(t[n++]) << 18 | a(t[n++]) << 12 | a(t[n++]) << 6, i.push(String.fromCharCode(h >> 16, h >> 8 & 255));
        break;
      case 2:
        // noinspection CommaExpressionJS
        h = a(t[n++]) << 18 | a(t[n++]) << 12, i.push(String.fromCharCode(h >> 16))
    }
    return i.join("")
  }, encode: function (t, e, r) {
    function a(t) {
      if ((t = t.charCodeAt(0)) > 255) throw"invalid character detected in base64.encode";
      return t
    }

    if (!(t = "" + t).length) throw"invalid string length in base64.encode";
    let h, n, i = [], c = t.length - t.length % 3, s = e ? this.table.substr(0, 62) + "-_" : this.table;
    for (n = 0; c > n;) { // noinspection CommaExpressionJS
      h = a(t[n++]) << 16 | a(t[n++]) << 8 | a(t[n++]), i.push(s.charAt(h >> 18)), i.push(s.charAt(h >> 12 & 63)), i.push(s.charAt(h >> 6 & 63)), i.push(s.charAt(63 & h));
    }
    switch (t.length - c) {
      case 1:
        // noinspection CommaExpressionJS
        h = a(t[n]) << 16, i.push(s.charAt(h >> 18) + s.charAt(h >> 12 & 63) + (r ? "" : "=="));
        break;
      case 2:
        // noinspection CommaExpressionJS
        h = a(t[n]) << 16 | a(t[++n]) << 8, i.push(s.charAt(h >> 18) + s.charAt(h >> 12 & 63) + s.charAt(h >> 6 & 63) + (r ? "" : "="))
    }
    return i.join("")
  }
};

const encoded = base64.encode(username + ':' + password);
console.log('Set NPMTOKEN env variable to ' + encoded + ' and restart IntelliJ, then you can use npm install');
