class MenuLink extends HTMLElement {
 
  constructor() {
    super();

    // Attach a shadow DOM to the custom element
    this.attachShadow({ mode: 'open' });

    // Create a template for the user card
    const template = document.createElement('template');
    template.innerHTML = `

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
      max-width: 545px;
      margin: 0 auto; }
     

   .menuitem .title {
      color: #000000;
      font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
     }

    .menuitem .arrow-link {
      color: #000000;
      font-style: normal;
      font-weight: normal;
      text-decoration: underline;
      transition: all 0.4s cubic-bezier(0.37, 0.875, 0.505, 1); 
      opacity: 0;
          transform: translateY(15%); 

    }

      .menuitem .arrow-link svg {
        margin-left: 10px; }

     .menuitem .arrow-link svg * {
        fill: #000000;
        transition: all 0.7s cubic-bezier(0.37, 0.875, 0.505, 1); }

     

     .menuitem:hover .arrow-link {
      color: #000000;
      text-decoration: none;
      opacity: 1;
      transform: translateY(0); }
     .menuitem:hover svg * {
      fill: #000000; }
     .menuitem:hover .img-wrapper {
      opacity: .6; }

    @media screen and (min-width: 749px) {
       .menuitem {
        margin-bottom: 80px; } }

    @media screen and (min-width: 200px) and (max-width:748px) {
       .menuitem {
        margin-bottom: 30px; 
        margin-left:20px;

        margin-right:10px;
        padding-top:20px;
        }

        .menuitem .title {
          font-size: 30px;
        }
      }

    </style>

    <div class="menu-container">
     <div class="menuitem">
          <a class="link" href="/home/about">
          <div class="title">About</div>
    
          <div class="arrow-link">
              <svg width="23" height="7" viewBox="0 0 23 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Canvas" fill="none">
                  <g id="Arrow">
                    <g id="Line (Stroke)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M 21 1L 0 1L 0 0L 21 0L 21 1Z" transform="translate(0 3)" fill="white"/>
                    </g>
                    <g id="Polygon">
                      <path d="M 3.5 0L 6.53109 3.75L 0.468911 3.75L 3.5 0Z" transform="matrix(0 1 -1 0 23 0)" fill="white"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
        

    </div> 


    `;
  // Add the template content to the shadow DOM
  this.shadowRoot.appendChild(template.content.cloneNode(true));

  //Get attributes to generate menu
  this.shadowRoot.querySelector('div.title').textContent = this.getAttribute('linkName') || 'Name';
  this.shadowRoot.querySelector('div.title').style.fontSize = this.getAttribute('fontSize');
  this.shadowRoot.querySelector('a.link').href = this.getAttribute('linkURL') || 'URL';
  }
}



// Register the custom element
customElements.define('menu-link', class extends MenuLink{});


