$(document).ready(function(){
    //Progress bar

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9', 
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: {color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9', 
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to: {color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9', 
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to: {color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }

    });


    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9', 
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to: {color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 1243);

            circle.setText(value);
        }

    });
    });