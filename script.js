function saklar() {
    // TOGGLE RUANGAN KELUARGA
    let toggleKeluarga = document.getElementById("keluarga-toggle");
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    // TOGGLE RUANGAN MAKAN
    let toggleMakan = document.getElementById("rMakan-toggle");
    let toggle4 = document.getElementById("default-toggle4");

    //  TOGGLE RUANGAN TIDUR
    let toggleTidur = document.getElementById("rTidur-toggle");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");

    //  TOGGLE RUANGAN TAMU
    let toggleTamu = document.getElementById("rTamu-toggle");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    //  LAMPU RUANGAN KELUARGA
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    // LAMPU RUANGAN MAKAN
    let lampu4 = document.getElementById("lampu4");

    // LAMPU RUANGAN TIDUR
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    // LAMPU RUNGAN TAMU
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");



    // MENGHIDUPKAN DAN MEMATIKAN RUANGAN KELUARGA

    if (toggleKeluarga.checked) {
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
    } else {
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
    }


    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }


    // MENGHIDUPKAN DAN MEMATIKAN RUANGAN MAKAN
    if (toggleMakan.checked){
        toggle4.checked = true;
    } else {
        toggle4.checked = false;
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }


    // MENGHIDUPKAN DAN MEMATIKAN RUANGAN TIDUR
    if (toggleTidur.checked) {
        toggle5.checked = true;
        toggle6.checked = true;
    } else{
        toggle5.checked = false;
        toggle6.checked = false;
    }

    if (toggle5.checked) {
        lampu5.src = "assets/images/on.gif";
    } else {
        lampu5.src = "assets/images/off.gif";
    }

    if (toggle6.checked) {
        lampu6.src = "assets/images/on.gif";
    } else {
        lampu6.src = "assets/images/off.gif";
    }


    // MENGHIDUPKAN DAN MEMATIKAN RUANGAN TAMU
    if (toggleTamu.checked) {
        toggle7.checked = true;
        toggle8.checked = true;
        toggle9.checked = true;
        toggle10.checked = true;
    } else{
        toggle7.checked = false; 
        toggle8.checked = false; 
        toggle9.checked = false; 
        toggle10.checked = false; 
    }
    if (toggle7.checked) {
        lampu7.src = "assets/images/on.gif";
    } else {
        lampu7.src = "assets/images/off.gif";
    }

    if (toggle8.checked) {
        lampu8.src = "assets/images/on.gif";
    } else {
        lampu8.src = "assets/images/off.gif";
    }
    if (toggle9.checked) {
        lampu9.src = "assets/images/on.gif";
    } else {
        lampu9.src = "assets/images/off.gif";
    }

    if (toggle10.checked) {
        lampu10.src = "assets/images/on.gif";
    } else {
        lampu10.src = "assets/images/off.gif";
    }

}

