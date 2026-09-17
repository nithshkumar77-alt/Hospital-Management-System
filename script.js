let patients = [];
let appointments = [];


// Open Dashboard

function showDashboard() {

    document
        .getElementById("dashboard")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Add Patient

function addPatient() {

    const name =
        document.getElementById("patientName").value;

    const age =
        document.getElementById("patientAge").value;

    const disease =
        document.getElementById("patientDisease").value;


    if (name === "" || age === "" || disease === "") {

        alert("Please fill all patient details.");

        return;
    }


    const patient = {

        id: patients.length + 1,
        name: name,
        age: age,
        disease: disease

    };


    patients.push(patient);


    displayPatients();

    updateDashboard();


    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientDisease").value = "";

}


// Display Patients

function displayPatients() {

    const table =
        document.getElementById("patientTable");

    table.innerHTML = "";


    patients.forEach(function(patient) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${patient.id}</td>

            <td>${patient.name}</td>

            <td>${patient.age}</td>

            <td>${patient.disease}</td>

        `;


        table.appendChild(row);

    });

}


// Add Appointment

function addAppointment() {

    const patient =
        document.getElementById("appointmentPatient").value;

    const doctor =
        document.getElementById("appointmentDoctor").value;

    const date =
        document.getElementById("appointmentDate").value;


    if (patient === "" || doctor === "" || date === "") {

        alert("Please fill all appointment details.");

        return;

    }


    const appointment = {

        patient: patient,
        doctor: doctor,
        date: date

    };


    appointments.push(appointment);


    displayAppointments();

    updateDashboard();


    document.getElementById("appointmentPatient").value = "";
    document.getElementById("appointmentDoctor").value = "";
    document.getElementById("appointmentDate").value = "";

}


// Display Appointments

function displayAppointments() {

    const table =
        document.getElementById("appointmentTable");

    table.innerHTML = "";


    appointments.forEach(function(appointment) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${appointment.patient}</td>

            <td>${appointment.doctor}</td>

            <td>${appointment.date}</td>

        `;


        table.appendChild(row);

    });

}


// Update Dashboard

function updateDashboard() {

    document.getElementById("patientCount")
        .textContent = patients.length;


    document.getElementById("appointmentCount")
        .textContent = appointments.length;

}


// Initial Dashboard

updateDashboard();
