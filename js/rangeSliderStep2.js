let rangeSliderStep2 = function() {
    let slider = document.getElementById('step2-slider');
    let valueSliderActive = document.querySelector('.wr-step-content .slider-active');
    let widthActiveRange = document.querySelector('.step-content_step2-slider .active-range');
    let expectedVolume = document.getElementById('expectedVolume');
    let expectedRevenue = document.getElementById('expectedRevenue');
    let expectedNetIncome = document.getElementById('expectedNetIncome');

    widthActiveRange.style.width = slider.value + '%';
    valueSliderActive.innerHTML = slider.value;

    const temp = slider.value;
    let a,b,c;
    switch (true) {
        case (temp < 9):
            a = '4.0';
            b = '0.06';
            c = '0.03';
            break;
        case (temp < 16):
            a = '4.5';
            b = '0.08';
            c = '0.05';
            break;
        case (temp < 26):
            a = '5.0';
            b = '0.10';
            c = '0.09';
            break;
        case (temp < 36):
            a = '4.5';
            b = '0.08';
            c = '0.05';
            break;
        case (temp < 51):
            a = '4.0';
            b = '0.06';
            c = '0.03';
            break;
        case (temp < 71):
            a = '3.5';
            b = '0.04';
            c = '0.01';
            break;
        case (temp <= 100 ):
            a = '3.5';
            b = '0.02';
            c = '-0.05';
            break;
    }

    expectedVolume.innerHTML = a;
    expectedRevenue.innerHTML = b;
    expectedNetIncome.innerHTML = c;

    slider.oninput = function() {
        widthActiveRange.style.width = this.value + '%';
        valueSliderActive.innerHTML = this.value;

        const temp = this.value;
        let a,b,c;
        switch (true) {
            case (temp < 9):
                a = '4.0';
                b = '0.06';
                c = '0.03';
                break;
            case (temp < 16):
                a = '4.5';
                b = '0.08';
                c = '0.05';
                break;
            case (temp < 26):
                a = '5.0';
                b = '0.10';
                c = '0.09';
                break;
            case (temp < 36):
                a = '4.5';
                b = '0.08';
                c = '0.05';
                break;
            case (temp < 51):
                a = '4.0';
                b = '0.06';
                c = '0.03';
                break;
            case (temp < 71):
                a = '3.5';
                b = '0.04';
                c = '0.01';
                break;
            case (temp <= 100 ):
                a = '3.5';
                b = '0.02';
                c = '-0.05';
                break;
        }

        expectedVolume.innerHTML = a;
        expectedRevenue.innerHTML = b;
        expectedNetIncome.innerHTML = c;
    }
}
rangeSliderStep2();
