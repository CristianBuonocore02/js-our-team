const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];



// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)


const ulEl = document.getElementById('teams')

//cicliamo nell'oggetto
const rowEL = document.getElementById('team-cards');
renderTeam(teamMembers, rowEL);
// renderTeam(newMembers, sponsorEL);


function renderTeam(teamMembers, nodeEl) {
    let members = ""

    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        const membermarkup = generatemember(member)
        console.log(membermarkup);
        members += membermarkup
        nodeEl.innerHTML = members
    }
}



function generatemember(member) {
    console.log(member);
    const { name, role, email, img } = member // {}
    console.log(name, role, email, img)
    const membermarkup = `
    <div class="col">
                <div class="card">
                    <img src="${img}" alt="">
                    <div class="card-body">
                        <h3>${name}</h3>
                        <div>${email}</div>
                        <div>${role}</div>
                    </div>
                </div>
            </div>
    `

    return membermarkup
}