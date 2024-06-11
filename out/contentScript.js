function scrapeGrades(){
    const classesData = document.querySelectorAll('tr[id^="ccid"]');
    let info = {}
    for (let i = 0; i < classesData.length; i++) {
        let cName = classesData[i].querySelector('td[class="table-element-text-align-start"]').innerHTML.split("&nbsp;")[0].trim();
        let cGrades = Array.from(classesData[i].querySelectorAll('a[class="bold"]')).map(grade => grade.innerHTML.split("<br>"));
        info[cName] = cGrades;
    }
    localStorage.setItem("class_grade", JSON.stringify(info));
}

scrapeGrades();
document.body.style.backgroundColor = "red";
