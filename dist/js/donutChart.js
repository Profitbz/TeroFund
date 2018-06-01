$(function() {
    // Create the chart
    $('#donut').highcharts({
        chart: {
            type: 'pie',
            margin: 40
        },
        credits: false,
        exporting: false,
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                shadow: {
                    color: "rgba(0,56,104,0.5)"
                },
                colors: [ "#1A37D8", "#324BDA", "#4A60DD", "#6275E1", "#7A8AE3", "#929FE6", "#C2C9ED",  "#D6DAF6", "#D9DDF7", "#E4E7F8"],
                slicedOffset: 20,
                borderWidth: 5,
                borderColor: "#fff",
                states: {
                    hover: false
                }
            },
            series: {
                allowPointSelect: false,
                stickyTracking: false,

                events: {
                    mouseOut: function(event) {
                        // unslice sliced element(s)

                        for (var key in this.points) {
                            if (this.points[key].sliced) {
                                this.points[key].slice(false);
                            }
                        }


                    }
                }
            }
        },
        series: [
            {
                name: '',
                data: [{name: "Bitcoin", y: 21.3},["Ethereum",15.3],["Tether USD", 13.8],["Wawes", 15], ["Qtum", 15.3],
                     ["Cindicator", 10.2], ["", 1.8],  ["", 1.8],  ["", 4.4], ["", 3.4]],
                size: '120%',
                innerSize: '50%',
                dataLabels: {
                    color: 'transparent',
                },
                animation: {
                    duration: 1500
                },
                point: {
                    events: {
                        mouseOver: function() {
                            this.options.oldColor = this.color;
                            this.graphic.attr("fill", "#FF3C54");

                            this.dataLabel.css({
                                color: "#919BB0"
                            });

                            this.connector.element.classList.add('isVisible');

                            var point = this,
                                points = this.series.points;

                            // unslice sliced element(s)
                            for (var key in points) {
                                if (points[key].sliced) {
                                    points[key].slice(false);
                                }
                            }

                            // slice hovered element
                            if (!point.selected) {
                                point.slice(true);
                            }
                        },
                        mouseOut: function () {
                            this.graphic.attr("fill", this.options.oldColor);
                            this.dataLabel.css({
                                color: "transparent"
                            });
                        }
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        },
                    }
                }
            },
            // {
            //     name: '',
            //
            //     data: [{name: "21.3", y: 21.3},["15.3",15.3],["13.8", 13.8],["15", 15], ["15.3", 15.3],
            //         ["10.2", 10.2], ["", 1.8],  ["", 1.8],  ["", 4.4], ["", 3.4]],
            //     size: '0',
            //     innerSize: '60%',
            //     dataLabels: {
            //         formatter: function() {
            //             return this.point.name
            //         },
            //         color: 'white',
            //         distance: 95
            //     },
            //     animation: {
            //         duration: 1500
            //     },
            //     states: {
            //         hover: {
            //             halo: {
            //                 size: 0
            //             },
            //         }
            //     }
            // }
        ]
    });

    $('.donut-summary').addClass('active');
});






