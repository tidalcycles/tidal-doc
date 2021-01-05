function removeLangFromPath(path, otherLangs) {
    let parts = path.split('/').filter(p => p !== '');
    if (otherLangs.some(lang => parts[0] === lang)) {
        parts = parts.slice(1);
    }
    return '/' + parts.join('/');
}

function setLanguageHrefs() {
    let links = Array.from(document.getElementsByClassName("lang"));
    if (links.length === 0) return;

    let defaultLang = links[0].dataset.defaultLang;
    let allLangs = links.map(link => link.dataset.lang);
    let otherLangs = allLangs.filter(lang => lang !== defaultLang);

    let path = window.location.pathname;
    let pathWithoutLang = removeLangFromPath(path, otherLangs);

    links.forEach(link => {
        let lang = link.dataset.lang;
        let href = lang === defaultLang
            ? pathWithoutLang
            : `/${lang}${pathWithoutLang}`
        link.setAttribute('href', href);
    })
}

setLanguageHrefs()