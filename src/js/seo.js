// Set document title
document.title = seoPage.title;
// Create Open Graph title
let ogTitle = document.createElement("meta");
// Set Open Graph title attribute
ogTitle.setAttribute("property", "og:title");
ogTitle.setAttribute("content", seoPage.title);

// Create meta tag description and Open Graph description
let metaDescription = document.createElement("meta");
let ogDescription = document.createElement("meta");
// Set description attribute
metaDescription.setAttribute("name", "description");
metaDescription.setAttribute("content", seoPage.description);
// Set Open Graph description attribute
ogDescription.setAttribute("property", "og:description");
ogDescription.setAttribute("content", seoPage.description);

// Create document keywords
let metaKeys = document.createElement("meta");
metaKeys.setAttribute("name", "keywords");
metaKeys.setAttribute("content", seoPage.keywords);

// Create document author
let metaAuthor = document.createElement("meta");
metaAuthor.setAttribute("name", "author");
metaAuthor.setAttribute("content", seoPage.author);

// Create Open Graph type meta
let ogType = document.createElement("meta");
ogType.setAttribute("property", "type");
ogType.setAttribute("content", seoPage.type);

// Create Open Graph locale
let ogLocation = document.createElement("meta");
ogLocation.setAttribute("property", "og:locale");
ogLocation.setAttribute("content", seoPage.location);

// Create URL Meta (Open Graph)
let ogUrl = document.createElement("meta");
ogUrl.setAttribute("property", "og:url");
ogUrl.setAttribute("content", seoPage.url);

// Create meta robots and googlebot
let metaRobots = document.createElement("meta");
let metaGoogleBot = document.createElement("meta");
// Set their attributes
metaRobots.setAttribute("name", "robots");
metaRobots.setAttribute("content", seoPage.robots);
metaGoogleBot.setAttribute("name", "googlebot");
metaGoogleBot.setAttribute("content", seoPage.robots);

// Create and set cover image meta tag and attributes
let ogImgUrl = document.createElement("meta");
let ogImgType = document.createElement("meta");
let ogImgHeight = document.createElement("meta");
let ogImgWidth = document.createElement("meta");
let ogImgAlt = document.createElement("meta");
ogImgUrl.setAttribute("property", "og:image");
ogImgUrl.setAttribute("content", seoPage.imageLink);
ogImgType.setAttribute("property", "og:image:type");
ogImgType.setAttribute("content", seoPage.imageType);
ogImgHeight.setAttribute("property", "og:image:height");
ogImgHeight.setAttribute("content", seoPage.imageHeight);
ogImgWidth.setAttribute("property", "og:image:width");
ogImgWidth.setAttribute("content", seoPage.imageWidth);
ogImgAlt.setAttribute("property", "og:image:alt");
ogImgAlt.setAttribute("content", seoPage.imageAlt);

// Create icon on all webpage
let icon = document.createElement("link");
icon.setAttribute("rel", "icon");
icon.setAttribute("href", "/dist/assets/img/icon.png");

// Put all meta tag in web page
document.head.appendChild(metaDescription);
document.head.appendChild(metaAuthor);
document.head.appendChild(metaKeys);
document.head.appendChild(metaRobots);
document.head.appendChild(metaGoogleBot);

// Put all Open Graph Protocol tag in web page
document.head.appendChild(ogTitle);
document.head.appendChild(ogDescription);
document.head.appendChild(ogType);
document.head.appendChild(ogLocation);
document.head.appendChild(ogUrl);
document.head.appendChild(ogImgUrl);
document.head.appendChild(ogImgType);
document.head.appendChild(ogImgHeight);
document.head.appendChild(ogImgWidth);
document.head.appendChild(ogImgAlt);

// Put icon on pages
document.head.appendChild(icon);
