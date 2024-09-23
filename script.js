var _a, _b, _c, _d;
// Event Listener for Generate Resume
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address")
        .value;
    var jobTitle = document.getElementById("jobTitle")
        .value;
    var company = document.getElementById("company")
        .value;
    var years = document.getElementById("years").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var gradYear = document.getElementById("gradYear")
        .value;
    var skills = document.getElementById("skills").value;
    var languages = document.getElementById("languages")
        .value;
    // Display values in the resume preview
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayPhone").innerText = phone;
    document.getElementById("displayAddress").innerText =
        address;
    document.getElementById("displayJobTitle").innerText =
        jobTitle;
    document.getElementById("displayCompany").innerText =
        company;
    document.getElementById("displayYears").innerText = years;
    document.getElementById("displaySchool").innerText = school;
    document.getElementById("displayDegree").innerText = degree;
    document.getElementById("displayGradYear").innerText =
        gradYear;
    document.getElementById("displaySkills").innerText = skills;
    document.getElementById("displayLanguages").innerText =
        languages;
    // Handle picture upload
    var fileInput = document.getElementById("resumePic");
    var displayPic = document.getElementById("displayPic");
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayPic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayPic.style.display = "block";
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    // Show resume preview
    document.getElementById("resumeDisplay").classList.remove("hidden");
});
// Event Listener for Share Link
(_b = document.getElementById("shareLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resumeData = {
        name: document.getElementById("displayName").innerText,
        email: document.getElementById("displayEmail").innerText,
        phone: document.getElementById("displayPhone").innerText,
        address: document.getElementById("displayAddress")
            .innerText,
        jobTitle: document.getElementById("displayJobTitle")
            .innerText,
        company: document.getElementById("displayCompany")
            .innerText,
        years: document.getElementById("displayYears").innerText,
        school: document.getElementById("displaySchool").innerText,
        degree: document.getElementById("displayDegree").innerText,
        gradYear: document.getElementById("displayGradYear")
            .innerText,
        skills: document.getElementById("displaySkills").innerText,
        languages: document.getElementById("displayLanguages")
            .innerText,
    };
    var encodedResumeData = encodeURIComponent(JSON.stringify(resumeData));
    var shareableURL = "".concat(window.location.origin, "/resume?data=").concat(encodedResumeData);
    var shareableLinkElem = document.getElementById("shareableLink");
    shareableLinkElem.href = shareableURL;
    shareableLinkElem.innerText = shareableURL;
    shareableLinkElem.style.display = "block";
});
(_c = document.getElementById("downloadResume")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var resumeElement = document.getElementById("resumeDisplay");
    // Use html2pdf in a quicker and more concise way
    html2pdf(resumeElement, {
        filename: "resume.pdf",
    });
});
// Event Listener for Edit Resume
(_d = document.getElementById("editResume")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeDisplay = document.getElementById("resumeDisplay");
    var shareableLink = document.getElementById("shareableLink");
    resumeForm.classList.remove("hidden");
    resumeDisplay.classList.add("hidden");
    shareableLink.style.display = "none";
});
// Placeholder for html2pdf function
function html2pdf(resumeElement, p0) {
    // Add the implementation here
    throw new Error("Function not implemented.");
}
