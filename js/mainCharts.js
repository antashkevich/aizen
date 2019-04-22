// tabs
(function tabSwitch() {
    const tabs = {
        sample1: document.getElementById('tab1'),
        sample2: document.getElementById('tab2'),
    }

    const content = {
        firstTab: document.getElementById('tab-content1'),
        secondTab: document.getElementById('tab-content2'),
    }

    for (tab in tabs) {
        if (tabs[tab] === null) {
            return null;
        }
        tabs[tab].addEventListener('click', function (event) {
            event.preventDefault();
            var $this = this;
            clearSelected();
            
            $this.classList.add('active');

            clearActive();

            if ($this.id === 'tab1') {
                content.firstTab.classList.add('active');
            } else if ($this.id === 'tab2') {
                content.secondTab.classList.add('active');
            }
        });
    }

    function clearSelected() {
        for (tab in tabs) {
            tabs[tab].classList.remove('active');
        }
    }
    function clearActive() {
        for (element in content) {
            content[element].classList.remove('active');
        }
    }
})();

// charts
let hideCharts = function(chartValue, idValue) {
    $legend = $(idValue);
    let chartsNum =  chartValue.series.length;
    for (let i = 0; i < chartsNum; i++) {
        let chartName = chartValue.series[i].name;
        let chartColor = chartValue.series[i].color;
        $legend.append('<a href="#" class="labels" data-index="' + i + '"><span style="background-color:'+ chartColor +'"></span> ' + chartName + '</a>');      
    }          
    let labelsName = idValue + ' ' + '.labels';
    $(labelsName).click(function(e){
        e.preventDefault();
        let index = this.dataset.index;

        let getChart = chartValue.series[index];

        if (getChart.visible) {
            getChart.setVisible(false);
            this.classList.add('hideChart');
        } else { 
            getChart.setVisible(true);
            this.classList.remove('hideChart');
        }
    });
}
//chart 1-1
$(function () {
    $('#chart1-1').highcharts(
        {
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 250,
                style: {
                    fontFamily: 'sans-serif',
                    fontSize: '12px !important',
                }
            },
            title: {
                text: null,
            },
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
            yAxis: {
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0,
                className: 'asd',
                labels: {
                    formatter: function () {
                        return '$ ' + this.value / 1000000 + 'M';
                    }
                },
                title: {
                    text: null
                }
            },

            legend: {
                enabled: false,
            },

            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                },
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Total Amount',
                    color: '#358ed7',
                    pointWidth: 20,
                    data: [
                        9776000,
                        7400000,
                        4992000,
                        3888000,
                        4136000,
                        4176000,
                        4760000,
                        4568000,
                        4912000,
                        5840000,
                        5616000,
                        6120000,
                        6320000,
                        6520000,
                        6904000,
                        5880000,
                        6528000,
                        6544000,
                        6216000,
                        7464000,
                        8456000,
                        9104000,
                        8856000,
                        10216000, 
                        8784000,
                        8896000,
                        10264000,
                    ],
                }, 
                {
                    name: 'Opportunity Amount',
                    color: '#45df94',
                    pointWidth: 20,
                    data: [
                        1360819,
                        1073000,
                        636979,
                        518659,
                        551742,
                        605520,
                        634984,
                        556382,
                        797709,
                        677440,
                        879466,
                        745416,
                        843088,
                        831952,
                        800864,
                        750288,
                        1060147, 
                        872970,
                        757109,
                        1298736, 
                        1177075,
                        1108867,
                        1232755,
                        1481320,
                        1477469,
                        1031936,
                        1309686
                    ],
                }
            ]
        },
       
        function (chart) {
            hideCharts(chart, '#customLegendChart1-1');
        },
    );
});
//chart 1-2
$(function () {
    $('#chart1-2').highcharts(
        {
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 250,
                style: {
                    fontFamily: 'sans-serif',
                    fontSize: '12px !important',
                }
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: {
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0,
                className: 'asd',
                labels: {
                    formatter: function () {
                        return '$ ' + this.value / 1000000 + 'M';
                    }
                },
                title: {
                    text: null
                }
            },
            
            legend: {
                enabled: false
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                },
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Total Amount',
                    color: '#358ed7',
                    pointWidth: 20,
                    data: [
                        7680,
                        17600, 
                        7360,
                        15680, 
                        24000,
                        23520,
                        25920,
                        45120,
                        72160,
                        203680, 
                        376320,
                        620160,
                        797760,
                        973200,
                        1340720, 
                        1481520,
                        2024720,
                        2226720,
                        2690080,
                        3246080,
                        3885440,
                        4483600,
                        5780000,
                        6429440,
                        6826640,
                        6676560,
                        9642880,            
                    ],
                },
                {
                    name: 'Opportunity Amount',
                    color: '#45df94',
                    pointWidth: 20,
                    data: [
                        1069,
                        2552,
                        939,
                        2092, 
                        3202,
                        3410,
                        3458,
                        5496,
                        11719, 
                        23627,
                        58932,
                        75535,
                        106421, 
                        124180,
                        155524,
                        189042,
                        328815,
                        297044,
                        327652,
                        564818,
                        540853,
                        546102,
                        804576,
                        932269,
                        1148241, 
                        774481,
                        1230431,
                    ],
                }
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart1-2');
        },
    );
});
//chart 1-3
$(function () {
    $('#chart1-3').highcharts(
        {
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 250,
                style: {
                    fontFamily: 'sans-serif',
                    fontSize: '12px !important',
                }
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: {
                startOnTick: true,
                endOnTick: false,
                maxPadding: 0,
                className: 'asd',
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                title: {
                    text: null
                }
            },
            
            legend: {
                enabled: false
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                },
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Total Amount',
                    color: '#358ed7',
                    pointWidth: 20,
                    data: [
                        6.40,
                        6.50,
                        6.70,
                        6.60,
                        6.90,
                        7.00,
                        6.80,
                        6.80,
                        6.30,
                        6.60,
                        7.00,
                        6.40,
                        7.00,
                        6.10,
                        6.50,
                        6.50,
                        6.40,
                        6.50,
                        6.10,
                        5.70,
                        6.00,
                        5.80,
                        5.70,
                        5.90,
                        6.00,
                        5.70,
                        6.10,
                    ],
                }, 
                {
                    name: 'Opportunity Amount',
                    color: '#45df94',
                    pointWidth: 20,
                    data: [
                        5.82,
                        7.15,
                        7.50,
                        6.46,
                        6.34,
                        6.65,
                        7.00,
                        6.12,
                        7.11,
                        7.39,
                        7.42,
                        7.36,
                        7.63,
                        5.36,
                        7.15,
                        6.43,
                        7.23,
                        5.91,
                        5.36,
                        4.90,
                        5.88,
                        5.62,
                        6.15,
                        6.31,
                        5.52,
                        4.95,
                        6.28,
                    ],
                }
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart1-3');
        },
    );
});

//chart 2-1
$(function () {
    $('#chart2-1').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 253,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: [
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return '$ ' + this.value/1000 + 'K';
                        }
                    }
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    },
                    opposite: true,
                }
            ],
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Total Avg. Ticket Size(L)',
                    color: '#358ed7',
                    pointWidth: 20,
                    type: 'column',
                    data: [
                        4142,
                        4302,
                        3931,
                        3888,
                        3390,
                        3368,
                        3500,
                        3500,
                        3509,
                        3435,
                        3209,
                        3204,
                        3591,
                        3642,
                        3319,
                        3500,
                        3314,
                        3256,
                        3532,
                        4035,
                        4249,
                        4274,
                        4177,
                        4257,
                        4505,
                        4340,
                        4277,
                    ],
                },
                {
                    name: 'Total # of Accounts(R)',
                    color: '#e8d34a',
                    type: 'line',
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    data: [
                        2360,
                        1720,
                        1270,
                        1000,
                        1220,
                        1240,
                        1360,
                        1320,
                        1400,
                        1700,
                        1750,
                        1910,
                        1760,
                        1790,
                        2080,
                        1680,
                        1970,
                        2010,
                        1760,
                        1850,
                        1990,
                        2130,
                        2120,
                        2400,
                        1950,
                        2050,
                        2400,
                    ],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart2-1');
        },
    );
});
// chart 2-2
$(function () {
    $('#chart2-2').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 253,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: [
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return '$ ' + this.value/1000 + 'K';
                        }
                    }
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    },
                    opposite: true,
                }
            ],
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Opportunity Avg. Ticket Size(L)',
                    color: '#7fd46e',
                    pointWidth: 20,
                    type: 'column',
                    data: [
                        4145,
                        4302,
                        3936,
                        3888,
                        3397,
                        3368,
                        3509,
                        3463,
                        3509,
                        3435,
                        3213,
                        3205,
                        3598,
                        3650,
                        3319,
                        3506,
                        3317,
                        3258,
                        3538,
                        4035,
                        4255,
                        4277,
                        4184,
                        4257,
                        4509,
                        4340,
                        4277,
                    ],
                }, 
                {
                    name: 'Opportunity # of Accounts(R)',
                    color: '#cd5177',
                    type: 'line',
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    data: [
                        328.28,
                        249.4,
                        161.82,
                        133.4,
                        162.4,
                        179.8,
                        180.96,
                        160.66,
                        227.36,
                        197.2,
                        273.76,
                        232.58,
                        234.32,
                        227.94,
                        241.28,
                        214.02,
                        319.58,
                        267.96,
                        214.02,
                        321.9,
                        276.66,
                        259.26,
                        294.64,
                        348,
                        327.7,
                        237.8,
                        306.24,
                    ],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart2-2');
        },
    );
});

// chart 3-1
$(function () {
    $('#chart3-1').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 252,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: [
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return '$ ' + this.value/1000 + 'K';
                        }
                    }
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    },
                    opposite: true,
                }
            ],
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Total Delinquency amount',
                    color: '#358ed7',
                    pointWidth: 20,
                    type: 'column',
                    data: [
                        0,
                        5280,
                        16928,
                        54880,
                        112800,
                        115248,
                        85536,
                        198528,
                        310288,
                        957296,
                        1806336,
                        2976768,
                        4547232,
                        4379400,
                        6033240,
                        6963144,
                        9921128,
                        10020240,
                        13181392,
                        14282752,
                        17484480,
                        21072920,
                        26010000,
                        28289536,
                        29354552,
                        28041552,
                        42428672,
                    ],
                },         
                {
                    name: 'Opportunity Delinquency amount',
                    color: '#7fd46e',
                    pointWidth: 20,
                    type: 'column',
                    data: [
                        0,
                        5,
                        14, 
                        51,
                        80,
                        114, 
                        66,
                        131, 
                        317,
                        600,
                        1499, 
                        2103,
                        4004,
                        3465,
                        4409,
                        5420,
                        10795, 
                        8421,
                        10436, 
                        12923,
                        15090,
                        17197,
                        22810,
                        23791,
                        31600,
                        22444,
                        33025,
                    ],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart3-1');
        },
    );
});
// chart 3-2
$(function () {
    $('#chart3-2').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 252,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%Y - %b',
                }
            },
        
            yAxis: [
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return '$ ' + this.value/1000 + 'K';
                        }
                    }
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    },
                }
            ],
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2015, 10, 1),
                    pointInterval: 30 * 24 * 3600 * 1000,
                }
            },
        
            series: [
                {
                    name: 'Opportunity Delinquency rate',
                    color: '#cd5177',
                    type: 'line',
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    data: [
                        0.0,
                        0.2,
                        1.5,
                        2.4,
                        2.5,
                        3.3,
                        1.9,
                        2.4,
                        2.7,
                        2.5,
                        2.5,
                        2.8,
                        3.8,
                        2.8,
                        2.8,
                        2.9,
                        3.3,
                        2.8,
                        3.2,
                        2.3,
                        2.8,
                        3.1,
                        2.8,
                        2.6,
                        2.8,
                        2.9,
                        2.7,
                    ],
                },
                {
                    name: 'Total Delinquency rate',
                    color: '#e8d34a',
                    type: 'line',
                    yAxis: 1,
                    marker: {
                        enabled: false
                    },
                    data: [
                        0.0,
                        0.3,
                        2.3,
                        3.5,
                        4.7,
                        4.9,
                        3.3,
                        4.4,
                        4.3,
                        4.7,
                        4.8,
                        4.8,
                        5.7,
                        4.5,
                        4.5,
                        4.7,
                        4.9,
                        4.5,
                        4.9,
                        4.4,
                        4.5,
                        4.7,
                        4.5,
                        4.4,
                        4.3,
                        4.2,
                        4.4,
                    ],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart3-2');
        },
    );
});

// chart 4-1
$(function () {
    $('#chart4-1').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 300,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
            },
        
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
            },
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                }
            },
        
            series: [
                {
                    name: 'Benchmark',
                    color: '#7fd46e',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1, 2.5, 2.8, 3.5, 4.6, 5.5, 6.9, 8.4, 9.4, 11.1, 11.9, 13.1, 13.6, 14, 14.8, 15.2, 15.8, 16.2, 16, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.7, 17.7],
                },         
                {
                    name: '2015-10',
                    color: '#cd5177',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0, 4.4, 5.2, 6.7, 7.4, 7.4, 8.9, 12.5, 16.9, 18.4, 19.1, 19.9, 19.9, 20.6, 21.3, 21.3, 22.1, 22.1, 22.5, 22.6, 22.9, 23.5, 23.9, 25.5, 25.9, 26, 26],
                }, 
                {
                    name: '2015-11',
                    color: '#75a732',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 7.9, 11.8, 13.9, 15.9, 17.2, 18.9, 21.6, 23, 24.4, 25.2, 26.5, 27.4, 28, 28.6, 29, 29.4, 29.5, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                },
                {
                    name: '2015-12',
                    color: '#3e67c5',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1.3, 2.9, 4.4, 5.1, 6.3, 7.2, 9, 10.4, 11.4, 12.9, 13.5, 14.3, 14.9, 15.3, 15.8, 16.2, 16.4, 16.9, 17, 17, 17, 17, 17, 17, 17],
                },
        
                {
                    name: '2016-01',
                    color: '#429331',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1.6, 3, 4, 4.6, 5.5, 6.9, 8.4, 9.4, 11.1, 11.9, 13.1, 13.6, 14, 14.8, 15.2, 15.8, 16.2, 16.8, 17.1, 17.1, 17.1, 17.1, 17.1, 17.1],
                },
                {
                    name: '2016-02',
                    color: '#8d2094',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1.3, 2.4, 3.2, 4.2, 4.8, 5.7, 6.9, 8.3, 8.9, 9.6, 10.9, 11.6, 12.1, 12.4, 12.8, 13.5, 13.9, 14.2, 14.2, 14.2, 14.2, 14.2, 14.2],
                },
                {
                    name: '2016-03',
                    color: '#ab3a34',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 1.7, 2.3, 3, 3.9, 4.4, 6.1, 8.1, 9, 9.6, 10.4, 11.4, 11.9, 12.4, 12.4, 12.9, 13, 13.4, 13.6, 13.6, 13.6, 13.6],
                },
                {
                    name: '2016-04',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.6, 1.2, 1.7, 2.4, 3.3, 4.3, 6.1, 7.5, 8.9, 9.6, 10.5, 11.3, 11.8, 12.3, 12.5, 12.9, 13.2, 13.9, 14.1, 14.1, 14.1],
                },
                {
                    name: '2016-05',
                    color: '#cd5077',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 1.3, 2.2, 2.7, 3.6, 4.3, 5.9, 6.9, 7.8, 8.6, 9.6, 10.5, 11, 11.7, 11.8, 12, 12.5, 13.1, 13.1, 13.1],
                },
                {
                    name: '2016-06',
                    color: '#4097c1',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 1.4, 2.4, 3.5, 4.3, 5.3, 6.4, 7.5, 8.2, 9, 9.6, 10.1, 10.5, 11, 11.5, 12, 12.4, 13, 13],
                },
                {
                    name: '2016-07',
                    color: '#3c6391',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9, 1.8, 2.9, 4, 4.9, 5.8, 6.9, 8.8, 9.3, 10.4, 10.9, 11.6, 12.4, 12.5, 13.1, 13.5, 13.7, 14],
                },
                {
                    name: '2016-08',
                    color: '#7dc855',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.6, 1.6, 2.7, 3.2, 3.9, 4.6, 5.8, 6.9, 7.5, 8.1, 8.9, 9.5, 9.8, 10.2, 10.6, 11, 11.6],
                },
                {
                    name: '2016-09',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1.4, 2.3, 2.9, 3.9, 4.7, 5.6, 6.6, 8.2, 9.2, 10.1, 10.8, 11.5, 12.1, 12.2, 12.7, 12.9],
                },
                {
                    name: '2016-10',
                    color: '#FFCCCC',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 1.7, 2.7, 3.4, 4.4, 4.6, 6.1, 7.3, 8, 8.9, 9.4, 10.2, 10.5, 10.8, 11.3],
                },
                {
                    name: '2016-11',
                    color: '#00cc66',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9, 1.6, 2.6, 3.5, 4.2, 4.8, 6.3, 7.6, 8.5, 9.2, 10.2, 10.9, 11.2, 11.5],
                },
                {
                    name: '2016-12',
                    color: '#8b7765',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9, 2.1, 3.2, 3.6, 4.7, 5.1, 6.2, 7.3, 7.8, 8.9, 9.5, 10.3, 10.7],
                },
                {
                    name: '2017-01',
                    color: '#00ffff',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 2, 2.7, 3.7, 4.3, 5.3, 6.5, 7.6, 8.7, 9.3, 9.8, 10.5],
                },
                {
                    name: '2017-02',
                    color: '#a52a2a',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.7, 1.8, 2.7, 3.3, 4.2, 5, 5.9, 7.3, 8.1, 9.1, 9.8],
                },
                {
                    name: '2017-03',
                    color: '#d8bfd8',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 2.1, 2.8, 3.6, 4.3, 4.9, 6, 7.1, 8.2, 8.9],
                },
                {
                    name: '2017-04',
                    color: '#228b22',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9, 2.2, 3, 3.8, 4.2, 5, 6.3, 7.3, 8.5],
                },
                {
                    name: '2017-05',
                    color: '#483d8b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1.1, 2, 2.6, 3.2, 4.3, 5.1, 6.4, 7.3],
                },
                {
                    name: '2017-06',
                    color: '#696969',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1, 2.1, 3, 4.1, 4.8, 5.5, 5.9],
                },
                {
                    name: '2017-07',
                    color: '#ffdab9',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9, 1.7, 3.1, 3.8, 4.4, 5.1],
                },
                {
                    name: '2017-08',
                    color: '#2f4f4f',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.8, 1.9, 2.5, 3.1, 4],
                },
                {
                    name: '2017-09',
                    color: '#9acd32',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 1, 1.8, 2.8, 3.3],
                },
                {
                    name: '2017-10',
                    color: '#f0e68c',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.5, 1.7, 2.3],
                },
                {
                    name: '2017-11',
                    color: '#b8860b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.7, 1.5],
                },
                {
                    name: '2017-12',
                    color: '#ffa500',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0, 0.9],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart4-1');
        },
    );
});
// chart 4-2
$(function () {
    $('#chart4-2').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 300,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
            },
        
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
            },
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                }
            },
        
            series: [
                {
                    name: 'Benchmark',
                    color: '#7fd46e',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.4,1.4,2.3,3.0,3.9,4.3,5.0,6.5,7.4,7.6,8.2,8.3,8.7,8.7,8.7,9.1,9.6,10.4,10.4,10.8,11.2,11.5,11.9,11.9,11.9,11.9,11.9],
                },         
                {
                    name: '2015-10',
                    color: '#cd5177',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.0,2.4,3.6,3.4,4.5,4.5,6.1,7.0,11.5,9.6,11.5,11.3,11.7,14.4,14.4,14.1,15.2,15.2,15.2,15.2,15.2,16.2,16.2,16.2,16.3,16.4,16.4],
                }, 
                {
                    name: '2015-11',
                    color: '#75a732',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,5.5,6.8,8.1,11.0,11.9,11.0,14.9,15.9,15.9,15.9,16.4,16.4,17.1,17.1,20.3,20.3,20.3,21.0,21.0,21.0,21.0,21.0,21.0,21.0,21.0,21.0,],
                },
                {
                    name: '2015-12',
                    color: '#3e67c5',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.9,1.8,2.4,2.8,4.3,5.0,5.1,5.9,5.9,6.3,9.3,9.3,9.3,9.3,9.3,9.3,11.3,11.3,12.8,12.8,12.8,12.8,12.8,12.8,12.8],
                },
        
                {
                    name: '2016-01',
                    color: '#429331',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.9,2.1,2.8,2.9,3.7,4.3,5.8,5.0,6.0,6.1,6.9,6.9,8.4,8.4,8.4,8.4,8.4,8.4,8.4,9.6,9.6,9.6,9.6,9.6],
                },
                {
                    name: '2016-02',
                    color: '#8d2094',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.7,1.7,2.1,2.4,2.6,3.8,3.8,5.5,5.2,5.6,6.3,6.4,6.4,7.6,7.6,7.6,8.2,8.2,8.2,8.2,9.1,9.1,9.1],
                },
                {
                    name: '2016-03',
                    color: '#ab3a34',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.9,1.2,1.6,2.4,2.5,4.2,4.2,5.8,5.8,5.8,5.8,6.6,6.6,7.1,7.6,8.1,8.1,8.1,8.1,8.1,8.1],
                },
                {
                    name: '2016-04',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.7,1.2,1.4,2.1,2.8,3.8,4.7,5.1,5.3,5.9,5.9,6.4,7.1,7.2,7.4,7.4,7.4,7.4,8.1,8.1],
                },
                {
                    name: '2016-05',
                    color: '#cd5077',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.6,0.7,1.5,1.9,2.1,2.2,3.5,4.6,4.6,4.6,5.0,6.5,7.2,7.2,7.2,7.5,8.1,8.1,8.1,8.1],
                },
                {
                    name: '2016-06',
                    color: '#4097c1',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.6,0.8,1.2,1.8,2.2,2.7,3.3,4.7,4.3,4.8,5.5,6.3,6.3,6.3,6.3,6.4,6.6,7.7,7.7],
                },
                {
                    name: '2016-07',
                    color: '#3c6391',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.0,2.0,2.8,2.9,3.0,3.8,5.3,6.0,6.7,7.3,6.8,7.4,8.3,8.3,8.3,9.3,8.4],
                },
                {
                    name: '2016-08',
                    color: '#7dc855',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.9,1.5,1.8,2.1,2.4,3.1,4.2,4.4,4.5,5.2,5.0,5.8,6.9,6.9,7.5,8.0],
                },
                {
                    name: '2016-09',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.9,1.5,2.0,2.6,2.6,2.9,3.8,4.7,4.8,5.8,5.8,6.2,7.6,8.9,8.9,8.9],
                },
                {
                    name: '2016-10',
                    color: '#FFCCCC',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.0,1.7,1.8,2.6,2.9,3.4,4.2,5.1,5.1,5.1,5.1,5.4,6.8,6.8],
                },
                {
                    name: '2016-11',
                    color: '#00cc66',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.0,1.3,1.9,2.5,3.3,3.5,4.0,5.8,5.8,6.9,7.0,7.0,7.0],
                },
                {
                    name: '2016-12',
                    color: '#8b7765',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.1,1.6,2.0,2.9,2.9,3.5,4.8,5.1,5.7,6.5,6.8,6.8],
                },
                {
                    name: '2017-01',
                    color: '#00ffff',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.4,1.7,2.6,2.7,2.8,3.8,4.4,6.0,6.5,6.5,6.6],
                },
                {
                    name: '2017-02',
                    color: '#a52a2a',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.2,1.4,2.1,2.8,3.0,3.8,3.8,4.1,6.0,9.8],
                },
                {
                    name: '2017-03',
                    color: '#d8bfd8',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,1.2,1.7,2.1,3.0,3.0,3.7,3.6,5.2,5.7],
                },
                {
                    name: '2017-04',
                    color: '#228b22',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.5,1.7,2.7,2.9,3.4,4.1,5.0,5.0],
                },
                {
                    name: '2017-05',
                    color: '#483d8b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.6,1.0,1.5,1.9,2.4,3.2,4.5,5.0],
                },
                {
                    name: '2017-06',
                    color: '#696969',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.7,1.1,1.8,2.2,2.4,3.7,3.7],
                },
                {
                    name: '2017-07',
                    color: '#ffdab9',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.2,1.6,2.5,2.2,3.1],
                },
                {
                    name: '2017-08',
                    color: '#2f4f4f',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.3,1.5,2.1,2.3],
                },
                {
                    name: '2017-09',
                    color: '#9acd32',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.6,1.2,1.7,1.7],
                },
                {
                    name: '2017-10',
                    color: '#f0e68c',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,1.1,1.2],
                },
                {
                    name: '2017-11',
                    color: '#b8860b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.8],
                },
                {
                    name: '2017-12',
                    color: '#ffa500',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5],
                },
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart4-2');
        },
    );
});
// chart 4-3
$(function () {
    $('#chart4-3').highcharts(
        {
            credits: {
                enabled: false
            },
        
            chart: {        
                height: 300,
                zoomType: 'xy'
            },
        
            title: {
                text: null,
            },
        
            xAxis: {
                title: {
                    text: null
                },
            },
        
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
            },
            
            legend: {
                enabled: false,
            },
        
            tooltip: {
                shared: true,
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                }
            },
        
            series: [
                {
                    name: 'Benchmark',
                    color: '#7fd46e',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,1.1,1.1,1.8,2.4,3.1,3.4,4.0,5.2,5.9,6.1,6.6,6.6,7.0,7.0,7.0,7.3,7.7,8.3,8.3,8.6,9.0,9.2,9.5,9.5,9.5,9.5,9.5],
                },         
                {
                    name: '2015-10',
                    color: '#cd5177',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.0,1.9,2.9,2.7,3.6,3.6,4.9,5.6,9.2,7.7,9.2,9.1,9.4,11.5,11.5,11.2,12.2,12.2,12.2,12.2,12.2,13.0,13.0,13.0,13.1,13.1,13.1],
                }, 
                {
                    name: '2015-11',
                    color: '#75a732',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,4.4,5.5,6.4,8.8,9.5,8.8,11.9,12.7,12.7,12.7,13.1,13.1,13.7,13.7,16.2,16.2,16.2,16.8,16.8,16.8,16.8,16.8,16.8,16.8,16.8,16.8],
                }, 
                {
                    name: '2015-12',
                    color: '#3e67c5',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.7,1.4,1.9,2.2,3.5,4.0,4.1,4.7,4.7,5.0,7.4,7.4,7.4,7.4,7.4,7.4,9.0,9.0,10.2,10.2,10.2,10.2,10.2,10.2,10.2],
                }, 
        
                {
                    name: '2016-01',
                    color: '#429331',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.7,1.7,2.2,2.4,3.0,3.5,4.6,4.0,4.8,4.9,5.5,5.5,6.7,6.7,6.7,6.7,6.7,6.7,6.7,7.7,7.7,7.7,7.7,7.7],
                }, 
                {
                    name: '2016-02',
                    color: '#8d2094',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.3,1.7,1.9,2.1,3.1,3.0,4.4,4.1,4.5,5.1,5.1,5.1,6.0,6.0,6.0,6.6,6.6,6.6,6.6,7.3,7.3,7.3],
                }, 
                {
                    name: '2016-03',
                    color: '#ab3a34',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.7,1.0,1.3,1.9,2.0,3.4,3.4,4.7,4.7,4.7,4.7,5.3,5.3,5.7,6.1,6.4,6.4,6.4,6.4,6.4,6.4],
                }, 
                {
                    name: '2016-04',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.6,0.9,1.1,1.7,2.3,3.1,3.7,4.1,4.2,4.7,4.7,5.1,5.7,5.8,5.9,5.9,5.9,5.9,6.5,6.5],
                }, 
                {
                    name: '2016-05',
                    color: '#cd5077',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.6,1.2,1.5,1.7,1.8,2.8,3.6,3.6,3.6,4.0,5.2,5.8,5.8,5.8,6.0,6.5,6.5,6.5,6.5],
                }, 
                {
                    name: '2016-06',
                    color: '#4097c1',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.6,1.0,1.4,1.8,2.2,2.6,3.7,3.5,3.8,4.4,5.0,5.0,5.0,5.0,5.2,5.3,6.1,6.1],
                }, 
                {
                    name: '2016-07',
                    color: '#3c6391',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.8,1.6,2.2,2.3,2.4,3.0,4.2,4.8,5.3,5.8,5.5,6.0,6.6,6.6,6.6,7.5,6.7],
                }, 
                {
                    name: '2016-08',
                    color: '#7dc855',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.2,0.7,1.2,1.4,1.7,1.9,2.5,3.4,3.5,3.6,4.1,4.0,4.7,5.5,5.5,6.0,6.4],
                }, 
                {
                    name: '2016-09',
                    color: '#358ed7',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.7,1.2,1.6,2.1,2.1,2.3,3.1,3.7,3.8,4.6,4.6,5.0,6.1,7.1,7.1,7.1],
                }, 
                {
                    name: '2016-10',
                    color: '#FFCCCC',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.8,1.4,1.4,2.1,2.3,2.7,3.4,4.1,4.1,4.1,4.1,4.3,5.4,5.4],
                }, 
                {
                    name: '2016-11',
                    color: '#00cc66',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.8,1.0,1.5,2.0,2.6,2.8,3.2,4.6,4.6,5.5,5.6,5.6,5.6],
                }, 
                {
                    name: '2016-12',
                    color: '#8b7765',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.9,1.3,1.6,2.3,2.3,2.8,3.9,4.1,4.6,5.2,5.4,5.4],
                }, 
                {
                    name: '2017-01',
                    color: '#00ffff',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,1.1,1.4,2.1,2.1,2.2,3.0,3.5,4.8,5.2,5.2,5.3],
                }, 
                {
                    name: '2017-02',
                    color: '#a52a2a',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.9,1.1,1.7,2.2,2.4,3.0,3.0,3.3,4.8,7.8],
                }, 
                {
                    name: '2017-03',
                    color: '#d8bfd8',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,1.0,1.4,1.7,2.4,2.4,3.0,2.8,4.1,4.6],
                }, 
                {
                    name: '2017-04',
                    color: '#228b22',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,1.2,1.3,2.1,2.4,2.7,3.3,4.0,4.0],
                }, 
                {
                    name: '2017-05',
                    color: '#483d8b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,0.8,1.2,1.5,1.9,2.6,3.6,4.0],
                }, 
                {
                    name: '2017-06',
                    color: '#696969',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.6,0.9,1.4,1.7,2.0,3.0,3.0],
                }, 
                {
                    name: '2017-07',
                    color: '#ffdab9',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,0.9,1.3,2.0,1.8,2.4],
                }, 
                {
                    name: '2017-08',
                    color: '#2f4f4f',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4,1.0,1.2,1.7,1.8],
                }, 
                {
                    name: '2017-09',
                    color: '#9acd32',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.5,1.0,1.3,1.4],
                }, 
                {
                    name: '2017-10',
                    color: '#f0e68c',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.9,1.0],
                }, 
                {
                    name: '2017-11',
                    color: '#b8860b',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.3,0.7],
                }, 
                {
                    name: '2017-12',
                    color: '#ffa500',
                    type: 'line',
                    marker: {
                        enabled: false
                    },
                    data: [0.0,0.4],
                }, 
            ]
        },
        function (chart) {
            hideCharts(chart, '#customLegendChart4-3');
        },
    );
});


let selectChart1 = function(nameChart, chartId1, chartId2, chartId3, chartHeaderId1, chartHeaderId2, chartHeaderId3 ) {
    let selectValue = document.getElementById(nameChart);
    let chart1 = document.getElementById(chartId1);
    let chart2 = document.getElementById(chartId2);
    let chart3 = document.getElementById(chartId3);

    let chartHeader1 = document.getElementById(chartHeaderId1);
    let chartHeader2 = document.getElementById(chartHeaderId2);
    let chartHeader3 = document.getElementById(chartHeaderId3);

    selectValue.addEventListener('change', function(){
        if (this.value === chartId1) {
            chart1.style.display = 'block';
            chartHeader1.style.display = 'flex';
            chart2.style.display = 'none';
            chartHeader2.style.display = 'none';
            chart3.style.display = 'none';
            chartHeader3.style.display = 'none';
        } else if (this.value === chartId2) {
            chart1.style.display = 'none';
            chartHeader1.style.display = 'none';
            chart2.style.display = 'block';
            chartHeader2.style.display = 'flex';
            chart3.style.display = 'none';
            chartHeader3.style.display = 'none';
        } else if (this.value === chartId3) {
            chart1.style.display = 'none';
            chartHeader1.style.display = 'none';
            chart2.style.display = 'none';
            chartHeader2.style.display = 'none';
            chart3.style.display = 'block';
            chartHeader3.style.display = 'flex';
        }
    });
};
selectChart1('bigChart', 'chart4-1', 'chart4-2', 'chart4-3', 'customLegendChart4-1', 'customLegendChart4-2', 'customLegendChart4-3' );
selectChart1('smallChart1', 'chart1-1', 'chart1-2', 'chart1-3', 'customLegendChart1-1', 'customLegendChart1-2', 'customLegendChart1-3');

let selectChart = function(nameChart, chartId1, chartId2, chartHeaderId1, chartHeaderId2 ) {
    let selectValue = document.getElementById(nameChart);
    let chart1 = document.getElementById(chartId1);
    let chart2 = document.getElementById(chartId2);

    let chartHeader1 = document.getElementById(chartHeaderId1);
    let chartHeader2 = document.getElementById(chartHeaderId2);

    selectValue.addEventListener('change', function(){
        if (this.value === chartId1) {
            chart1.style.display = 'block';
            chartHeader1.style.display = 'flex';
            chart2.style.display = 'none';
            chartHeader2.style.display = 'none';
        } else if (this.value === chartId2) {
            chart1.style.display = 'none';
            chartHeader1.style.display = 'none';
            chart2.style.display = 'block';
            chartHeader2.style.display = 'flex';
        }
    });
};
selectChart('smallChart2', 'chart2-1', 'chart2-2', 'customLegendChart2-1', 'customLegendChart2-2');
selectChart('smallChart3', 'chart3-1', 'chart3-2', 'customLegendChart3-1', 'customLegendChart3-2');

let changeChartTitle = function () {
    let chartTitle = document.querySelector('.chart1 .chart-title span');
    let selectValue = document.getElementById('smallChart1');

    selectValue.addEventListener('change', function(){
        if (this.value === 'chart1-1') {
            chartTitle.innerHTML = 'Loan Origination';
        } else if (this.value === 'chart1-2') {
            chartTitle.innerHTML = 'Loan Balance';
        } else {
            chartTitle.innerHTML = 'Loan Rate';
        }
    });
};

changeChartTitle();

let initialSliderStep2 = function (param) {
    let valueSliderActive = document.querySelector('.wr-step-content .slider-active');
    let widthActiveRange = document.querySelector('.step-content_step2-slider .active-range');
    let expectedVolume = document.getElementById('expectedVolume');
    let expectedRevenue = document.getElementById('expectedRevenue');
    let expectedNetIncome = document.getElementById('expectedNetIncome');
    let valueLoanAmount = document.getElementById('valueLoanAmount');

    widthActiveRange.style.width = param.value + '%';
    valueSliderActive.innerHTML = param.value;
    valueLoanAmount.innerHTML = param.value;

    const temp = param.value;
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
let rangeSliderStep2 = function() {
    let slider = document.getElementById('step2-slider');

    initialSliderStep2(slider);

    slider.oninput = function() {
        initialSliderStep2(this);
    }
}
rangeSliderStep2();

let initialSliderStep3 = function (param) {
    let widthActiveRange = document.querySelector('.step-content_step3-slider .active-range');
    let widthRestRange = document.querySelector('.step-content_step3-slider .rest-range');
    let valueSliderActive = document.querySelector('.active-range .slider-active');
    let valueSliderRest = document.querySelector('.rest-range .slider-rest');
    let valueSliderActiveCost = document.querySelector('.active-range .slider-active-cost');
    let valueSliderRestCost = document.querySelector('.rest-range .slider-rest-cost');
    let splitTestValue = document.getElementById('split-test-value');
    let valueSliderActiveNum;
    let valueSliderRestNum;

    widthActiveRange.style.width = param.value + '%';
    widthRestRange.style.width = 100 - param.value + '%';

    splitTestValue.innerHTML = param.value;

    valueSliderActive.innerHTML = param.value;
    valueSliderRest.innerHTML = 100 - param.value;

    valueSliderActiveNum = Number(valueSliderActive.innerHTML);
    valueSliderRestNum = Number(valueSliderRest.innerHTML);

    if (valueSliderActiveNum <  5) {
        widthActiveRange.classList.add('hide-content');
    } else {
        widthActiveRange.classList.remove('hide-content');
    }

    if (valueSliderRestNum <  5) {
        widthRestRange.classList.add('hide-content');
    } else {
        widthRestRange.classList.remove('hide-content');
    }

    let temp = parseFloat(param.value*5/100).toFixed(2);
    let temp2 = parseFloat(5 - param.value*5/100).toFixed(2);

    valueSliderActiveCost.innerHTML = temp;
    valueSliderRestCost.innerHTML = temp2;
}
let rangeSliderStep3 = function() {
    let slider = document.getElementById('step3-slider');

    initialSliderStep3(slider);

    slider.oninput = function() {
        initialSliderStep3(this);
    }
};
rangeSliderStep3();

let stepNumAnimation = function () {
    let listBlock = document.querySelectorAll('.wr-steps');
    for (let i = 0; i < listBlock.length; i++) {
        let listSteps = listBlock[i].querySelectorAll('.wr-steps_step');
        for (let i = 0; i < listSteps.length; i++) {
            let x = 1;
            lastElem = listSteps[listSteps.length - x];
            while (!lastElem.classList.contains('active')) {
                x++;
                lastElem = listSteps[listSteps.length - x];
            }
            lastElem.classList.add('animate');
        }
    } 
}
stepNumAnimation();

let changeActionMethod = function () {
    let areaActionMethod = document.getElementById('action-method');
    let btnsActionMethod = document.querySelectorAll('.step-content_choose-block button');
    
    for (let i = 0; i < btnsActionMethod.length; i++) {
        btnsActionMethod[i].addEventListener('click', function(e){
            if (!event.target.classList.contains('active')) {
                const removeActiveElements = () => btnsActionMethod.forEach(el => el.classList.remove('active'));
                removeActiveElements();
                event.target.classList.add('active');		
            }
            areaActionMethod.innerHTML = btnsActionMethod[i].innerText;
        });
    }
};

changeActionMethod();

