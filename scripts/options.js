//save profile
$('.save').click(function () {
  let profile = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    address1: $('#address1').val(),
    address2: $('#address2').val(),
    country: $('#country').val(),
    state: $('#state').val(),
    city: $('#city').val(),
    zipcode: $('#zipcode').val(),
    card: {
      number: $('#cardNumber').val(),
      expMonth: $('#expMonth').val(),
      expYear: $('#expYear').val(),
      cvv: $('#cvv').val(),
    }
  }
  chrome.storage.local.set({ profile: profile }, function () {
    console.log(`Saved profile: ${JSON.stringify(profile)}`)
    // var x = new XMLHttpRequest();
    // x.open('GET', 'https://admin.triviapost.in:5000/api/category');
    // x.onload = function () {
    //   alert(x.responseText);
    // };
    // x.send();


    $.get("https://admin.triviapost.in:5000/api/category", function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);

      localStorage.setItem('userDetail', 'fRo5BhK7pdg:APA91bEJYs_OZmLSpcFXdseI7QzTrjG5FFT7vsxW3DTijIYJQybYzsvSZ3DVRJULx2QH8xfpwyQnza0uOVtYNhhJ1Cf8977T-o05d51cjq0wxf9H_WReRWIpJg6zqbKs50jpNdHRfmRV');
    });
  });
})

//set default settings
function loadOptions() {
  chrome.storage.local.get(['profile'], function (result) {
    if (result !== {}) {
      let profile = result.profile
      console.log(profile)
      $('#firstName').val(profile.firstName)
      $('#lastName').val(profile.lastName)
      $('#email').val(profile.email)
      $('#phone').val(profile.phone)
      $('#address1').val(profile.address1)
      $('#address2').val(profile.address2)
      $('#country').val(profile.country)
      $('#state').val(profile.state)
      $('#city').val(profile.city)
      $('#zipcode').val(profile.zipcode)
      $('#cardNumber').val(profile.card.number)
      $('#expMonth').val(profile.card.expMonth)
      $('#expYear').val(profile.card.expYear)
      $('#cvv').val(profile.card.cvv)
    }
  })
}

document.addEventListener('DOMContentLoaded', loadOptions)