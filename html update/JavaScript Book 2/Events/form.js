var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          =document.getElementById('formSignup'); //store elements
elSelectPackage =document.getElementById('package');
elPackageHint   =document.getElementById('packageHint');
elTerms         =document.getElementById('terms');
elTermsHint     =document.getElementById('termsHint');

function packageHint(){ //Declare function
  var pack = this.options[this.selectedIndex].value; //get selected option
  if(pack == 'monthly'){ //if monthly package
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; //show this msg
  }else{ //otherwise
    elPackageHint.innerHTML = 'Good choice!'; //show this message
  }
}

function checkTerms(event){ //declare function
  if(!elTerms.checked){ //if checkbox is NOT ticked
    elTermsHint.innerHTML = 'you must agree to the terms and conditions'; //show message
    event.preventDefault(); //prevent form submit
  }
}

//create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
