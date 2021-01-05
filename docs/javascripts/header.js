function getOtherLanguages() {
    let res = []
    let links = document.getElementsByClassName('lang');
    links.forEach((link) => {
        if (link.dataset.lang !== link.dataset.defaultLang) {
            res.push(langLinks[i].dataset.lang);
        }
    })
    return res;
}

function setLanguageHrefs() {
    let links = Array.from(document.getElementsByClassName("lang"));
    if (links.length === 0) return;

    let defaultLang = links[0].dataset.defaultLang;
    let allLangs = links.map(link => link.dataset.lang);
    let otherLangs = allLangs.filter(lang => lang !== defaultLang);

    links.forEach(link => {
        let lang = link.dataset.lang;
        let pathname = window.location.pathname;
        let parts = pathname.split('/');
        if (otherLangs.some(lang => lang === parts[0])) {
            pathname = parts.slice(1).join('/');
        }
        let href = lang === defaultLang ? pathname : `/${lang}${pathname}`
        link.setAttribute('href', href);
    })
}

setLanguageHrefs()