var firstNameId = 'first_name';
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last_name';
var lastNameEl = document.getElementById(lastNameId);
var adressId = 'adress';
var adressEl = document.getElementById(adressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = 'avatar_wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);


// window.alert(firstNameEl.value);
// window.alert(lastNameEl.value);
// window.alert(adressEl.value);
// window.alert(citiesEl.value);
// window.alert(hobbiesEl.value);
// window.alert(avatarWrapperEl.innerHTML);
// window.alert(avatarEl.src);
// window.alert(avatarEl.alt);

// firstNameEl.value = 'Vasia';
// lastNameEl.value = 'Pupkin';

window.alert(lastNameEl.className);
lastNameEl.className = 'error';
lastNameEl.title = 'This is Error';

avatarEl.src = 'https://planbphoto.com/wp-content/uploads/Serze.jpg';
avatarEl.title = 'i am avatar';
citiesEl.value = 'london';
hobbiesEl.value = 'i am not iteresting';
avatarWrapperEl.innerHTML = '<ul id="list"><li>1.<li>2.</ul>';

// var numberList = document.getElementById('list');
// window.alert(numberList.innerHTML)	
