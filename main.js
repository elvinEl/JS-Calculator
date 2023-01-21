let currentVal = 0; //  ard arda islemler olarsa toplam deyeri tutmaqdan otru
let result = 0;  // o anki cavabi veren deyisken
let isClickSymbol = false; // simvollar basilmadigda false olacag
let isClickNumber = false; // reqemlere basmadiqda false olacaq
let selectSymbol = 0; // basilan simvolun deyeri

function ClickNumber(val) {
    if (!isClickNumber && isClickSymbol) {
        $('#inputVal').text(0);
    }
    let inputVal = $('#inputVal').text();
    if (inputVal == 0) {
        $('#inputVal').text(val);
    } else {
        $('#inputVal').text(inputVal + " " + val);
    }
    isClickNumber = true;
}

function ClickSymbol(val) {
    let inputVal = $('#inputVal').text();
    switch (val) {
        case 1:
            result = 0;
            currentVal = 0;
            $('#inputVal').text(0);
            break;
        case 2:
            inputVal = (-1) * inputVal;
            $('#inputVal').text(inputVal);
            break;
        case 3:
            inputVal = inputVal / 100;
            $('#inputVal').text(inputVal);
            break;
        case 4:
            selectSymbol = 4;
            if (!selectSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) / parseFloat(inputVal);
                currentVal = result;
                $('#inputVal').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 5:
            selectSymbol = 5;
            if (!selectSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) * parseFloat(inputVal);
                currentVal = result;
                $('#inputVal').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 6:
            selectSymbol = 6;
            if (!selectSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) - parseFloat(inputVal);
                currentVal = result;
                $('#inputVal').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 7:
            selectSymbol = 7;
            if (!selectSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) + parseFloat(inputVal);
                currentVal = result;
                $('#inputVal').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 8:
            ClickSymbol(selectSymbol);
            break;
        case 9:
            if (inputVal.includes('.')) {
                inputVal = inputVal + '.';
                $('#inputVal').text(inputVal);
            }
            break;
    }

}