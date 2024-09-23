// Event Listener for Generate Resume
document.getElementById("generateResume")?.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
    .value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const years = (document.getElementById("years") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const languages = (document.getElementById("languages") as HTMLInputElement)
    .value;

  // Display values in the resume preview
  (document.getElementById("displayName") as HTMLElement).innerText = name;
  (document.getElementById("displayEmail") as HTMLElement).innerText = email;
  (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
  (document.getElementById("displayAddress") as HTMLElement).innerText =
    address;
  (document.getElementById("displayJobTitle") as HTMLElement).innerText =
    jobTitle;
  (document.getElementById("displayCompany") as HTMLElement).innerText =
    company;
  (document.getElementById("displayYears") as HTMLElement).innerText = years;
  (document.getElementById("displaySchool") as HTMLElement).innerText = school;
  (document.getElementById("displayDegree") as HTMLElement).innerText = degree;
  (document.getElementById("displayGradYear") as HTMLElement).innerText =
    gradYear;
  (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
  (document.getElementById("displayLanguages") as HTMLElement).innerText =
    languages;

  // Handle picture upload
  const fileInput = document.getElementById("resumePic") as HTMLInputElement;
  const displayPic = document.getElementById("displayPic") as HTMLImageElement;

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      displayPic.src = e.target?.result as string;
      displayPic.style.display = "block";
    };
    reader.readAsDataURL(fileInput.files[0]);
  }

  // Show resume preview
  (document.getElementById("resumeDisplay") as HTMLElement).classList.remove(
    "hidden"
  );
});

// Event Listener for Share Link
document.getElementById("shareLink")?.addEventListener("click", () => {
  const resumeData = {
    name: (document.getElementById("displayName") as HTMLElement).innerText,
    email: (document.getElementById("displayEmail") as HTMLElement).innerText,
    phone: (document.getElementById("displayPhone") as HTMLElement).innerText,
    address: (document.getElementById("displayAddress") as HTMLElement)
      .innerText,
    jobTitle: (document.getElementById("displayJobTitle") as HTMLElement)
      .innerText,
    company: (document.getElementById("displayCompany") as HTMLElement)
      .innerText,
    years: (document.getElementById("displayYears") as HTMLElement).innerText,
    school: (document.getElementById("displaySchool") as HTMLElement).innerText,
    degree: (document.getElementById("displayDegree") as HTMLElement).innerText,
    gradYear: (document.getElementById("displayGradYear") as HTMLElement)
      .innerText,
    skills: (document.getElementById("displaySkills") as HTMLElement).innerText,
    languages: (document.getElementById("displayLanguages") as HTMLElement)
      .innerText,
  };

  const encodedResumeData = encodeURIComponent(JSON.stringify(resumeData));
  const shareableURL = `${window.location.origin}/resume?data=${encodedResumeData}`;
  const shareableLinkElem = document.getElementById(
    "shareableLink"
  ) as HTMLAnchorElement;
  shareableLinkElem.href = shareableURL;
  shareableLinkElem.innerText = shareableURL;
  shareableLinkElem.style.display = "block";
});

document.getElementById("downloadResume")?.addEventListener("click", () => {
  const resumeElement = document.getElementById("resumeDisplay") as HTMLElement;

  // Use html2pdf in a quicker and more concise way
  html2pdf(resumeElement, {
    filename: "resume.pdf",
  });
});


// Event Listener for Edit Resume
document.getElementById("editResume")?.addEventListener("click", () => {
  const resumeForm = document.getElementById("resumeForm") as HTMLElement;
  const resumeDisplay = document.getElementById("resumeDisplay") as HTMLElement;
  const shareableLink = document.getElementById("shareableLink") as HTMLElement;

  resumeForm.classList.remove("hidden");
  resumeDisplay.classList.add("hidden");
  shareableLink.style.display = "none";
});

// Placeholder for html2pdf function
//function html2pdf(resumeElement?: HTMLElement, p0?: { filename: string; }) {
  // Add the implementation here
 // throw new Error("Function not implemented.");
//}