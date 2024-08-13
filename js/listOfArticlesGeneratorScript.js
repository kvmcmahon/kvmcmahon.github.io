








class Articles extends HTMLElement {
 
  constructor() {
    super();
    
    console.log("meh");

     // Attach a shadow DOM to the custom element
    this.attachShadow({ mode: 'open' });

    // Create a template for the user card
    const listOfArticles = document.createElement('listofarticles');
    
    listOfArticles.innerHTML = `
    <style>

    /** General style for links **/
    a {
      outline: none;
      color: inherit;
      text-decoration: inherit;
      transition: all 0.15s ease; }
      a:focus {
        outline: none !important; 

    }

    /** main container for links - aligns in the middle **/
   .menu-container
   {
      max-width: 945px;
      margin:0 auto;
       }
      

  

   .menuitem .title {
      color: #000000;
      font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
    
     }

     .menuitem .publication-link {
      font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
      color: #807f7e;
      text-decoration: none;
      opacity: 1;
      transform: translateY(0);
      font-size: 15px; }
     .menuitem:hover .publication-link{
        text-decoration: underline;
     }

    @media screen and (min-width: 749px) {
       .menu-container {
          margin-bottom: 80px; 
      } 
    }

    @media screen and (min-width: 200px) and (max-width:748px) {
       .menu-container {
          margin-bottom: 30px; 
         


      } }

    </style>
    `;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var category = urlParams.get("category");
    console.log(category);


    if (category == "CultureTravel"){
      listOfArticles.innerHTML = listOfArticles.innerHTML + cultureArticles();
    }
    else if(category == "Profiles")
    {
      listOfArticles.innerHTML = listOfArticles.innerHTML + profileArticles();
    }
    else if(category == "TechFeatures")
    {
      listOfArticles.innerHTML = listOfArticles.innerHTML + techFeatureArticles();
    }
    else if(category == "TechBeatReporting")
    {
      listOfArticles.innerHTML = listOfArticles.innerHTML + techBeatArticles();
    }
    else if(category == "Markets")
    {
      listOfArticles.innerHTML = listOfArticles.innerHTML + marketsArticles();
    }
    else if(category == "Sports")
    {
      listOfArticles.innerHTML = listOfArticles.innerHTML + sportsArticles();
    }

   this.shadowRoot.appendChild(listOfArticles.cloneNode(true));
 
  }
}

customElements.define('articles-link', Articles);






