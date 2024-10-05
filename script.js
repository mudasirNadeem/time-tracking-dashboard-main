var daily = document.getElementById('Daily')
var weekly = document.getElementById('weekly')
var monthly = document.getElementById('monthly')

fetch('data.json') // Replace 'data.json' with your file path or URL
.then(response => response.json()) // Parse the response as JSON
.then(data => {
    console.log(data); // Work with your JSON data here
    daily.addEventListener("click", function() {
        dailyReports(data);
    });
    weeklyReposrts(data);
    weekly.addEventListener("click", function() {
        weeklyReposrts(data);
    });

    monthly.addEventListener("click", function() {
        monthlyReports(data);
    });
})
.catch(error => {
    console.error('Error loading JSON:', error); // Handle any errors
});

function dailyReports(data) {
    var h2Elements = document.querySelectorAll('h2');
    var weekElements = document.querySelectorAll('.week');
    data.forEach((item, index) => {
            h2Elements[index].textContent = item.timeframes.daily.current + ' hrs ';
            weekElements[index].textContent = ' Previous ' + item.timeframes.daily.previous + ' hrs ';

            daily.style.color = "white"
            daily.style.fontWeight = "500"
            daily.style.fontSize = "22px"

            weekly.style.color = "";
            weekly.style.fontWeight = "";
            weekly.style.fontSize = "";

            monthly.style.color = "";
            monthly.style.fontWeight = "";
            monthly.style.fontSize = "";
    });
}
function weeklyReposrts(data) {
    var h2Elements = document.querySelectorAll('h2');
    var weekElements = document.querySelectorAll('.week');
    data.forEach((item, index) => {
        weekElements[index].textContent =  `Last Week - ${item.timeframes.weekly.current} hrs `;
        h2Elements[index].textContent = item.timeframes.weekly.previous + ' hrs ';
        weekly.style.color = "white";
        weekly.style.fontWeight = "500";
        weekly.style.fontSize = "22px";

        daily.style.color = "";
        daily.style.fontWeight = "";
        daily.style.fontSize = "";

        monthly.style.color = "";
        monthly.style.fontWeight = "";
        monthly.style.fontSize = "";
    });
}
    function monthlyReports(data) {
        var h2Elements = document.querySelectorAll('h2');
        var weekElements = document.querySelectorAll('.week');
        data.forEach((item, index) => {
            weekElements[index].textContent =  `Last Months - ${item.timeframes.monthly.current} hrs `;
            h2Elements[index].textContent = item.timeframes.monthly.previous + ' hrs ';
            weekly.style.color = "";
            weekly.style.fontWeight = "";
            weekly.style.fontSize = "";
    
            daily.style.color = "";
            daily.style.fontWeight = "";
            daily.style.fontSize = "";

            monthly.style.color = "white";
            monthly.style.fontWeight = "500";
            monthly.style.fontSize = "22px";
        });
    }