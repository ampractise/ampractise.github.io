//// https://thronesapi.com/api/v2/Characters

let response = fetch("https://thronesapi.com/api/v2/Characters");
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    let ihtml = "";
    for (const key in contests) {
      const element = contests[key];
      console.log(element);
      let wiki = getWikiLink(element.fullName);
      let ylink = getyoutubeLink(element.fullName);
      ihtml += `
      <div class="profile-card">
      <div class="image">
      <img
        src="${element.imageUrl}"
        alt=""
        class="profile-img"
        loading="lazy"
      />
    </div>

    <div class="text-data">
      <span class="name">${element.fullName}</span>
      <span class="job">${element.title}</span>
      <span class="house">${element.family}</span>
    </div>

    <div class="media-buttons">
      <a
        class="link"
        style="background: #171515"
        href=${wiki}
        target="_blank"
        ><i class="bx bxl-wikipedia"></i>
      </a>
      <a
        href=${ylink}
        target="_blank"
        class="link"
        style="background: #ff0000"
      >
        <i class="bx bxl-youtube"></i>
      </a>
    </div>
    </div>
      `;
    }
    document.querySelector(".container").innerHTML = ihtml;
  });

  function getWikiLink(fullname) {
    let wikilink = "";
    if (fullname.indexOf(" ") >= 0) {
      let a = fullname.replaceAll(" ", "_");
      wikilink = `https://en.wikipedia.org/wiki/${a}`;
    } else {
      wikilink = `https://en.wikipedia.org/wiki/${fullname}`;
    }
    return wikilink;
  }
  
  function getyoutubeLink(fullname) {
    let ylink = "";
    if (fullname.indexOf(" ") >= 0) {
      let a = fullname.replaceAll(" ", "+");
      ylink = `https://www.youtube.com/results?search_query=${a}`;
    } else {
      ylink = `https://www.youtube.com/results?search_query=${fullname}`;
    }
    return ylink;
  }