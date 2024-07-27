for (const subject in courses) {
    if (document.getElementById(`period_${courses[subject].period}`)) {
        document.getElementById(`period_${courses[subject].period}`).innerHTML += `
            <div class="subject" id="${subject}">
                <h3>${courses[subject].name}</h3>
                <img src="info.svg" id="" class="info_button" style="width: 1rem;">
            </div>
        `
    } else {
        document.getElementById('fluxograma').innerHTML += `
            <div class="period" id="period_${courses[subject].period}">
                <div class="check_period" id="check_${courses[subject].period}periodo">
                    <h4>${courses[subject].period}º Período</h4>
                    <input type="checkbox" class="check_semester">
                </div>

                <div class="subject" id="${subject}">
                    <h3>${courses[subject].name}</h3>
                    <img src="info.svg" id="" class="info_button" style="width: 1rem;">
                </div>
            </div>
        `
    }
}


/* Constants (HTML elements) */
const checkAllPeriod = document.querySelectorAll(".check_semester");
const allSubject = document.querySelectorAll(".subject");
const allInfoButton = document.querySelectorAll(".info_button");
const progressBar = document.getElementById("progressBar");
const sidebar = document.getElementById("sidebar");
const totalHours = getTotalHours();

// Array of courses already taken
let progressHistory = [];


/* Functions */
function hideSidebar() {
    sidebar.classList.add("hidden");
}

function hideExploration() {
    allSubject.forEach((subject) => {
        subject.classList.remove("active", "unlocks", "required");
    });
}

function updateCheckSemester(subject) {
    const periodContainer = subject.parentElement;
    const subjects = periodContainer.querySelectorAll(".subject");

    let allChecked = Array.from(subjects).every((e) => {
        return e.classList.contains("finished");
    });

    periodContainer.querySelector(".check_semester").checked = allChecked;
}

function getConcludedHours() {
    let temp = 0;
    for (const element in courses) {
        if (document.getElementById(element).classList.contains("finished")) {
            temp += parseInt(courses[element].CH)
        }
    }
    return temp
}

function getTotalHours() {
    let temp = 0;
    for (const element in courses) {
        temp += parseInt(courses[element].CH)
    }
    return temp
}

function updateProgress() {
    let concludedHours = getConcludedHours();

    const larguraTotal = document.documentElement.clientWidth;
    const larguraConcluida = (concludedHours / totalHours) * larguraTotal;

    progressBar.style.width = `${larguraConcluida}px`
    progressBar.innerHTML = `<p>${concludedHours} / ${totalHours}</p>`
}

function unlockByProgress() {
    for (const element in courses) {
        if (courses[element].CHrequired) {
            if (getConcludedHours() >= courses[element].CHrequired) {
                document.getElementById(element).classList.add("unlocked");
            } else {
                document.getElementById(element).classList.remove("unlocked");
            }
        }
    }
}

function unlockSubjects(subject) {
    if (courses[subject.id].unlocks) {
        courses[subject.id].unlocks.forEach((unlock) => {
            let unlockSubject = document.getElementById(unlock);
            let allRequired = courses[unlock].required.every((required) => {
                return document
                    .getElementById(required)
                    .classList.contains("finished");
            });
            if (allRequired) {
                unlockSubject.classList.add("unlocked");
            } else {
                unlockSubject.classList.remove("unlocked");
            }
        });
    }
}

/* PROGRESS MODE */

allSubject.forEach((subject) => {
    subject.addEventListener("click", () => {
        if (subject.classList.contains("finished")) {
            subject.classList.remove("finished");
            progressHistory.splice(progressHistory.indexOf(subject.id), 1)
            localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
        } else {
            subject.classList.add("finished");
            progressHistory.push(subject.id);
            localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
        }
        unlockSubjects(subject);
        unlockByProgress();
        updateProgress();
        updateCheckSemester(subject);
    });
});

// check all subjects in a period
checkAllPeriod.forEach(function (checkAllCheckbox) {
    checkAllCheckbox.addEventListener("change", function () {
        const periodContainer = checkAllCheckbox.parentElement.parentElement;
        const subjects = periodContainer.querySelectorAll(".subject");

        subjects.forEach(function (subject) {
            if (checkAllCheckbox.checked) {
                if (!subject.classList.contains("finished")) {
                    subject.classList.add("finished");
                    progressHistory.push(subject.id);
                    localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
                }
            } else {
                subject.classList.remove("finished");
                progressHistory.splice(progressHistory.indexOf(subject.id), 1)
                localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
            }
            unlockSubjects(subject);
        });
        updateProgress()
        unlockByProgress()
    });
});

/* EXPLORATION MODE */

allSubject.forEach((subject) => {
    subject.addEventListener("mouseover", function (event) {
        // Remove as classes de todos os elementos
        allSubject.forEach((otherSubject) => {
            otherSubject.classList.remove("active", "unlocks", "required");
        });

        // Adiciona as classes apenas à disciplina clicada
        subject.classList.add("active", "unlocks", "required");

        // Adiciona as classes relacionadas
        allSubject.forEach((relationElement) => {
            if (
                courses[subject.id].required &&
                courses[subject.id].required.includes(relationElement.id)
            ) {
                relationElement.classList.add("required");
            }
            if (
                courses[subject.id].unlocks &&
                courses[subject.id].unlocks.includes(relationElement.id)
            ) {
                relationElement.classList.add("unlocks");
            }
        });

        // Impede a propagação do clique para o body
        event.stopPropagation();
    });
});

/* SIDEBAR */

allInfoButton.forEach((infoButton) => {
    infoButton.addEventListener("click", function () {
        const subject = courses[infoButton.parentElement.id];
        sidebar.classList.remove("hidden");

        sidebar.innerHTML = `
                <button type="button" id="closeSidebarButton">X</button>
                <h2>${subject.name}</h2>
            <div class="sidebarContent"> 
                <div class="someInfo">
                    <p>Período: ${subject.period}</p>
                    <p>Código: ${subject.code}</p>
                    <p>Tipo: ${subject.type}</p>
                </div>
                <div class="preRequisitos"> 
                    <ul>
                        ${subject.CHrequired ? subject.CHrequired : ``}
                        ${subject.required
                ? `<h4> Pré-requisitos: </h4>` +
                subject.required
                    .map((required) => {
                        return `<li>${courses[required].name}</li>`;
                    })
                    .join("")
                : ``
            }
                    </ul>
                </div>
                <div class="desbloqueia"> 
                    <ul>
                        ${subject.unlocks
                ? `<h4> Desbloqueia: </h4>` +
                subject.unlocks
                    .map((unlock) => {
                        return `<li>${courses[unlock].name}</li>`;
                    })
                    .join("")
                : ``
            }
                    </ul>
                </div>
            </div>
        `;

        document
            .getElementById("closeSidebarButton")
            .addEventListener("click", hideSidebar);
        event.stopPropagation();
    });
});

// hide the sidebar when clicking outside
document.body.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target)) {
        hideSidebar();
        hideExploration()
    }
});

window.addEventListener('resize', updateProgress);


/* INITIALIZATION */

// Load progress history from local storage
if (localStorage.getItem("progressHistory")) {
    progressHistory = JSON.parse(localStorage.getItem("progressHistory"));
    progressHistory.forEach((subjectid) => {
        let subject = document.getElementById(subjectid);
        subject.classList.add("finished");
        unlockSubjects(subject)
        updateCheckSemester(subject)
    });
}

updateProgress();
unlockByProgress();