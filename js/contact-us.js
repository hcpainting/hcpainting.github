  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDV5xcpT7n78h5FYdMkmnZHuLVxrZ8N-IY",
    authDomain: "contact-form-test-2aeac.firebaseapp.com",
    databaseURL: "https://contact-form-test-2aeac.firebaseio.com",
    projectId: "contact-form-test-2aeac",
    storageBucket: "contact-form-test-2aeac.appspot.com",
    messagingSenderId: "150329737692"
  };
  firebase.initializeApp(config);

// Reference message collection
var messageRef = firebase.database().ref('messages');


//Listen for the submit
document.getElementById('contactForm').addEventListener("submit", submitForm);



function submitForm(e){
     e.preventDefault();

     // get values
     var name = getInputVal('name');
     var info = getInputVal('info');
     var desc = getInputVal('inputDes');

     // save messages
     saveMessage(name, info, desc);

     //show alert
     document.querySelector('.alert').style.display = 'block';

     //Hide alert after 5 seconds
     setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
     },5000);
     document.getElementById('contactForm').reset();
 }

// get input values
function getInputVal(id){
    return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(name, info, desc){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
    name: name,
    info: info,
    desc: desc
    });
}
