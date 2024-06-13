function scrapeClassInfo() {
    
    chrome.storage.local.get(["info"], function (result) {
        if (result["info"] == undefined) {
            return;
        } else {
            chrome.storage.local.set({"raw": chrome.storage.local.get("raw") + JSON.stringify(result["info"]) + "\n"});
        }
    });

    const classesData = document.querySelectorAll('tr[id^="ccid"]');
    console.log(classesData.cells);
    let info = {};
    for (let classIndex = 0; classIndex < classesData.length; classIndex++) {
        let cName = classesData[classIndex]
            .querySelector('td[class="table-element-text-align-start"]')
            .innerHTML.split("&nbsp;")[0].trim();

        let tds = Array.from(classesData[classIndex].querySelectorAll("td"));
        let classSchedule = tds[0].innerText;
        tds = tds.slice(12);

        let cGradeKeys = [
            "T1",
            "S1",
            "T2",
            "T3",
            "S2",
            "Y1",
        ];

        let cGradeVals = [];

        for (let gradingTerm = 0; gradingTerm < cGradeKeys.length && gradingTerm < tds.length; gradingTerm++) {
            let td = tds[gradingTerm];
            if (td.classList.contains("notInSession") || /\[\s?i\s?\]/.test(td.innerHTML)) {
                cGradeVals.push(null);
                continue;
            }
            let grade = td.getElementsByTagName("a")[0].innerHTML.split("<br>");
            cGradeVals.push(grade);
        }

        let cGrades = {
            "schedule": classSchedule,
        };
        for (let i = 0; i < cGradeKeys.length; i++) {
            cGrades[cGradeKeys[i]] = cGradeVals[i];
        }

        info[cName] = cGrades;
    }

    info["lastUpdatedTimestamp"] = new Date().getTime();
    info["name"] = document.getElementById("content-main")
        .querySelector("h1")
        .innerHTML
        .split("&nbsp;")[0]
        .split(":")[1]
        .trim()
        .split(",")
        .reverse()
        .join(" ")
        .trim();

    let setInfo = {};
    setInfo["info"] = info;
    chrome.storage.local.set(setInfo);
}

scrapeClassInfo();
document.body.style.backgroundColor = "orange";
