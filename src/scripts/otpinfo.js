//init OTP form stack object
const otpFormStack = [];
const otpBasicForm = document.querySelector('.newOTP').cloneNode(true);

//create new OTP form
document.querySelector('.otpNewBtn').addEventListener("click", () => {
    const otpFormBox = document.querySelector('#otpFormBox');
    const node = otpFormStack.length? otpFormStack.pop() : otpBasicForm.cloneNode(true);
    otpFormBox.appendChild(node);
});

//delete OTP form
document.body.addEventListener("click", (e) => {
    const t = e.target;
    if (!t.classList || !t.classList.contains('deleteOTP')) {
        return;
    }
    const node = t.parentNode.parentNode.parentNode;
    if (node.parentNode) {
      otpFormStack.push(node.parentNode.removeChild(node));
    }
});


//toggle token
function show() {
    var p = document.getElementById('newSecretToken');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('newSecretToken');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.querySelector(".eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

//container tabs
var div = document.getElementById('containerAssign');

if (browser.contextualIdentities === undefined) {
    div.setAttribute("disable");
} else {
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.setAttribute("disable");
        return;
      }
      identities.map(x => {
        const opt = document.createElement('option')
        opt.innerHTML = x.name
        return opt
      }).forEach(x => document.querySelector('select').appendChild(x))
  });
}

//Get QrScan Result
var qrresult = window.location.search.substring(1)
if (qrresult.length > 0) {
    var scannedotp = new URLSearchParams(qrresult)
    document.getElementById('newAccountName').value = scannedotp.get('account')
    document.getElementById('newSecretToken').value = scannedotp.get('key')
    document.getElementById('newIssuer').value = scannedotp.get('issuer')
}

//container tabs
var div = document.getElementById('containerAssign');

if (browser.contextualIdentities === undefined) {
    div.setAttribute("disable");
} else {
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.setAttribute("disable");
        return;
      }
      identities.map(x => {
        const opt = document.createElement('option')
        opt.innerHTML = x.name
        return opt
      }).forEach(x => document.querySelector('select').appendChild(x))
  });
}