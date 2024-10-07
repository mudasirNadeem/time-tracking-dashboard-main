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
            daily.style.cssText = "color: white; font-weight: 500; font-size: 22px;";
            weekly.style.cssText = "";
            monthly.style.cssText = "";
            
    });
}
function weeklyReposrts(data) {
    var h2Elements = document.querySelectorAll('h2');
    var weekElements = document.querySelectorAll('.week');
    data.forEach((item, index) => {
        weekElements[index].textContent =  `Last Week - ${item.timeframes.weekly.current} hrs `;
        h2Elements[index].textContent = item.timeframes.weekly.previous + ' hrs ';
        weekly.style.cssText = "color: white; font-weight: 500; font-size: 22px;";
        daily.style.cssText = "";
        monthly.style.cssText = "";
    });
}
    function monthlyReports(data) {
        var h2Elements = document.querySelectorAll('h2');
        var weekElements = document.querySelectorAll('.week');
        data.forEach((item, index) => {
            weekElements[index].textContent =  `Last Months - ${item.timeframes.monthly.current} hrs `;
            h2Elements[index].textContent = item.timeframes.monthly.previous + ' hrs ';
            monthly.style.cssText = "color: white; font-weight: 500; font-size: 22px;";
            daily.style.cssText = "";
            weekly.style.cssText = "";
        });
    }