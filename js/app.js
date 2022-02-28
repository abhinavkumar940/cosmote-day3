import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCRipple } from "@material/ripple";
import { MDCDrawer } from "@material/drawer";

// Init the top app bar
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
new MDCTopAppBar(topAppBarElement);

// Fetch latest news
async function fetchLatestNews() {
  let outputHtml = "";

  const articles = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed"
  ).then((r) => r.json());

  articles.forEach((article) => {
    console.log(article.jetpack_featured_media_url);
    const cardHtml = `<div class="mdc-card demo-card">
      
      
      <div class="mdc-card__media mdc-card__media--16-9" style="background-image:url('${article.jetpack_featured_media_url}'); background-size: cover;">
      </div>
    
        <div class="mdc-card-wrapper__text-section"><!---->
        <div class="demo-card__title">${article.title.rendered}</div>
        <div class="demo-card__subhead">Secondary text</div>
      <!----></div>
        <div class="mdc-card-wrapper__text-section"><!----><div class="demo-card__supporting-text">
           ${article.excerpt.rendered}
          </div><!----></div>
        <div class="mdc-card__actions"><!----><!----><!---->
      <button class="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded">
        
        <span class="mdc-button__label"><!---->Action 1<!----></span>
        <div class="mdc-button__ripple"></div>
      </button>
    <!----><!----><!---->
      <button class="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded">
        
        <span class="mdc-button__label"><!---->Action 2<!----></span>
        <div class="mdc-button__ripple"></div>
      </button>
    <!----><!----><!----></div>
      
      </div>`;

    outputHtml += cardHtml;
  });

  document.querySelector("main").innerHTML = outputHtml;
}

fetchLatestNews();
