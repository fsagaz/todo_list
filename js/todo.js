
var empties = false;
var ElementToClone = document.getElementsByClassName('input-container')[0];
ElementToClone.getElementsByTagName('input')[0].focus(); //focus on input text

//TODO --- ideally if we need to set todo elements and classes as variables
// var todoElements = {
//     general_list: document.getElementById('list-container')
// }


var removeField = function(el) {
  document.getElementById('list-container').removeChild(el.target.closest('.input-container'));
};


var checkEmpties = function() {
  var inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      alert('add content before adding todos!');
      return true;
    }
  }
};



var doneField = function(el) {
  if (el.target.closest('.input-container').getElementsByTagName('input')[0].value === '') {
    alert('empty content!');
    return false;
  } else {
    el.target.closest('.input-container').getElementsByTagName('input')[0].disabled = true;
    el.target.closest('.input-container').classList.add('done');
    el.target.closest('.input-container').classList.remove('input-container');
  }
}


var addField = function(el) {
  empties = checkEmpties();
  if (!empties) {
    var clonedElement = ElementToClone.cloneNode(true);
    document.getElementById('list-container').appendChild(clonedElement);
    clonedElement.getElementsByTagName('input')[0].value = '';
    clonedElement.getElementsByTagName('input')[0].focus();
    clonedElement.getElementsByClassName('remove')[0].addEventListener('click', removeField);
    clonedElement.getElementsByClassName('checkit')[0].addEventListener('click', doneField);
  } else {
    console.log('empties');
  }
};




document.getElementsByClassName('checkit')[0].addEventListener('click', doneField);
document.getElementsByClassName('remove')[0].addEventListener('click', removeField);
document.getElementById('add').addEventListener('click', addField);
