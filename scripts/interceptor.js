$(document).ajaxStart(function () {
    console.log('Function call before ajax');
});

$(document).ajaxComplete(function () {
    console.log('Function call after response');
});

$(document).ajaxSuccess(function () {
    console.log('Triggered ajaxSuccess handler');
});

var accessToken = localStorage.getItem('userDetail');

console.log('AccessToken', accessToken);

$.ajaxSetup({

    beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
        xhr.setRequestHeader("Authorization", accessToken);
    },

    dataFilter: function (data, type) {
        console.log('Data inside data filter', data);
        return data;
    }

});