import React from 'react';

export default function Counter() {

    const pageviewsCount = document.getElementById('pageviews-count');
    const visitCount= document.getElementById('visit-count');

    if (sessionStorage.getItem('visit') === null){
        // New visit and pageview
        updateCounter('type=visit-pageview')
    } else {
        //Page view
        updateCounter('type=pageview')
    }

    function updateCounter(type: string){
        fetch('http://127.0.0.1:3002?'+ type)
            .then(res => res.json())
            .then(data => {
                if (pageviewsCount !== null && visitCount !== null)
                {
                    pageviewsCount.textContent = data.pageviews;
                    visitCount.textContent = data.visit;
                }
            })
    }

    sessionStorage.setItem('visit', 'x');

    return (
        <div></div>
    );
}

