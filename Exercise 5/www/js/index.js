const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_H1q6ZXe-n/positions";
const kinveyUsername = "kid_H1q6ZXe-n";
const kinveyPassword = "c7fb093fa8064bf6b8a0ebb3ef724fee";
const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

document.addEventListener('deviceready', onDeviceReady, false);

window.addEventListener("batterystatus", onBatteryStatus, false);
window.addEventListener("batterylow", onBatteryLow, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    applyDeviceData(device);
    checkConnection();
    navigator.geolocation.watchPosition(geolocationSuccess, geolocationError);
    $("#camera-btn").click(getPicture);
}

function getPicture() {
    navigator.camera.getPicture(
        cameraSuccess,
        cameraError, {
            quality: 25,
            destinationType: Camera.DestinationType.DATA_URL
        }
    );
}

function cameraSuccess(imageData) {
    console.log(imageData);
    $("#myImage").attr('src', 'data:image/jpeg;base64,' + imageData);
    //$("#myImage").show();
    $("#myImage").css('display', 'block');
}

function cameraError(message) {
    alert(message);
}

function geolocationSuccess(position) {
    $('#latitude').text(position.coords.latitude);
    $('#longitude').text(position.coords.longitude);
    $('#altitude').text(position.coords.altitude);
    $('#speed').text(position.coords.speed);
    console.log(position);
    $('#accuracy').text(position.coords.accuracy);
    $('#altitudeAccuracy').text(position.coords.altitudeAccuracy);
    savePosition(position);
}

function savePosition(position) {
    let entity = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    $.ajax({
        type: "POST",
        url: baseSurviceUrl,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth);
        },
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(entity),
        success: function () {
            alert("Successfully added!");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function geolocationError(error) {
    alert(error.code);
    alert(error.message);
}

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}

function onBatteryStatus(status) {
    $('#batteryStatus').text(status.level);
    if (status.isPlugged) {
        $('#isPluggedLabel').removeClass('ui-checkbox-off');
        $('#isPluggedLabel').addClass('ui-checkbox-on');
    } else {
        $('#isPluggedLabel').removeClass('ui-checkbox-on');
        $('#isPluggedLabel').addClass('ui-checkbox-off');
    }
}

function checkConnection() {
    var networkState = navigator.connection.type;
    console.log(navigator.connection);

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    $('#connectionType').text(states[networkState]);
}

function applyDeviceData(device) {
    $('#cordovaVersion').text(device.cordova);
    $('#manufacturer').text(device.manufacturer);
    $('#isVirtual').text(device.isVirtual);
    $('#deviceModel').text(device.model);
    $('#operatingSystem').text(device.platform);
    $('#uuid').text(device.uuid);
    $('#serial').text(device.serial);
    $('#osVersion').text(device.version);
}