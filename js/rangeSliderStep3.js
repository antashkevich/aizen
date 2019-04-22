let rangeSliderStep3 = function() {
    let slider = document.getElementById('step3-slider');
    let widthActiveRange = document.querySelector('.step-content_step3-slider .active-range');
    let widthRestRange = document.querySelector('.step-content_step3-slider .rest-range');
    let valueSliderActive = document.querySelector('.active-range .slider-active');
    let valueSliderRest = document.querySelector('.rest-range .slider-rest');
    let valueSliderActiveCost = document.querySelector('.active-range .slider-active-cost');
    let valueSliderRestCost = document.querySelector('.rest-range .slider-rest-cost');

    widthActiveRange.style.width = slider.value + '%';
    widthRestRange.style.width = 100 - slider.value + '%';

    valueSliderActive.innerHTML = slider.value;
    valueSliderRest.innerHTML = 100 - slider.value;

    let temp = parseFloat(slider.value*5/100).toFixed(2);

    valueSliderActiveCost.innerHTML = temp;
    valueSliderRestCost.innerHTML = 5 - temp;

    slider.oninput = function() {
        widthActiveRange.style.width = this.value + '%';
        widthRestRange.style.width = 100 - this.value + '%';

        valueSliderActive.innerHTML = this.value;
        valueSliderRest.innerHTML = 100 - slider.value;

        let temp = parseFloat(this.value*5/100).toFixed(2);
        let temp2 = parseFloat(5 - this.value*5/100).toFixed(2);

        valueSliderActiveCost.innerHTML = temp;
        valueSliderRestCost.innerHTML = temp2;
    }
};

rangeSliderStep3();
