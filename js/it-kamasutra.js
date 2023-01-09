function alertValues(elementParameter) {
    debugger;
    console.log(elementParameter.value);
    console.log(elementParameter.className);
    
}


var firstNameId = 'first_name';
var firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

var lastNameId = 'last_name';
var lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

var adressId = 'adress';
var adressEl = document.getElementById(adressId);
alertValues(adressEl);

var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);

var avatarWrapperId = 'avatar_wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
alertValues(avatarWrapperEl);

var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);
alertValues(avatarEl);


 firstNameEl.value = 'Vasia';
 lastNameEl.value = 'Pupkin';

 console.log(lastNameEl.className);
 lastNameEl.className = 'error';
 lastNameEl.title = 'This is Error';

 avatarEl.src = 'https://planbphoto.com/wp-content/uploads/Serze.jpg';
 avatarEl.title = 'i am avatar';
 citiesEl.value = 'london';
 hobbiesEl.value = 'i am not iteresting';
 avatarWrapperEl.innerHTML = '<ul id="list"><li>1.<li>2.</ul>';

 var numberList = document.getElementById('list');
 console.log(numberList.innerHTML);
