export const smashingContent:string=`


<!doctype html>
<html lang="en" class="">
  <head>

    

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      
        <title>A Complete Guide To HTML Email — Smashing Magazine</title>
      
      <link rel="prefetch" href="/images/icons/menu-cat-dancing.svg">
<link rel="prefetch" href="/images/icons/close.svg">
<link rel="preconnect" href="https://d33wubrfki0l68.cloudfront.net"/>
<link rel="preconnect" href="https://cloud.netlifyusercontent.com"/>
<link rel="preconnect" href="https://smashingcomments.netlify.app"/>
<link rel="preconnect" href="https://res.cloudinary.com"/>
<link rel="preconnect" href="https://cats.smashing.services"/>
<link rel="preconnect" href="https://storage.googleapis.com"/>
      






    

    
      

<style>
  @font-face{font-family:Elena;src:url(/fonts/ElenaWebRegular/ElenaWebRegular-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebRegular/ElenaWebRegular.woff) format("woff")}@font-face{font-family:ElenaLCP;src:url(/fonts/ElenaWebRegular/ElenaWebRegular-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebRegular/ElenaWebRegular.woff) format("woff");font-display:optional}@font-face{font-family:Elena;src:url(/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic.woff) format("woff");font-style:italic}@font-face{font-family:ElenaLCP;src:url(/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic.woff) format("woff");font-style:italic;font-display:optional}@font-face{font-family:Elena;src:url(/fonts/ElenaWebBold/ElenaWebBold-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebBold/ElenaWebBold.woff) format("woff");font-weight:700}@font-face{font-family:ElenaLCP;src:url(/fonts/ElenaWebBold/ElenaWebBold-subset-v2.woff2) format("woff2"),url(/fonts/ElenaWebBold/ElenaWebBold.woff) format("woff");font-weight:700;font-display:optional}@font-face{font-family:Elena;src:url(/fonts/ElenaWebBoldItalic/ElenaWebBoldItalic-subset.woff2) format("woff2"),url(/fonts/ElenaWebBoldItalic/ElenaWebBoldItalic.woff) format("woff");font-weight:700;font-style:italic}@font-face{font-family:ElenaLCP;src:url(/fonts/ElenaWebBoldItalic/ElenaWebBoldItalic-subset.woff2) format("woff2"),url(/fonts/ElenaWebBoldItalic/ElenaWebBoldItalic.woff) format("woff");font-weight:700;font-style:italic;font-display:optional}@font-face{font-family:Mija;src:url(/fonts/MijaRegular/Mija_Regular-webfont-subset.woff2) format("woff2"),url(/fonts/MijaRegular/Mija_Regular-webfont.woff) format("woff")}@font-face{font-family:MijaLCP;src:url(/fonts/MijaRegular/Mija_Regular-webfont-subset.woff2) format("woff2"),url(/fonts/MijaRegular/Mija_Regular-webfont.woff) format("woff");font-display:optional}@font-face{font-family:Mija;src:url(/fonts/MijaBold/Mija_Bold-webfont-subset-v2.woff2) format("woff2"),url(/fonts/MijaBold/Mija_Bold-webfont.woff) format("woff");font-weight:700}@font-face{font-family:MijaLCP;src:url(/fonts/MijaBold/Mija_Bold-webfont-subset-v2.woff2) format("woff2"),url(/fonts/MijaBold/Mija_Bold-webfont.woff) format("woff");font-weight:700;font-display:optional}
</style>

<script>

  var fontsInServiceWorker = sessionStorage.foutFontsStage1Loaded && sessionStorage.foutFontsStage2Loaded || ('serviceWorker' in navigator && navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === 'activated')
  if (!fontsInServiceWorker && 'fonts' in document) {
    function fetchFonts(fonts) {
      return Promise.all(fonts.map(function (font) {
        return document
          .fonts
          .load(font);
      }));
    }

    if( sessionStorage.foutFontsStage2Loaded ) {
			document.documentElement.className += " wf-loaded-stage2";
		} else {
      sessionStorage.foutFontsStage1Loaded = true;
    };
  }

  if("fonts" in document) {

  
  let font = new FontFace(
    "Elena",
    "url(/fonts/ElenaWebRegular/ElenaWebRegular-subset-v2.woff2) format('woff2')"
  );
  let fontBold = new FontFace(
    "Elena",
    "url(/fonts/ElenaWebBold/ElenaWebBold-subset-v2.woff2) format('woff2')",
     { weight: "700" }
  );
  let fontItalic = new FontFace(
    "Elena",
    "url(/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic-subset-v2.woff2) format('woff2')",
    { style: "italic" }
  );
  
  
  
  
  let font2Bold = new FontFace(
    "Mija",
    "url(/fonts/MijaBold/Mija_Bold-webfont-subset-v2.woff2) format('woff2')",
     { weight: "700" }
  );

  
  let loadedFonts = Promise.all([
    font.load(),
    
    fontBold.load(),
    font2Bold.load(),
    fontItalic.load()
  ]).then(result => {
    result.forEach(font => document.fonts.add(font));
    document.documentElement.classList.add('wf-loaded-stage2');
    sessionStorage.foutFontsStage2Loaded = true;
  }).catch(error => {
  });

  }

  if (
    (sessionStorage.foutFontsStage1Loaded &&
      sessionStorage.foutFontsStage2Loaded) ||
    ('serviceWorker' in navigator &&
      navigator.serviceWorker.controller !== null &&
      navigator.serviceWorker.controller.state === 'activated')
  ) {
    var docEl = document.documentElement
    
    docEl.classList.add('wf-loaded-stage2')
  }

  if (
    !'querySelector' in document &&
    'addEventListener' in window &&
    'getComputedStyle' in window
  ) {
    window.document.documentElement.className += ' no-js'
  }
  window.document.documentElement.className += ' enhanced js'
</script>



<style>
  

*,::after,::before{
    box-sizing:border-box
}
html{
    font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;
    line-height:1.15;
    -webkit-text-size-adjust:100%;
    overflow-y:scroll
}
body{
    margin:0;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    font-feature-settings:"onum" 1;
    color:#333;
    overflow:hidden;
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    font-family:-apple-system,BlinkMacSystemFont,Roboto,Roboto Slab,Droid Serif,Segoe UI,system-ui,Arial,sans-serif;
    font-size:1.125em
}
body,html{
    min-height:100%;
    overflow-x:hidden
}
img{
    max-width:100%;
    position:relative;
    border-style:none
}
article,aside,figcaption,figure,footer,header,main,nav,section{
    display:block
}
:focus{
    outline:3px dotted var(--THEME_COLOR_HOVER,#811d15)!important
}
article,figure,header,main,nav,section{
    display:block
}
.wf-loaded-stage2 .article-header--meta,.wf-loaded-stage2 .article-header--updated,.wf-loaded-stage2 .btn,.wf-loaded-stage2 .cta--green,.wf-loaded-stage2 .form__field__input,.wf-loaded-stage2 .h1,.wf-loaded-stage2 .h2,.wf-loaded-stage2 .meta-box,.wf-loaded-stage2 .nav-item,.wf-loaded-stage2 .search .search-input,.wf-loaded-stage2 .subnav a,.wf-loaded-stage2 .tablesaw td:before,.wf-loaded-stage2 h1,.wf-loaded-stage2 h2,.wf-loaded-stage2 input[type=email],.wf-loaded-stage2 th{
    font-family:Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
}
.wf-loaded-stage2 .article-header--meta-item__date,.wf-loaded-stage2 .article__summary::before,.wf-loaded-stage2 .author__desc,.wf-loaded-stage2 .author__desc__title,.wf-loaded-stage2 .drop-caps+p::first-line,.wf-loaded-stage2 .h3,.wf-loaded-stage2 .sponsors ul li a,.wf-loaded-stage2 body,.wf-loaded-stage2 h3,.wf-loaded-stage2 tbody td,.wf-loaded-stage2 time{
    font-family:Elena,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
}
@media all and (max-width:750px){
    .c-garfield-the-cat{
        display:flex;
        flex-direction:column
    }
    .c-garfield-the-cat>*{
        margin-bottom:0
    }
    .c-garfield-the-cat>pre{
        margin-top:1em
    }
    .c-garfield-the-cat .code-toolbar{
        margin-top:1em
    }
    .c-garfield-the-cat .code-toolbar>pre{
        margin-top:0
    }
    .c-garfield-the-cat>table{
        margin-top:1em;
        margin-bottom:1em
    }
    .c-garfield-the-cat .pull-quote__quotation{
        margin-top:1em
    }
    .drop-caps{
        display:none
    }
    .author__desc,.wf-loaded-stage2 .article__summary,.wf-loaded-stage2 .author__desc{
        font-family:ElenaLCP,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
    }
    .wf-loaded-stage2 h1,h1{
        font-family:MijaLCP,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
    }
    .wf-loaded-stage2 .article-header--meta,.wf-loaded-stage2 .h2,.wf-loaded-stage2 .meta-box,.wf-loaded-stage2 h2{
        font-family:MijaLCP,-apple-system,BlinkMacSystemFont,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
    }
    .wf-loaded-stage2 .article-header--meta-item__date,.wf-loaded-stage2 .article__summary::before,.wf-loaded-stage2 .author__desc__title,.wf-loaded-stage2 .drop-caps+p::first-line,.wf-loaded-stage2 body,.wf-loaded-stage2 time{
        font-family:ElenaLCP,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif
    }
}
.js-show-secondary .menu-text--sm,.menu-text--lg,.menu-text--lg--close,.menu-text--sm--close{
    display:none
}
.js-show-secondary .menu-text--sm--close{
    display:block
}
@media all and (min-width:800px){
    .js-show-secondary .main-nav__secondary{
        display:block;
        top:50px
    }
    .js-show-secondary .menu-text--lg--close,.menu-text--lg{
        display:block
    }
    .js-show-secondary .menu-text--lg,.js-show-secondary .menu-text--sm--close,.menu-text--sm{
        display:none
    }
}
.js-show-secondary .main-nav-more-item__button:before{
    content:"";
    display:block;
    margin-left:.35em;
    width:45px;
    height:30px;
    background-position:center center;
    background-repeat:no-repeat;
    background-image:url(/images/icons/menu-cat-dancing.svg);
    order:1
}
.js-show-secondary .main-nav-more-item__button:after{
    width:15px;
    height:15px;
    order:2;
    background-image:url(/images/icons/close.svg)
}
.js-show-secondary .main-nav__secondary{
    display:flex
}
strong{
    font-weight:bolder;
    letter-spacing:0
}
svg:not(:root){
    overflow:hidden
}
button{
    text-transform:none;
    cursor:pointer;
    font:inherit;
    margin:0
}
[type=submit],button,html [type=button]{
    -webkit-appearance:button
}
[type=button]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{
    border-style:none;
    padding:0
}
[type=button]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{
    outline:ButtonText dotted 1px
}
[type=search]{
    -webkit-appearance:textfield;
    outline-offset:-2px
}
[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{
    -webkit-appearance:none
}
.l-author-bio{
    display:flex;
    flex-wrap:wrap;
    align-items:center
}
.l-author-bio-content{
    flex-grow:1;
    flex-shrink:1;
    flex-basis:300px
}
.bio-image__large .bio-image{
    --bio-image-border-width:8px
}
.bio-image{
    padding:0;
    margin:0;
    display:block;
    width:100%;
    height:100%;
    border-radius:inherit;
    position:relative
}
.bio-image::before{
    display:block;
    content:"";
    height:90%;
    width:160%;
    position:absolute;
    background-image:url(data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAASCAYAAABim40OAAACuElEQVRogc1XUZJjIQjEzN7/yMl8ucP0dkNjXrKh6pWAqERaICveR+vD96vo8cazOvoYX54NwOl6Z52ycc907E4C4a45DfKrwHH5vpPgd7aTYKNOyUvYKL7zRZG6WNRP5cne7pxrMwHLEbCqS3aDMglwpcvjMmTGVz4wejQ86lDfjZ0OeSY/az/VMaJ2XQZA/QQQChSKV99N8OpjvuHvUsGt+ErX2bI9q7Hy0dE580pnZ0R1uTi/eSVX2SLrbmKeAeQG34qIL2KDozo/kwosBv4Ouk5WOheMyrfK5t1Z8K++Ak9XVjK/ZRW8LnMgYDZQtpx5lBFoERxI//z40EFmQLgn2R27PZkP0fDVGmaj5thdoE7JEREPBR6nFJ1+CCAFgq9mVF91dhUcBRgGHMWjju0TZN7xi+nVGmaH8wG2IeaUHH+ibyqRTuxZCVGyAhgrZQi0KrtlYgHYAV1JXvET8IjfF7jnb4mPpMtg2TZbr0rpSnwQO9SzjLAauxV83Zj2j1FU9QtX0fQMfD1VM6zWn9D00agz3fOr866OwRF1mUe9EmaDL8d9HflF5jS/M8Yd1rHzsWzt87HMdr0D+sB6HixPXV/EyqH6QvCqBOE9qPXMTsmMqI3TMG9eNc7P9EJYYvK/KdUsZz0raZF06Hu+DCxBD+BZv1L1RKeAcXsZpnNtgtiEmEOeyRHx0zBvchtnHBWAUFa66q86ggltuj5HZU73pVdAcMHhAEX5xHys/Ge/j43IO/IvfZdxmM4FVDdOs1X1Twr3YWciTYPjZopXZILOxgWElVGIjs5V/Yw752QrxU/A1fGdL4yciz551U45qILa+fbsOmeutekud2I7BeJJhmPr3L07KlN0Y/eMzpmb2JzYntgfXfIr9nLWXgl0RuPLO1xzxdqPOPNK8FxJn+rXhP4HON5K31PHDhmjlm6fAAAAAElFTkSuQmCC);
    background-size:100% auto;
    background-repeat:no-repeat;
    top:89%;
    left:-30%;
    right:0;
    transform-origin:30% 50%;
    opacity:1;
    transition:opacity .3s ease-in-out
}
.bio-image:hover::before{
    opacity:0
}
a.bio-image-link{
    background:0 0;
    text-shadow:none;
    color:inherit;
    padding:0;
    display:block;
    border-radius:inherit;
    width:100%;
    height:100%
}
a.bio-image-link::before{
    display:block;
    content:'';
    height:120%;
    width:120%;
    position:absolute;
    top:-10%;
    left:-12%
}
.bio-image-wrapper{
    background:var(--bio-image-background-color,var(--bio-image-border-color,#d33a2c));
    border:solid var(--bio-image-border-width,8px) var(--bio-image-border-color,#d33a2c);
    border-radius:inherit;
    transform:scale(.84) translateX(15%) rotateZ(calc(-1 * (11 * 1deg)));
    transform-origin:0 100%;
    overflow:hidden;
    width:100%;
    height:100%;
    transition:transform .2s ease-out
}
.bio-image-image{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    transform:scale(1.2) rotateZ(calc(11 * 1deg));
    transition:transform .2s ease-out
}
.bio-image-link:active .bio-image-wrapper,.bio-image-link:focus .bio-image-wrapper,.bio-image:hover .bio-image-wrapper{
    transform:scale(.84) translateX(15%) rotateZ(0)
}
.bio-image-link:active .bio-image-image,.bio-image-link:focus .bio-image-image,.bio-image:hover .bio-image-image{
    transform:scale(1.2) rotateZ(0)
}
.rounded-3xl{
    border-radius:1.2em
}
.block{
    display:block
}
.h-48{
    height:12rem
}
.mr-3{
    margin-right:.75rem
}
.mb-5{
    margin-bottom:1.25rem
}
@media all and (max-width:600px){
    .mobw-40{
        width:8rem!important
    }
    .mobh-40{
        height:8rem!important
    }
}
.w-48{
    width:12rem
}
.mt-2{
    margin-top:.5rem
}
.row{
    box-sizing:border-box;
    display:flex;
    flex:0 1 auto;
    flex-direction:row;
    flex-wrap:wrap;
    margin-right:-1rem;
    margin-left:-1rem
}
[class*=col-]{
    box-sizing:border-box;
    flex:0 0 auto;
    padding-right:1rem;
    padding-left:1rem
}
.row::after{
    clear:both
}
.col-12{
    flex-basis:100%;
    max-width:100%
}
@media screen and (min-width:48em){
    .col-12{
        flex-basis:100%;
        max-width:100%
    }
}
.container{
    width:calc(100% - .5em);
    max-width:1440px;
    margin:0 auto;
    z-index:1;
    position:relative
}
.container::after{
    content:"";
    display:table;
    clear:both
}
@media (min-width:40em){
    .container{
        width:92vw!important
    }
}
@media (min-width:48em){
    .container{
        width:85vw
    }
}
@media (min-width:64em){
    .container{
        width:68rem
    }
}
@media (min-width:75em){
    .container{
        width:79rem
    }
}
@media screen and (min-width:160em){
    .container{
        max-width:1650px
    }
}
@media (min-width:187.5em){
    .container{
        max-width:1860px
    }
}
.c-garfield-the-cat>p:first-of-type{
    font-size:1.1em;
    line-height:1.55em
}
.c-garfield-the-cat>p:empty{
    display:none
}
.c-felix-the-cat{
    background-color:#f3f3f3;
    padding:.5em calc(1.5em + .5vw);
    border-radius:11px
}
.c-felix-the-cat h4{
    border-bottom:4px solid #d33a2c;
    color:#d33a2c;
    margin-top:1.5em
}
.sponsor-panel{
    display:flex;
    justify-content:center;
    align-items:center
}
.sponsor-panel-content{
    flex:3
}
.sponsor-panel-image{
    display:none
}
@media screen and (min-width:1100px){
    .sponsor-panel-image{
        display:block;
        background-image:none;
        margin-left:1.5em;
        flex:1
    }
}
@media (max-width:1024px){
    .col{
        width:100%!important;
        padding:0 1em
    }
    .row{
        margin-left:0;
        margin-right:0
    }
    .article__content{
        float:none
    }
    .article__content::before{
        display:none
    }
}
#main{
    position:relative;
    z-index:0;
    background-color:#fff
}
@supports (display:grid){
    .main-nav{
        display:grid;
        align-items:center
    }
}
.main-nav{
    position:relative;
    display:block;
    min-width:0;
    color:#fff;
    grid-column:span 2;
    font-size:1.05em
}
.main-nav__primary .nav-item--active{
    background:rgba(0,0,0,.1);
    border-radius:11px
}
.main-nav__secondary .nav-item--active{
    background-color:transparent;
    margin:0
}
.c-garfield-the-cat figcaption a:not(.btn){
    color:#666;
    text-decoration-line:underline;
    text-decoration-color:#666
}
@media all and (min-width:1100px){
    @supports (grid-row-gap:0){
        .c-garfield-the-cat{
            display:grid;
            grid-template-columns:12.5rem repeat(12,minmax(0,1fr)) 12.5rem;
            grid-row-gap:calc(1em + .5vw);
            margin:0 auto
        }
        .c-garfield-the-cat>h3{
            margin-top:calc(1.5 * (1em + .5vw));
            margin-bottom:0
        }
        .c-garfield-the-cat>h4{
            margin-top:calc(1em + .5vw);
            margin-bottom:calc(-1 * (1em + .5vw)/ 2)
        }
        .c-garfield-the-cat>*{
            grid-column:3/13;
            margin-top:0;
            margin-bottom:0
        }
        .c-garfield-the-cat>table{
            margin-bottom:calc(1em + .5vw)
        }
        .c-garfield-the-cat .c-garfield-bio{
            grid-column:1/2;
            grid-row:1/4;
            align-self:start
        }
        .c-garfield-the-cat .c-garfield-header{
            grid-column-end:15
        }
        .c-garfield-the-cat .c-garfield-aside--meta{
            grid-column:14/15;
            grid-row:2/4;
            align-self:start;
            margin:0;
            overflow:hidden
        }
        .c-garfield-the-cat>.break-out{
            grid-column:1/15;
            max-width:50em;
            margin-left:auto;
            margin-right:auto;
            width:100%
        }
        .c-garfield-the-cat>.break-out img{
            margin:0 auto
        }
        .c-garfield-the-cat>.break-out figcaption{
            max-width:50em
        }
        .article__content .c-garfield-the-cat figcaption{
            padding-top:calc((1em + .5vw)/ 2);
            padding-bottom:0;
            margin:0 auto
        }
        .c-garfield-the-cat .c-garfield-native-panel{
            grid-column:1/2;
            grid-row:5/10;
            align-self:start;
            text-align:center;
            position:relative
        }
        .c-garfield-native-panel__right{
            grid-column:14/15;
            grid-row:6/9;
            align-self:start;
            text-align:center
        }
        .c-garfield-the-cat .c-garfield-native-panel__below{
            grid-row:15/21
        }
        .c-garfield-the-cat .c-garfield-native-panel__end{
            grid-row:26/31
        }
    }
}
.no-ads .c-garfield-native-panel,.no-panels .feature-panel-container,.subscriber .c-garfield-native-panel,.subscriber .feature-panel-container{
    display:none!important
}
figcaption a{
    color:inherit
}
figcaption code,figcaption pre{
    font-style:normal
}
.article h1,.article h2,.article h3,.article h4{
    position:relative
}
.feature-panel{
    position:relative;
    border-radius:11px;
    padding:2.5em 1.25em;
    display:flex;
    flex-wrap:wrap;
    background-color:#f6f6f6
}
@media (min-width:1000px){
    .feature-panel{
        padding:2.5em 3.5em
    }
}
.feature-panel-container{
    grid-column:1/15;
    margin-top:5em;
    margin-bottom:2.5em
}
.article__content figure:not(.bio-image),.article__image{
    padding:0;
    margin:1em auto
}
.article__content figure:not(.bio-image) img,.article__image img{
    display:block;
    width:auto;
    max-width:100%;
    margin:0 auto;
    height:auto
}
.article__content figure:not(.bio-image)>a,.article__image>a{
    display:block;
    background:0 0;
    position:relative;
    z-index:99
}
.article__content figure:not(.bio-image) figcaption,.article__image figcaption{
    color:#666;
    font-size:calc(.8em + .2vw);
    font-style:italic;
    padding:.75em 2em .75em 0;
    display:table
}
.article__content figure:not(.bio-image) figcaption a,.article__image figcaption a{
    color:#666
}
.article__content figure:not(.bio-image) figcaption::before,.article__image figcaption::before,.internal__page__wrapper figure:not(.bio-image) figcaption::before{
    content:url(data:image/svg+xml;
    base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNyAxMy4wOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNjMmMyYzI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jYW1lcmE8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTguNSA1LjQ0YTIuMjEgMi4yMSAwIDEgMCAyLjIxIDIuMjEgMi4yMSAyLjIxIDAgMCAwLTIuMjEtMi4yMXpNMTQuNzkgMi4yMWgtMi41NWEyLjIxIDIuMjEgMCAwIDAtMi4yNC0yLjIxaC0zYTIuMjEgMi4yMSAwIDAgMC0yLjI0IDIuMjFoLTIuNTVhMi4yMSAyLjIxIDAgMCAwLTIuMjEgMi4yMXY2LjQ2YTIuMjEgMi4yMSAwIDAgMCAyLjIxIDIuMjFoMTIuNThhMi4yMSAyLjIxIDAgMCAwIDIuMjEtMi4yMXYtNi40NmEyLjIxIDIuMjEgMCAwIDAtMi4yMS0yLjIxem0tNi4yOSA5LjM1YTMuOTEgMy45MSAwIDEgMSAzLjkxLTMuOTEgMy45MSAzLjkxIDAgMCAxLTMuOTEgMy45MXoiLz48L3N2Zz4=);
    height:1em;
    width:1.5em;
    padding-right:.6em;
    display:table-cell;
    vertical-align:baseline;
    position:relative;
    top:.05em
}
.hidden{
    display:none!important
}
.c-garfield-header{
    clear:both
}
.c-garfield-the-cat a:not(.btn){
    color:#006fc6
}
.c-promo-box{
    font-size:.9em;
    border-radius:11px
}
.c-promo-box a:not(.btn){
    color:#006fc6
}
.c-promo-box--ad::before{
    display:block;
    white-space:pre-wrap;
    padding:0 0 1.5em;
    font-size:.75em;
    font-style:italic;
    color:#666
}
.c-promo-box--ad img{
    border-radius:11px
}
.c-garfield-the-cat .author__desc{
    font-size:.9em;
    color:#555
}
.article__summary::before{
    content:"Quick summary ↬ ";
    display:inline;
    font-style:normal;
    letter-spacing:2px;
    margin:0;
    font-weight:600;
    color:#d33a2c;
    text-transform:uppercase
}
.article__summary::before{
    font-size:.75em
}
.c-promo-box--ad ul{
    padding-left:0;
    margin:0
}
.bnnr-list{
    display:flex;
    text-align:center;
    justify-content:center;
    flex-direction:row
}
.sponsors.c-promo-box:not(.c-promo-box--wide) .bnnr-list{
    flex-direction:column
}
.c-garfield-the-cat{
    padding:0 1em
}
@media screen and (min-width:80em){
    .c-garfield-the-cat{
        display:grid;
        grid-template-columns:16rem repeat(12,minmax(0,1fr)) 16rem
    }
}
@media screen and (min-width:100em){
    .c-garfield-the-cat{
        display:grid;
        grid-template-columns:17rem repeat(12,minmax(0,1fr)) 17rem
    }
}
@media screen and (min-width:160em){
    .c-garfield-the-cat{
        display:grid;
        grid-template-columns:18.5rem repeat(12,minmax(0,1fr)) 18.5rem;
        grid-column-gap:1.75rem
    }
}
@media (min-width:187.5em){
    .c-garfield-the-cat{
        display:grid;
        grid-template-columns:20rem repeat(12,minmax(0,1fr)) 20rem;
        grid-column-gap:2.25rem
    }
}
.header{
    background:#d33a2c;
    background:var(--THEME_COLOR,#d33a2c);
    position:relative;
    display:grid;
    justify-content:flex-start;
    align-items:center;
    padding:.8em;
    z-index:2;
    grid-template-columns:min-content min-content 1fr;
    column-gap:5px
}
@media all and (min-width:31.25em){
    .header{
        grid-template-columns:-webkit-min-content -webkit-min-content 0 minmax(100px,100%);
        grid-template-columns:min-content min-content 0 minmax(100px,100%);
        column-gap:10px
    }
}
@media (min-width:700px){
    .header{
        grid-template-columns:-webkit-min-content minmax(140px,2fr) 0 minmax(100px,350px);
        grid-template-columns:min-content minmax(140px,2fr) 0 minmax(100px,350px)
    }
}
@media (min-width:740px){
    .header{
        padding:1rem 2em
    }
}
.search{
    flex-basis:100px;
    flex-shrink:1
}
@media screen and (min-width:48em){
    body{
        font-size:calc(.35842vw + .95296em)
    }
}
body .form__field__label,body li,body p{
    line-height:calc(1.5em + .2vw);
    word-break:break-word
}
body h1,body h2,body h3{
    line-height:1.2
}
body h4,body h5,body h6{
    line-height:calc(1.3em + (1.5 - 1.3) * ((100vw - 21em)/ 14))
}
.article--post__title a:focus,.article--post__title a:hover{
    color:#d33a2c
}
@supports (-ms-ime-align:auto){
    .article__content figure:not(.bio-image) figcaption,.article__image figcaption{
        display:inline-block
    }
    .article__content figure:not(.bio-image) figcaption::before,.article__image figcaption::before{
        display:inline-block
    }
    body{
        font-feature-settings:normal
    }
}
::-webkit-input-placeholder{
    color:#666
}
::-moz-placeholder{
    color:#000
}
:-ms-input-placeholder{
    color:#666
}
.article-header--meta-item__date,time{
    font-size:.8em;
    color:#666;
    font-feature-settings:"smcp" 1,"c2sc" 1;
    letter-spacing:1px;
    text-transform:lowercase;
    background-position:center 72%
}
time{
    font-variant:all-petite-caps
}
.wf-loaded-stage2 time{
    font-variant:petite-caps
}
.kbd,kbd{
    font-size:.9em;
    padding:.0625rem .5rem;
    border-radius:.125rem;
    border:1px solid #d33a2c;
    box-shadow:1px 1px 0 #d33a2c,2px 2px 0 #d33a2c;
    margin:0 .25rem;
    color:#d33a2c;
    font-family:monospace
}
figure{
    margin:0;
    padding:0
}
figure:after,figure:before{
    content:" ";
    display:table;
    clear:both
}
a{
    padding:7px 0;
    background-color:transparent;
    text-decoration-skip-ink:auto;
    text-decoration-thickness:1px;
    text-underline-offset:1px;
    text-decoration-line:underline;
    color:#006fc6
}
.h1,h1{
    font-size:calc(1.625rem + 1.6vw);
    margin:0
}
.h2,h2{
    font-size:calc(1.375rem + 1.6vw);
    margin:0
}
.h3,h3{
    font-size:calc(1.5rem + .25vw);
    margin:2em 0 .75em;
    text-transform:capitalize;
    color:#333
}
.h4,h4{
    font-size:calc(1.125rem + .25vw);
    text-transform:uppercase;
    letter-spacing:1px;
    margin-top:2em;
    margin-bottom:1em;
    color:#333
}
@media all and (min-width:1550px){
    h1{
        font-size:2.13894em
    }
    .h2,h2{
        font-size:2.14857em
    }
}
h2:target,h3:target,h4:target,h5:target,h6:target{
    color:#d33a2c;
    border-bottom:5px solid #d33a2c
}
:target{
    scroll-margin-top:2rem
}
.article h1,.article h2,.article h3{
    position:relative
}
ol,ul{
    margin:1em 0;
    max-width:100%
}
ol{
    padding:0;
    list-style:none;
    counter-reset:listCounter
}
@media (min-width:1100px){
    .c-garfield-the-cat>ol li,.c-garfield-the-cat>ul li{
        margin-bottom:calc((1em + .5vw)/ 1.2)
    }
}
ol>li{
    padding-left:calc(1.65em + .7vw);
    position:relative;
    counter-increment:listCounter;
    margin-bottom:1em
}
ol>li::before{
    content:counter(listCounter,decimal-leading-zero);
    font-size:.7em;
    font-weight:700;
    color:#d33a2c;
    left:.8em;
    position:absolute;
    font-family:Mija,-apple-system,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,system-ui,Arial,sans-serif
}
ul{
    list-style:none;
    padding-left:calc(1.4em + .7vw);
    list-style-image:url(/images/bullet.svg)
}
ul>li{
    margin-bottom:.75em;
    padding-left:.25em
}
.rh{
    color:#d33a2c
}
.menu-text--lg,.menu-text--lg--close,.menu-text--sm--close{
    display:none
}
@media (min-width:800px){
    .search{
        flex-basis:500px
    }
    .main-nav{
        grid-column:auto
    }
    .menu-text--sm{
        display:none
    }
    .menu-text--lg{
        display:block
    }
}
.secondary-nav{
    position:relative;
    grid-row-start:2;
    grid-column:1/5
}
body:not(.enhanced) .main-nav{
    overflow-x:auto;
    -webkit-overflow-scrolling:touch
}
.main-nav__primary{
    display:flex;
    list-style:none;
    padding:.4em 0;
    margin:0;
    flex-wrap:nowrap;
    width:100%;
    height:100%;
    flex-shrink:1;
    min-width:0;
    justify-content:flex-start
}
.main-nav span:empty{
    display:none
}
@media all and (min-width:53.125em){
    .main-nav__primary{
        justify-content:space-between
    }
}
.nav-item{
    flex-grow:0;
    background:0 0;
    text-shadow:none;
    color:inherit;
    font-weight:700;
    display:flex;
    align-items:center;
    margin-bottom:0;
    padding-left:0
}
.nav-item--active{
    background:rgba(0,0,0,.1);
    border-radius:11px
}
.main-nav-more-item{
    position:relative;
    width:145px
}
@media (min-width:42.9375em){
    .main-nav-more-item{
        margin-left:.35em
    }
}
@media all and (max-width:52.5em){
    .main-nav-more-item{
        justify-content:center
    }
}
.main-nav-more-item__button{
    padding:.4em .5rem .4em 1rem;
    border:1px solid rgba(0,0,0,.05);
    color:inherit;
    display:flex;
    align-items:center;
    justify-content:space-around;
    line-height:1;
    position:relative;
    background-color:rgba(0,0,0,.2);
    border-radius:11px;
    box-shadow:0 13px 7px -15px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025)
}
.main-nav-more-item__button,.nav-item-link{
    white-space:nowrap
}
.nav-item-link{
    padding:.35em .9rem;
    background:0 0;
    color:#fff!important;
    text-shadow:1px 1px 1px rgba(0,0,0,.25);
    text-decoration:none
}
@media screen and (min-width:800px){
    .main-nav__secondary .nav-item-link{
        color:#d33a2c!important
    }
}
.nav-item-link:focus,.nav-item-link:hover{
    background-color:rgba(0,0,0,.15);
    border-radius:11px
}
.main-nav__secondary .nav-item-link:focus,.main-nav__secondary .nav-item-link:hover{
    background-color:transparent;
    box-shadow:none
}
.main-nav-more-item__button:active,.main-nav-more-item__button:focus,.nav-item-link:active,.nav-item-link:focus{
    outline-color:var(--THEME_COLOR_OUTLINE,#811d15)!important
}
.secondary-nav .nav-item-link:active,.secondary-nav .nav-item-link:focus{
    outline-color:#811d15!important
}
.main-nav__secondary .nav-item-link{
    text-shadow:none;
    width:100%;
    text-decoration:none;
    text-decoration-color:#d33a2c;
    padding:.25em .7rem
}
.main-nav-more-item__button:after{
    content:"";
    display:block;
    margin-left:9px;
    width:30px;
    height:30px;
    background-position:center center;
    background-repeat:no-repeat;
    background-image:url(/images/icons/menu-cat.svg)
}
.main-nav__secondary{
    display:none;
    color:#fff;
    padding:.2em 0;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:10em
}
@media all and (min-width:31.25em){
    .main-nav__secondary .nav-item-link{
        padding:.25em 1.1rem
    }
    .main-nav__secondary{
        padding:.2em .5em
    }
}
@media (-webkit-min-device-pixel-ratio:1.3),(min-resolution:124.8dpi){
    .main-nav__secondary{
        height:11em
    }
}
@media (min-width:800px){
    .secondary-nav{
        grid-row:auto;
        grid-column:auto
    }
    .main-nav__secondary{
        display:none;
        position:absolute;
        top:0;
        left:-80px;
        transform:translate(-50%,0);
        max-width:unset;
        background:#fff;
        box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
        border-radius:11px;
        margin:0;
        padding:14px 20px 10px 10px;
        min-width:180px;
        color:#d33a2c;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        height:auto
    }
    .main-nav__secondary:before{
        content:"";
        display:block;
        position:absolute;
        top:1px;
        left:50%;
        transform:translate(-50%,-100%);
        width:0;
        height:0;
        border-left:15px solid transparent;
        border-right:15px solid transparent;
        border-bottom:15px solid #fff
    }
}
.nav-item-1,.nav-item-10,.nav-item-2,.nav-item-3,.nav-item-4,.nav-item-5,.nav-item-6,.nav-item-7,.nav-item-8,.nav-item-9{
    display:none
}
.main-nav__secondary .nav-item-1,.main-nav__secondary .nav-item-10,.main-nav__secondary .nav-item-2,.main-nav__secondary .nav-item-3,.main-nav__secondary .nav-item-4,.main-nav__secondary .nav-item-5,.main-nav__secondary .nav-item-6,.main-nav__secondary .nav-item-7,.main-nav__secondary .nav-item-8,.main-nav__secondary .nav-item-9{
    display:flex
}
@media (min-width:42.9375em){
    .nav-item-1{
        display:flex
    }
    .main-nav__secondary .nav-item-1{
        display:none
    }
}
@media (min-width:52.5em){
    .nav-item-2{
        display:flex
    }
    .main-nav__secondary .nav-item-2{
        display:none
    }
}
@media (min-width:56.5625em){
    .nav-item-3{
        display:flex
    }
    .main-nav__secondary .nav-item-3{
        display:none
    }
}
@media (min-width:70em){
    .nav-item-4{
        display:flex
    }
    .main-nav__secondary .nav-item-4{
        display:none
    }
}
@media (min-width:77.8125em){
    .nav-item-5{
        display:flex
    }
    .main-nav__secondary .nav-item-5{
        display:none
    }
}
@media (min-width:97.5em){
    .nav-item-6{
        display:flex
    }
    .main-nav__secondary .nav-item-6{
        display:none
    }
}
@media (min-width:108.4375em){
    .nav-item-7{
        display:flex
    }
    .main-nav__secondary .nav-item-7{
        display:none
    }
}
@media (min-width:120.625em){
    .nav-item-8{
        display:flex
    }
    .main-nav__secondary .nav-item-8{
        display:none
    }
}
@media (min-width:136.5625em){
    .nav-item-9{
        display:flex
    }
    .main-nav__secondary .nav-item-9{
        display:none
    }
}
@media (min-width:179.6875em){
    .nav-item-10{
        display:flex
    }
    .main-nav__secondary .nav-item-10{
        display:none
    }
    .main-nav-more-item{
        display:none
    }
    .main-nav__primary{
        justify-content:flex-start
    }
    .nav-item{
        padding:0 .65em
    }
    .header,.header.searchFocused{
        grid-template-columns:-webkit-min-content minmax(140px,-webkit-max-content) 0 minmax(250px,600px);
        grid-template-columns:min-content minmax(140px,max-content) 0 minmax(250px,600px)
    }
}
@media (max-width:480px){
    .header .search{
        grid-column:1/5;
        margin-top:.5em
    }
    .main-nav__primary{
        justify-content:flex-end
    }
    .main-nav-more-item{
        justify-content:flex-end
    }
}
.btn--text-shadow,a.btn.btn--text-shadow{
    text-shadow:1px 1px 1px rgba(0,0,0,.25)
}
.btn--green,.btn--member{
    background-color:#41b14f;
    background-image:linear-gradient(#9ec14c,#41b14f);
    color:#fff
}
.btn-wrapper{
    display:none
}
@media screen and (min-width:1100px){
    .btn-wrapper{
        display:block;
        padding:4px
    }
}
.btn,.toolbar-item{
    display:inline-block;
    border-radius:11px;
    padding:.5em 1em;
    text-align:center;
    color:#fff;
    text-decoration:none;
    border:none;
    font-weight:700;
    background:0 0;
    font-size:.9em;
    outline:0;
    background-color:#d33a2c;
    background-image:linear-gradient(to bottom,#f88040,#d33a2c)
}
.cta--green{
    display:block;
    padding:.5em;
    color:#137d54!important;
    background-color:#d6f3e7;
    transition:.2s border ease-in-out,.2s box-shadow ease-in-out;
    border:1px solid #c6f2e0;
    font-weight:700;
    text-decoration:none;
    border-radius:11px;
    text-align:center;
    font-size:.85em
}
.cta--green:hover{
    background-color:#c8f1e0;
    border:1px solid #a0dcc4
}
.cta--green:active,.cta--green:active:hover,.cta--green:focus,.cta--green:focus:hover{
    background-color:#137d54;
    color:#fff!important
}
a.btn--white{
    background:#fff;
    color:#267dcc;
    transition:color .1s ease-out
}
.btn--white--bordered:active,.btn--white--bordered:focus,.btn--white--bordered:hover,.toolbar-item,a.btn--white--bordered{
    border:1px solid #ddd
}
.btn span{
    color:#811d15;
    font-size:.8em;
    margin-left:5px;
    margin-top:.5em;
    line-height:1
}
.btn.btn--medium{
    font-size:calc(.9em + .1vw);
    padding:.75em 1em
}
@media (max-width:64em){
    pre{
        max-width:100%
    }
}
.input{
    border:none;
    display:block;
    color:#333;
    background-color:#fff;
    padding:.4em .75em;
    border-radius:5.5px;
    outline:0;
    font:inherit;
    margin:0;
    font-size:1.15rem;
    width:100%
}
.input::-webkit-input-placeholder{
    color:#666
}
.input:-ms-input-placeholder{
    color:#666
}
.input::-moz-placeholder{
    color:#000
}
.input::-ms-clear{
    display:none
}
.search .search-input{
    padding-left:calc(22px + 15px + 15px);
    background-image:url(data:image/svg+xml;
    base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNHB4IiB3aWR0aD0iMjRweCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyMi4zMSIgeTE9IjIzLjYyIiB4Mj0iMy43MyIgeTI9IjMuMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlOTM3MjIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmODZmMjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TWFnbmlmaWVyPC90aXRsZT48cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIGQ9Ik0yMy4zMyAyMC4xbC00LjczLTQuNzRhMTAuMDYgMTAuMDYgMCAxIDAtMy4yMyAzLjIzbDQuNzQgNC43NGEyLjI5IDIuMjkgMCAxIDAgMy4yMi0zLjIzem0tMTcuNDgtNS44NGE1Ljk0IDUuOTQgMCAxIDEgOC40MiAwIDYgNiAwIDAgMS04LjQyIDB6Ii8+PC9zdmc+);
    background-repeat:no-repeat;
    background-size:22px auto;
    background-position:15px 45%;
    font-size:calc(1em + .1vw);
    border-radius:11px;
    padding-top:1rem;
    padding-bottom:1rem;
    font-weight:700;
    box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    transition:all .2s ease-in-out
}
@media all and (max-width:550px){
    .search .search-input{
        min-height:54px
    }
}
.search-button{
    width:0;
    height:0;
    padding:0
}
.enhanced .search-button{
    display:none
}
.search-input-wrapper{
    position:relative
}
.search-clear-button{
    background:0 0;
    border:none;
    position:absolute;
    right:0;
    top:50%;
    transition:opacity .2s ease-out;
    transform:translate(-25%,-50%);
    opacity:0;
    padding:.5em
}
.search-clear-button.enabled{
    opacity:1
}
.search-results{
    background:var(--THEME_COLOR,#d33a2c);
    color:#fff
}
.search-results img{
    border-radius:11px;
    border:4px solid #fff;
    box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    transition:all .2s ease-in-out
}
.search-results img:hover{
    box-shadow:0 0 3px -1px rgba(50,50,93,.25),0 4px 12px -6px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025)
}
.search-results ol img{
    min-height:100px;
    height:auto
}
.logo{
    font-size:1em;
    line-height:0;
    width:3em;
    flex-basis:3em;
    flex-shrink:0;
    position:relative;
    z-index:0
}
@media all and (min-width:1450px){
    .logo{
        width:10.5em;
        flex-basis:10.5em
    }
    .logo img{
        transform:none
    }
}
.logo a{
    display:block;
    background:0 0;
    outline:0;
    padding:0;
    color:transparent;
    text-shadow:none
}
.logo a picture{
    display:block
}
.logo img{
    height:3.5em;
    transform:translate(0,15%)
}
.cart-active .back-to-top-wrapper{
    display:none
}
a.back-to-top{
    display:block;
    background:0 0;
    width:50px;
    height:50px;
    opacity:.7;
    text-shadow:none;
    border-radius:11px;
    padding:13px;
    transform-origin:bottom left;
    will-change:transform;
    transform:rotate(-11deg);
    transition:background-color .1s ease-out,transform .2s ease-out,opacity .1s ease-out;
    background-color:#666
}
@media all and (max-width:64em){
    a.back-to-top{
        opacity:.3
    }
}
a.back-to-top:focus,a.back-to-top:hover{
    background-color:#282634;
    opacity:1
}
a.back-to-top svg{
    display:block
}
.back-to-top-wrapper{
    width:50px;
    height:50px;
    display:none;
    position:fixed;
    bottom:20px;
    right:20px;
    z-index:9;
    will-change:transform;
    backface-visibility:hidden
}
.back-to-top-wrapper::before{
    display:block;
    content:"";
    height:90%;
    width:160%;
    position:absolute;
    background-image:url(/images/shadow.png);
    background-size:100% auto;
    background-repeat:no-repeat;
    top:89%;
    left:-30%;
    right:0;
    transition:all .1s ease-out;
    transform-origin:30% 50%;
    pointer-events:none
}
@media (min-height:600px){
    .back-to-top-wrapper{
        display:block
    }
}
label{
    max-width:100%
}
.form__field__input,input[type=email],input[type=password],input[type=text],textarea{
    background:#effaff;
    font-size:1em;
    border:1px solid #d2dfe4;
    transition:box-shadow .3s ease-in-out,color .3s ease-in-out;
    background-position:right 1.35em center;
    background-size:.25em .25em;
    background-repeat:no-repeat;
    margin-bottom:5px;
    border-radius:11px;
    padding:.9em 2em .7em 1.1rem;
    display:block;
    width:100%;
    outline:0;
    box-shadow:inset 0 1px 1px 0 rgba(0,0,0,.2)
}
.form__field__label{
    display:block;
    margin-bottom:.5em;
    cursor:pointer
}
input{
    border-color:#aaa
}
.sponsors ul{
    padding-left:0;
    text-align:center;
    list-style-image:none
}
.sponsors__native ul.bnnr-list li img{
    max-width:none;
    width:100%;
    height:auto
}
.sponsors__native ul.bnnr-list li a{
    padding:0;
    background-image:none;
    text-decoration-line:underline;
    text-decoration-color:#006fc6;
    text-decoration-thickness:1px
}
.c-garfield-native-panel .sponsors__native .bnnr-list li{
    margin-left:0;
    margin-right:auto
}
.c-garfield-native-panel__right .sponsors__native .bnnr-list li{
    margin-left:auto;
    margin-right:0
}
img::before{
    height:2.5em;
    display:block;
    top:2em;
    content:" ";
    width:100%;
    z-index:2;
    left:0
}
img::after{
    content:url(data:image/svg+xml;
    base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDEwcHg7Ij4KPHBhdGggZmlsbD0iIzc3NyIgZD0iTTI2IDI4aC0yMHYtNGw2LTEwIDguMjE5IDEwIDUuNzgxLTR2OHoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzc3NyIgZD0iTTI2IDE1YzAgMS42NTctMS4zNDMgMy0zIDNzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zYzEuNjU3IDAgMyAxLjM0MyAzIDN6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiM3NzciIGQ9Ik0yOC42ODEgNy4xNTljLTAuNjk0LTAuOTQ3LTEuNjYyLTIuMDUzLTIuNzI0LTMuMTE2cy0yLjE2OS0yLjAzMC0zLjExNi0yLjcyNGMtMS42MTItMS4xODItMi4zOTMtMS4zMTktMi44NDEtMS4zMTloLTE1LjVjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjV2MjdjMCAxLjM3OCAxLjEyMiAyLjUgMi41IDIuNWgyM2MxLjM3OCAwIDIuNS0xLjEyMiAyLjUtMi41di0xOS41YzAtMC40NDgtMC4xMzctMS4yMy0xLjMxOS0yLjg0MXpNMjQuNTQzIDUuNDU3YzAuOTU5IDAuOTU5IDEuNzEyIDEuODI1IDIuMjY4IDIuNTQzaC00LjgxMXYtNC44MTFjMC43MTggMC41NTYgMS41ODQgMS4zMDkgMi41NDMgMi4yNjh6TTI4IDI5LjVjMCAwLjI3MS0wLjIyOSAwLjUtMC41IDAuNWgtMjNjLTAuMjcxIDAtMC41LTAuMjI5LTAuNS0wLjV2LTI3YzAtMC4yNzEgMC4yMjktMC41IDAuNS0wLjUgMCAwIDE1LjQ5OS0wIDE1LjUgMHY3YzAgMC41NTIgMC40NDggMSAxIDFoN3YxOS41eiI+PC9wYXRoPgo8L3N2Zz4K) " " attr(alt);
    font-size:.9em;
    display:block;
    color:#666;
    line-height:1.5;
    position:absolute;
    font-style:italic;
    z-index:2;
    top:calc(2em - 35px);
    text-align:center;
    width:104%;
    left:-2%;
    padding:2.25em 1em;
    text-shadow:none;
    background-color:#eee;
    border-radius:11px
}
@media screen and (min-width:40em){
    .author__desc{
        margin-left:1em
    }
}
.author__desc{
    font-size:.8em;
    position:relative;
    font-style:normal!important;
    color:#333;
    padding:0!important
}
.author__desc p{
    margin:1em 0
}
.author__desc .show-more-link{
    display:block
}
.author__desc__title{
    color:#666;
    text-transform:uppercase;
    letter-spacing:2px;
    font-size:.9em;
    margin:0;
    font-weight:400
}
@media (max-width:40em){
    .author__desc{
        width:100%
    }
}
.article{
    padding-top:calc(.5em + 3vw)
}
.article__summary{
    font-size:1.05em
}
.c-garfield-the-cat .article__summary{
    position:initial
}
.author__desc p{
    font-size:.95em
}
.wf-loaded-stage2 .author__desc p{
    font-size:1em
}
.article__summary{
    align-self:center;
    margin-top:0;
    color:#666;
    position:relative;
    padding-bottom:1.5em;
    margin-bottom:.5em;
    border-bottom:3px solid #e5e5e5;
    font-size:1em;
    line-height:1.8em;
    font-style:normal
}
.wf-loaded-stage2 .article__summary{
    font-style:italic;
    font-size:1.15em;
    line-height:1.55em
}
@media all and (max-width:420px){
    .article__content{
        margin-top:0
    }
}
.article__content{
    line-height:1.5;
    padding:0!important
}
.article__content a:not(.btn){
    color:#006fc6
}
.drop-caps+p::first-line{
    font-weight:700;
    font-variant:all-petite-caps;
    text-transform:lowercase;
    letter-spacing:.5px;
    font-size:1.15em
}
.drop-caps{
    width:calc(96px + 1vw);
    height:calc(120px + 4vw);
    float:left;
    margin-right:1.5em;
    position:relative;
    left:calc(-1.3em - .5vw);
    top:.5vw
}
@media all and (min-width:500px){
    .drop-caps{
        width:150px;
        height:186px;
        min-width:100px;
        margin-left:0
    }
}
@media screen and (min-width:64em){
    .author__desc{
        margin-left:0
    }
    .drop-caps{
        display:none
    }
}
.drop-caps img{
    max-width:100%
}
.drop-caps img:nth-of-type(2){
    position:absolute;
    bottom:0;
    right:-40px;
    width:75%
}
@media all and (min-height:700px){
    body.articlepage{
        overflow:initial
    }
}
.form__field__label--extra{
    display:inline
}
@media (max-width:64em){
    .form__field__label--extra{
        display:none
    }
}
.article-header{
    margin:0 0 .5em
}
@media all and (max-width:1099px){
    .sponsors:not(.sponsors__lead):not(.sponsors-leaderboard):not(#sponsors-article-end):not(.sponsors__mobile){
        display:none
    }
    .sponsors__mobile{
        display:block
    }
    .article-header--title{
        margin-bottom:1em
    }
}
.article-header--meta{
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin:0 0 .5em
}
.article-header--meta li{
    padding:0;
    margin:0;
    margin-right:0
}
.article-header--meta li::before{
    display:none
}
.article-header--meta li::after{
    content:"•";
    font-size:1.2em;
    color:#d33a2c;
    display:inline-block;
    margin:0 .4em
}
.article-header--meta li:last-of-type::after{
    display:none
}
.article-header--date{
    color:#666;
    font-size:1.05em;
    font-family:inherit
}
.article-header--meta-item{
    font-size:.9em;
    font-family:inherit;
    display:flex
}
.article-header--comments{
    font-size:.85em
}
.article-header--updated{
    padding:.2em .8rem;
    margin-right:.5em;
    color:#137d54;
    background-color:#d6f3e7;
    border:1px solid #c6f2e0;
    border-radius:11px;
    font-weight:700;
    text-transform:initial;
    font-feature-settings:normal;
    font-variant:none;
    font-size:.9em;
    letter-spacing:0
}
.meta-box{
    background:#f6f6f6;
    padding:1em;
    margin:0 0 2em;
    list-style:none;
    width:100%;
    border-radius:11px;
    font-size:.8em
}
.meta-box li,.meta-box--item{
    line-height:1.4;
    padding-left:calc(1em + .5em);
    background-size:auto 1em;
    background-repeat:no-repeat;
    background-position:left top;
    margin-bottom:.5em
}
.meta-box li:last-child,.meta-box--item:last-child{
    margin-bottom:0
}
.meta-box--tags{
    background-image:url(/images/icons/tags.svg)
}
.meta-box--share{
    background-image:url(/images/icons/tweets.svg)
}
.meta-box--published{
    background-image:url(/images/icons/published.svg)
}
.meta-box--author{
    background-image:url(/images/icons/author.svg)
}
.article__content .meta-box{
    margin-bottom:2em
}
@media all and (max-width:640px){
    .meta-box{
        margin-bottom:2em
    }
}
code,pre{
    font-feature-settings:normal;
    color:#000;
    background:0 0;
    text-shadow:0 1px #fff;
    font-family:Fira Code,Menlo,Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    text-align:left;
    white-space:pre;
    word-spacing:normal;
    word-break:normal;
    font-variant-ligatures:none;
    word-wrap:normal;
    tab-size:4;
    hyphens:none
}
pre{
    padding:1rem;
    margin:.5rem 0;
    resize:both;
    max-width:100vw;
    color:#666;
    background:#fafafa;
    border:1px solid #eee;
    font-size:1em;
    border-radius:11px;
    min-width:250px;
    overflow:auto
}
.code-toolbar{
    position:relative
}
.break-out>pre,.code-toolbar>pre{
    margin:0!important
}
.code-toolbar>.toolbar{
    position:absolute;
    top:.5em;
    right:.5em;
    opacity:0;
    transition:opacity .3s ease-in-out
}
.code-toolbar>.toolbar .toolbar-item{
    display:inline-block
}
code.diff-highlight{
    width:100%
}
a code{
    background:0;
    padding:0;
    text-decoration-line:underline
}
:not(pre)>code,code{
    background:#f6f3f2;
    color:#333;
    font-size:calc(.75em + .1vw);
    line-height:calc(1.5em + .2vw)!important;
    padding:0 .2725em;
    font-style:normal;
    display:inline-block
}
:not(pre)>code{
    white-space:normal
}
pre>code{
    line-height:calc(1.65em + .2vw)!important;
    background:0 0
}
.table,table{
    width:100%;
    border-collapse:collapse;
    margin-bottom:calc(2em + 2vw);
    clear:both
}
tr{
    border-bottom:1px solid #eeecec
}
.td,.th,td,th{
    padding:1em 1.5em;
    border:none;
    text-align:left
}
.scroll-pane{
    overflow-x:auto;
    scrollbar-color:#666 #201c29;
    -webkit-overflow-scrolling:touch
}
.scroll-pane::-webkit-scrollbar{
    height:.75em
}
.scroll-pane::-webkit-scrollbar-thumb{
    background:#b0b0b0;
    border-radius:11px
}
.scroll-pane table td{
    min-width:30vw
}
@media all and (min-width:650px){
    .scroll-pane table td{
        min-width:auto
    }
}
.layout-fixed{
    table-layout:fixed
}
.figure table{
    margin-bottom:0
}
.tablesaw td{
    line-height:165%;
    text-align:left;
    vertical-align:middle
}
.tablesaw td,.tablesaw th{
    padding:.8em 1em
}
tbody tr:nth-child(2n) td{
    background-color:#f7f7f7
}
.tablesaw th,table th{
    border-bottom:4px solid #ddd
}
@media screen and (max-width:767px){
    .tablesaw thead{
        display:none
    }
    .tablesaw tr{
        display:flex;
        flex-direction:column;
        margin-bottom:1.5em;
        width:100%;
        border-radius:11px;
        border:1px solid #eee
    }
    .tablesaw td:before{
        content:attr(data-label);
        display:table-cell;
        font-weight:700;
        padding:0 1em 0 0;
        text-align:right
    }
    .tablesaw td:last-child:after{
        content:'';
        position:absolute;
        left:0;
        right:0;
        bottom:0
    }
}
a.skip-main{
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999
}
a.skip-main:active,a.skip-main:focus{
    color:#d33a2c;
    background-color:#fff;
    left:auto;
    top:auto;
    width:auto;
    height:auto;
    overflow:auto;
    padding:.5em 1em;
    text-align:center;
    font-size:1.2em;
    z-index:999
}
.video-embed-container .video-embed-container--wrapper{
    position:relative;
    padding-bottom:56.25%;
    height:0;
    overflow:hidden
}
.signature{
    margin:1.5em 0;
    font-size:.9em;
    color:silver;
    font-style:italic
}
.author .show-more-link{
    font-size:.9em;
    display:inline;
    color:#666;
    text-decoration-line:underline;
    text-decoration-color:currentColor;
    font-weight:400
}
.cookie-banner{
    background-color:#fff;
    border-radius:11px;
    position:fixed;
    width:calc(19em + 1vw);
    padding:1em 1.5em;
    font-size:1em;
    z-index:99;
    box-shadow:0 6px 40px rgba(0,0,0,.3);
    bottom:1em;
    left:1em
}
.cookie-banner p{
    font-size:.9em;
    margin-top:0
}
.cookie-banner__container{
    display:flex
}
.cookie-banner button{
    padding:.9em 1em
}
@media screen and (max-width:480px){
    .cookie-banner{
        right:0;
        left:0;
        width:100%;
        border-radius:0;
        bottom:0
    }
    .cookie-banner p{
        margin-top:1em
    }
}
@media screen and (max-width:380px){
    .cookie-banner p{
        margin-top:0
    }
}
.cookies--btn{
    width:100%
}
.mr5{
    margin-right:.5em
}
.mr0{
    margin-right:0!important
}
.btn--white{
    background:#fff;
    color:#267dcc;
    border:1px solid #fff
}
.btn--white--bordered{
    border:1px solid #ddd
}
.btn--green{
    background-color:#41b14f;
    background-image:linear-gradient(#9ec14c,#41b14f);
    color:#fff
}
.sponsors ul li{
    display:inline-block;
    margin-bottom:3em;
    font-size:.85em;
    padding:0;
    text-align:center;
    vertical-align:top;
    border-radius:11px;
    max-width:25rem;
    border:1px solid #ddd;
    min-height:90px
}
.c-promo-box--ad.sponsors li{
    width:auto
}
.sponsors__native ul.bnnr-list li{
    border:0;
    width:100%;
    height:auto;
    max-width:94%;
    margin:0 auto
}
@media all and (min-width:1350px){
    .sponsors__native ul.bnnr-list li{
        max-width:85%
    }
    .c-garfield-the-cat .c-garfield-native-panel{
        position:relative;
        left:-7%
    }
    .c-garfield-the-cat .c-garfield-native-panel__right{
        position:relative;
        right:-7%
    }
}
.sponsors__native ul.bnnr-list li:first-child{
    padding-bottom:2.5em
}
.sponsors__native ul.bnnr-list li:only-child{
    padding-bottom:0
}
blockquote:not(.pull-quote){
    font-style:italic;
    border-left:8px solid #ddd;
    padding:0 0 0 calc(1em + .5vw);
    color:#555;
    margin-left:0
}
blockquote:not(.pull-quote) p{
    margin:0
}
.btn--small.toolbar-item,.btn.btn--small{
    font-size:.9em;
    border-radius:6px;
    margin:0;
    padding:.4em 1em
}
.c-felix-the-cat a.btn{
    display:table;
    margin-top:1em;
    margin-bottom:1.5em
}
@media screen and (max-height:880px){
    .article__comments--notes{
        display:none
    }
    .article__comments__form__desc{
        margin-top:4em
    }
}
header.subnav__header{
    background:#fff;
    padding:.2rem 0 0 0;
    z-index:1
}
.subnav__primary::-webkit-scrollbar{
    display:none;
    width:0;
    background:0 0
}
.subnav__tags li:first-child{
    padding-left:.8em
}
.subnav__tags li:last-child{
    padding-right:.8em
}
.subnav__tags .subnav-item{
    margin-bottom:0
}
@media (min-width:740px){
    header.subnav__header{
        padding:.25rem 0 0 0;
        box-shadow:0 4px 20px 0 rgba(0,0,0,.12)
    }
    .subnav__tags li:first-child{
        padding-left:2em
    }
}
.subnav .nav-item-link{
    color:#d33a2c!important;
    text-shadow:none!important;
    font-weight:700;
    font-family:Mija;
    text-decoration-skip-ink:auto;
    text-decoration-thickness:1px;
    text-underline-offset:1px;
    border-radius:11px;
    font-size:.85em;
    background-color:#ffe7e7;
    transition:.2s border ease-in-out,.2s box-shadow ease-in-out;
    border:1px solid #ffe7e7
}
.subnav .nav-item-link:hover{
    color:#d33a2c;
    text-shadow:none;
    font-weight:700;
    font-family:Mija;
    border-radius:11px;
    font-size:.85em;
    background-color:#ffe3e3;
    border:1px solid #faa4a4
}
.subnav-item a:active,.subnav-item a:active:hover,.subnav-item a:focus,.subnav-item a:focus:hover{
    box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.12);
    background-color:#d33a2c;
    color:#fff!important;
    outline:0
}
.subnav-item--active a.nav-item-link,.subnav-item--active a.nav-item-link:hover{
    background-color:#d33a2c;
    color:#fff!important;
    border:1px solid #d33a2c
}
.subnav-item{
    display:flex;
    margin-right:.5em;
    padding-left:.15em
}
.subnav-item .nav-item-link{
    padding:.22em .9rem
}
.subnav a{
    background:0 0;
    font-weight:700;
    display:flex;
    align-items:center;
    text-decoration:none
}
.subnav__primary{
    padding:.25em 0;
    margin-top:.25em;
    margin-bottom:.35em;
    display:flex;
    position:relative;
    scroll-snap-type:x;
    scroll-padding:1rem;
    overflow-x:auto;
    scrollbar-width:none
}
.subnav-more-item__button{
    padding:.2em 1em;
    border:1px solid #ddd;
    border-radius:11px;
    background:0 0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    color:#d33a2c;
    position:relative;
    font-size:.85em;
    min-width:max-content;
    transition:none
}
.hidden{
    display:none!important
}
.subnav-item--green .nav-item-link:hover{
    background-color:#c8f1e0;
    border:1px solid #a0dcc4
}
.subnav .nav-item-link:hover{
    color:#d33a2c;
    text-shadow:none;
    font-weight:700;
    border-radius:11px;
    font-size:.85em;
    background-color:#ffe3e3;
    border:1px solid #faa4a4
}
.feature-panel::before{
    position:absolute;
    left:0;
    transform:translate(0,-100%);
    top:-5px;
    content:"More after jump! Continue reading below ↓";
    font-size:.7em;
    color:#666;
    padding-bottom:10px;
    border-bottom:8px solid #eee
}
@media (min-width:1000px){
    .feature-panel::before{
        width:73%
    }
}
.feature-panel{
    position:relative;
    border-radius:11px;
    padding:2.5em 1.25em;
    display:flex;
    flex-wrap:wrap;
    background-color:#f6f6f6
}
@media (min-width:1000px){
    .feature-panel{
        padding:2.5em 3.5em
    }
}
.feature-panel-left-col,.feature-panel-right-col{
    flex-basis:100%;
    position:relative;
    padding:0;
    flex-shrink:0
}
.feature-panel-right-col{
    order:-1;
    display:flex;
    align-items:flex-start;
    margin-bottom:1em;
    justify-content:flex-start;
    margin-top:2em
}
@media (min-width:800px){
    .feature-panel-left-col{
        flex-basis:65%
    }
    .feature-panel-right-col{
        order:0;
        flex-basis:35%;
        margin:0;
        justify-content:center
    }
}
.feature-panel-description{
    margin-bottom:calc(1em + .5vw)
}
.feature-panel-description>:first-child{
    margin-top:0
}
.feature-panel-description>:last-child{
    margin-bottom:0
}
.feature-panel-image-link{
    position:relative;
    text-decoration:none;
    width:100%;
    max-width:210px;
    transition:scale,opacity .2s ease-out;
    padding-left:2.5em;
    background-image:none
}
.feature-panel-image{
    width:100%;
    max-width:19.375rem;
    margin:0 auto;
    display:block;
    transition:all .2s ease-out;
    will-change:transform;
    transform-origin:0 100%;
    transform:rotate(-11deg)
}
@media (min-width:1000px){
    .feature-panel-image-link{
        position:absolute;
        max-width:19.375rem;
        top:-160px;
        right:0
    }
}
.feature-panel-image-img{
    height:auto
}
.btn--large.toolbar-item,.btn.btn--large{
    font-size:calc(1em + .25vw);
    padding:.75em 1em
}


</style>


    

    
      <link rel="preload" href="/js/nav-v2.js" as="script" importance="high">
<link rel="preload" href="/fonts/MijaBold/Mija_Bold-webfont-subset-v2.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/ElenaWebRegular/ElenaWebRegular-subset-v2.woff2" as="font" crossorigin>

<link rel="preload" href="/fonts/ElenaWebBold/ElenaWebBold-subset-v2.woff2"  as="font" type="font/woff2" media="(min-width: 800px)" crossorigin>

<link rel="preload" href="/fonts/ElenaWebRegularItalic/ElenaWebRegularItalic-subset-v2.woff2" as="font" media="(min-width: 800px)" type="font/woff2" crossorigin>



<link rel="preload" href="/images/icons/menu-cat.svg" as="image">
<link rel="preload" href="/images/icons/published.svg" as="image">
<link rel="preload" href="/images/icons/tags.svg" as="image">
<link rel="preload" href="/images/icons/tweets.svg" as="image">
<link rel="preload" href="/images/icons/author.svg" as="image">

<link rel="preload" href="/js/app.js" media="(min-width: 800px)" as="script" importance="high">
    

    
      
  
  

  
  

  

  

  <link rel="alternate" type="application/rss+xml" title="Smashing Magazine &amp;raquo; Feed" href="https://www.smashingmagazine.com/feed/" />

    

    <meta name="description" content="A complete guide to HTML email templates, tools, resources and guides. Everything you need to know about designing and building HTML Email in 2021."/>
<meta name="robots" content="noodp"/>
<link rel="canonical" href="https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content='A Complete Guide To HTML Email — Smashing Magazine' />
<meta property="og:description" content="A complete guide to HTML email templates, tools, resources and guides. Everything you need to know about designing and building HTML Email in 2021." />
<meta property="og:url" content="https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/" />
<meta property="og:site_name" content="Smashing Magazine" />
<meta property="article:publisher" content="https://www.facebook.com/smashmag" />

	
	<meta property="article:author" content="https://www.smashingmagazine.com/author/vitaly-friedman/" />

<meta property="article:tag" content="HTML Email" /><meta property="article:tag" content="Generators" /><meta property="article:tag" content="Tools" /><meta property="article:tag" content="Templates" /><meta property="article:tag" content="Guides" /><meta property="article:tag" content="Best Practices" />
<meta property="article:section" content="General" />
<meta property="article:published_time" content="2021-04-12 12:30:00 &#43;0000 UTC" />
<meta property="article:modified_time" content=" 2021-04-12 12:30:00 &#43;0000 UTC" />
<meta property="og:updated_time" content="2021-04-12 12:30:00 &#43;0000 UTC" />
<meta property="og:image" content='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png' />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content="A complete guide to HTML email templates, tools, resources and guides. Everything you need to know about designing and building HTML Email in 2021." />
<meta name="twitter:title" content='A Complete Guide To HTML Email — Smashing Magazine' />
<meta name="twitter:site" content="@smashingmag" />
<meta name="twitter:image" content='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png' />

	
	

<meta property="DC.date.issued" content="2021-04-12 12:30:00 &#43;0000 UTC" />


    <meta name="theme-color" content="#d33a2c">
    <meta property="fb:pages" content="45576747489"/>
    
    <meta name="google-site-verification" content="X5sd8PEDJqYLSR98RKgSozn-0RNpknXFlGoA-UXe5K0" />

    <link rel="icon" href="/images/favicon/favicon.ico" />
    <link rel="icon" href="/images/favicon/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.json">

  </head>

  <body data-instant-whitelist class='no-js    articlepage' >

		
			
				



<div data-handler="PreLoad" id="top"></div>
<a href="#main" class="skip-main">Skip to main content</a>
<a href="#all-topics" class="skip-main">Jump to all topics</a>

  
    <a href="#article__start" class="skip-main">Start reading the article</a>
  

<a href="/articles/" class="skip-main">Jump to list of all articles</a>

<header class="global-header header">
    <div class="logo">
	<a href="/" title="&larr; Back to the homepage">
		<picture>
			<source
				media="(max-width: 1450px)" srcset="/images/logo.svg">
			<source
				media="(min-width: 1450px)"
				srcset="/images/logo--full.svg">
			<img
				src="/images/logo/logo.svg"
				loading="eager" decoding="async"
				alt="Smashing Magazine" />
		</picture>
	</a>
</div>

    <nav class="main-nav">
  <ul class="main-nav__primary">
  









<li class="nav-item nav-item-1 nav-item--active"><a data-instant class="nav-item-link" href="/articles/">Articles</a></li>
<li class="nav-item nav-item-2 "><a data-instant class="nav-item-link" href="/guides/">Guides</a></li>
<li class="nav-item nav-item-3 "><a data-instant class="nav-item-link" href="/printed-books/">Books</a></li>
<li class="nav-item nav-item-4 "><a data-instant class="nav-item-link" href="/events/">Workshops</a></li>
<li class="nav-item nav-item-5 "><a data-instant class="nav-item-link" href="/membership/">Membership</a></li>
<li class="nav-item nav-item-6 "><a data-instant class="nav-item-link" href="/jobs/">Job Board</a></li>
<li class="nav-item nav-item-7 "><a data-instant class="nav-item-link" href="/the-smashing-newsletter/">Newsletter</a></li>

<li class="nav-item nav-item-8"><a class="nav-item-link" href="https://podcast.smashingmagazine.com">Podcasts</a></li>
<li class="nav-item nav-item-9 "><a class="nav-item-link" href="/write-for-us/">Write for us</a></li>
<li class="nav-item nav-item-10"><a class="nav-item-link" href="mailto:advertising@smashingmagazine.com">Advertise with us</a></li>

    <li role="none" class="nav-item main-nav-more-item">
      <button class="main-nav-more-item__button" type="button" aria-haspopup="true" aria-expanded="false">
        <span class="menu-text--lg">More</span>
        <span class="menu-text--lg--close">Less</span>
        <span class="menu-text--sm">Menu</span>
        <span class="menu-text--sm--close">Less</span>
      </button>
    </li>
  </ul>
</nav>
<nav class="secondary-nav">
  <ul class="main-nav__secondary">
    









<li class="nav-item nav-item-1 nav-item--active"><a data-instant class="nav-item-link" href="/articles/">Articles</a></li>
<li class="nav-item nav-item-2 "><a data-instant class="nav-item-link" href="/guides/">Guides</a></li>
<li class="nav-item nav-item-3 "><a data-instant class="nav-item-link" href="/printed-books/">Books</a></li>
<li class="nav-item nav-item-4 "><a data-instant class="nav-item-link" href="/events/">Workshops</a></li>
<li class="nav-item nav-item-5 "><a data-instant class="nav-item-link" href="/membership/">Membership</a></li>
<li class="nav-item nav-item-6 "><a data-instant class="nav-item-link" href="/jobs/">Job Board</a></li>
<li class="nav-item nav-item-7 "><a data-instant class="nav-item-link" href="/the-smashing-newsletter/">Newsletter</a></li>

<li class="nav-item nav-item-8"><a class="nav-item-link" href="https://podcast.smashingmagazine.com">Podcasts</a></li>
<li class="nav-item nav-item-9 "><a class="nav-item-link" href="/write-for-us/">Write for us</a></li>
<li class="nav-item nav-item-10"><a class="nav-item-link" href="mailto:advertising@smashingmagazine.com">Advertise with us</a></li>

  </ul>
</nav>
    <div class="search">
        <form data-handler="Search" id="js-search-form" class="search-form" method="get" action="https://www.google.com/webhp?q=site:smashingmagazine.com">
        <div class="search-input-wrapper">
            <input  class="input search-input" inputmode="search" type="search" name="q" id="js-search-input" autocomplete="off" placeholder="Search articles..." aria-label="Search articles" />
            <input type="hidden" name="sitesearch" value="smashingmagazine.com" />
            <a id="js-search-clear-button" class="search-clear-button" tabindex="-1" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.35 15.36" width="16px" height="16px" tabind="-1">
                    <title>Clear Search</title>
                    <path fill="#e33b2a" d="M8.38 11.41c-.5-.5-.78-.52-1.33 0l-3.05 3.08c-1.18 1.18-1.7 1.18-3-.16s-1.18-2-.18-3l3.18-3.19a.69.69 0 0 0-.07-1.14l-3-3c-1-1-1.13-1.81 0-3s1.9-1.21 3.13 0l2.94 3a.66.66 0 0 0 1.11 0c.63-.65 2.49-2.51 3.28-3.35a1.46 1.46 0 0 1 2.3-.15c.24.24.47.42.89.84.86.86.94 1.57.05 2.46l-3.27 3.26c-.36.34-.52.58-.16.94l3.27 3.27c1.1 1.1 1.23 1.7.05 2.88l-.58.58a1.59 1.59 0 0 1-2.46-.21z" />
                </svg>
            </a>
        </div>
        <input type="submit" class="search-button btn" name="submit" value="Search" id="js-search-submit">
    </form>
</div>

</header>
<script src="/js/nav-v2.js" importance="high" defer></script>
<div>
  <div data-component="SearchResults" class="search-results" data-lite="true"></div>

  
</div>





	<header class="subnav__header" id="all-topics">
		<nav class="subnav" role="navigation">
  <ul class="subnav__primary subnav__tags flex">
  	


	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/accessibility/">Accessibility</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/css/">CSS</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/javascript/">JavaScript</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/react/">React</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/vue/">Vue</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/guides/">Guides</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/ux/">UX</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/design/">Design</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/web-design/">Web Design</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/figma/">Figma</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/wallpapers/">Wallpapers</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/business/">Business</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/career/">Career</a></li>

	



<li class="subnav-item  "><a data-instant class="nav-item-link" href="/category/privacy/">Privacy</a></li>


    <li role="none" class="subnav-item subnav-more-item">
      <a class="subnav-more-item__button" href="/articles/">
        <span class="menu-text">Jump to all articles ↬</span>
      </a>
    </li>
  </ul>
</nav>
	</header>


			
		

    
    <main id="main" tabindex="-1">
      
  
  
  <script id="gotell" type="application/json">
    {"created_at":"2021-04-12T12:30:00Z"}
  </script>

  <div class="hidden"><img src="/images/bullet.svg" alt="" /><img src="/images/icons/tags.svg" alt="" /><img src="/images/icons/published.svg" alt="" /><img src="/images/icons/tweets.svg" alt="" /><img src="/images/icons/author.svg" alt="" /></div>

  <article class="block article" role="main">
    <div class="container article-container">
      <div class="row">

        <div class="col-12 article__content" id="article__content">

          <div class="c-garfield-the-cat ">

            <div class="c-garfield-header">
              
              



<header class="article-header">
  <ul class="article-header--meta">
    
			
			<li class="article-header--meta-item article-header--meta-item__date">
				<span class="article-header--updated">Updated</span>
				<time class="article-header--date" datetime="2021-04-12">
					April 12, 2021
				</time>
				
			</li>
    

    
    <li class="article-header--meta-item">
      <span class="article-header--comments">
        <a href="#comments-complete-guide-html-email-templates-tools">
          <span data-component="CommentsCount" data-insert="true" data-thread="/2021/04/complete-guide-html-email-templates-tools/" data-article="articles/2021-04-12-complete-guide-html-email-templates-tools.md">Leave a comment</span>
        </a>
      </span>
    </li>
    
  </ul>

  <h1 class="article-header--title">A Complete Guide To HTML Email</h1>

  <div data-component="EditButton" data-collection="articles" data-path="articles/2021-04-12-complete-guide-html-email-templates-tools.md"></div>
</header>

            </div>

            <div class="c-garfield-bio mb-5">
              <div class="l-author-bio">

  <div class="mobw-40 mobh-40 w-48 h-48 rounded-3xl bio-image__large mb-5 mr-3">
    
    



<figure role="presentation" class="bio-image ">
  
  <a href="/author/vitaly-friedman/" class="bio-image-link">
  
  <div class="bio-image-wrapper">
		<picture>
			<source type="image/avif" srcset="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGhbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAB6wAAB&#43;YAAgAAAAEAAAHJAAAAIgAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAA12lwcnAAAACxaXBjbwAAABRpc3BlAAAAAAAAASwAAAEsAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAUaXNwZQAAAAAAAAEsAAABLAAAAA5waXhpAAAAAAEIAAAADGF2MUOBDRwAAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAeaXBtYQAAAAAAAAACAAEEAQKDBAACBAUGhwgAAAgQbWRhdBIACgcYIiVyvsQgMhVEhAAAgABQMABAhnR4V5XNzxkXHP0SAAoKGCIlcr7IEBAMIDLVD0SEAQNOMFCJkCBRJcRcDGFX2onIvndQIjjpK9hKlBBvDP30DDeMOztY3vVFGUDC1jPcCB1NdkHhCeil&#43;XI44qzMpFFuwURgk97GJLz1pU08Wt8xtjFU5QdLaa60avqJV3YTa0j/qGm/Ea3t0U2KwzMJury14w5mfkZ5G7ikR0oAMd4F6kaI6iWI1oPeBWDliaSg5sqGXcg/IpusSJxekgio8qMowofx1&#43;&#43;fupz3pWIuLhjmUCpZuPeM&#43;9r&#43;Yx/xj7f7V3yg4pYDioBwrKre0vAcf45eNOjYKRr8C0Mm2ZPL8FDAl6obo9FHzgMkILfC/n05VQJA0nd3jA4SQ0pBtSxcKrFwXZN9c3/E80IkjaZoM/jlnPONTT9YqgIlZ1JoTSvELlOLZW1uEnL9xSDDRLWf6lNrh/uEVgHt&#43;ZWukg1lAI7c&#43;wgcFuFd0yRxS0iQBJh2cdMbFKJKgmpCtbSrsNm&#43;4QcuGqake4o9SAs6PiAG6iJxbt/lF&#43;o7KSyfNcIVjSz4sr049a7dxakdssLh84JNpNxAugBG/Vwb08QZS7bDuGujBcjL/OxDs&#43;b7dTaBi8S1sF2oHbDfCjW23x5WgyZ3IhDsO7fz46w9p/iufxq8zfNgF8IgvzKvuBZHUQ1kuIRFyi6v2QYuy3zUqvJPOIvU5sMIynKwlT/lhyrOH8EuE1Qe7mk94JsruSNE20ra6KlMGnj/eag1Iiat8S22xmD9TXhM7R6SC1H29y1uKlGqgVbgQPYEVhDLLG4uGW2brNOHASrVhCBLKjsj7dZw4m0S2SikJWkT4/QXylA1edGA4i/UpmOTMWQtbPVaQE80PYlN6l12zotQqGBazweYH8jH5lTKvlnHQYLOSgMvgZ7B6LIZD6O06PiwepdDrNOEen8h0XreXhcs8vpUOQhWLYIv&#43;2TgzbFINc3pbvimi/6DeY302ZRIhXlCYaTbpl3koRmXc4LjpuUlZOjo2U84NUKSuiXVSQVUoJvkoDd0ltYD&#43;snfiqEyxOJs8ap5aNmRMRx2ZPyqJ5TtA4dbUsZIVB3cLQJM/It2mzHNH/7AYYPYxpS2fsLwvEw15Ndrcx6sfO9DsWRiWgAJuAnCN5IRml&#43;lGeoUP72r/kq7hu&#43;6vPslYCawkIT/6mhJdww0ORF6JbndIjdxJTya3dHrttmNs8pamNWud8wDuHJ/d5tyjtK2gVoL8tcq/7f4Qxqi8wnAo6lsMr0axd/1CYNll0pSug7wp/tyavJPcGaFgK0xQkrZhA/fUNmI3mkTrN4SaO2d9t385S7TrS1Z19EWx2G5lQoVPki4J3SfDJIRrNV0Kl4c0y7N15aBL5a9wTzDKq03bltIz/CyUWPg4XrZK/M5Dr6BQT81qrkoehNbqDbDdy6buFth5In/Wuh/FZm751Kv4GhnSATwvgcj0Bcw7Qit&#43;2NIL1xGFrfgzlSu40k5zc9rlGYW0jVcyPdFwJsZ5UsL4LAaRJZNW1Ns1dFDoPq2tkV9HS6Fa25zekb2agXz9iTXxEiPsnEcCGY8bPR//v4GCXjzMWcqTIP6UWU4YxLLGfhTYWxxmB6h3PQprBA/CoxB6nToz5M8rCPgE&#43;7MMC4qMbDZizzY8I19s2C306AgTi59KMYjxQxyyjEO9I1KbsgLHOXd7P&#43;7&#43;sA3YsuqT6R7cQD5qN6Vw44VGOV6g/ytDm356RZ1ocH2lLTWBcxBk7fVjCFX5bvWcczygpmxginxc&#43;0Xxn5f8QaH&#43;7Gy7dRCFaRxrcQdJLxq3IBvdhA2GRAszb/9fzF3eq1MGC7EKl88QK4o13RXBLkwVxpJu4s8/LxZcPQ6ZgKmA4aiQxMSlEgHd0SPyiEehlSxeW8&#43;H1iyHmmlQPUuwvXsL&#43;07YThB8&#43;yqoglFjJmc9DkY2vUas9&#43;SnkKao06qOnKwJ5Nhx0xnbfA5yLIGaYkK7bITHIUzm/NGJv7Cy5Xz4Mqsezo1WHbBdSTFicBjUn2fuw1WNc7zAu7uWMyGJIAxo91fb6nGOrGshNL5k5yOjyvi2CY&#43;8MR0ZAtFFeS&#43;0tdsNFin8cq&#43;nEXG2GgxC7Rqre3rOHWqrJgrOtUa/IDvLcCetIejgBaSJnYUPEdlxt71bVoBpRw1cOsIdxjLybHO5YNRvoaecxUka0dPHazBXDqj&#43;SWVyA6J1gUqOhjnbpZ76bf9mQpGKdmT8rvIpC3JbQ2OInf89/a7jxnCEs3gPru0V8Duh0kRvjiX889UishX8GCv6YsqMrRE6HOTA4NVubG76QdIeuOePFhhSpHbbZBUsXLBdA7XDAqx5Xb/FWg6oV&#43;rgpY&#43;So8rXMJSLDJrSzYv6pcCi2BxvoDuos48oPmCtRDzdBCLqTjPWmcKIB/g&#43;ysNV&#43;TclI0DKMf7PmpQgQpsPizHmirgAiYRmr8n1LdLeTUL1AGOFuTD12PdLIjzlXEn9736TxOP37N4ZsyqWUCX/T77LCCw20GS5w0Di2TVdhyEa5v8Bjc4IiUVtaKHTDrwTaVB&#43;QViR5UaNunZtOfBu1gxFG4&#43;pFkClYOUcW/702YjjpQA2XP23bMl95DWobfmCwJerSrVOPw13lDMJNwVaNYIZE2ehussM3UG34RpIEICjc4bpnUdrQsvFzOLDpQ5sHB2&#43;/xs0XTpdS/Du/lJLZ91tGnAaM51V5xo&#43;mypa&#43;DPsa21NwrMdGg=">
			<img
				class="bio-image-image"
					src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c1dda88d-056e-4fdf-9827-76237a824556/vitaly-friedman.jpg"
					loading="eager" decoding="async" width="100" height="100"
					alt="Vitaly Friedman"
				/>
		</picture>
  </div>
  
  </a>
  
</figure>
  </div>

  <div class="l-author-bio-content author__desc" id="author__desc">
    <h3 class="author__desc__title">
    About The Author
    </h3>

    <p>
      
        Vitaly Friedman loves beautiful content and doesn’t like to give in easily. When he is not writing, he&rsquo;s most probably running <a href="https://www.smashingmagazine.com/smashing-workshops/">front-end &amp; UX …</a>
      
      <a href="/author/vitaly-friedman/" class="show-more-link">More about
          
            Vitaly
          ↬</a>
    </p>
  </div>

</div>
            </div>

            <div class="c-garfield-aside--meta">
              
              


<ul class="meta-box meta-box--article">

  
  <li class="meta-box--item meta-box--published">
    15 min read
     </li>



  <li class="meta-box--item meta-box--tags">
    
    
      
        <a href="/category/html-email">HTML Email</a>,
      
    
      
        <a href="/category/generators">Generators</a>,
      
    
      
        <a href="/category/tools">Tools</a>,
      
    
      
        <a href="/category/templates">Templates</a>,
      
    
      
        <a href="/category/guides">Guides</a>,
      
    
      
        <a href="/category/best-practices">Best Practices</a>
      
    
  </li>


<li class="meta-box--item meta-box--author">Saved for offline reading</li>


  <li class="meta-box--item meta-box--share">
    Share on <a href="https://&#084;&#119;&#073;&#116;&#084;&#101;&#082;&#046;&#067;&#111;&#077;/intent/tweet?text=A%20Complete%20Guide%20To%20HTML%20Email&url=https%3A%2F%2Fwww.smashingmagazine.com%2f2021%2f04%2fcomplete-guide-html-email-templates-tools%2f&via=smashingmag">Twitter</a>,&nbsp;<a href="https://cats.smashing.services/ball?uri=//www.linkedin.com/shareArticle?url=https://www.smashingmagazine.com%2f2021%2f04%2fcomplete-guide-html-email-templates-tools%2f&title=A%20Complete%20Guide%20To%20HTML%20Email">LinkedIn</a>

  </li>

</ul>

<div class="btn-wrapper">
<a href="/the-smashing-newsletter/" class="cta--green">Don’t miss the next ones. Subscribe via email.</a>
</div>
            </div>


            

							
							
								
									
								
							
								
									
								
							
								
									
								
							
								
									
								
							
								
							
							

							<div class="c-garfield-native-panel__right">
								
	<div class="c-promo-box c-promo-box--ad sponsors sponsors__native hidden" data-audience="non-subscriber" data-remove="true" data-rendered="true" data-amount="3">
		<ul class="bnnr-list">
			
				
					

					<li>
						<a href="http://bit.ly/progress_sidebar_1">
							
								<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/08512ca9-adc9-49b4-8c01-3422294d415f/kendoui-react-banner.png" loading="lazy" width="300" height="250" alt="Progress KendoReact: Try the KendoReact Grid">
							
						</a>
						<a href="http://bit.ly/progress_sidebar_1">Progress KendoReact: Try the KendoReact Grid</a>
						
					</li>

				
			
		</ul>
	</div>

							</div>
              <div class="c-garfield-native-panel">
                
	<div class="c-promo-box c-promo-box--ad sponsors sponsors__native hidden" data-audience="non-subscriber" data-remove="true" data-rendered="true" data-amount="3">
		<ul class="bnnr-list">
			
				
					

					<li>
						<a href="http://bit.ly/gather_sidebar">
							
								<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6495c76a-f819-42d6-934b-43e6a6174a28/sidebar.jpg" loading="lazy" width="300" height="250" alt="An immersive virtual office for your team">
							
						</a>
						<a href="http://bit.ly/gather_sidebar">An immersive virtual office for your team</a>
						
					</li>

				
			
				
					

					<li>
						<a href="https://bit.ly/2WwkbZT">
							
								<img src="https://res.cloudinary.com/indysigner/image/upload/v1601395101/ads/NWU_Oct.gif" loading="lazy" width="180" height="150" alt="In-demand skills with Northwestern online">
							
						</a>
						<a href="https://bit.ly/2WwkbZT">Build in-demand skills like UX, UI and HCI — Northwestern online MS in Info. Design &amp; Strategy</a>
						
					</li>

				
			
		</ul>
	</div>

              </div>

							<div class="c-garfield-native-panel c-garfield-native-panel__below">
                
	<div class="c-promo-box c-promo-box--ad sponsors sponsors__native hidden" data-audience="non-subscriber" data-remove="true" data-rendered="true" data-amount="3">
		<ul class="bnnr-list">
			
				
					

					<li>
						<a href="https://bit.ly/mailchimp_s2">
							
								<picture>
                  <source type="image/avif" srcset="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3a02705f-d8fb-45c8-b9be-740f4e702274/mc-sm-v2.avif" />
							
								<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c32cd657-1b67-4ea5-85e5-ec661142e675/mc-sm-v2.jpg" loading="lazy" width="300" height="250" alt="Market Smarter">
							
								</picture>
							
						</a>
						<a href="https://bit.ly/mailchimp_s2">Market Smarter</a>
						
							<img class="dot" data-dot="https://ad.doubleclick.net/ddm/trackimp/N1224323.3091281BUYSELLADS/B25600467.307720633;dc_trk_aid=500545936;dc_trk_cid=153687155;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=?" style="display:none;" height="0" width="0" />
						
					</li>

				
			
				
			
		</ul>
	</div>

              </div>

							<div class="c-garfield-native-panel c-garfield-native-panel__end">
                
	<div class="c-promo-box c-promo-box--ad sponsors sponsors__native hidden" data-audience="non-subscriber" data-remove="true" data-rendered="true" data-amount="3">
		<ul class="bnnr-list">
			
				
			
				
			
		</ul>
	</div>

              </div>
            

            <div class="c-garfield-summary" id="article__start">
              <section aria-label="quick summary" class="article__summary">
                
                  In a new short series of posts, we highlight some of the useful tools and techniques for developers and designers. Recently we’ve covered <a href="/2021/03/css-generators/">CSS generators</a>, <a href="/2021/03/svg-generators/">SVG generators</a> and <a href="/2021/03/complete-guide-accessible-front-end-components/">accessible front-end components</a>. This time we look into templates and tools for building and designing HTML emails. <a href="/the-smashing-newsletter/">Don&rsquo;t miss the next one</a>.
                
              </section>
            </div>

            

            
							


<div class="drop-caps" aria-hidden="true">
  <img width="150" height="160" loading="eager" src="/images/drop-caps/T.svg" alt="">
  <img loading="eager" src="/images/drop-caps/character-17.svg" width="113" height="100" alt="">
</div>
						

            

<h4 id="table-of-contents">Table of Contents</h4>

<p>Below you’ll find quick jumps to particular components that you might need. Scroll down for a general overview. Or <a href="#getting-started-with-html-email">skip the table of contents</a>.</p>

<ul class="toc-components">
<li><a href="#accessible-emails">accessibility</a></li>
<li><a href="#a-repository-for-email-bugs">bugs</a></li>
<li><a href="#dark-mode-in-gmail-and-outlook">dark mode</a></li>
<li><a href="#html-email-development-ide">editors and IDEs</a></li>
<li><a href="#html-email-feature-support-can-i-email">feature support</a></li>
<li><a href="#html-email-framework-based-on-tailwind-css">frameworks</a></li>
<li><a href="#getting-started-with-html-email">getting started</a></li>
<li><a href="#everything-html-email-resources">guides and resources</a></li>
<li><a href="#inline-css-and-transform-html-emails">inline CSS</a></li>
<li><a href="#email-inspiration">inspiration</a></li>
<li><a href="#mailto-link-generator">mailto link generator</a></li>
<li><a href="#mailto-selection-prompt">mailto selection prompt</a></li>
<li><a href="#email-marketing-resources">marketing</a></li>
<li><a href="#html-email-languages-and-frameworks">meta-languages</a></li>
<li><a href="#generate-a-full-page-email-preview">previews</a></li>
<li><a href="#making-email-better">productivity</a></li>
<li><a href="#remove-unused-css-from-email-templates">remove unused CSS</a></li>
<li><a href="#cheatsheet-for-targeting-email-clients">target email clients</a></li>
<li><a href="#bulletproof-html-email-templates">templates</a></li>
<li><a href="#mail-tracker-blocker">tracking blocker</a></li>
<li><a href="#inline-css-and-transform-html-emails">transform HTML</a></li>
</ul>

<style type="text/css">#table-of-contents{margin-top: 0;}@media screen and (min-width:800px) {.toc-components{box-shadow: 0 9px 30px -5px rgb(50 50 83 / 25%), 0 8px 8px -12px rgb(0 0 0 / 20%), 0 -6px 16px -6px rgb(0 0 0 / 3%);border-radius: 11px;padding: 2em 3em;background-color: #fff;margin: 1.25em 0 3em 0;columns: 2}}@media screen and (min-width:1100px){.c-garfield-the-cat .c-garfield-native-panel{grid-row:7/9}.c-garfield-native-panel__right{grid-row:7/9}.c-garfield-the-cat .c-garfield-native-panel__below {grid-row: 18/22;}}</style>

<h3 id="getting-started-with-html-email">Getting Started With HTML Email</h3>

<p>If you’re just trying to understand everything that’s happening behind the scenes of a quirky world of HTML email, Caity G. O’Connor has published a wonderful guide on <a href="https://explore.reallygoodemails.com/new-to-email-coding-heres-where-to-start-2494422f0bd4">how to start with email coding</a>. The article features courses, tutorials, articles, and just general guidelines to keep in mind when building and designing emails &mdash; all in a comprehensive one-page-guide. On SmashingMag, Lee Munroe has published a <a href="https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/">detailed guide to building and sending HTML emails</a> as well.</p>














<figure class="
  
  
  ">
  
    <a href="https://www.campaignmonitor.com/dev-resources/guides/coding-html-emails/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="343"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8de6f227-e945-4255-92d2-27d4b7685b10/07-email-article.jpeg"
			
			sizes="100vw"
			alt="How to Code HTML Emails for Any Device"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      If you are new to HTML Email coding, the <a href='https://explore.reallygoodemails.com/new-to-email-coding-heres-where-to-start-2494422f0bd4'>guide by Caity G. O’Connor</a> is a good place to start.
    </figcaption>
  
</figure>

<p>Alternatively, <a href="https://www.campaignmonitor.com/dev-resources/guides/coding-html-emails/">How to Code HTML Emails for Any Device</a> is a very thorough guide on <strong>building a reliable HTML email template</strong>, and how to test it &mdash; along with a hands-on example of building a newsletter template from scratch. In general, that’s a very solid overview of everything you need to know to get started on the right foot.</p>

<p>Jason Rodriguez has a detailed <a href="https://thebetter.email/design/">video course on HTML Email</a> (not free) with pretty much everything to know about them, from accessibility to troubleshooting, workflows and tools.</p>

<p>And if you find yourself struggling with an email issue or just looking out for some help from a community, <a href="https://email.geeks.chat/">#emailgeeks</a> is a great starting point. It’s an invite-only Slack community with plenty of channels to discuss code, design, job openings, events and new tools and resources. You can also find many resources shared with the hashtag <a href="https://twitter.com/hashtag/emailgeeks">#emailgeeks on Twitter</a>.</p>

<h3 id="html-email-languages-and-frameworks">HTML Email Languages and Frameworks</h3>

<p>Coding clean, responsive emails that provide a solid experience in all popular email clients can be a time-consuming challenge. <a href="https://heml.io/">HEML</a> is here to change that. The open-source <strong>markup language</strong> gives you the native power of HTML without having to deal with all of the email quirks. There are no special rules or styling paradigms to master, so if you know HTML and CSS, you are ready to start.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://mjml.io/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="370"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3e77de7a-d688-4b0c-b965-8fa7234b9da5/01-mjml.png"
			
			sizes="100vw"
			alt="MJML"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://mjml.io/'>MJML</a> makes the coding of responsive emails a little bit more convenient.
    </figcaption>
  
</figure>

<p><a href="https://mjml.io/">MJML</a> is based on the same idea of simplifying the process of creating responsive emails. The markup language is based on a <strong>semantic syntax</strong> that makes the process straightforward while an open-source engine does the heavy lifting and translates the MJML you wrote into responsive HTML. You can start out with a <a href="https://mjml.io/getting-started-onboard">step-by-step tutorial through MJML</a>.</p>

<p>A library of standard components saves you extra time and lightens your email codebase. And if you want to build your own, <a href="https://blocksedit.com/email-template-guide/">Modular Template System Guide</a> might help, too.</p>

<p>Speaking of saving time: We all know that HTML email requires tables upon tables to work properly — and how tedious it can be to construct them. That’s where <a href="https://get.foundation/emails/docs/inky.html">Inky</a> comes in. The templating language converts simple HTML tags like <code>&lt;row&gt;</code> and <code>&lt;columns&gt;</code> into complex table HTML so that you don’t need to bother.</p>

<h3 id="html-email-framework-based-on-tailwind-css">HTML Email Framework Based On Tailwind CSS</h3>

<p>Making an HTML email work across email clients ain’t an easy task. Fortunately, there are plenty of reliable tools, templates and frameworks to make it easier to get your work done. For example, <a href="https://maizzle.com/">Maizzle</a> is a framework that helps you quickly build HTML emails with Tailwind CSS and advanced, <strong>email-specific post-processing</strong>. It also provides a few ready-made projects (<a href="https://maizzle.com/starters/">Maizzle Starters</a>) that you can start with right away.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://maizzle.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="304"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/2f5ac31a-d009-415e-b2e3-ac7465c22ac6/08-maizzle.png"
			
			sizes="100vw"
			alt="BYOHTML coding with Maizzle"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      An explanation of how Maizzle users ‘bring their own HTML’. (Image source: <a href='https://maizzle.com/'>Maizzle</a>
    </figcaption>
  
</figure>

<p><a href="https://maizzle.com/">Maizzle</a> uses the Tailwind CSS framework to enable designers and developers to easily prototype emails with HTML and CSS. It also comes with beautiful templates if you’d rather not develop every email from scratch. Alternatively, you might want to consider <a href="https://mjml.io/">MJML</a> as well.</p>

<h3 id="html-email-framework-based-on-sass">HTML Email Framework Based On Sass</h3>

<p><a href="https://get.foundation/emails.html">Foundation for Emails</a> helps you craft responsive HTML emails that play well with all major email clients, even Outlook. A grid-based approach ensures your email works on any device, UI patterns and a CSS inliner get the email into shape quickly, and Sass gives you control over common styles. No matter what you’re building, a selection of <a href="https://get.foundation/emails/email-templates.html">responsive templates</a> for anything from transactional emails to drip campaigns and newsletters saves you time that you can spend on your copy or conversion funnels instead.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://get.foundation/emails.html">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="473"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/43b16188-287b-4c80-ac52-4f9cd480c081/foundation-for-email-opt.png"
			
			sizes="100vw"
			alt="Foundation for Emails"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://get.foundation/emails.html'>Foundation for Emails</a> can be used with plain CSS or Sass, whatever you prefer.
    </figcaption>
  
</figure>

<h3 id="bulletproof-html-email-templates">Bulletproof HTML Email Templates</h3>

<p><a href="https://tedgoas.github.io/Cerberus/">Cerberus</a> and <a href="https://htmlemail.io/">HTML Email</a> provide small collections of <strong>reliable, solid templates</strong> for responsive HTML emails that are well-tested in 50+ email clients, including Gmail, Outlook, Yahoo, AOL, and many others. <a href="https://emailframe.work/">EmailFrame.work</a> allows you to build responsive HTML email templates with pre-built grid options and basic components, supported in over 60+ email clients.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://codedmails.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="330"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f3fd74d8-9d95-4cea-a834-ab35c8acacb9/27-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Codedmails"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://codedmails.com'>Codedmails</a> includes 60 email templates and themes, all written in MJML, and tested for compatibility.
    </figcaption>
  
</figure>

<p><a href="https://codedmails.com/">Codedmails</a> includes 60 email templates and themes, all written in MJML, and tested for compatibility. The <a href="https://github.com/hunzaboy/CodedMailsFree">code is all available on Github,</a> and the templates are free to use for non-commercial projects, while MJML source files are provided for an extra charge.</p>

<p><a href="https://stripo.email/templates/">Stripo</a>, <a href="https://chamaileon.io/">Chamaileon</a>, <a href="https://designmodo.com/postcards/">Postcards</a>, <a href="https://topol.io/">Topol.io</a>, <a href="https://www.goodemailcode.com/">GoodEmailCode</a>, <a href="https://pixelbuddha.net/html">Pixelbuddha</a> and <a href="https://beefree.io/">Bee Free</a> all feature plenty of free HTML email templates, Litmus provides <a href="https://litmus.com/resources/free-responsive-email-templates">Responsive Email Templates</a> for newsletters, product updates and receipts, and CampaignMonitor has a <a href="https://www.campaignmonitor.com/email-templates/">free HTML email template builder</a> with drag’n’drop functionality. Another drag-and-drop editor worth considering is <a href="https://unlayer.com/">Unlayer</a>. It helps you create mobile-ready HTML email templates with just a few clicks — no coding involved.</p>

<h3 id="html-email-feature-support-can-i-email">HTML Email Feature Support: Can I Email&hellip;?</h3>

<p>A handy tool that belongs in everyone’s toolset who finds themselves wrangling HTML email &mdash; be it every now and then or regularly &mdash; is <a href="https://www.caniemail.com/">caniemail.com</a>. Inspired by the successful concept of <a href="http://caniuse.com/">caniuse.com</a>, <em>Can I email</em> lets you check support for 179 HTML and CSS features across 31 email clients.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://www.caniemail.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="414"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cbcb60-d754-4ab6-bf68-3cc51e265618/02-nth-last-child.png"
			
			sizes="100vw"
			alt="Can I Email..."
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Can I email highlights web features and their support in HTML email clients.
    </figcaption>
  
</figure>

<p>You can enter a feature to see <strong>how well it is supported</strong>, check the feature index, compare email clients, or view an email client support scoreboard that ranks email clients based on their support. The complete data is also available as a JSON file.</p>

<h3 id="a-repository-for-email-bugs">A Repository For Email Bugs</h3>

<p>Apple Mail not showing embedded SVGs, Gmail not displaying emails at full width, Outlook changing the behavior of animated Gifs &mdash; we all know how weirdly email clients sometimes behave.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://github.com/hteumeuleu/email-bugs">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="381"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b2d6a864-8d1f-47a4-ace3-d22cb887d917/03-email-bugs.png"
			
			sizes="100vw"
			alt="Email Bugs"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Meet Email Bugs, a growing repository of, well, email bugs.
    </figcaption>
  
</figure>

<p>To help you understand what’s going on when you come across bugs like these, Rémi Parmentier maintains <a href="https://github.com/hteumeuleu/email-bugs">Email Bugs</a>, a GitHub repository for <strong>weird email client behaviors</strong>. It not only makes the life of email designers easier by providing a place to discuss bugs but also tries to reporting each bug to the concerned company and fix them for good. But just in case it&rsquo;s not possible, <a href="https://howtotarget.email/">How to Target Email Clients</a> provides an overview of workarounds to target specific email clients.</p>

<h3 id="mailto-link-generator">Mailto Link Generator</h3>

<p>Good old HTML links can do more than what we usually give them credit for. We might be used to <code>mailto:</code> prefix, but actually <strong>generating the code</strong> can be quite annoying. <a href="https://mailtolink.me/">Mailtolink.me</a> does one thing, and it does it well: it generates the snippet for the <code>mailto</code> links including CC, BCC, subject line and body text.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://mailtolink.me/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="425"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/53cfbbcf-fbe1-423f-bc14-7209237cc8e0/9-html-email-templates-resources.jpeg"
			
			sizes="100vw"
			alt="Mailto Link Generator"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      A simple doing done one task well: Mailto Link Generator takes good care of mailto: links.
    </figcaption>
  
</figure>

<h3 id="mailto-selection-prompt">Mailto Selection Prompt</h3>

<p>Sometimes when you click on an email address, it might open an application that your customers aren’t really using. That’s why it’s common to copy-paste email addresses instead of clicking on the links directly. To avoid frustration on the other end, we can use <a href="https://mailgo.dev/">Mailgo</a> and <a href="https://mailtoui.com/">MailtoUI</a>.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://mailgo.dev/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="591"
			height="455"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a10d6789-0e74-4210-ac91-b2f3be7a9a50/10-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Mailgo"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://mailgo.dev'>Mailgo</a> opens a prompt to allow customers to send email in their favorite client, or just copy the email address.
    </figcaption>
  
</figure>

<p>Instead of opening a native email client, both tools <strong>prompt a modal window</strong>, allowing the user to choose one of the preferred services, or copy-paste the link. Additionally, Mailgo can address all  <code>tel</code> links as well, allowing them to open Telegram, WhatsApp, Skype, call as default or copy the phone number &mdash; and it supports dark mode, too.</p>

<div class="sponsors__lead-place"></div>




<h3 id="email-inspiration">Email Inspiration</h3>

<p>It might seem like just because HTML email feels quite ancient and outdated, so are possibilities of what we can do with HTML email. However, <a href="https://airtable.com/shrJxffTnSHSdIwqN/tbltBA3AOkEaVg8wO">there are plenty of resources</a>, blogs and podcasts featuring new email techniques &mdash; some of them often being on the very creative side of things!</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://emaillove.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="343"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8455a787-e51a-4e82-b3ef-aaed1dc8eed6/12-html-email-templates-resources.png"
			
			sizes="100vw"
			alt=""
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      There is no shortage in HTML email showcases out there: <a href='https://emaillove.com'>Email Love</a> highlights thousands of them.
    </figcaption>
  
</figure>

<p><a href="https://www.litmus.com/blog/">Litmus Blog</a>, <a href="https://www.campaignmonitor.com/blog/">CampaignMonitor blog</a> and <a href="https://htmlemail.io/blog/">HTML Email</a> feature plenty of articles and podcasts with best practices, tips, resources, and even podcasts on HTML email. And if you need a bit of inspiration for recent emails, sorted by industry, <a href="https://reallygoodemails.com/">Really Good Emails</a> and <a href="https://emaillove.com/">EmailLove</a> have got your back, too.</p>

<ul>
<li>You don’t need to comb through your own email inbox to find HTML email design inspiration. <a href="https://emaillove.com/">Email Love</a> has rounded up a fantastic selection of inspiring emails from top companies.</li>
<li><a href="https://reallygoodemails.com/">Really Good Emails</a> makes it easy to search for HTML email inspiration. You have the choice of exploring the collection chronologically or you can narrow down the results based on what type of email it is (e.g. coupon, free trial), what the goal is (e.g. customer rewards, thank you), the company name or category and so on.</li>
<li>Not enough? There is also <a href="http://htmlemaildesigns.com/">HTML Email Designs</a> and <a href="http://htmlemailgallery.com/">HTML Email Gallery</a>.</li>
</ul>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://reallygoodemails.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="369"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b045b179-dac4-4d32-989d-176c876921e9/13-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Really Good Emails"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://reallygoodemails.com/'>Really Good Emails</a> enables users to filter through over 7000  designs.
    </figcaption>
  
</figure>

<h3 id="accessible-emails">Accessible Emails</h3>

<p>With email, where do we stand in terms of <em>accessibility</em>? Do we announce emails properly to screen readers? What about dark mode? <a href="https://github.com/wilbertheinen/accessible-email-documentation">Accessible Email repo</a> highlights a number of articles, tools, presentations and resources about accessibility &mdash; not only for email, but most specifically for it.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://github.com/wilbertheinen/accessible-email-documentation">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="525"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c0a9f856-8785-4213-b9ca-5ee25adf7132/14-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Accessible Email repo"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://github.com/wilbertheinen/accessible-email-documentation'>Accessible Email Repository</a> provides hundreds of resources and tools to test and improve the accessibility of your emails.
    </figcaption>
  
</figure>

<p>With <a href="https://www.accessible-email.org/">Accessible-Email.org</a>, you can analyze sent campaigns and check for accessibility improvements. With <a href="https://proofjump.com/dark-mode-simulator/">Dark Mode for Email Simulator</a>, you can check how your email looks like in dark mode.</p>

<h3 id="inline-css-and-transform-html-emails">Inline CSS and Transform HTML Emails</h3>

<p>If all you need is a clean space to transform your HTML and CSS, <a href="https://alter.email/">Alter.Email</a> is a reliable option. With the tool, you can choose a few “transformers” &mdash; e.g. <strong>inline CSS and clean up the code</strong>, remove unused CSS, as well as format HTML and even prevent widow words. Alternatively, you can also use <a href="https://app.postdrop.io/">Postdrop</a> which also allows you to minify and inline CSS and send a test email as well.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://alter.email/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="409"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/44bcbac0-67bb-4405-9f28-f4102877c4bd/16-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Alter.Email"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      A fantastic email tool when you need that level of details: <a href='https://alter.email/'>Alter.Email</a> allow you to change HTML on the fly. (Image source: <a href='https://alter.email/'>Alter.Email</a>)
    </figcaption>
  
</figure>

<h3 id="remove-unused-css-from-email-templates">Remove Unused CSS From Email Templates</h3>

<p>Writing CSS isn’t a particularly exciting task with HTML Email, scattered with <code>!important</code>  and inline styles all over the place. To <strong>remove unused CSS</strong> from email templates, there’s <a href="https://emailcomb.com/">Email Comb</a>. The tool allows you to add classes and IDs you&rsquo;d like to ignore, choose if you&rsquo;d like to minify it and remove comments, and it shows what exactly it has removed.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://emailcomb.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="800"
			height="434"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3f70746-f835-4521-95ac-2c74ee9262c7/17-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Email Comb"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Cleaning up your HTML email: <a href='https://emailcomb.com/'>Email Comb</a> removes what you don’t need, but you can add classes to ignore.
    </figcaption>
  
</figure>

<h3 id="cheatsheet-for-targeting-email-clients">Cheatsheet For Targeting Email Clients</h3>

<p>Email clients modify and remove some of your HTML and CSS, often mercilessly. If one of the email clients doesn’t behave quite as expected, you might want to treat it separately. A <a href="https://howtotarget.email/">cheatsheet for targeting email clients</a> allows you to pick a <strong>target email client</strong> and at least attempt to address it directly. It might not work all the time as email clients change all the time, but it’s something that’s worth giving a try.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://howtotarget.email/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="800"
			height="392"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/365b48b8-7c25-4a07-a0db-f822cb913a84/28-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="How To Target Email Clients"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Just in case you really need it: <a href='https://howtotarget.email/'>targeting email clients</a> with hacky CSS selectors.
    </figcaption>
  
</figure>

<h3 id="everything-html-email-resources">Everything HTML Email Resources</h3>

<p><a href="https://thebetter.email/resources/">Thebetter.email</a> provides a growing repository of useful email marketing resources, including people, learning sites, tools, details about email service providers, newsletters, code and interactive email resources. Hand-picked by Jason Rodriguez who’s been in the industry for years and has spent a lot of that time wading through the muck to find the good stuff.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://thebetter.email/resources/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="800"
			height="460"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01f74e00-cb23-4c2f-bde4-6a6c7976f2f1/20-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Thebetter.email"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Everything from templates to marketing resources on <a href='https://thebetter.email/resources/'>TheBetter.email</a>.
    </figcaption>
  
</figure>

<h3 id="email-marketing-resources">Email Marketing Resources</h3>

<p>If you need to dive deep into the trenches of HTML email, best practices and email marketing, <a href="https://www.campaignmonitor.com/resources/guides/">CampaignMonitor Guides</a> and <a href="https://mailchimp.com/help/">Mailchimp Guides</a> have plenty of resources to get started. Indeed, some of them will be product-specific, but they&rsquo;re also more general guides around best practices for sending emails, design guides, delivery tips, anti-spam requirements and plenty of other topics along these lines.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://blogs.oracle.com/marketingcloud/the-biggest-shifts-in-email-marketing-trends-for-2021-webinar">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="466"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/62bfceeb-54b6-4a72-814a-f3ed2bd9c981/23-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Oracle Email Marketing Trends"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Thorough guides around building and marketing for email, as well as <a href='https://blogs.oracle.com/marketingcloud/the-biggest-shifts-in-email-marketing-trends-for-2021-webinar'>email marketing trends</a>, by Oracle. 
    </figcaption>
  
</figure>

<p>And if you are looking for ongoing trends in email marketing, <a href="https://blogs.oracle.com/marketingcloud/the-biggest-shifts-in-email-marketing-trends-for-2021-webinar">Oracle’s Email Marketing Trends</a> includes plenty of videos around email deliverability, modular email architecture, email accessibility and also email marketing.</p>

<div class="sponsors__lead-place"></div>




<h3 id="dark-mode-in-gmail-and-outlook">Dark Mode In Gmail And Outlook</h3>

<p>We’ve all got used to the dark mode in many apps and websites out there, but what about dark mode support in HTML email clients? We could, of course, serve the same email to all subscribers, but if you are used to dark mode on your operating system, a bright email might rather be offputting and <strong>encourage abandonment</strong>.</p>

<p><a href="https://www.campaignmonitor.com/resources/guides/dark-mode-in-email/">The Developer’s Guide to Dark Mode in Email</a> highlights some of the important guidelines to keep in mind when you are building a dark mode version of your HTML email. It explains how to target dark mode, how to deal with images and general browser support (which is pretty good!).</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://www.campaignmonitor.com/resources/guides/dark-mode-in-email/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="475"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c4bd3ba1-c705-4040-8321-c5c12a8d7d5c/25-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="The Developer’s Guide to Dark Mode in Email"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      <a href='https://www.campaignmonitor.com/resources/guides/dark-mode-in-email/'>The Developer’s Guide to Dark Mode in Email</a>: thorough and comprehensive.
    </figcaption>
  
</figure>

<p>Rémi Parmentier goes a little bit deeper, showing how to <a href="https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/">fix Gmail’s dark mode issues with CSS Blend Modes</a>. Gmail enforces a change of any light text color to dark text color. If you need to fix it, Rémi has come up with a creative use of <code>mix-blend-mode</code> (supported in Gmail) to maintain the light text color if you need to. And if you need to ensure that your emails respond to <strong>Outlook.com</strong>’s dark mode, Remi has got you <a href="https://www.hteumeuleu.com/2021/emails-react-outlook-com-dark-mode/">covered</a>, too.</p>














<figure class="
  
  
  ">
  
    <a href="https://www.hteumeuleu.com/2021/emails-react-outlook-com-dark-mode/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="750"
			height="1334"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6aff2d9d-391c-4232-9e87-d28fe632a0ff/24-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Fixing Dark Mode in HTML emails"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Fixing Dark Mode in HTML emails: Rémi Parmentier get creative to <a href='https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/'>fix Gmail’s dark mode issues with CSS Blend Modes</a>.
    </figcaption>
  
</figure>

<h3 id="html-email-development-ide">HTML Email Development IDE</h3>

<p>If you spend quite a bit of time with HTML email, you might want to use a dedicated HTML Email editor. <a href="https://useparcel.com/">Parcel</a> is just that: a <strong>code editor</strong> built specifically for coding and designing emails. It provides live previews, so you can see in real-time what you are building, and it also has accessibility features out of the box, so you can check accessibility issues while you are building or designing the email. Plus, the tool also allows you to collaborate with your team and run email tests directly from the tool.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://useparcel.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="367"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/dd45784e-bb81-4410-af77-348edd0952c5/15-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Parcel"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      HTML Emails can be messy and difficult to build and maintain. HTML Email IDEs such as <a href='https://useparcel.com/'>Parcel</a> help you keep it all in order. (Image source: <a href='https://useparcel.com/'>Parcel</a>)
    </figcaption>
  
</figure>

<p>Alternatively, you can also take a look at <a href="https://mailstudio.app/">Mail Studio</a>, a sophisticated desktop application (for Windows, macOS and Linux) that combines visual and <strong>code editing in one email IDE</strong>.</p>

<p>The app comes with a library of components, from headings to navbars and accordions, a couple of responsive email templates, Google Fonts integrations, built-in Sass support, command palette, collaboration tools, email previews and even <strong>integration with email service providers</strong> such like MailChimp, Campaign Monitor and Sendgrid. Figma integration is supposed to be coming soon.</p>

<h3 id="generate-a-full-page-email-preview">Generate A Full-Page Email Preview</h3>

<p>If you need a full-page preview of your HTML Email, <a href="https://emailpreview.io/">Emailpreview.io</a> might be just what you need. You can copy/paste HTML, or <strong>import an EML file</strong> that you’ve just received, and the tool outputs a fully rendered image of your email. You can choose the device width as well. A helpful little tool to keep nearby.</p>














<figure class="
  
  
  ">
  
    <a href="https://emailpreview.io/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="720"
			height="520"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9213738f-bbc8-49f5-a583-c0a5375885bc/26-html-email-templates-resources.png"
			
			sizes="100vw"
			alt="Emailpreview.io"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      Quick and easy: <a href='https://emailpreview.io/'>Emailpreview.io</a> generates a full-page preview of your emails.
    </figcaption>
  
</figure>

<h3 id="mail-tracker-blocker">Mail Tracker Blocker</h3>

<p>Most marketing emails include trackers in HTML email, so they can track how often, when and where customers open emails. <a href="https://github.com/apparition47/MailTrackerBlocker">MailTrackerBlocker</a> acts pretty much as an ad-blocker for browsers, but works with email clients. The tool labels who is tracking customers and removes tracking pixels before they can be displayed, so you can still load all remote content and keep your behavior private. Currently only available for Apple Mail on macOS 10.11 - 11.x (<em>shoutout to Jeremy Keith!</em>).</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://github.com/apparition47/MailTrackerBlocker">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="341"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/95ee11c2-13dc-40d2-93f0-37e56d303363/28-html-email-templates-resources.jpeg"
			
			sizes="100vw"
			alt="MailTrackerBlocker"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      You can use an ad-blocker to block third-party tracking, and for Apple Mail ther eis also MailTrackerBlocker to block tracking pixels in emails.
    </figcaption>
  
</figure>

<h3 id="making-email-better">Making Email Better</h3>

<p>Overflowing inboxes, spam with backlink requests, people emailing you on a Friday afternoon and following up on Monday morning &mdash; there are a lot of things that make dealing with email unpleasant. However, since there is no getting around email, there’s only one solution: Let’s improve the situation together. With that in mind, Chris Coyier is running “<a href="https://email-is-good.com/">Email is Good</a>”, a site about <strong>email productivity</strong>.</p>














<figure class="
  
    break-out article__image
  
  
  ">
  
    <a href="https://email-is-good.com/">
    
    <img
      loading="lazy"
      decoding="async"
      importance="low"
			width="700"
			height="368"
			
			srcset="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png 400w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_800/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png 800w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1200/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png 1200w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png 1600w,
			        https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png 2000w"
			src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/456b5827-5001-4498-a13e-3a261045552c/06-email-is-good.png"
			
			sizes="100vw"
			alt="Email Is Good"
		/>
    
    </a>
  

  
    <figcaption class="op-vertical-bottom">
      A fantastic little resource around email productivity. Emails might be difficult to code, but they aren’t inherently bad. 
    </figcaption>
  
</figure>

<p>“Email is Good” takes a look at things that make emails annoying, <strong>tips and ideas</strong> on how we can do better, as well as little anecdotes that everyone can relate to. A great opportunity to reflect on how each one of us deals with email and the reactions that our email habits might provoke on the recipient’s side.</p>

<h3 id="wrapping-up">Wrapping Up</h3>

<p>We probably have missed some important and valuable techniques and resources! So please leave a comment and refer to them &mdash; we’d love to update this post and keep it up-to-date for us all to be able to get back to it and build HTML email better and faster.</p>

<p><em>Stay smashing!</em></p>

<h4 id="further-reading">Further Reading</h4>

<ul>
<li><a href="https://www.smashingmagazine.com/2021/03/css-auditing-tools/">CSS Auditing Tools</a></li>
<li><a href="https://www.smashingmagazine.com/2021/03/css-generators/">CSS Generators</a></li>
<li><a href="https://www.smashingmagazine.com/2021/03/svg-generators/">SVG Generators</a></li>
<li><a href="https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/">An Introduction To Building And Sending HTML Email For Web Developers</a></li>
<li>Also, <a href="https://www.smashingmagazine.com/the-smashing-newsletter/">subscribe to our newsletter</a> to not miss the next ones.</li>
</ul>

<div class="signature">
  <img src="https://www.smashingmagazine.com/images/logo/logo--red.png" alt="Smashing Editorial" width="35" height="46" loading="lazy" decoding="async" />
  <span>(il)</span>
</div>



						
							<div class="category__related--alt ib">
								<span class="italic grey mrs">Explore more on</span>
								<nav class="subnav ib" role="navigation">
									<ul class="subnav__primary subnav__subtags flex flex-wrap">
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/html-email">HTML Email</a></li>
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/generators">Generators</a></li>
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/tools">Tools</a></li>
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/templates">Templates</a></li>
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/guides">Guides</a></li>
									
											<li class="subnav-item subnav-item--green"><a class="nav-item-link" href="/category/best-practices">Best Practices</a></li>
									
									</ul>
								</nav>
							</div>
      			

          </div>

        </div>

      </div>


      <style>
      
      hr{
        box-sizing:content-box;
        overflow:visible;
        height:4px;
        border-radius:11px;
        background:#d33a2c;
        margin:3em 0
    }
    a:active,a:hover{
        outline-width:0
    }
    abbr[title]{
        border-bottom:none;
        text-decoration:underline dotted
    }
    b,strong{
        font-weight:bolder;
        letter-spacing:0
    }
    dfn{
        font-style:italic
    }
    mark{
        background-color:#ff0;
        color:#000
    }
    small{
        font-size:80%
    }
    sub,sup{
        font-size:75%;
        line-height:0;
        position:relative;
        vertical-align:baseline
    }
    sub{
        bottom:-.25em
    }
    sup{
        top:-.5em
    }
    audio,video{
        display:inline-block
    }
    audio:not([controls]){
        display:none;
        height:0
    }
    button,optgroup,select,textarea{
        font:inherit;
        margin:0
    }
    optgroup{
        font-weight:700
    }
    button,select{
        text-transform:none
    }
    [type=reset],[type=submit],button,html [type=button]{
        -webkit-appearance:button
    }
    [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{
        border-style:none;
        padding:0
    }
    [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{
        outline:1px dotted ButtonText
    }
    fieldset{
        border:1px solid silver;
        margin:0 2px;
        padding:.35em .625em .75em
    }
    legend{
        box-sizing:border-box;
        color:inherit;
        display:table;
        max-width:100%;
        padding:0;
        white-space:normal
    }
    progress{
        display:inline-block;
        vertical-align:baseline
    }
    [type=checkbox],[type=radio]{
        box-sizing:border-box;
        padding:0
    }
    [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{
        height:auto
    }
    ::-webkit-file-upload-button{
        -webkit-appearance:button;
        font:inherit
    }
    details,menu{
        display:block
    }
    summary{
        display:list-item
    }
    canvas{
        display:inline-block
    }
    template{
        display:none
    }
    [hidden]{
        display:none
    }
    .nowrap{
        white-space:nowrap
    }
    .nowrap:after,.nowrap:before{
        content:" ";
        display:table;
        clear:both
    }
    .btn .sr-only,.sr-only{
        position:absolute;
        display:inline-block;
        height:0;
        width:0;
        line-height:0;
        overflow:hidden
    }
    .green,.highlight,.success{
        color:#41b14f
    }
    .error,.red{
        color:#d33a2c
    }
    .darker-red{
        color:#61140f
    }
    .darkest-red{
        color:#390c09
    }
    .black{
        color:#000
    }
    .bold{
        font-weight:700
    }
    .in-progress,.orange,.pending{
        color:#f88040!important
    }
    .light-grey{
        color:#767676!important
    }
    .grey,.grey a{
        color:#666!important
    }
    .white{
        color:#fff!important
    }
    .display-block{
        display:block!important
    }
    .bg--grey{
        background-color:#f6f6f6
    }
    .bg--dark-grey{
        background-color:#666
    }
    .bg--red{
        background-color:#d33a2c
    }
    .bg--navy{
        background-color:#282634
    }
    .bg--green{
        background-color:#41b14f
    }
    .bg--light-green{
        background-color:#e3f5e5!important
    }
    .bg--light-red{
        background-color:#fbebea!important
    }
    .bg--dark-red{
        background-color:#811d15
    }
    .small{
        font-size:.8em!important
    }
    .smaller{
        font-size:.7em!important
    }
    .larger{
        font-size:1.2em!important
    }
    .padding-bottom{
        padding-bottom:4vh
    }
    .italic{
        font-style:italic!important
    }
    .thin{
        font-weight:400!important
    }
    .center{
        text-align:center!important
    }
    .elena{
        font-family:-apple-system,BlinkMacSystemFont,Roboto,Roboto Slab,Droid Serif,Segoe UI,system-ui,Arial,sans-serif
    }
    .mija{
        font-family:-apple-system,BlinkMacSystemFont,Roboto,Roboto Slab,Droid Serif,Segoe UI,system-ui,Arial,sans-serif
    }
    .mt-0{
        margin-top:0!important
    }
    .mb-0{
        margin-bottom:0!important
    }
    .margin-center{
        margin:0 auto!important
    }
    .sticky{
        position:fixed;
        left:0;
        top:0;
        right:0;
        z-index:10;
        box-shadow:0 5px 10px rgba(0,0,0,.2)
    }
    .enhanced .no-js-only,.js .no-js-only{
        display:none
    }
    .text-shadow{
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    .container-fluid{
        padding-right:8rem;
        padding-left:8rem
    }
    .row.reverse{
        flex-direction:row-reverse
    }
    .col.reverse{
        flex-direction:column-reverse
    }
    .lg-hidden,.md-hidden,.sm-hidden,.xs-hidden{
        display:none
    }
    @media (min-width:48em){
        .xs-hidden{
            display:block
        }
    }
    @media (min-width:64em){
        .sm-hidden{
            display:block
        }
    }
    @media (min-width:64em){
        .md-hidden{
            display:block
        }
    }
    @media (min-width:75em){
        .lg-hidden{
            display:block
        }
    }
    .col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-offset-0,.col-xs-offset-1,.col-xs-offset-10,.col-xs-offset-11,.col-xs-offset-12,.col-xs-offset-2,.col-xs-offset-3,.col-xs-offset-4,.col-xs-offset-5,.col-xs-offset-6,.col-xs-offset-7,.col-xs-offset-8,.col-xs-offset-9,[class*=col-]{
        box-sizing:border-box;
        flex:0 0 auto;
        padding-right:1rem;
        padding-left:1rem
    }
    .col-xs{
        flex-grow:1;
        flex-basis:0;
        max-width:100%
    }
    .col-xs-1{
        flex-basis:8.33333333%;
        max-width:8.33333333%
    }
    .col-xs-2{
        flex-basis:16.66666667%;
        max-width:16.66666667%
    }
    .col-xs-3{
        flex-basis:25%;
        max-width:25%
    }
    .col-xs-4{
        flex-basis:33.33333333%;
        max-width:33.33333333%
    }
    .col-xs-5{
        flex-basis:41.66666667%;
        max-width:41.66666667%
    }
    .col-xs-6{
        flex-basis:50%;
        max-width:50%
    }
    .col-xs-7{
        flex-basis:58.33333333%;
        max-width:58.33333333%
    }
    .col-xs-8{
        flex-basis:66.66666667%;
        max-width:66.66666667%
    }
    .col-xs-9{
        flex-basis:75%;
        max-width:75%
    }
    .col-xs-10{
        flex-basis:83.33333333%;
        max-width:83.33333333%
    }
    .col-xs-11{
        flex-basis:91.66666667%;
        max-width:91.66666667%
    }
    .col-xs-12{
        flex-basis:100%;
        max-width:100%
    }
    .col-xs-offset-0{
        margin-left:0
    }
    .col-xs-offset-1{
        margin-left:8.33333333%
    }
    .col-xs-offset-2{
        margin-left:16.66666667%
    }
    .col-xs-offset-3{
        margin-left:25%
    }
    .col-xs-offset-4{
        margin-left:33.33333333%
    }
    .col-xs-offset-5{
        margin-left:41.66666667%
    }
    .col-xs-offset-6{
        margin-left:50%
    }
    .col-xs-offset-7{
        margin-left:58.33333333%
    }
    .col-xs-offset-8{
        margin-left:66.66666667%
    }
    .col-xs-offset-9{
        margin-left:75%
    }
    .col-xs-offset-10{
        margin-left:83.33333333%
    }
    .col-xs-offset-11{
        margin-left:91.66666667%
    }
    .start-xs{
        justify-content:flex-start;
        text-align:start
    }
    .center-xs{
        justify-content:center;
        text-align:center
    }
    .end-xs{
        justify-content:flex-end
    }
    .top-xs{
        align-items:flex-start
    }
    .middle-xs{
        align-items:center
    }
    .bottom-xs{
        align-items:flex-end
    }
    .around-xs{
        justify-content:space-around
    }
    .between-xs{
        justify-content:space-between
    }
    .first-xs{
        order:-1
    }
    .last-xs{
        order:1
    }
    @media (min-width:48em){
        .col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-offset-0,.col-sm-offset-1,.col-sm-offset-10,.col-sm-offset-11,.col-sm-offset-12,.col-sm-offset-2,.col-sm-offset-3,.col-sm-offset-4,.col-sm-offset-5,.col-sm-offset-6,.col-sm-offset-7,.col-sm-offset-8,.col-sm-offset-9{
            box-sizing:border-box;
            flex:0 0 auto;
            padding-right:1rem;
            padding-left:1rem
        }
        .col-sm{
            flex-grow:1;
            flex-basis:0;
            max-width:100%
        }
        .col-sm-1{
            flex-basis:8.33333333%;
            max-width:8.33333333%
        }
        .col-sm-2{
            flex-basis:16.66666667%;
            max-width:16.66666667%
        }
        .col-sm-3{
            flex-basis:25%;
            max-width:25%
        }
        .col-sm-4{
            flex-basis:33.33333333%;
            max-width:33.33333333%
        }
        .col-sm-5{
            flex-basis:41.66666667%;
            max-width:41.66666667%
        }
        .col-sm-6{
            flex-basis:50%;
            max-width:50%
        }
        .col-sm-7{
            flex-basis:58.33333333%;
            max-width:58.33333333%
        }
        .col-sm-8{
            flex-basis:66.66666667%;
            max-width:66.66666667%
        }
        .col-sm-9{
            flex-basis:75%;
            max-width:75%
        }
        .col-sm-10{
            flex-basis:83.33333333%;
            max-width:83.33333333%
        }
        .col-sm-11{
            flex-basis:91.66666667%;
            max-width:91.66666667%
        }
        .col-sm-12{
            flex-basis:100%;
            max-width:100%
        }
        .col-sm-offset-0{
            margin-left:0
        }
        .col-sm-offset-1{
            margin-left:8.33333333%
        }
        .col-sm-offset-2{
            margin-left:16.66666667%
        }
        .col-sm-offset-3{
            margin-left:25%
        }
        .col-sm-offset-4{
            margin-left:33.33333333%
        }
        .col-sm-offset-5{
            margin-left:41.66666667%
        }
        .col-sm-offset-6{
            margin-left:50%
        }
        .col-sm-offset-7{
            margin-left:58.33333333%
        }
        .col-sm-offset-8{
            margin-left:66.66666667%
        }
        .col-sm-offset-9{
            margin-left:75%
        }
        .col-sm-offset-10{
            margin-left:83.33333333%
        }
        .col-sm-offset-11{
            margin-left:91.66666667%
        }
        .start-sm{
            justify-content:flex-start;
            text-align:start
        }
        .center-sm{
            justify-content:center;
            text-align:center
        }
        .end-sm{
            justify-content:flex-end
        }
        .top-sm{
            align-items:flex-start
        }
        .middle-sm{
            align-items:center
        }
        .bottom-sm{
            align-items:flex-end
        }
        .around-sm{
            justify-content:space-around
        }
        .between-sm{
            justify-content:space-between
        }
        .first-sm{
            order:-1
        }
        .last-sm{
            order:1
        }
    }
    @media (min-width:64em){
        .col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-offset-0,.col-md-offset-1,.col-md-offset-10,.col-md-offset-11,.col-md-offset-12,.col-md-offset-2,.col-md-offset-3,.col-md-offset-4,.col-md-offset-5,.col-md-offset-6,.col-md-offset-7,.col-md-offset-8,.col-md-offset-9{
            box-sizing:border-box;
            flex:0 0 auto;
            padding-right:1rem;
            padding-left:1rem
        }
        .col-md{
            flex-grow:1;
            flex-basis:0;
            max-width:100%
        }
        .col-md-1{
            flex-basis:8.33333333%;
            max-width:8.33333333%
        }
        .col-md-2{
            flex-basis:16.66666667%;
            max-width:16.66666667%
        }
        .col-md-3{
            flex-basis:25%;
            max-width:25%
        }
        .col-md-4{
            flex-basis:33.33333333%;
            max-width:33.33333333%
        }
        .col-md-5{
            flex-basis:41.66666667%;
            max-width:41.66666667%
        }
        .col-md-6{
            flex-basis:50%;
            max-width:50%
        }
        .col-md-7{
            flex-basis:58.33333333%;
            max-width:58.33333333%
        }
        .col-md-8{
            flex-basis:66.66666667%;
            max-width:66.66666667%
        }
        .col-md-9{
            flex-basis:75%;
            max-width:75%
        }
        .col-md-10{
            flex-basis:83.33333333%;
            max-width:83.33333333%
        }
        .col-md-11{
            flex-basis:91.66666667%;
            max-width:91.66666667%
        }
        .col-md-12{
            flex-basis:100%;
            max-width:100%
        }
        .col-md-offset-0{
            margin-left:0
        }
        .col-md-offset-1{
            margin-left:8.33333333%
        }
        .col-md-offset-2{
            margin-left:16.66666667%
        }
        .col-md-offset-3{
            margin-left:25%
        }
        .col-md-offset-4{
            margin-left:33.33333333%
        }
        .col-md-offset-5{
            margin-left:41.66666667%
        }
        .col-md-offset-6{
            margin-left:50%
        }
        .col-md-offset-7{
            margin-left:58.33333333%
        }
        .col-md-offset-8{
            margin-left:66.66666667%
        }
        .col-md-offset-9{
            margin-left:75%
        }
        .col-md-offset-10{
            margin-left:83.33333333%
        }
        .col-md-offset-11{
            margin-left:91.66666667%
        }
        .start-md{
            justify-content:flex-start;
            text-align:start
        }
        .center-md{
            justify-content:center;
            text-align:center
        }
        .end-md{
            justify-content:flex-end
        }
        .top-md{
            align-items:flex-start
        }
        .middle-md{
            align-items:center
        }
        .bottom-md{
            align-items:flex-end
        }
        .around-md{
            justify-content:space-around
        }
        .between-md{
            justify-content:space-between
        }
        .first-md{
            order:-1
        }
        .last-md{
            order:1
        }
    }
    @media (min-width:75em){
        .col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-offset-0,.col-lg-offset-1,.col-lg-offset-10,.col-lg-offset-11,.col-lg-offset-12,.col-lg-offset-2,.col-lg-offset-3,.col-lg-offset-4,.col-lg-offset-5,.col-lg-offset-6,.col-lg-offset-7,.col-lg-offset-8,.col-lg-offset-9{
            box-sizing:border-box;
            flex:0 0 auto;
            padding-right:1rem;
            padding-left:1rem
        }
        .col-lg{
            flex-grow:1;
            flex-basis:0;
            max-width:100%
        }
        .col-lg-1{
            flex-basis:8.33333333%;
            max-width:8.33333333%
        }
        .col-lg-2{
            flex-basis:16.66666667%;
            max-width:16.66666667%
        }
        .col-lg-3{
            flex-basis:25%;
            max-width:25%
        }
        .col-lg-4{
            flex-basis:33.33333333%;
            max-width:33.33333333%
        }
        .col-lg-5{
            flex-basis:41.66666667%;
            max-width:41.66666667%
        }
        .col-lg-6{
            flex-basis:50%;
            max-width:50%
        }
        .col-lg-7{
            flex-basis:58.33333333%;
            max-width:58.33333333%
        }
        .col-lg-8{
            flex-basis:66.66666667%;
            max-width:66.66666667%
        }
        .col-lg-9{
            flex-basis:75%;
            max-width:75%
        }
        .col-lg-10{
            flex-basis:83.33333333%;
            max-width:83.33333333%
        }
        .col-lg-11{
            flex-basis:91.66666667%;
            max-width:91.66666667%
        }
        .col-lg-12{
            flex-basis:100%;
            max-width:100%
        }
        .col-lg-offset-0{
            margin-left:0
        }
        .col-lg-offset-1{
            margin-left:8.33333333%
        }
        .col-lg-offset-2{
            margin-left:16.66666667%
        }
        .col-lg-offset-3{
            margin-left:25%
        }
        .col-lg-offset-4{
            margin-left:33.33333333%
        }
        .col-lg-offset-5{
            margin-left:41.66666667%
        }
        .col-lg-offset-6{
            margin-left:50%
        }
        .col-lg-offset-7{
            margin-left:58.33333333%
        }
        .col-lg-offset-8{
            margin-left:66.66666667%
        }
        .col-lg-offset-9{
            margin-left:75%
        }
        .col-lg-offset-10{
            margin-left:83.33333333%
        }
        .col-lg-offset-11{
            margin-left:91.66666667%
        }
        .start-lg{
            justify-content:flex-start;
            text-align:start
        }
        .center-lg{
            justify-content:center;
            text-align:center
        }
        .end-lg{
            justify-content:flex-end
        }
        .top-lg{
            align-items:flex-start
        }
        .middle-lg{
            align-items:center
        }
        .bottom-lg{
            align-items:flex-end
        }
        .around-lg{
            justify-content:space-around
        }
        .between-lg{
            justify-content:space-between
        }
        .first-lg{
            order:-1
        }
        .last-lg{
            order:1
        }
    }
    .col--right{
        justify-self:flex-end;
        order:999
    }
    .col--center{
        margin-left:auto;
        margin-right:auto;
        justify-content:space-around
    }
    .col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9{
        flex-basis:100%;
        max-width:100%
    }
    @media screen and (min-width:48em){
        .col-1{
            flex-basis:8.33333%;
            max-width:8.33333%
        }
        .col-2{
            flex-basis:16.66667%;
            max-width:16.66667%
        }
        .col-3{
            flex-basis:25%;
            max-width:25%
        }
        .col-4{
            flex-basis:33.33333%;
            max-width:33.33333%
        }
        .col-5{
            flex-basis:41.66667%;
            max-width:41.66667%
        }
        .col-6{
            flex-basis:50%;
            max-width:50%
        }
        .col-7{
            flex-basis:58.33333%;
            max-width:58.33333%
        }
        .col-8{
            flex-basis:66.66667%;
            max-width:66.66667%
        }
        .col-9{
            flex-basis:75%;
            max-width:75%
        }
        .col-10{
            flex-basis:83.33333%;
            max-width:83.33333%
        }
        .col-11{
            flex-basis:91.66667%;
            max-width:91.66667%
        }
        .col-12{
            flex-basis:100%;
            max-width:100%
        }
    }
    .col--article-head{
        display:flex;
        flex-direction:column
    }
    @media (max-width:64em){
        .article--navigation{
            display:flex;
            flex-direction:row;
            flex-wrap:nowrap
        }
    }
    @media (max-width:64em){
        .article--navigation button:nth-child(1){
            margin-right:1em;
            margin-left:auto
        }
    }
    @media (max-width:64em){
        .article--navigation button:nth-child(2){
            margin-right:0
        }
    }
    .article--content-page .article__content::before{
        display:none
    }
    @media (max-width:1024px){
        .col--article-head,.col--article-summary,.internal-summary{
            float:none;
            margin:0;
            top:0
        }
    }
    .no-js body{
        background-color:#fff
    }
    .cover{
        position:relative;
        z-index:20;
        background-color:#fff
    }
    .cover:after,.cover:before{
        content:" ";
        display:table;
        clear:both
    }
    @media screen and (min-width:64em){
        hr.small-only{
            display:none
        }
    }
    .c-garfield-the-cat figcaption a:not(.btn){
        -webkit-text-decoration-line:underline;
        -webkit-text-decoration-color:#666
    }
    .c-promo-box h3{
        margin-top:0
    }
    .c-promo-box--ad li a{
        color:#006fc6;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#5da3db;
        text-decoration-color:#5da3db
    }
    .c-promo-box a.btn{
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    .noads.c-promo-box--ad::before{
        display:none
    }
    .c-garfield-the-cat>.c-promo-box--ad::before{
        content:"Our friends and supporters ↓"
    }
    @media (max-width:64em){
        .c-garfield-the-cat>.c-promo-box--ad{
            padding:1em 1em .5em 0;
            background-color:#f7f7f7;
            margin:2.5em auto;
            text-align:center
        }
        .c-garfield-the-cat>.c-promo-box--ad::before{
            content:"Our friends and supporters. \A You know, they help us pay the bills ↓"
        }
    }
    .c-garfield-the-cat>div:last-child.c-promo-box--ad::before,.c-promo-box--wide::before,.signature+.c-promo-box--ad::before{
        margin-top:1em;
        border-top:8px solid #eee;
        padding:2em 0 3em 0;
        content:"Our friends and supporters. You know, they help us pay the bills ↓";
        text-align:center
    }
    .c-promo-box--wide{
        padding:0;
        background:0 0;
        margin:0 auto
    }
    .c-promo-box--wide .bnnr-list,.signature+.c-promo-box--ad .bnnr-list{
        display:flex;
        flex-direction:column;
        text-align:center;
        justify-content:center
    }
    @media screen and (min-width:64em){
        .c-promo-box--wide .bnnr-list,.signature+.c-promo-box--ad .bnnr-list{
            flex-direction:row
        }
    }
    .c-garfield-the-cat>div:last-child.c-promo-box--ad .bnnr-list{
        flex-direction:row
    }
    @media screen and (min-width:64em){
        .c-garfield-the-cat>div:last-child.c-promo-box--ad li:not(:last-child),.c-promo-box--wide li:not(:last-child),.signature+.c-promo-box--ad li:not(:last-child){
            padding-right:2em
        }
    }
    .c-promo-box--ad li{
        margin-bottom:1.5em
    }
    .c-promo-box--ad li:last-child{
        margin-bottom:0
    }
    .c-sidenote{
        color:#666;
        font-size:.95em;
        font-style:italic
    }
    .c-sidenote code{
        font-style:normal
    }
    .c-garfield-the-cat>.c-pre-sidenote--left{
        grid-column:3/10
    }
    .c-sidenote--right{
        border-left:8px solid #eee;
        padding-left:1em;
        text-align:left;
        border-top:0;
        border-bottom:0;
        font-style:italic
    }
    .c-sidenote--left{
        border-right:8px solid #eee;
        padding-right:1em;
        text-align:right;
        border-top:0;
        border-bottom:0;
        font-style:italic
    }
    .c-garfield-the-cat>.c-sidenote--right{
        grid-column:11/15
    }
    .c-garfield-the-cat>.c-sidenote--left{
        grid-column:1/5
    }
    .c-garfield-the-cat>.c-post-sidenote--right{
        grid-column:6/15
    }
    @media (max-width:64em){
        .col--article--grid.col--article__grid--ad{
            display:none
        }
    }
    .sponsors:not(.c-promo-box) .bnnr-list{
        margin-top:1.5em
    }
    .bnnr-list li a:nth-of-type(1){
        background-image:none!important
    }
    .bnnr-list li a:nth-of-type(2){
        color:#006fc6;
        font-style:italic;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#5da3db;
        text-decoration-color:#5da3db
    }
    @media all and (min-width:1100px){
        @supports (grid-row-gap:0){
            .c-garfield-the-cat>pre[class*=language-]{
                margin-top:calc((1em + .5vw)/ 2);
                margin-bottom:calc((1em + .5vw)/ 2)
            }
            .c-garfield-the-cat>p:empty{
                display:none
            }
            .c-garfield-the-cat>blockquote.pull-quote{
                margin:calc(1em + .5vw) 0
            }
            .c-garfield-the-cat>blockquote.pull-quote p{
                margin-top:0;
                margin-bottom:0
            }
            .article__content>.c-garfield-the-cat>.aspect-ratio,.article__content>.c-garfield-the-cat>.video-container{
                padding:0
            }
            .c-sidenote{
                color:#666;
                font-size:.95em;
                font-style:italic
            }
            .c-garfield-the-cat .c-garfield-aside--meta{
                grid-column:14/15;
                grid-row:2/4;
                align-self:start;
                margin:0;
                overflow:hidden
            }
            .c-garfield-the-cat>table.break-out{
                max-width:fit-content
            }
            .c-garfield-the-cat>.c-promo-box{
                grid-column:10/15;
                align-self:center
            }
        }
        .c-garfield-the-cat>div:last-child.c-promo-box--ad{
            grid-column:1/15
        }
    }
    embed,iframe,img,object{
        max-width:100%
    }
    embed,iframe,object{
        border:0
    }
    .cp_embed_iframe{
        height:500px
    }
    body code{
        -webkit-font-feature-settings:normal;
        font-feature-settings:normal;
        font-style:normal
    }
    .old-price{
        position:relative
    }
    .old-price::before{
        content:"";
        display:block;
        position:absolute;
        width:100%;
        height:2px;
        border-radius:2px;
        background:#d33a2c;
        top:50%;
        margin-top:-2px;
        transform:rotate(-35deg)
    }
    time{
        font-size:.8em;
        color:#666;
        text-transform:lowercase;
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        letter-spacing:1px;
        font-variant:all-petite-caps;
        background-position:center 72%
    }
    time a{
        background-position:center 72%
    }
    .lining-figures-tnum{
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1,"tnum" 1,"frac" 1,"sups" 1,"subs" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1,"tnum" 1,"frac" 1,"sups" 1,"subs" 1
    }
    code,pre{
        -webkit-font-variant-ligatures:none;
        font-variant-ligatures:none;
        -moz-tab-size:4;
        -o-tab-size:4;
        -webkit-hyphens:none;
        -ms-hyphens:none
    }
    code::-moz-selection,pre::-moz-selection{
        text-shadow:none;
        background:#b3d4fc;
        color:#333
    }
    code ::selection,pre::selection{
        text-shadow:none;
        background:#b3d4fc;
        color:#333
    }
    pre>code,pre[class]>code{
        line-height:calc(1.65em + .2vw)!important;
        background:0 0
    }
    pre.code__inline code{
        padding:0
    }
    .coupon,.note{
        color:#333;
        border-radius:11px;
        background:#fff2cc;
        font-size:.75em;
        padding:.15em .5em;
        margin:0 .15em;
        text-shadow:none
    }
    p.auth-modal__hint{
        margin:2em .15em 0 .15em;
        color:#333
    }
    p.auth-modal__hint small{
        font-size:.75em;
        background:#fff2cc;
        padding:.5em 1em;
        border-radius:11px
    }
    address{
        line-height:1.6;
        margin:1em 0;
        font-style:normal
    }
    address span{
        display:block
    }
    .figure--left-caption{
        position:relative
    }
    .figure--left-caption img{
        width:auto;
        max-width:100%
    }
    .figure--left-caption figcaption{
        font-size:calc(.8em + .2vw);
        color:#666;
        padding:2em 0
    }
    .figure--left-caption figcaption li{
        margin:.5em 0;
        padding:0;
        margin-bottom:-.25em
    }
    @media all and (min-width:1025px){
        .figure--left-caption figcaption{
            width:50.75%;
            position:absolute;
            top:50%;
            margin-top:2em;
            transform:translateY(-50%);
            left:calc(-50% - 2em);
            text-align:right
        }
    }
    .load-more{
        text-align:center;
        padding:1em 0 5em
    }
    a.load-more__link{
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        font-variant:petite-caps;
        background-position:center 72%;
        text-transform:uppercase;
        font-size:.75em;
        color:inherit;
        background:0 0;
        text-shadow:none;
        border-bottom:5px solid #d33a2c;
        letter-spacing:1px;
        transition:all .1s ease-out;
        display:inline-block;
        padding:1.25em 0 .5em;
        cursor:pointer
    }
    a.load-more__link a{
        background-position:center 72%
    }
    a.load-more__link:focus,a.load-more__link:hover{
        color:#d33a2c
    }
    a.load-more__link::after{
        content:" → "
    }
    .read-more-link{
        font-size:.95em;
        text-shadow:none;
        font-weight:700;
        display:table;
        margin-top:.5em;
        text-underline-offset:5px
    }
    .smashing-tv-host,.smashing-tv-speaker{
        background-color:#d0eed4;
        color:#005f2d;
        border-radius:11px;
        font-size:.75em;
        padding:.4em .65em;
        font-weight:700;
        display:inline-block;
        text-align:center;
        vertical-align:baseline;
        margin-top:0;
        line-height:1.2em;
        letter-spacing:1px;
        transition:all .3s ease-in-out;
        margin-right:.5em;
        text-transform:uppercase
    }
    .smashing-tv-host{
        background-color:#fff2cc;
        color:#d44119
    }
    .meow__content{
        padding:2em 1.5em 2em 1.5em;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:11px;
        background-color:#d33a2c;
        width:100%
    }
    .meow__content:not(.meow__content--small) a:not(.btn){
        color:#fff;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#e58980;
        text-decoration-thickness:3px;
        text-decoration-color:#e58980
    }
    .meow__illustration--split{
        background-color:#fff;
        padding:2em;
        text-align:center;
        border-top-left-radius:11px;
        border-top-right-radius:11px
    }
    @media (min-width:1000px){
        .meow__illustration--split img{
            max-width:40vw
        }
    }
    .header__search-results{
        max-width:calc(900px + 15vw);
        margin:0 auto;
        overflow:hidden;
        position:relative
    }
    .h5,h5{
        font-style:italic;
        font-size:calc(1.1rem + .25vw);
        color:#444
    }
    .h6,h6{
        font-size:calc(1.1rem + .25vw);
        letter-spacing:1px;
        color:#444;
        text-transform:uppercase;
        margin:0
    }
    .article h1,.article h2,.article h3,.article h4,.article h5,.article h6{
        position:relative
    }
    h1 code,h2 code,h3 code,h4 code,h5 code,h6 code{
        text-transform:none
    }
    ::-moz-selection,code::-moz-selection{
        text-shadow:none;
        background:#b3d4fc
    }
    ::selection,:selection,code::selection{
        text-shadow:none;
        background:#b3d4fc
    }
    ::-moz-selection{
        text-shadow:none;
        background:#b3d4fc
    }
    .success::-moz-selection{
        text-shadow:none;
        background:var(--THEME_COLOR,#b3d4fc)
    }
    .success::selection{
        text-shadow:none;
        background:var(--THEME_COLOR,#b3d4fc)
    }
    ol ol>li{
        padding-left:calc(1.35em + .7vw)
    }
    ol ol ol>li{
        padding-left:calc(2.4em + 1.4vw)
    }
    ol[start="0"]{
        counter-reset:listCounter -1
    }
    ol ul li:before{
        content:""
    }
    ol ol{
        margin-left:1em;
        margin-top:0;
        margin-bottom:0
    }
    ol ol>li::before{
        content:counters(listCounter, ".", decimal-leading-zero) " ";
        left:-1.5em
    }
    ul>li p{
        margin-top:0
    }
    ul>li>ul{
        margin-left:1em
    }
    dt{
        margin-bottom:.5em
    }
    dd{
        padding:0;
        margin:0;
        margin-bottom:1.5em
    }
    @media (max-width:40em){
        .vertical--horizontal-fallback{
            max-width:100%
        }
        .vertical--horizontal-fallback span{
            padding-left:1em
        }
    }
    .btn:not(.hidden)+.btn:not(.hidden),.btn:not(.hidden)+.toolbar-item:not(.hidden),.toolbar-item:not(.hidden)+.btn:not(.hidden),.toolbar-item:not(.hidden)+.toolbar-item:not(.hidden){
        margin-right:1em
    }
    .btn.hover,.btn:active,.btn:focus,.btn:hover,.hover.toolbar-item,.toolbar-item:active,.toolbar-item:focus,.toolbar-item:hover{
        background:#d33a2c
    }
    .btn--orange{
        background-color:#d33a2c;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#f88040),to(#d33a2c));
        background-image:linear-gradient(to bottom,#f88040,#d33a2c)
    }
    .btn span,.toolbar-item span{
        color:#811d15;
        font-size:.8em;
        margin-left:5px;
        margin-top:.5em;
        line-height:1
    }
    .btn span.ladda-label,.toolbar-item span.ladda-label{
        color:inherit;
        font-size:inherit;
        margin:0;
        line-height:inherit
    }
    .outline--none:focus{
        outline:0!important
    }
    .btn span.sup,.toolbar-item span.sup{
        display:inline-block;
        font-size:.6em;
        vertical-align:top;
        line-height:1.5;
        position:relative;
        top:0;
        left:-.4em
    }
    .btn--blue,.btn--smashing{
        background-color:#2da2c5;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#79d7ed),to(#2da2c5));
        background-image:linear-gradient(#79d7ed,#2da2c5);
        color:#fff
    }
    .btn--blue:focus,.btn--blue:hover,.btn--smashing:focus,.btn--smashing:hover{
        background:#2da2c5
    }
    .btn--blue span,.btn--smashing span{
        color:rgba(0,0,0,.5)
    }
    .btn--navy{
        background-color:#282634;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#3f3c51),to(#282634));
        background-image:linear-gradient(#3f3c51,#282634);
        color:#fff
    }
    .btn--navy:focus,.btn--navy:hover{
        background:#282634
    }
    .btn--navy span{
        display:block;
        color:#bbb;
        font-weight:400
    }
    .btn--green,.btn--member{
        background-color:#41b14f;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#9ec14c),to(#41b14f));
        background-image:linear-gradient(#9ec14c,#41b14f);
        color:#fff
    }
    .btn--green:focus,.btn--green:hover,.btn--member:focus,.btn--member:hover{
        background:#41b14f;
        color:#fff;
        border-color:#41b14f
    }
    .btn--green span,.btn--member span{
        color:rgba(0,0,0,.5)
    }
    .btn--grey{
        background-color:#dcdede;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#dcdede));
        background-image:linear-gradient(#fff,#dcdede);
        color:#000
    }
    .btn--grey:focus,.btn--grey:hover{
        background:#fff
    }
    .btn--grey span{
        display:block;
        color:#666
    }
    .btn--white,.toolbar-item{
        background:#fff;
        color:#267dcc;
        border:1px solid #fff;
        text-shadow:none
    }
    .btn--white:focus,.btn--white:hover,.toolbar-item:focus,.toolbar-item:hover{
        text-shadow:none;
        background:#fff!important;
        color:#d33a2c
    }
    .btn--white span,.toolbar-item span{
        display:block;
        color:#666
    }
    .btn--white span.sr-only,.toolbar-item span.sr-only{
        display:inline-block
    }
    .btn--white--bordered,.btn--white--bordered:active,.btn--white--bordered:focus,.btn--white--bordered:hover,.toolbar-item{
        border:1px solid #ddd
    }
    .btn--ghost--white.toolbar-item,.btn.btn--ghost--white{
        border:1px solid #fff;
        color:#fff;
        text-shadow:none;
        border-radius:11px;
        transition:all .2s ease-out
    }
    .btn--ghost--white.toolbar-item:active,.btn--ghost--white.toolbar-item:hover,.btn.btn--ghost--white:active,.btn.btn--ghost--white:hover{
        background:#fff;
        color:#d33a2c
    }
    .btn--text-shadow,a.btn.btn--text-shadow{
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    .btn--no-shadow{
        text-shadow:none
    }
    .btn--disabled,.btn--disabled:focus,.btn--disabled:hover{
        color:#999;
        cursor:not-allowed
    }
    .btn[disabled],.toolbar-item[disabled]{
        border:1px solid #666;
        opacity:.5;
        cursor:not-allowed
    }
    .btn[disabled]:focus,.btn[disabled]:hover,.toolbar-item[disabled]:focus,.toolbar-item[disabled]:hover{
        text-shadow:none
    }
    .btn[disabled].ladda-button,.toolbar-item[disabled].ladda-button{
        background:#666;
        color:#fff;
        border-color:#666;
        opacity:1
    }
    .btn[disabled].ladda-button.btn--secure::before,.toolbar-item[disabled].ladda-button.btn--secure::before{
        background-image:url(data:image/svg+xml;
        base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KPHBhdGggZmlsbD0iI2FhYWFhYSIgZD0iTTE1IDIxLjkxNXYwYy0wLjU4My0wLjIwNi0xLTAuNzYyLTEtMS40MTUgMC0wLjgyOCAwLjY3Mi0xLjUgMS41LTEuNXMxLjUgMC42NzIgMS41IDEuNWMwIDAuNjUzLTAuNDE3IDEuMjA5LTEgMS40MTV2Mi41OTRjMCAwLjI2My0wLjIyNCAwLjQ5MS0wLjUgMC40OTEtMC4yNjggMC0wLjUtMC4yMi0wLjUtMC40OTF2LTIuNTk0ek04IDE0djAgMGMtMS42NTggMC4wMDUtMyAxLjM0LTMgMy4wMDl2OS45ODFjMCAxLjY2MiAxLjM0NiAzLjAwOSAzLjAwOSAzLjAwOWgxNC45ODJjMS42NjIgMCAzLjAwOS0xLjMzNyAzLjAwOS0zLjAwOXYtOS45ODFjMC0xLjY1OS0xLjM0MS0zLjAwNS0zLTMuMDA5di0zLjUwMWMwLTQuMTQyLTMuMzY2LTcuNDk5LTcuNS03LjQ5OS00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy40OTl2My41MDF6TTExIDE0di0zLjQ5OWMwLTIuNDkyIDIuMDE1LTQuNTAxIDQuNS00LjUwMSAyLjQ4IDAgNC41IDIuMDE1IDQuNSA0LjUwMXYzLjQ5OWgtOXoiIGNsYXNzPSJ3b3ciPjwvcGF0aD4KPC9zdmc+)
    }
    .btn--load-comments.toolbar-item,.btn.btn--load-comments{
        display:block;
        width:66%;
        margin:2.5em 0 0;
        margin-left:4.6em
    }
    @media (max-width:40em){
        .btn--load-comments.toolbar-item,.btn.btn--load-comments{
            width:100%;
            margin-left:0
        }
    }
    .btn--full.toolbar-item,.btn.btn--full{
        display:block;
        width:100%
    }
    .btn--medium.toolbar-item,.btn.btn--medium{
        font-size:calc(.9em + .1vw);
        padding:.75em 1em
    }
    .btn--ghost--white{
        border:1px solid #666;
        border-radius:5.5px;
        padding:.5em .75em;
        background:0 0;
        margin-right:.5em;
        outline:0;
        line-height:1
    }
    a.btn,a.toolbar-item{
        text-shadow:none
    }
    a.btn--blue,a.btn--green,a.btn--navy,a.btn--orange{
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    a.btn--white,a.toolbar-item{
        background:#fff;
        transition:color .1s ease-out
    }
    a.btn--white:focus,a.btn--white:hover,a.toolbar-item:focus,a.toolbar-item:hover{
        color:#d33a2c
    }
    .btn button,.toolbar-item button{
        border:none;
        padding:0;
        background:0 0;
        margin:0;
        color:inherit
    }
    .btn--lined{
        display:block;
        text-align:center;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#ddd),to(#ddd));
        background-image:linear-gradient(#ddd,#ddd);
        background-size:100% .06em;
        background-repeat:no-repeat;
        background-position:center center;
        margin:2em 0
    }
    .btn--lined .btn,.btn--lined .toolbar-item{
        display:inline-block;
        box-shadow:0 0 0 1em #fff
    }
    @media (max-width:40em){
        .btn--lined__options{
            padding:0 1em
        }
    }
    .btn--lined__options .btn,.btn--lined__options .toolbar-item{
        margin-right:1em;
        box-sizing:border-box
    }
    @media (max-width:40em){
        .btn--lined__options .btn,.btn--lined__options .toolbar-item{
            margin-bottom:1em;
            margin-right:0;
            width:100%
        }
    }
    .btn--lined__options .btn:last-of-type,.btn--lined__options .toolbar-item:last-of-type{
        margin-right:0
    }
    .btn--lined--grey-border{
        display:block;
        text-align:center;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#ddd),to(#ddd));
        background-image:linear-gradient(#ddd,#ddd);
        background-size:100% .06em;
        background-repeat:no-repeat;
        background-position:center center
    }
    .btn--lined--grey-border .btn,.btn--lined--grey-border .toolbar-item{
        display:inline-block;
        box-shadow:0 0 0 1em #f6f6f6
    }
    .toolbar-item a{
        text-shadow:#fff 3px 0,#fff 2px 0,#fff 1px 0,#fff -1px 0,#fff -2px 0,#fff -3px 0
    }
    .code-toolbar::-webkit-scrollbar{
        display:none
    }
    .code-toolbar:hover>.toolbar{
        opacity:1
    }
    .code-toolbar>.toolbar a{
        cursor:pointer
    }
    .code-toolbar>.toolbar button{
        background:0 0;
        border:0;
        color:inherit;
        font:inherit;
        line-height:normal;
        overflow:visible;
        padding:0
    }
    .footer__topics{
        text-align:center;
        padding-bottom:50px
    }
    .main-footer .footer__topics{
        display:block
    }
    .footer__topics__title{
        color:#fff;
        font-size:.9em;
        margin:2em 0;
        opacity:1!important;
        transform:translateY(0)!important
    }
    @media (max-width:40em){
        .footer__topics__title{
            text-align:left
        }
    }
    .footer__topics__list{
        padding:0
    }
    .footer__topics__list:after,.footer__topics__list:before{
        content:" ";
        display:table;
        clear:both
    }
    .footer__topics__item{
        display:inline-block;
        padding-left:0;
        color:#fff;
        margin:.25em 0;
        transition:color .2s ease-out;
        font-size:calc(1.3em + .2vw)
    }
    .footer__topics__item::before{
        content:"•";
        margin:0 .25em 0 .25em;
        display:inline-block;
        color:var(--THEME_COLOR,#811d15);
        font-size:calc(1em + ((.4vw + .25vh)/ 2));
        position:relative;
        top:2px
    }
    .footer__topics__item a{
        text-decoration:none;
        color:inherit
    }
    .footer__topics__item a:focus,.footer__topics__item a:hover{
        color:var(--THEME_HOVER_COLOR,#390c09)
    }
    @media (max-width:64em){
        .footer__topics__item{
            font-size:1.25em;
            margin-bottom:5px
        }
        .footer__topics__item::after{
            font-size:30px;
            top:3px
        }
    }
    @media (max-width:48em){
        .footer__topics__item{
            font-size:1.1em;
            margin-bottom:.5em;
            width:33.33%;
            float:left;
            text-align:left
        }
    }
    @media (max-width:40em){
        .footer__topics__item{
            font-size:calc(.975em + .2vw);
            width:50%;
            float:left;
            text-align:left
        }
    }
    .search-input:hover{
        box-shadow:0 30px 60px -12px rgba(50,50,93,.25),0 18px 36px -18px rgba(0,0,0,.3),0 -12px 36px -8px rgba(0,0,0,.025)
    }
    .search-input-wrapper input:active,.search-input-wrapper input:focus{
        box-shadow:none
    }
    .search-clear-button:hover{
        cursor:pointer
    }
    .open .header__search:target{
        color:#811d15
    }
    .search-results .bio-image-image{
        max-width:75px
    }
    .search-results .bio-image-wrapper{
        border-radius:11px
    }
    .search-results .article--post{
        padding-top:0
    }
    .search-results .article--post:first-child{
        margin-top:2em
    }
    @media all and (max-width:650px){
        .search-results .article--post{
            margin-top:1.5em
        }
    }
    .search-results figure.author{
        margin-right:1em
    }
    .header__search-results.meow__content{
        background:var(--THEME_COLOR,#d33a2c)
    }
    .header__search-results.meow__content:not(.meow__content--small) a:not(.btn){
        text-shadow:none
    }
    .search-results figure a{
        background-image:none;
        display:block
    }
    .search-results a code{
        text-decoration:none;
        text-shadow:none;
        color:inherit
    }
    .search-results__full img{
        border:none
    }
    .search-results__full .article--post__comments-count,.search-results__full .read-more-link{
        display:none
    }
    @media all and (min-width:480px){
        .search-results .author__image-wrapper{
            min-width:60px;
            min-height:auto
        }
    }
    .search-results article:nth-child(15n){
        padding-bottom:5em;
        border-bottom:8px solid #ddd
    }
    .header__search-results em{
        color:#fff;
        border-radius:11px;
        font-style:normal;
        display:inline-block;
        background-color:var(--THEME_HIGHLIGHT_COLOR,rgba(0,0,0,.25));
        padding:.1em .25em 0
    }
    .search-post-container em{
        font-style:normal;
        background-color:#8e2017;
        padding:.1em .2em 0 .2em
    }
    .search-results .article--post__teaser em{
        background-color:#ffd8d4;
        color:#333;
        font-style:normal;
        border-radius:11px;
        padding:.25em .35em
    }
    .active .header__search-results{
        max-height:100em;
        transition:max-height .4s ease-out;
        overflow:hidden;
        display:block
    }
    .header__search-results.no-results-found{
        color:#61140f;
        text-align:center;
        padding:0
    }
    .header__search-results.no-results-found ol{
        margin:0
    }
    .header__search-results .load-more{
        padding-bottom:50px
    }
    .header__search-results .load-more__link{
        border-bottom:5px solid #811d15
    }
    .header__search-results .load-more__link:focus,.header__search-results .load-more__link:hover{
        color:#000
    }
    .header__search-results h2{
        color:#fff;
        font-size:calc(40px + .5vw)
    }
    @media all and (max-width:640px){
        .header__search-results h2{
            font-size:1.6em
        }
    }
    .header__search-results h2 a{
        text-decoration:none;
        color:inherit;
        text-shadow:1px 1px 1px rgba(0,0,0,.5)
    }
    .header__search-results h2 a:focus,.header__search-results h2 a:hover{
        color:#111;
        text-shadow:none
    }
    .header__search-results li{
        padding-left:0
    }
    .header__search-results li:first-child{
        margin:3em 0
    }
    .header__search-results li:last-child{
        margin-bottom:1.5em
    }
    @media all and (max-width:640px){
        .header__search-results li .author{
            display:none
        }
        .header__search-results li h2{
            font-size:1em
        }
    }
    .header__search-results p{
        margin:.75em 0;
        font-size:calc(.9em + .3vw)
    }
    @media all and (max-width:640px){
        .header__search-results p{
            font-size:.8em
        }
    }
    .header__search-results .article--post__time{
        color:inherit
    }
    .article--post__url{
        font-family:Fira Code,Menlo,Courier new,Consolas,monospace;
        color:var(--THEME_DESC_COLOR,#111);
        font-weight:700;
        padding-top:.2vw;
        font-size:calc(.8em + .2vw);
        display:block
    }
    .category__header.closed{
        display:none
    }
    .header__search-logo{
        margin-top:.8em;
        position:absolute;
        top:0;
        right:0
    }
    .header__search-logo img{
        float:right;
        height:16px;
        width:130px;
        border:0
    }
    .search-results__full{
        transition:.3s all ease-in-out
    }
    .search-results__full.search-results{
        background:#fff;
        color:#333;
        min-height:calc(100vh - 200px)
    }
    .search-results__full .search-post-container em{
        color:#fff;
        background-color:#d33a2c;
        border-radius:11px;
        padding:.2em .35em;
        display:inline-block;
        text-shadow:none
    }
    .search-results__full .header__search-results.meow__content{
        background:#fff;
        color:#333;
        text-shadow:none;
        margin-top:2em
    }
    .search-results__full .header__search-results.meow__content h2{
        color:#333;
        text-shadow:none
    }
    .search-results__full .header__search-results.meow__content .meow__intro{
        text-shadow:none
    }
    .search-results__full .meow__content:not(.meow__content--small) a:not(.btn){
        color:#006fc6;
        font-weight:700;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:currentColor;
        text-decoration-color:currentColor;
        padding:10px 0
    }
    .back-to-top-wrapper:hover a{
        transform:rotate(0)
    }
    .back-to-top-wrapper:hover::before{
        opacity:0;
        transform:scaleX(0)
    }
    form fieldset{
        border:none;
        padding:0;
        margin:3em 0 0
    }
    form fieldset:after,form fieldset:before{
        content:" ";
        display:table;
        clear:both
    }
    form fieldset legend{
        font-weight:700;
        font-size:1.2em;
        margin-bottom:1em
    }
    form fieldset legend.legend--notes+small{
        display:block;
        color:#666;
        line-height:1.5em;
        padding:1em 0 1.25em 0;
        margin:0 auto
    }
    @media all and (min-width:550px){
        form fieldset legend.legend--notes+small{
            width:70%
        }
    }
    form fieldset:first-of-type{
        margin-top:0
    }
    form input[type=text],form textarea{
        color:#333
    }
    .form__text{
        font-size:.8em
    }
    .form__field{
        display:block;
        font-size:.9em;
        width:100%;
        margin-bottom:1.5em
    }
    .form__field img{
        margin-top:2.5em
    }
    .form__field .form__field__note{
        color:#666
    }
    .error-msg,.form__field__note{
        display:block;
        margin-top:.8em;
        font-size:.8em;
        margin-left:1em
    }
    @media (max-width:40em){
        .error-msg,.form__field__note{
            margin-left:0
        }
    }
    .error-msg.error-msg__standalone{
        margin:1em 0 0 0
    }
    .error-msg:not([value=""]){
        padding:.45em .75em;
        border-radius:11px;
        display:inline-block;
        background-color:#d33a2c;
        color:#fff;
        font-weight:700;
        line-height:1.3em;
        animation-duration:.6s;
        animation-timing-function:ease-in-out;
        animation-name:headShake
    }
    .error-msg:not([value=""]) a{
        color:#fff;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#fff;
        text-decoration-color:#fff;
        padding:10px 0;
        transition:color .1s ease-out
    }
    .error-msg:empty{
        display:none
    }
    .animation-shake{
        animation-duration:.6s;
        animation-timing-function:ease-in-out;
        animation-name:headShake
    }
    @keyframes headShake{
        0%{
            transform:translateX(0)
        }
        12.5%{
            transform:translateX(-6px) rotateY(-9deg)
        }
        37.5%{
            transform:translateX(5px) rotateY(7deg)
        }
        62.5%{
            transform:translateX(-3px) rotateY(-5deg)
        }
        87.5%{
            transform:translateX(2px) rotateY(3deg)
        }
        100%{
            transform:translateX(0)
        }
    }
    .error-server:not([value=""]){
        display:block;
        text-align:center;
        color:#fff;
        margin:3em 0 1em 0;
        font-size:.95em
    }
    .error-server::before{
        content:"⚠️";
        margin-right:.45em;
        position:relative;
        top:1px
    }
    .form__field__hidden{
        display:none
    }
    .form__field--radio .form__field__note{
        margin-left:3em
    }
    .form__field--checkbox .form__field__note{
        margin-left:0
    }
    .form__field__input:active,.form__field__input:focus,input[type=email]:active,input[type=email]:focus,input[type=password]:active,input[type=password]:focus,input[type=text]:active,input[type=text]:focus,textarea:active,textarea:focus{
        box-shadow:inset 0 0 1px 0 rgba(0,0,0,.2),0 5px 27px -5px rgba(50,50,93,.25),0 8px 10px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.03);
        outline:0!important
    }
    textarea{
        overflow:auto;
        height:10em;
        resize:both;
        max-width:100%;
        padding:.75em 1em .95em 1em
    }
    .form__field--checkbox .form__field__label,.form__field--radio .form__field__label{
        margin:0
    }
    .lining-figures-tnum .form__field__label{
        -webkit-font-feature-settings:"tnum" 0,"lnum" 0,"smcp" 0,"c2sc" 0;
        font-feature-settings:"tnum" 0,"lnum" 0,"smcp" 0,"c2sc" 0
    }
    .nl__form input:active,.nl__form input:focus{
        box-shadow:none
    }
    input[data-optional]{
        border-color:#eee
    }
    .form__field .fail{
        background-color:#feeef0;
        outline-color:#fdadb7;
        box-shadow:none;
        border-radius:11px;
        border:2px dashed #fdadb7
    }
    .form__field input.success,.form__field input:-webkit-autofill.success,.form__field input[type=text].success,.form__field textarea.success,.form__field textarea:-webkit-autofill.success{
        background-repeat:no-repeat;
        background-position:right 1em center;
        background-size:1em 1em;
        color:#333;
        font-weight:400;
        transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out;
        -webkit-font-feature-settings:normal;
        font-feature-settings:normal;
        -webkit-text-fill-color:#333;
        font-family:Elena,-apple-system,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,system-ui,Arial,sans-serif;
        background-color:#e6ffec
    }
    .form__field__input.success:-webkit-autofill,.form__field__input.success:-webkit-autofill::first-line,.form__field__input:-webkit-autofill,.form__field__input:-webkit-autofill::first-line{
        font-family:Elena,Arial,sans-serif;
        font-size:1.23rem;
        line-height:1.14em;
        color:#333
    }
    .form__field__input.success{
        background-repeat:no-repeat;
        background-position:right 1em center;
        background-size:1em 1em;
        transition:border-color .3s ease-in-out,box-shadow .3s ease-in-out;
        font-feature-settings:normal;
        font-weight:700
    }
    .form__field__input:-webkit-autofill{
        -webkit-box-shadow:inset 0 1px 1px 0 rgba(0,0,0,.2),inset 0 0 0 1000px #e6f8e8!important
    }
    .success .form__field__label{
        color:#333
    }
    .wf-loaded-stage2 .form__field.comment__message-field .success{
        font-family:Elena;
        color:#202124
    }
    .comment__message-field textarea{
        padding-top:1em;
        line-height:1.45em;
        padding-right:50px
    }
    .form__field.comment__message-field.success .form__field__label{
        font-weight:400
    }
    .form__field input:-webkit-autofill:focus,.form__field textarea:-webkit-autofill:active{
        font-weight:400
    }
    .wf-loaded-stage2 .form__field input:-webkit-autofill:focus,.wf-loaded-stage2 .form__field textarea:-webkit-autofill:active{
        font-family:Elena
    }
    .form__field input:-webkit-autofill::selection{
        background-color:#41b14f;
        color:#fff;
        padding:2px
    }
    .form__field .input-wrapper,.form__field.comment__message-field .input-wrapper,.stripe-element.form__field__input{
        position:relative
    }
    .form__field .input-wrapper:after,.form__field.comment__message-field .input-wrapper:after,.stripe-element.form__field__input:after{
        content:"";
        position:absolute;
        top:50%;
        right:.25em;
        width:1em;
        height:1em;
        margin-top:-.5em;
        background-image:url(data:image/svg+xml;
        base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4NCjxwYXRoIGZpbGw9IiM0MUIxNEYiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTE2IDBjLTguODM2IDAtMTYgNy4xNjQtMTYgMTZzNy4xNjQgMTYgMTYgMTYgMTYtNy4xNjQgMTYtMTYtNy4xNjQtMTYtMTYtMTZ6TTEzLjUyIDIzLjM4M2wtNy4zNjItNy4zNjMgMi44MjgtMi44MjggNC41MzMgNC41MzUgOS42MTctOS42MTcgMi44MjggMi44MjgtMTIuNDQ0IDEyLjQ0NXoiPjwvcGF0aD4NCjwvc3ZnPg0K);
        background-repeat:no-repeat;
        background-size:1em 1em;
        z-index:2;
        opacity:0;
        transition:opacity .15s ease-in-out,right .15s ease-in-out
    }
    .form__field.comment__message-field .input-wrapper:after{
        top:2em
    }
    .form__field.comment__message-field.success .input-wrapper,.form__field.success .input-wrapper,.stripe-element.form__field__input.success{
        position:relative
    }
    .form__field.comment__message-field.success .input-wrapper:after,.form__field.success .input-wrapper:after,.stripe-element.form__field__input.success:after{
        opacity:1;
        right:1em
    }
    .form__field--inline .form__field.success .input-wrapper:after{
        right:6em
    }
    .form__field.comment__message-field.success .input-wrapper:after{
        background-size:1.1em 1.1em;
        width:1.1em;
        height:1.1em
    }
    .form__row:after,.form__row:before{
        content:" ";
        display:table;
        clear:both
    }
    .increment-decrement-input-wrapper{
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1,"tnum" 1,"lnum" 1,"frac" 1,"sups" 1,"subs" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1,"tnum" 1,"lnum" 1,"frac" 1,"sups" 1,"subs" 1;
        font-size:1em;
        float:right;
        position:relative;
        top:.15em
    }
    .increment-decrement-input-wrapper input[type=number]{
        padding:0 .25em;
        display:block;
        width:5.5em;
        text-align:center;
        height:1.5em;
        border:1px solid #ddd;
        border-radius:20px;
        line-height:0;
        background-color:#fff;
        box-shadow:none
    }
    .increment-decrement-input-wrapper input[type=number]::-webkit-inner-spin-button,.increment-decrement-input-wrapper input[type=number]::-webkit-outer-spin-button{
        margin:0;
        -webkit-appearance:none
    }
    .increment-decrement-input-wrapper button{
        background:#eee;
        border:1px solid #ddd;
        font-size:inherit;
        text-align:center;
        width:1.75em;
        line-height:.6;
        height:1.5em;
        z-index:1;
        padding:0;
        cursor:pointer;
        position:absolute;
        top:0
    }
    .increment-decrement-input-wrapper .increment-button{
        float:right;
        margin-left:-1px;
        border-radius:0 100% 100% 0;
        padding-right:.1em;
        right:0
    }
    .increment-decrement-input-wrapper .decrement-button{
        float:left;
        margin-right:-1px;
        padding-left:.1em;
        border-radius:50% 0 0 50%;
        left:0
    }
    .homepage .main-footer{
        position:relative;
        z-index:1
    }
    .footer__notes{
        text-align:center;
        color:#fff
    }
    .footer__notes p{
        margin:0
    }
    .footer__notes p:first-of-type{
        font-style:italic
    }
    .footer__links{
        margin:0 auto;
        padding:1em 0;
        text-align:center;
        max-width:30em
    }
    .footer__links li{
        margin:.5em 0;
        padding:0;
        display:inline-block;
        margin-right:1em
    }
    .footer__links a,.footer__notes a{
        color:#fff;
        text-decoration-color:#fff
    }
    .main-footer{
        padding:2em 0;
        padding-bottom:14em;
        background-repeat:no-repeat;
        background-image:url(../images/footer/tablet__left.svg);
        background-position:left 1em bottom 1em;
        background-size:12em auto;
        background-color:var(--THEME_SECONDARY_COLOR,#d33a2c);
        font-size:.8em;
        color:#fff;
        z-index:0
    }
    @media all and (max-width:480px) and (max-height:600px){
        .main-footer{
            padding-bottom:13em;
            background-repeat:no-repeat;
            background-image:url(../images/footer/mobile__left.svg),url(../images/footer/mobile__right.svg);
            background-position:left .5em bottom .5em,right 6% bottom;
            background-size:12em auto,12em auto
        }
    }
    @media all and (min-width:480px){
        .main-footer{
            padding-bottom:12em;
            background-size:12em auto,12em auto
        }
    }
    @media all and (min-width:768px){
        .main-footer{
            padding-bottom:3em;
            background-image:url(../images/footer/tablet__left.svg);
            background-position:left .5em bottom 3em;
            background-size:13.5em auto
        }
    }
    @media screen and (min-width:64rem){
        .main-footer{
            padding-bottom:3em;
            background-image:url(../images/footer/laptop__left.svg),url(../images/smashing-cat/cat-the-behemoth.svg);
            background-position:left 6% bottom 2em,right 3vw bottom 2.75em;
            background-size:11em auto,14em auto
        }
    }
    @media all and (min-width:1264px){
        .main-footer{
            padding-bottom:3em;
            background-image:url(../images/footer/laptop__left.svg),url(../images/smashing-cat/cat-the-behemoth.svg);
            background-position:left 15% bottom 1em,right 12% bottom 2em;
            background-size:11em auto,14em auto
        }
    }
    @media all and (min-width:1450px){
        .main-footer{
            background-image:url(../images/footer/large-screen__left.svg);
            background-position:left 15% bottom 2em;
            background-size:12em auto
        }
    }
    .highlighted{
        background-color:#fff2cc
    }
    .transitioned{
        transition:all 1s ease
    }
    .shake{
        animation-name:shake;
        animation-duration:1s;
        animation-timing-function:ease-in-out;
        animation-iteration-count:1;
        transform:perspective(1px) translateZ(0);
        box-shadow:0 0 1px transparent
    }
    @keyframes shake{
        16.65%{
            transform:translateY(8px)
        }
        33.3%{
            transform:translateY(-6px)
        }
        49.95%{
            transform:translateY(4px)
        }
        66.6%{
            transform:translateY(-2px)
        }
        83.25%{
            transform:translateY(1px)
        }
        100%{
            transform:translateY(0)
        }
    }
    @keyframes wiggle{
        0%{
            transform:rotate(4deg)
        }
        50%{
            transform:rotate(-4deg)
        }
        100%{
            transform:rotate(4deg)
        }
    }
    .wiggler:hover{
        animation:wiggle .5s infinite
    }
    @keyframes content-injection{
        100%{
            transform:translateX(0);
            opacity:1
        }
        0%{
            transform:translateX(40px);
            opacity:0
        }
    }
    @keyframes fade-in{
        100%{
            opacity:1
        }
        0%{
            opacity:0
        }
    }
    @keyframes adding-to-cart-animation{
        16.65%{
            transform:translateY(8px)
        }
        33.3%{
            transform:translateY(-6px)
        }
        49.95%{
            transform:translateY(4px)
        }
        66.6%{
            transform:translateY(-2px)
        }
        83.25%{
            transform:translateY(1px)
        }
        100%{
            transform:translateY(0)
        }
    }
    @keyframes adding-to-cart-animation--wide-screens{
        16.65%{
            transform:translateY(32px)
        }
        33.3%{
            transform:translateY(-19px)
        }
        49.95%{
            transform:translateY(4px)
        }
        66.6%{
            transform:translateY(-2px)
        }
        83.25%{
            transform:translateY(1px)
        }
        100%{
            transform:translateY(0)
        }
    }
    @keyframes cart-reminder-animation{
        16.65%{
            transform:translateY(14px) rotateZ(-11deg) scale(.87)
        }
        33.3%{
            transform:translateY(-8px)
        }
        49.95%{
            transform:translateY(10px)
        }
        66.6%{
            transform:translateY(-4px)
        }
        83.25%{
            transform:translateY(1px)
        }
        100%{
            transform:translateY(0)
        }
    }
    .adding-to-cart-animation,.cart-reminder-animation{
        will-change:transform;
        animation-duration:1s;
        animation-timing-function:ease-in-out;
        animation-iteration-count:1
    }
    .cart-reminder-animation{
        will-change:transform;
        animation-name:cart-reminder-animation
    }
    .adding-to-cart-animation{
        animation-name:adding-to-cart-animation
    }
    @media all and (min-width:1200px){
        .adding-to-cart-animation{
            animation-name:adding-to-cart-animation--wide-screens
        }
    }
    @keyframes cd-qty-enter{
        0%{
            opacity:0;
            visibility:hidden;
            transform:translateX(-50%) translateY(0)
        }
        100%{
            opacity:1;
            visibility:visible;
            transform:translateX(-50%) translateY(-50%)
        }
    }
    @keyframes cd-qty-leave{
        0%{
            opacity:1;
            visibility:visible;
            transform:translateX(-50%) translateY(-50%)
        }
        100%{
            opacity:0;
            visibility:hidden;
            transform:translateX(-50%) translateY(-100%)
        }
    }
    @keyframes cd-item-move-up-mobile{
        0%{
            padding-top:70px
        }
        100%{
            padding-top:0
        }
    }
    @keyframes cd-item-move-up{
        0%{
            padding-top:104px
        }
        100%{
            padding-top:0
        }
    }
    @keyframes cd-item-move-down-mobile{
        0%{
            padding-top:0
        }
        100%{
            padding-top:70px
        }
    }
    @keyframes cd-item-move-down{
        0%{
            padding-top:0
        }
        100%{
            padding-top:104px
        }
    }
    @keyframes cd-item-slide-out{
        0%{
            transform:translateX(0);
            opacity:1
        }
        100%{
            transform:translateX(80px);
            opacity:0
        }
    }
    @keyframes cd-item-slide-in{
        100%{
            transform:translateX(0);
            opacity:1
        }
        0%{
            transform:translateX(80px);
            opacity:0
        }
    }
    .cart{
        display:block;
        z-index:12;
        width:90%;
        max-width:440px;
        height:400px;
        max-height:90%;
        pointer-events:none
    }
    .cart-wrapper{
        color:#333
    }
    .cart-wrapper *,.cart-wrapper ::after,.cart-wrapper ::before{
        box-sizing:border-box
    }
    .cart-wrapper html{
        font-size:62.5%
    }
    .cart-wrapper a{
        text-decoration:none
    }
    .cart-wrapper img{
        max-width:100%
    }
    .cart-wrapper main{
        text-align:center;
        padding:2em 5%
    }
    .cart-wrapper h1{
        font-size:20px;
        padding:3em 0 .8em
    }
    @media only screen and (min-width:768px){
        .cart-wrapper h1{
            font-size:32px
        }
    }
    .cart-wrapper h2{
        color:#666
    }
    .wf-loaded-stage2 .article__comment time,.wf-loaded-stage2 .author__desc__title,.wf-loaded-stage2 .book-cta__title,.wf-loaded-stage2 .cart h2,.wf-loaded-stage2 .cart header,.wf-loaded-stage2 .cart-wrapper h2,.wf-loaded-stage2 .elena,.wf-loaded-stage2 .form__field.comment__message-field.success .form__field__label,.wf-loaded-stage2 .form__field__input,.wf-loaded-stage2 .sponsors ul li a,.wf-loaded-stage2 .tbody .td,.wf-loaded-stage2 input[type=email],.wf-loaded-stage2 input[type=password],.wf-loaded-stage2 input[type=text],.wf-loaded-stage2 tbody td,.wf-loaded-stage2 textarea,.wf-loaded-stage2 time{
        font-family:Elena
    }
    .cart-wrapper ul{
        list-style-image:none;
        padding:0;
        margin:0
    }
    .js-cart-items .back-to-top-wrapper{
        transform:translateY(150px)
    }
    .cart,.cart-trigger{
        animation-duration:1s;
        animation-timing-function:ease-in-out;
        animation-iteration-count:1;
        position:fixed;
        bottom:20px;
        right:5%;
        transition:transform .2s;
        transform:translateZ(0);
        will-change:transform;
        backface-visibility:hidden;
        background:0 0
    }
    .cart-container::before{
        content:"";
        position:fixed;
        z-index:11;
        height:100vh;
        width:100vw;
        top:0;
        left:0;
        background:rgba(0,0,0,.5);
        opacity:0;
        visibility:hidden;
        transition:opacity .4s,visibility .4s
    }
    .cart-container.cart-open::before{
        opacity:1;
        visibility:visible
    }
    .empty .cart,.empty .cart-trigger{
        transform:translateY(150px)
    }
    @media only screen and (min-width:1170px){
        .cart,.cart-trigger{
            bottom:40px
        }
    }
    .cart-trigger{
        z-index:13;
        height:72px;
        width:72px;
        text-indent:100%;
        color:transparent;
        white-space:nowrap;
        cursor:pointer
    }
    .cart-trigger::after,.cart-trigger::before{
        content:"";
        position:absolute;
        left:50%;
        top:50%;
        bottom:auto;
        right:auto;
        transform:translateX(-50%) translateY(-50%);
        height:100%;
        width:100%;
        background:url(/images/cart/cd-icons-cart-close.svg) no-repeat 0 0;
        transition:opacity .2s,transform .2s
    }
    .cart-trigger::after{
        background-position:-72px 0;
        opacity:0;
        transform:translateX(-50%) translateY(-50%) rotate(90deg)
    }
    .cart-open .cart-trigger::before{
        opacity:0
    }
    .cart-open .cart-trigger::after{
        opacity:1;
        transform:translateX(-50%) translateY(-50%)
    }
    .cart-trigger .count{
        position:absolute;
        top:-10px;
        right:-10px;
        height:28px;
        width:28px;
        margin:0;
        padding:0;
        background:#e94b35;
        color:#fff;
        font-weight:700;
        border-radius:50%;
        text-indent:0;
        transition:transform .2s .5s;
        font-size:15px;
        line-height:15px
    }
    .cart-trigger .count li{
        position:absolute;
        padding:0;
        margin:0;
        line-height:15px;
        text-shadow:none;
        left:50%;
        top:50%;
        bottom:auto;
        right:auto;
        transform:translateZ(0) translateX(-50%) translateY(-50%)
    }
    .cart-trigger .count li:last-of-type{
        visibility:hidden
    }
    .cart-open .cart-trigger .count{
        transition:transform .2s 0s;
        transform:scale(0)
    }
    .empty .cart-trigger .count{
        transform:scale(1)
    }
    .cart-trigger:hover+div .wrapper{
        box-shadow:0 6px 40px rgba(0,0,0,.3)
    }
    .cart-open .cart-trigger:hover+div .wrapper{
        box-shadow:0 4px 30px rgba(0,0,0,.17)
    }
    @media (max-width:40em){
        .cart{
            max-width:100%;
            height:auto;
            max-height:100%;
            box-sizing:border-box;
            bottom:20px;
            top:20px
        }
    }
    .cart .wrapper{
        position:absolute;
        bottom:0;
        right:0;
        z-index:12;
        overflow:hidden;
        height:72px;
        width:72px;
        border-radius:11px;
        transition:height .4s .1s,width .4s .1s,box-shadow .3s;
        transition-timing-function:cubic-bezier(.67,.17,.32,.95);
        background:#fff;
        box-shadow:0 4px 30px rgba(0,0,0,.17);
        pointer-events:auto
    }
    .cart footer,.cart header{
        position:absolute;
        z-index:12;
        left:0;
        width:100%
    }
    .cart .body,.cart header{
        opacity:0
    }
    .cart header{
        border-radius:11px 11px 0 0;
        padding:.75em 1.5em;
        height:50px;
        line-height:1.7;
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        letter-spacing:1px;
        font-variant:petite-caps;
        text-transform:lowercase;
        background-position:center 72%;
        font-size:1em;
        font-weight:700;
        background-color:#fff;
        transition:opacity .2s 0s;
        border-bottom:1px solid #ddd
    }
    .cart header a{
        background-position:center 72%
    }
    .cart header:after,.cart header:before{
        content:" ";
        display:table;
        clear:both
    }
    @supports (display:flex){
        .cart header{
            display:flex;
            flex-direction:row;
            align-items:center
        }
    }
    .cart footer{
        bottom:0;
        border-radius:0 0 11px 11px;
        box-shadow:0 -2px 20px rgba(0,0,0,.15);
        background:#fff
    }
    .cart footer small{
        color:rgba(255,255,255,.7);
        display:block;
        font-size:.5em;
        padding:0
    }
    @media screen and (min-width:40em){
        .cart footer small span{
            display:inline
        }
    }
    .cart h2{
        text-transform:uppercase;
        display:inline-block;
        font-size:1em;
        font-weight:700;
        letter-spacing:1px;
        color:#333
    }
    @media all and (max-width:370px){
        .cart h2{
            display:none
        }
    }
    .cart .clear-the-cart{
        position:absolute;
        top:-.1em;
        right:1.5em;
        font-size:1.1em;
        color:#444;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#999;
        text-decoration-color:#999
    }
    .cart .clear-the-cart::after{
        content:" × "
    }
    .cart .undo{
        float:right;
        font-size:12px;
        opacity:0;
        visibility:hidden;
        transition:opacity .2s,visibility .2s
    }
    .cart .undo.visible{
        opacity:1;
        visibility:visible
    }
    .cart .cart-options:after,.cart .cart-options:before{
        content:" ";
        display:table;
        clear:both
    }
    .cart .checkout{
        display:block;
        height:72px;
        padding-top:11px;
        line-height:28px;
        margin-right:72px;
        background:-webkit-gradient(linear,left top,left bottom,from(#f88040),to(#d33a2c));
        background:linear-gradient(to bottom,#f88040,#d33a2c);
        color:#fff;
        text-shadow:none;
        text-align:center;
        font-size:1.55em;
        font-weight:600;
        transition:all .2s 0s
    }
    .cart .checkout:hover{
        background:#d33a2c
    }
    .cart .body{
        position:relative;
        height:calc(100% - 50px);
        padding:20px 0 10px;
        margin:40px 0 10px;
        overflow:auto;
        transition:opacity .2s;
        padding-bottom:3em
    }
    .cart .body ul{
        overflow:hidden;
        padding:0 1em;
        position:relative
    }
    .cart .body li{
        position:relative;
        opacity:0;
        transform:translateX(80px);
        transition:opacity 0s .2s,transform 0s .2s;
        border-bottom:1px solid #ddd;
        padding:.5em
    }
    .cart .body li:after,.cart .body li:before{
        content:" ";
        display:table;
        clear:both
    }
    .cart .body li:last-of-type{
        border-bottom:none
    }
    .cart .body li:not(:last-of-type){
        margin-bottom:20px
    }
    .cart .body li.deleted{
        position:absolute;
        left:1.4em;
        width:calc(100% - 2.8em);
        opacity:0;
        animation:cd-item-slide-out .3s forwards
    }
    .cart .body li.deleted+li{
        animation:cd-item-move-up-mobile .3s;
        animation-fill-mode:forwards
    }
    .cart .product-image{
        display:inline-block;
        float:left;
        width:50px
    }
    .cart .product-image img{
        display:block
    }
    .cart .product-details{
        position:relative;
        display:inline-block;
        float:right;
        width:calc(100% - 50px);
        padding:.3em 0 0 .5em
    }
    .cart .product-details:after,.cart .product-details:before{
        content:" ";
        display:table;
        clear:both
    }
    .cart .price,.cart .product-title{
        font-weight:700
    }
    .cart .product-title{
        width:100%;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        margin:0;
        font-size:calc(16px + .25vw)
    }
    .cart .product-title a{
        color:#006fc6;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#006fc6;
        text-decoration-color:#006fc6
    }
    .cart .product-title a:active,.cart .product-title a:focus{
        color:#d33a2c;
        -webkit-text-decoration-color:#d33a2c;
        text-decoration-color:#d33a2c
    }
    .cart .product-description{
        font-size:1em
    }
    .cart .product-amount{
        font-size:1em;
        float:left
    }
    .cart .product-counter{
        float:right;
        width:auto;
        padding:0;
        margin:0
    }
    .cart .product-controls:after,.cart .product-controls:before{
        content:" ";
        display:table;
        clear:both
    }
    .cart .price{
        float:left;
        width:30%;
        text-align:right
    }
    .cart .actions{
        font-size:14px;
        height:22.4px;
        line-height:22.4px;
        float:left;
        margin-top:1em
    }
    .cart .actions:after,.cart .actions:before{
        content:" ";
        display:table;
        clear:both
    }
    .cart-open .cart .wrapper{
        height:calc(100% - 125px);
        width:100%;
        transition-delay:0s
    }
    @media all and (min-width:640px){
        .cart-open .cart .wrapper{
            height:100%
        }
    }
    .cart-open .cart .body,.cart-open .cart header{
        opacity:1
    }
    .cart-open .cart header{
        transition:opacity .2s .2s
    }
    .cart-open .cart .body{
        transition:opacity 0s
    }
    .cart-open .cart .body li{
        transition:transform .3s .2s,opacity .3s .2s;
        opacity:1;
        transform:translateX(0)
    }
    .cart-open .cart .body li:nth-of-type(2){
        transition-duration:.4s
    }
    .cart-open .cart .body li:nth-of-type(3){
        transition-duration:.5s
    }
    .cart-open .cart .body li:nth-of-type(4),.cart-open .cart .body li:nth-of-type(5){
        transition-duration:.55s
    }
    .cart-open .cart .checkout{
        color:#fff;
        transition:color .2s .3s;
        cursor:pointer;
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    @media only screen and (min-width:768px){
        .cart .body li:not(:last-of-type){
            margin-bottom:14px
        }
        .cart .body li.deleted+li{
            animation:cd-item-move-up .3s
        }
        .cart .checkout{
            font-size:24px
        }
        .cart .product-image{
            width:90px
        }
        .cart .product-details{
            padding:0 0 0 1em;
            width:calc(100% - 90px)
        }
        .cart .price,.cart .product-title{
            font-size:1.1em
        }
    }
    .article--grid__container .advertisement-container{
        background-color:transparent
    }
    .article--grid__container .advertisement-container a{
        color:#666;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#c2c2c2;
        text-decoration-color:#c2c2c2;
        transition:color .1s ease-out;
        padding:0
    }
    .advertisement-container{
        display:none
    }
    @media screen and (min-width:64em){
        .advertisement-container{
            overflow:hidden;
            display:block;
            text-align:center
        }
    }
    .advertisement-container ul{
        padding:0;
        display:flex;
        flex-direction:row
    }
    .article--grid__container .advertisement-container ul{
        flex-direction:column
    }
    @media all and (min-width:1025px){
        .advertisement-container ul{
            flex-direction:column
        }
    }
    .advertisement-container li{
        line-height:1.3em
    }
    @media (max-width:64em){
        .advertisement-container li:not(:last-child){
            margin-right:2em
        }
    }
    @media all and (min-width:1025px){
        .advertisement-container li:not(:last-child){
            margin-bottom:1.75em
        }
    }
    .advertisement-container li img{
        border:4px solid #fff;
        border-radius:11px;
        transition:all .3s ease-in-out;
        padding:0
    }
    .advertisement-container li img:hover{
        border:4px solid #d33a2c
    }
    .advertisement-container:after,.advertisement-container:before{
        content:" ";
        display:table;
        clear:both
    }
    @media (max-width:64em){
        .article--grid__container .advertisement-container{
            margin:0;
            padding:0
        }
    }
    .ad ul,.advertisement-container ul{
        list-style:none;
        margin:0
    }
    .ad li,.advertisement-container li{
        padding:0;
        margin-bottom:0
    }
    .ad a,.advertisement-container a{
        font-size:.75em;
        text-align:center;
        font-style:italic;
        display:inline-block;
        margin:0;
        padding:0;
        color:#666;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#666;
        text-decoration-color:#666
    }
    .c-promo-box--wide.sponsors ul li{
        padding-right:0
    }
    .sponsors ul li{
        width:100%
    }
    @media (max-width:64em){
        .sponsors ul li{
            margin-left:0;
            margin-right:0
        }
    }
    .sponsors ul li .sponsors--image-wrapper{
        box-sizing:border-box;
        border-radius:11px;
        margin-bottom:1em;
        margin-top:1em;
        padding:0 .5em
    }
    .sponsors b{
        font-weight:700
    }
    .sponsors ul li .sponsors--image-wrapper img{
        width:100%;
        max-width:175px;
        border-radius:0;
        display:block;
        margin:0 auto
    }
    .sponsors ul li .sponsors--content-wrapper{
        margin-bottom:1.5em
    }
    .sponsors ul li .sponsors--title{
        margin-bottom:.5em;
        text-transform:uppercase;
        letter-spacing:2px;
        font-size:.75em;
        font-weight:700
    }
    .sponsors ul li .sponsors--text{
        letter-spacing:.25px;
        font-weight:300;
        line-height:1.4;
        -webkit-font-feature-settings:normal!important;
        font-feature-settings:normal!important
    }
    .sponsors ul li .sponsors--cta{
        padding:10px 14px;
        border-radius:3px;
        box-shadow:0 6px 13px 0 rgba(0,0,0,.15);
        text-transform:uppercase;
        white-space:nowrap;
        letter-spacing:1px;
        font-weight:700;
        font-size:12px;
        transition:all .3s ease-in-out;
        transform:translateY(-1px);
        margin-bottom:1em;
        margin-top:1em
    }
    .sponsors ul li a{
        display:block;
        padding:1em 1em 2em 1em;
        margin:0 auto;
        text-decoration:none;
        font-size:1.1em;
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif
    }
    @media all and (max-width:600px){
        .sponsors ul li{
            margin-bottom:2em;
            margin-right:0
        }
        .sponsors ul li a{
            text-align:center
        }
    }
    .sponsors__lead{
        position:relative
    }
    .sponsors__lead::before{
        position:absolute;
        border-bottom:8px solid #eee;
        left:0;
        transform:translate(0,-100%);
        top:-12px;
        content:"More after jump! Continue reading below ↓";
        font-size:.7em;
        color:#666;
        padding-bottom:10px;
        width:100%
    }
    .sponsors__row li{
        margin:0 2em
    }
    .sponsors.sponsors-leaderboard,.sponsors.sponsors__lead{
        width:100%;
        grid-column-start:2;
        grid-column-end:14;
        margin:4.5em auto 2em
    }
    .sponsors.sponsors-leaderboard ul li,.sponsors.sponsors__lead ul li{
        max-width:100%;
        width:100%;
        margin-bottom:0
    }
    .sponsors.sponsors-leaderboard ul li a,.sponsors.sponsors__lead ul li a{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:1em 2em
    }
    .sponsors.sponsors-leaderboard ul li .sponsors--content-wrapper,.sponsors.sponsors__lead ul li .sponsors--content-wrapper{
        flex-direction:column;
        text-align:left;
        flex-grow:1;
        margin-bottom:0
    }
    .sponsors.sponsors-leaderboard ul li .sponsors--image-wrapper,.sponsors.sponsors__lead ul li .sponsors--image-wrapper{
        margin:0;
        flex-shrink:1;
        flex-grow:0;
        margin-right:1em
    }
    .sponsors.sponsors-leaderboard ul li .sponsors--cta,.sponsors.sponsors__lead ul li .sponsors--cta{
        margin-left:1em;
        display:inline
    }
    @media screen and (max-width:600px){
        .sponsors.sponsors-leaderboard ul li a,.sponsors.sponsors__lead ul li a{
            display:block
        }
        .sponsors.sponsors-leaderboard ul li .sponsors--content-wrapper,.sponsors.sponsors__lead ul li .sponsors--content-wrapper{
            margin-top:1em
        }
        .sponsors.sponsors-leaderboard ul li .sponsors--cta,.sponsors.sponsors__lead ul li .sponsors--cta{
            margin-top:2em;
            margin-left:0;
            display:block
        }
    }
    .sponsors.sponsors-leaderboard{
        margin-top:2em
    }
    .sponsors__mobile{
        display:none
    }
    .sponsors__lead.sponsors__video{
        margin:1em 0;
        height:250px
    }
    @font-face{
        font-family:DinMedium;
        src:url(/fonts/DinMedium.woff2) format("woff2");
        font-weight:400;
        font-style:normal;
        font-display:swap
    }
    #sponsors-main-page{
        align-self:center
    }
    .ladda-button{
        position:relative
    }
    .btn.ladda-button--fixed[disabled]{
        margin-top:0
    }
    .ladda-button .ladda-spinner{
        position:absolute;
        z-index:2;
        display:inline-block;
        width:32px;
        height:32px;
        top:50%;
        margin-top:0;
        opacity:0;
        pointer-events:none
    }
    .ladda-button .ladda-label{
        position:relative;
        z-index:3
    }
    .ladda-button .ladda-progress{
        position:absolute;
        width:0;
        height:100%;
        left:0;
        top:0;
        background:rgba(0,0,0,.2);
        visibility:hidden;
        opacity:0;
        transition:.1s linear all!important
    }
    .ladda-button[data-loading] .ladda-progress{
        opacity:1;
        visibility:visible
    }
    .ladda-button,.ladda-button .ladda-label,.ladda-button .ladda-spinner{
        transition:.3s cubic-bezier(.175,.885,.32,1.275) all!important
    }
    .ladda-button[data-style=zoom-in],.ladda-button[data-style=zoom-in] .ladda-label,.ladda-button[data-style=zoom-in] .ladda-spinner,.ladda-button[data-style=zoom-out],.ladda-button[data-style=zoom-out] .ladda-label,.ladda-button[data-style=zoom-out] .ladda-spinner{
        transition:.3s ease all!important
    }
    .ladda-button[data-style=expand-right] .ladda-spinner{
        right:-6px
    }
    .ladda-button[data-style=expand-right][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-right][data-size=xs] .ladda-spinner{
        right:-12px
    }
    .ladda-button[data-style=expand-right][data-loading]{
        padding-right:56px
    }
    .ladda-button[data-style=expand-right][data-loading] .ladda-spinner{
        opacity:1
    }
    .ladda-button[data-style=expand-right][data-loading][data-size="s"],.ladda-button[data-style=expand-right][data-loading][data-size=xs]{
        padding-right:40px
    }
    .ladda-button[data-style=expand-left] .ladda-spinner{
        left:26px
    }
    .ladda-button[data-style=expand-left][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-left][data-size=xs] .ladda-spinner{
        left:4px
    }
    .ladda-button[data-style=expand-left][data-loading]{
        padding-left:56px
    }
    .ladda-button[data-style=expand-left][data-loading] .ladda-spinner{
        opacity:1
    }
    .ladda-button[data-style=expand-left][data-loading][data-size="s"],.ladda-button[data-style=expand-left][data-loading][data-size=xs]{
        padding-left:40px
    }
    .ladda-button[data-style=expand-up]{
        overflow:hidden
    }
    .ladda-button[data-style=expand-up] .ladda-spinner{
        top:-32px;
        left:50%;
        margin-left:0
    }
    .ladda-button[data-style=expand-up][data-loading]{
        padding-top:54px
    }
    .ladda-button[data-style=expand-up][data-loading] .ladda-spinner{
        opacity:1;
        top:26px;
        margin-top:0
    }
    .ladda-button[data-style=expand-up][data-loading][data-size="s"],.ladda-button[data-style=expand-up][data-loading][data-size=xs]{
        padding-top:32px
    }
    .ladda-button[data-style=expand-up][data-loading][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-up][data-loading][data-size=xs] .ladda-spinner{
        top:4px
    }
    .ladda-button[data-style=expand-down]{
        overflow:hidden
    }
    .ladda-button[data-style=expand-down] .ladda-spinner{
        top:62px;
        left:50%;
        margin-left:0
    }
    .ladda-button[data-style=expand-down][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-down][data-size=xs] .ladda-spinner{
        top:40px
    }
    .ladda-button[data-style=expand-down][data-loading]{
        padding-bottom:54px
    }
    .ladda-button[data-style=expand-down][data-loading] .ladda-spinner{
        opacity:1
    }
    .ladda-button[data-style=expand-down][data-loading][data-size="s"],.ladda-button[data-style=expand-down][data-loading][data-size=xs]{
        padding-bottom:32px
    }
    .ladda-button[data-style=slide-left]{
        overflow:hidden
    }
    .ladda-button[data-style=slide-left] .ladda-label{
        position:relative
    }
    .ladda-button[data-style=slide-left] .ladda-spinner{
        left:100%;
        margin-left:0
    }
    .ladda-button[data-style=slide-left][data-loading] .ladda-label{
        opacity:0;
        left:-100%
    }
    .ladda-button[data-style=slide-left][data-loading] .ladda-spinner{
        opacity:1;
        left:50%
    }
    .ladda-button[data-style=slide-right]{
        overflow:hidden
    }
    .ladda-button[data-style=slide-right] .ladda-label{
        position:relative
    }
    .ladda-button[data-style=slide-right] .ladda-spinner{
        right:100%;
        margin-left:0;
        left:16px
    }
    .ladda-button[data-style=slide-right][data-loading] .ladda-label{
        opacity:0;
        left:100%
    }
    .ladda-button[data-style=slide-right][data-loading] .ladda-spinner{
        opacity:1;
        left:50%
    }
    .ladda-button[data-style=slide-up]{
        overflow:hidden
    }
    .ladda-button[data-style=slide-up] .ladda-label{
        position:relative
    }
    .ladda-button[data-style=slide-up] .ladda-spinner{
        left:50%;
        margin-left:0;
        margin-top:1em
    }
    .ladda-button[data-style=slide-up][data-loading] .ladda-label{
        opacity:0;
        top:-1em
    }
    .ladda-button[data-style=slide-up][data-loading] .ladda-spinner{
        opacity:1;
        margin-top:0
    }
    .ladda-button[data-style=slide-down]{
        overflow:hidden
    }
    .ladda-button[data-style=slide-down] .ladda-label{
        position:relative
    }
    .ladda-button[data-style=slide-down] .ladda-spinner{
        left:50%;
        margin-left:0;
        margin-top:-2em
    }
    .ladda-button[data-style=slide-down][data-loading] .ladda-label{
        opacity:0;
        top:1em
    }
    .ladda-button[data-style=slide-down][data-loading] .ladda-spinner{
        opacity:1;
        margin-top:0
    }
    .ladda-button[data-style=zoom-out]{
        overflow:hidden
    }
    .ladda-button[data-style=zoom-out] .ladda-spinner{
        left:50%;
        margin-left:32px;
        transform:scale(2.5)
    }
    .ladda-button[data-style=zoom-out] .ladda-label{
        position:relative;
        display:inline-block
    }
    .ladda-button[data-style=zoom-out][data-loading] .ladda-label{
        opacity:0;
        transform:scale(.5)
    }
    .ladda-button[data-style=zoom-out][data-loading] .ladda-spinner{
        opacity:1;
        margin-left:0;
        transform:none
    }
    .ladda-button[data-style=zoom-in]{
        overflow:hidden
    }
    .ladda-button[data-style=zoom-in] .ladda-spinner{
        left:50%;
        margin-left:-16px;
        transform:scale(.2)
    }
    .ladda-button[data-style=zoom-in] .ladda-label{
        position:relative;
        display:inline-block
    }
    .ladda-button[data-style=zoom-in][data-loading] .ladda-label{
        opacity:0;
        transform:scale(2.2)
    }
    .ladda-button[data-style=zoom-in][data-loading] .ladda-spinner{
        opacity:1;
        margin-left:0;
        transform:none
    }
    .ladda-button[data-style=contract]{
        overflow:hidden;
        width:100px
    }
    .ladda-button[data-style=contract] .ladda-spinner{
        left:50%;
        margin-left:0
    }
    .ladda-button[data-style=contract][data-loading]{
        border-radius:50%;
        width:52px
    }
    .ladda-button[data-style=contract][data-loading] .ladda-label{
        opacity:0
    }
    .ladda-button[data-style=contract][data-loading] .ladda-spinner{
        opacity:1
    }
    .ladda-button[data-style=contract-overlay]{
        overflow:hidden;
        width:100px;
        box-shadow:0 0 0 2000px transparent
    }
    .ladda-button[data-style=contract-overlay] .ladda-spinner{
        left:50%;
        margin-left:0
    }
    .ladda-button[data-style=contract-overlay][data-loading]{
        border-radius:50%;
        width:52px;
        box-shadow:0 0 0 2000px rgba(0,0,0,.8)
    }
    .ladda-button[data-style=contract-overlay][data-loading] .ladda-label{
        opacity:0
    }
    .ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner{
        opacity:1
    }
    ul.leaders{
        max-width:30em;
        padding:1em 0 1em 0;
        margin:0;
        overflow-x:hidden;
        list-style:none
    }
    ul.leaders .leaders__header{
        font-weight:700;
        color:#d33a2c;
        font-size:1.05em
    }
    .wf-loaded-stage2 .accordion-expand-btn,.wf-loaded-stage2 .article__comment header,.wf-loaded-stage2 .book--featured__title,.wf-loaded-stage2 .book-cta__price,.wf-loaded-stage2 .book-cta__price--del,.wf-loaded-stage2 .book-cta__price--old,.wf-loaded-stage2 .btn,.wf-loaded-stage2 .cart .checkout,.wf-loaded-stage2 .cart-trigger,.wf-loaded-stage2 .comment__reply-to-container .comment__reply-to,.wf-loaded-stage2 .error-msg:not([value=""]),.wf-loaded-stage2 .feature-panel::before,.wf-loaded-stage2 .mija,.wf-loaded-stage2 .pull-quote,.wf-loaded-stage2 .read-more-link,.wf-loaded-stage2 .sponsors__lead::before,.wf-loaded-stage2 .toolbar-item,.wf-loaded-stage2 form fieldset legend,.wf-loaded-stage2 ol>li::before,.wf-loaded-stage2 ul.leaders .leaders__header{
        font-family:Mija
    }
    ul.leaders .leaders__header::before{
        color:#d33a2c
    }
    ul.leaders li{
        padding-left:0
    }
    ul.leaders li::before{
        float:left;
        width:0;
        white-space:nowrap;
        color:#ccc;
        font-weight:400;
        content:". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . "
    }
    ul.leaders span:first-child{
        padding-right:.25em;
        background:#fff
    }
    ul.leaders span+span{
        float:right;
        padding-left:.33em;
        background:#fff
    }
    .author{
        padding:0;
        margin:0 0 .5em 0;
        display:block;
        --author-bio-border-width:8px
    }
    @media screen and (min-width:40em){
        .author{
            display:flex;
            --author-bio-border-width:5px
        }
    }
    @media screen and (min-width:64em){
        .author{
            display:block
        }
    }
    .author>a{
        display:block;
        width:100%;
        padding:0;
        background:0 0;
        text-shadow:none;
        color:inherit
    }
    .author--small{
        width:80px;
        max-width:100%;
        min-width:60px;
        float:left
    }
    .author--small:after,.author--small:before{
        content:" ";
        display:table;
        clear:both
    }
    @media all and (max-width:480px){
        .author--small{
            margin-right:.5em;
            width:60px
        }
    }
    .author--small .author__image,.col-1 .author__image{
        border-width:5px;
        border-radius:11px
    }
    .author--medium{
        width:125px
    }
    .article--multi__authors .show-more-link{
        display:inline
    }
    .header__search-results .author__image{
        border-color:#fff
    }
    .author__image{
        transform-origin:0 100%;
        overflow:hidden;
        border-radius:11px
    }
    .author__image img{
        display:block;
        width:100%;
        border-radius:11px;
        transition:height .2s ease-in-out;
        -o-object-fit:cover;
        object-fit:cover
    }
    .author__image-wrapper{
        top:0;
        left:0;
        border-radius:11px;
        overflow:visible;
        position:relative
    }
    .author__image-wrapper .author__image{
        transform:translateX(15%) rotateZ(-11deg) scale(.87);
        transition:transform .2s ease-out
    }
    .author__image-wrapper .author__image img{
        transition:transform .2s ease-out;
        transform-origin:0 100%;
        transform:scale(1.2) translateX(-16%) translateY(-3%) rotateZ(11deg)
    }
    .author__image-wrapper::after{
        transition-duration:.2s;
        opacity:1;
        transform:scaleX(1)
    }
    .author__image-wrapper::before{
        display:block;
        content:"";
        height:90%;
        width:160%;
        position:absolute;
        background-image:url(/images/shadow.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        top:89%;
        left:-30%;
        right:0;
        transition:all .1s ease-out;
        transform-origin:30% 50%;
        pointer-events:none
    }
    .author__image-wrapper:hover .author__image,a:active .author__image-wrapper .author__image,a:focus .author__image-wrapper .author__image,a:hover .author__image-wrapper .author__image{
        transform:translateX(15%) rotateZ(0) scale(.87)
    }
    .author__image-wrapper:hover img,a:active .author__image-wrapper img,a:focus .author__image-wrapper img,a:hover .author__image-wrapper img{
        transform:scale(1.2) translateX(-10%) translateY(6%) rotateZ(0)
    }
    .author__image-wrapper:hover::before,a:active .author__image-wrapper::before,a:focus .author__image-wrapper::before,a:hover .author__image-wrapper::before{
        opacity:0;
        transform:scaleX(0)
    }
    .author__image .js-gravatar{
        width:100%
    }
    .author__image{
        transform:translateX(15%) rotateZ(0) scale(.87);
        transition:all .3s ease-in-out;
        background:#d33a2c;
        border-style:solid;
        border-color:#d33a2c;
        border-width:var(--author-bio-border-width,8px);
        border-radius:22px
    }
    .author__name{
        color:#000;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#2da2c5;
        text-decoration-color:#2da2c5;
        padding:10px 0;
        transition:color .1s ease-out
    }
    .author--full,.author--full--small{
        margin-right:0;
        width:100%
    }
    @media all and (max-width:480px){
        .author--full,.author--full--small{
            width:100%;
            max-width:250px;
            margin:0 auto
        }
    }
    .author>a:active .tilt,.author>a:focus .tilt,.author__image-wrapper.tilt:hover{
        transition-duration:.2s
    }
    .author>a:active .tilt .author__image,.author>a:focus .tilt .author__image,.author__image-wrapper.tilt:hover .author__image{
        transform:translateX(15%) rotateZ(0) scale(.87);
        transition-duration:.2s
    }
    .author>a:active .tilt img,.author>a:focus .tilt img,.author__image-wrapper.tilt:hover img{
        transform:scale(1.2) translateX(-10%) translateY(6%) rotateZ(0);
        transition-duration:.2s
    }
    .author>a:active .tilt::before,.author>a:focus .tilt::before,.author__image-wrapper.tilt:hover::before{
        opacity:0;
        transform:scaleX(0);
        transition-duration:.2s
    }
    .author__desc__image-placeholder{
        background:#bc3428;
        width:100%
    }
    .author__desc__image-placeholder[data-src]{
        min-height:0!important;
        padding-top:100%
    }
    .author__desc__image-placeholder[src]{
        padding-top:0
    }
    .author__image-wrapper::before,.books__book__image::before{
        display:block;
        content:"";
        height:90%;
        width:160%;
        position:absolute;
        background-image:url(data:image/png;
        base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAASCAYAAABim40OAAACuElEQVRogc1XUZJjIQjEzN7/yMl8ucP0dkNjXrKh6pWAqERaICveR+vD96vo8cazOvoYX54NwOl6Z52ycc907E4C4a45DfKrwHH5vpPgd7aTYKNOyUvYKL7zRZG6WNRP5cne7pxrMwHLEbCqS3aDMglwpcvjMmTGVz4wejQ86lDfjZ0OeSY/az/VMaJ2XQZA/QQQChSKV99N8OpjvuHvUsGt+ErX2bI9q7Hy0dE580pnZ0R1uTi/eSVX2SLrbmKeAeQG34qIL2KDozo/kwosBv4Ouk5WOheMyrfK5t1Z8K++Ak9XVjK/ZRW8LnMgYDZQtpx5lBFoERxI//z40EFmQLgn2R27PZkP0fDVGmaj5thdoE7JEREPBR6nFJ1+CCAFgq9mVF91dhUcBRgGHMWjju0TZN7xi+nVGmaH8wG2IeaUHH+ibyqRTuxZCVGyAhgrZQi0KrtlYgHYAV1JXvET8IjfF7jnb4mPpMtg2TZbr0rpSnwQO9SzjLAauxV83Zj2j1FU9QtX0fQMfD1VM6zWn9D00agz3fOr866OwRF1mUe9EmaDL8d9HflF5jS/M8Yd1rHzsWzt87HMdr0D+sB6HixPXV/EyqH6QvCqBOE9qPXMTsmMqI3TMG9eNc7P9EJYYvK/KdUsZz0raZF06Hu+DCxBD+BZv1L1RKeAcXsZpnNtgtiEmEOeyRHx0zBvchtnHBWAUFa66q86ggltuj5HZU73pVdAcMHhAEX5xHys/Ge/j43IO/IvfZdxmM4FVDdOs1X1Twr3YWciTYPjZopXZILOxgWElVGIjs5V/Yw752QrxU/A1fGdL4yciz551U45qILa+fbsOmeutekud2I7BeJJhmPr3L07KlN0Y/eMzpmb2JzYntgfXfIr9nLWXgl0RuPLO1xzxdqPOPNK8FxJn+rXhP4HON5K31PHDhmjlm6fAAAAAElFTkSuQmCC);
        background-size:100% auto;
        background-repeat:no-repeat;
        top:89%;
        left:-30%;
        right:0;
        transition:all .1s ease-out;
        transform-origin:30% 50%;
        pointer-events:none
    }
    .author--full--small>a{
        width:80px;
        max-width:100%;
        min-width:60px
    }
    @media all and (max-width:480px){
        .author--full--small>a{
            min-width:40px;
            width:50px
        }
    }
    .author--full--small .author__desc{
        margin-top:.5em
    }
    .article-container .author--full>a{
        width:auto;
        margin-bottom:3em;
        margin-top:.5em;
        max-width:180px;
        flex-basis:100px;
        flex-shrink:0
    }
    @media screen and (min-width:48em){
        .article-container .author--full>a{
            flex-basis:160px
        }
    }
    .article-container figure.limit-width img{
        max-width:500px;
        margin:0 auto
    }
    .feature-panel-meta{
        text-transform:uppercase;
        letter-spacing:2px;
        font-size:.8em;
        font-weight:700;
        display:block;
        margin-bottom:.75em
    }
    .feature-panel-image-link::before{
        display:block;
        content:"";
        height:90%;
        width:160%;
        position:absolute;
        background-image:url(/images/shadow.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        right:0;
        transition:all .1s ease-out;
        transform-origin:30% 50%;
        pointer-events:none;
        top:85%;
        left:-33%
    }
    @media (min-width:1000px){
        .feature-panel--breakout-small .feature-panel-image-link{
            top:-100px
        }
    }
    .feature-panel-image-link:focus::before,.feature-panel-image-link:hover::before{
        transform:scaleX(0);
        opacity:0
    }
    .feature-panel-image-link:focus .feature-panel-image,.feature-panel-image-link:hover .feature-panel-image{
        transform:rotate(0)
    }
    .feature-panel-image img{
        height:auto;
        border-radius:11px
    }
    .article__comments-count{
        font-size:1rem
    }
    .article__comment .author{
        display:block
    }
    @media (max-width:64em){
        .article__comment .author{
            display:none
        }
    }
    .article__content video{
        max-width:100%
    }
    .article__content [data-src],[data-src]{
        display:block;
        width:100%
    }
    .article__content [data-src]:not([data-component]){
        min-height:350px
    }
    a.heading-hash{
        background:0 0;
        padding:0;
        position:absolute;
        left:-25px;
        top:0;
        width:1em;
        height:1em
    }
    @media all and (max-width:840px){
        a.heading-hash{
            position:static
        }
    }
    pre.code__snippet--break-out{
        width:87vw;
        position:relative;
        left:50%;
        right:50%;
        margin:0;
        margin-left:calc(-50vw + 50%)!important;
        margin-right:calc(-50vw + 50%)!important
    }
    pre.code__snippet--break-out img{
        width:100%
    }
    @media all and (max-width:1025px){
        pre.code__snippet--break-out{
            position:static;
            margin:0!important
        }
    }
    .signature img{
        width:2em;
        margin-right:.75em;
        vertical-align:middle;
        position:relative;
        top:.5em
    }
    .ciu_embed iframe{
        min-height:420px
    }
    @media screen and (max-width:610px){
        .ciu_embed iframe{
            min-height:500px
        }
    }
    audio{
        width:100%
    }
    blockquote:not(.pull-quote) code{
        font-style:normal
    }
    blockquote:not(.pull-quote) p{
        margin:0
    }
    .block-quote{
        margin:1em 0;
        font-style:italic
    }
    .block-quote__cut:not(.pull-quote){
        padding:2em;
        background:#f6f6f6;
        border:none;
        margin:1em 0;
        border-radius:11px;
        grid-column-start:2;
        grid-column-end:14;
        font-size:.9em
    }
    .block-quote__cut:not(.pull-quote) h4:first-child{
        margin-top:0
    }
    .article__content figure:not(.bio-image),.article__image,.internal__page__wrapper figure:not(.bio-image){
        padding:0;
        margin:1em auto
    }
    .article__content figure:not(.bio-image) img,.article__image img{
        display:block;
        width:auto;
        max-width:100%;
        margin:0 auto;
        height:auto
    }
    .article__content figure:not(.bio-image).article__image--full-width img,.article__image.article__image--full-width img{
        width:100%;
        max-width:100%
    }
    .article__content figure:not(.bio-image)>a,.article__image>a{
        display:block;
        background:0 0;
        position:relative;
        z-index:99
    }
    .article__content .author figcaption::before{
        display:none
    }
    figure.article__image--break-out{
        width:87vw;
        position:relative;
        left:50%;
        right:50%;
        margin:0;
        margin-left:calc(-50vw + 50%)!important;
        margin-right:calc(-50vw + 50%)!important
    }
    figure.article__image--break-out img{
        width:100%
    }
    @media all and (max-width:1025px){
        figure.article__image--break-out{
            position:static;
            margin:0!important
        }
    }
    .article__content figure.article__image--inline>a,.article__image figure.article__image--inline>a,.internal__page__wrapper figure.article__image--inline>a{
        display:inline-block
    }
    .article__content figure.zoom-overlay-open a{
        outline:0!important
    }
    .article__content figure.zoom-overlay-open a:after{
        display:none
    }
    .zoom-overlay{
        display:block;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#fff;
        opacity:.9;
        z-index:1
    }
    .video-embed-container{
        width:100%
    }
    .video-embed-container .video-embed-container--inner{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        border:0
    }
    .article__content .aspect-ratio,.article__content .video-container{
        position:relative;
        padding:1em 0;
        width:100%
    }
    .article__content .aspect-ratio iframe,.article__content .video-container iframe{
        width:100%;
        min-height:400px
    }
    .article__content .aspect-ratio iframe::after,.article__content .video-container iframe::after{
        white-space:pre
    }
    @media all and (max-width:600px){
        .article__content .aspect-ratio iframe,.article__content .video-container iframe{
            min-height:300px
        }
    }
    @media all and (max-width:400px){
        .article__content .aspect-ratio iframe,.article__content .video-container iframe{
            min-height:250px
        }
    }
    .comment-form__sticky{
        margin-bottom:2em
    }
    .comment-form__sticky .btn{
        text-shadow:1px 1px 1px rgba(0,0,0,.25)
    }
    @media all and (min-height:500px){
        div[data-component=CommentsArea]{
            overflow:initial
        }
        .comment-form__sticky{
            position:sticky;
            top:-3.5em;
            align-self:flex-start
        }
    }
    .article__comments{
        padding:5em 0 2.5em;
        padding-right:30px;
        -webkit-font-feature-settings:normal;
        font-feature-settings:normal
    }
    .article__comments:after,.article__comments:before{
        content:" ";
        display:table;
        clear:both
    }
    @media screen and (min-width:64em){
        .article__comments{
            padding-right:0
        }
        .article__comments .article__comment-wrapper{
            margin-left:2em
        }
    }
    .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment{
        background-color:#f0f0f0;
        padding:1.25em;
        border-radius:11px
    }
    @media screen and (min-width:64em){
        .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment{
            padding:1.25em 2em 1.25em calc(4.5em + 1em + .4vw)
        }
    }
    .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment a{
        padding:10px 0;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#006fc6;
        text-decoration-color:#006fc6;
        transition:color .1s ease-out
    }
    .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment .author--avatar-only a{
        background-image:none
    }
    .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment-wrapper>.article__comment{
        background-color:#fff6db
    }
    .article__comments .article__comment-wrapper>.article__comment-wrapper .article__comment-wrapper>.article__comment span a{
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#006fc6;
        text-decoration-color:#006fc6;
        padding:10px 0;
        transition:color .1s ease-out
    }
    .comment__content{
        overflow-wrap:break-word;
        word-wrap:break-word;
        word-break:break-word
    }
    .comment__content pre{
        margin:1em 0
    }
    .article__comments--notes{
        margin-bottom:2em;
        line-height:1.6em;
        display:block;
        background-color:#fff2cc;
        padding:1em 1.25em;
        border-radius:11px
    }
    .article__comments--notes code{
        display:inline;
        background-color:#fff2cc;
        color:#d33a2c
    }
    .article__comments--notes a{
        text-shadow:none;
        color:#006fc6
    }
    .comments__comment-count{
        color:#666;
        font-size:.5em;
        line-height:0;
        position:relative;
        top:-1em
    }
    .article__comment .author__image-wrapper{
        min-width:auto;
        min-height:auto
    }
    @media screen and (min-width:64em){
        .article__comment .author__image-wrapper{
            min-width:80px;
            min-height:80px
        }
    }
    .article__comment a{
        color:#006fc6
    }
    .article__comment{
        margin:3em 0
    }
    @media all and (min-width:1025px){
        .article__comment{
            padding-left:4.5em
        }
    }
    .article__comment button::after{
        content:" ↓"
    }
    @media all and (min-width:1025px){
        .article__comment button::after{
            content:" →"
        }
    }
    .article__comment header{
        color:#666;
        font-weight:700;
        margin-bottom:0
    }
    @media screen and (min-width:64em){
        .article__comment header{
            margin-bottom:1em
        }
    }
    .article__comment time{
        font-weight:400;
        font-size:.9em
    }
    .article__comment p{
        margin:.75em 0;
        font-size:calc(.9em + .1vw);
        padding-bottom:.1em
    }
    @media all and (max-width:1023px){
        .article__comment p{
            font-size:calc(.95em + .1vw);
            padding-top:.75em
        }
        .article__comment p:first-child{
            padding-top:.5em
        }
    }
    @media (max-width:48em){
        .article__comment p{
            font-size:calc(.95em + .1vw);
            padding-top:.5em
        }
    }
    .article__comment .author--avatar-only{
        width:40px;
        position:relative;
        margin-right:1.5em;
        transform:translateY(15px);
        margin-top:-1em;
        float:left
    }
    @media screen and (min-width:64em){
        .article__comment .author--avatar-only{
            margin-left:-4.75em;
            margin-right:2em;
            width:2.5em
        }
    }
    .article__comment .author--avatar-only .author__image-wrapper{
        margin-right:2em
    }
    .article__comment-verified span{
        padding:.25em .5em;
        border-radius:11px;
        margin-left:-.5em;
        background-color:#fff2cc;
        color:#d33a2c
    }
    .article__comment-verified span:after{
        content:"🦁";
        display:inline-block;
        position:relative;
        top:.15em;
        margin-left:.25em
    }
    .form__field.comment__message-field .form__field__label,.form__field.comment__name-field .form__field__label,.form__field.comment__twitter-field .form__field__label{
        font-size:1em
    }
    .comment__reply-to{
        color:#666;
        font-weight:700;
        margin-right:10px;
        display:none
    }
    .comment__reply-to-container{
        position:relative;
        overflow:visible
    }
    .comment__reply-to-container .comment__reply-to{
        position:absolute;
        top:1.3em;
        left:1em;
        margin-right:0;
        font-size:.9em;
        line-height:calc(1.4em + .2vw);
        background-color:#fff2cc;
        padding:.1em .5em
    }
    .article__comments__form__desc{
        margin-top:5.5em
    }
    @media (max-width:64em){
        .article__comments__form__desc{
            margin-top:2.5em
        }
    }
    .comment__message-notification{
        animation:content-injection .2s backwards;
        background-color:#fff2cc;
        padding:.75em 1em;
        border-radius:11px
    }
    @media (min-width:64rem) and (max-height:740px){
        .comment__message-field textarea{
            height:12em
        }
    }
    @media (min-width:64rem) and (max-height:640px){
        .article__comments--notes{
            display:none
        }
        .comment__message-field textarea{
            height:5em
        }
    }
    .table time,table time{
        color:inherit;
        font-size:1em;
        font-weight:400
    }
    .tr,tr{
        border-bottom:1px solid #eeecec
    }
    .tbody .td,tbody td{
        text-align:left
    }
    .tbody .th,.tbody th,tbody .th,tbody th{
        font-size:1.15em
    }
    .no-js .data-table dt:first-child{
        width:60%
    }
    @media (max-width:640px){
        .no-js .data-table{
            font-size:1em
        }
        .no-js .data-table thead tr{
            position:absolute;
            top:-9999em;
            left:-9999em
        }
        .no-js .data-table tr+tr{
            margin-top:1.5em
        }
        .no-js .data-table td,.no-js .data-table tr{
            display:block
        }
        .no-js .data-table td{
            padding-left:50%!important;
            border:none!important
        }
        .no-js .data-table td:before{
            content:attr(data-label);
            float:left;
            margin-left:-100%;
            width:100%;
            color:#666;
            margin-bottom:.5em;
            font-weight:700;
            font-style:normal;
            font-variant:initial;
            text-transform:none
        }
    }
    @media (max-width:400px){
        .no-js .data-table td{
            padding-left:0!important
        }
        .no-js .data-table td:before{
            display:block;
            margin-left:0
        }
    }
    tfoot tr:nth-child(2n) td,tfoot tr:nth-child(2n) th,thead tr:nth-child(2n) td,thead tr:nth-child(2n) th{
        background-color:#f7f7f7
    }
    .table--no-stripe td{
        background-color:#fff!important
    }
    table.table--break-out{
        width:87vw;
        position:relative;
        left:50%;
        right:50%;
        margin:0;
        margin-left:calc(-50vw + 50%)!important;
        margin-right:calc(-50vw + 50%)!important;
        margin-bottom:calc(2em + 2vw)
    }
    table.table--break-out img{
        width:100%
    }
    @media all and (max-width:1025px){
        table.table--break-out{
            position:static;
            margin:0!important
        }
    }
    code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{
        text-shadow:none;
        background:#b3d4fc
    }
    code[class*=language-] ::selection,pre[class*=language-]::selection{
        text-shadow:none;
        background:#b3d4fc
    }
    @media print{
        code[class*=language-],pre[class*=language-]{
            text-shadow:none
        }
    }
    pre[class*=language-]{
        padding:1rem;
        margin:.5rem 0;
        overflow:auto
    }
    :not(pre)>code[class*=language-],pre[class*=language-]{
        background:#f5f2f0
    }
    :not(pre)>code[class*=language-]{
        padding:.1em;
        border-radius:.3em;
        white-space:normal
    }
    .token.cdata,.token.comment,.token.doctype,.token.prolog{
        color:#708090
    }
    .token.punctuation{
        color:#999
    }
    .token.namespace{
        opacity:.7
    }
    .token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{
        color:#905
    }
    .token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{
        color:#690
    }
    .language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{
        color:#9a6e3a;
        background:rgba(255,255,255,.5)
    }
    .token.atrule,.token.attr-value,.token.keyword{
        color:#07a
    }
    .token.class-name,.token.function{
        color:#dd4a68
    }
    .token.important,.token.regex,.token.variable{
        color:#e90
    }
    .token.bold,.token.important{
        font-weight:700
    }
    .token.italic{
        font-style:italic
    }
    .token.entity{
        cursor:help
    }
    pre.diff-highlight>code .token.deleted:not(.prefix),pre>code.diff-highlight .token.deleted:not(.prefix){
        background-color:rgba(255,0,0,.1);
        color:inherit;
        display:block
    }
    pre.diff-highlight>code .token.inserted:not(.prefix),pre>code.diff-highlight .token.inserted:not(.prefix){
        background-color:rgba(0,255,128,.1);
        color:inherit;
        display:block
    }
    pre[class*=language-].line-numbers{
        position:relative;
        padding-left:3.8em;
        counter-reset:linenumber
    }
    pre[class*=language-].line-numbers>code{
        position:relative;
        white-space:inherit
    }
    .line-numbers .line-numbers-rows{
        position:absolute;
        pointer-events:none;
        top:0;
        font-size:100%;
        left:-3.8em;
        width:3em;
        letter-spacing:-1px;
        border-right:1px solid #aaa;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none
    }
    .line-numbers-rows>span{
        display:block;
        counter-increment:linenumber
    }
    .line-numbers-rows>span:before{
        content:counter(linenumber);
        color:#999;
        display:block;
        padding-right:.8em;
        text-align:right
    }
    .content-tabs{
        display:flex;
        flex-direction:row;
        min-width:200px;
        white-space:nowrap;
        margin-left:auto;
        justify-content:center;
        border-radius:11px;
        min-height:4.5em;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#ddd),to(#ddd));
        background-image:linear-gradient(#ddd,#ddd);
        background-size:100% 1px;
        background-repeat:no-repeat;
        background-position:center center
    }
    .content-tabs ul{
        padding-left:0
    }
    .content-tabs li{
        display:inline-block;
        margin-right:0;
        margin-bottom:0
    }
    .content-tabs li:first-child{
        padding-left:0
    }
    .content-tabs .content-tabs__current .btn{
        background-color:#41b14f!important;
        color:#fff!important;
        text-shadow:1px 1px 1px rgba(0,0,0,.25)!important;
        border:0;
        box-shadow:inset 0 2px 1px rgba(0,0,0,.2)
    }
    @media all and (min-width:481px){
        .content-tabs.content-tabs--books{
            display:none
        }
    }
    @media screen and (min-width:64em){
        .content-tabs.content-tabs--internal,.content-tabs.content-tabs--membership{
            display:none
        }
    }
    @media all and (max-width:480px){
        .content-tab--content.slideDown:not(.hidden){
            animation:content-injection .4s forwards
        }
    }
    .book-grid{
        display:flex;
        flex-wrap:wrap;
        max-width:95%
    }
    .book-grid__heading{
        margin:2vh 0;
        width:20em
    }
    @media all and (max-width:1025px){
        .book-grid__heading{
            margin:2em 0 1em
        }
    }
    @media (max-width:40em){
        .book-grid__heading{
            text-align:left
        }
        .book-grid__heading span{
            padding:0
        }
    }
    .book--featured{
        padding:1em;
        text-align:center;
        vertical-align:bottom;
        margin:1em -4px 3em 0;
        width:33%;
        border-radius:11px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start
    }
    @media all and (max-width:480px){
        .book--featured{
            width:100%
        }
    }
    @media (max-width:48em){
        .book--featured{
            flex:1;
            flex-basis:150px
        }
    }
    .book--featured figcaption{
        color:#333;
        font-size:1em;
        flex-basis:100%
    }
    .book--featured__image{
        margin:1em 0;
        max-width:200px;
        padding:0 20px;
        left:.5em;
        display:inline-block;
        flex-shrink:0;
        position:relative;
        max-height:240px;
        height:auto
    }
    .book--featured__image::before{
        display:block;
        content:"";
        height:90%;
        width:160%;
        position:absolute;
        background-image:url(/images/shadow.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        right:0;
        transition:all .1s ease-out;
        transform-origin:30% 50%;
        pointer-events:none;
        top:85%;
        left:-42%
    }
    .book--featured__image a{
        background-image:none
    }
    .book--featured__image img{
        will-change:transform;
        transform-origin:0 100%;
        transform:rotate(-11deg);
        transition:transform .2s ease-out;
        height:100%
    }
    .book--featured__image:hover img{
        transform:rotate(0)
    }
    .book--featured__image:hover::before{
        display:none
    }
    .book--featured__title{
        font-size:1.1em;
        line-height:1.45;
        font-weight:700;
        margin:.5em 0 .5em 0;
        text-transform:initial;
        color:inherit;
        letter-spacing:0
    }
    .book--featured__title a{
        color:#006fc6;
        text-shadow:none
    }
    .book--featured__desc{
        margin:.5em 0;
        font-size:.85em;
        color:#666;
        font-style:italic;
        line-height:1.4
    }
    .book-grid__in-post figcaption::before{
        display:none!important
    }
    .book-grid__in-post h4 a{
        font-style:normal;
        color:#006fc6!important;
        background-image:none!important;
        text-decoration:underline
    }
    .book-cta{
        display:inline-block;
        width:100%;
        text-align:center
    }
    .book-cta__single{
        margin:0 auto;
        text-align:center
    }
    @media all and (min-width:1100px){
        .book-cta{
            grid-column-start:2;
            grid-column-end:14
        }
    }
    .book-cta__ebook,.book-cta__hardcover{
        width:48%;
        float:left;
        margin-right:4%
    }
    @media all and (max-width:480px){
        .book-cta__ebook,.book-cta__hardcover{
            width:100%;
            margin:0
        }
    }
    .book-cta__inverted{
        grid-column-start:2;
        grid-column-end:14
    }
    .book-cta__inverted .book-cta__hardcover{
        float:right;
        margin-right:0
    }
    .book-cta__inverted .book-cta__hardcover .btn{
        background-color:#41b14f;
        background-image:-webkit-gradient(linear,left top,left bottom,from(#9ec14c),to(#41b14f));
        background-image:linear-gradient(#9ec14c,#41b14f);
        color:#fff
    }
    .book-cta__inverted .book-cta__hardcover .btn:focus,.book-cta__inverted .book-cta__hardcover .btn:hover{
        background:#41b14f;
        color:#fff;
        border-color:#41b14f
    }
    .article__content figure:not(.bio-image) figcaption a.btn--green:active,.book-cta__inverted .book-cta__hardcover .btn:active{
        background-color:#1c8d44
    }
    .book-cta__inverted .book-cta__hardcover .btn span{
        color:rgba(0,0,0,.5)
    }
    .book-cta__ebook{
        margin-right:0
    }
    .book-cta .btn--full{
        margin-top:.75em
    }
    .book-cta__title{
        display:block;
        text-align:center;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#ddd;
        text-decoration-color:#ddd;
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        letter-spacing:1px;
        font-variant:petite-caps;
        text-transform:lowercase;
        line-height:1;
        color:#999;
        font-size:1em;
        margin:1em auto 1em
    }
    .book-cta__title a{
        background-position:center 72%
    }
    .book-cta__title span{
        display:inline-block;
        padding:0 .6em;
        background-color:#fff;
        position:relative;
        top:.1em;
        color:#666
    }
    .book-cta--on-red .book-cta__title{
        display:block;
        text-align:center;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#390c09;
        text-decoration-color:#390c09;
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        letter-spacing:1px;
        font-variant:petite-caps;
        text-transform:lowercase;
        line-height:1;
        margin:0;
        margin-bottom:1em
    }
    .book-cta--on-red .book-cta__title a{
        background-position:center 72%
    }
    .book-cta--on-red .book-cta__title span{
        display:inline-block;
        padding:0 .6em;
        position:relative;
        top:.1em;
        background-color:#d33a2c;
        color:#390c09
    }
    @media all and (max-width:480px){
        .book-cta__title{
            display:none
        }
    }
    .book-cta__price{
        color:#d33a2c;
        display:block;
        font-weight:700;
        margin:.5em 0;
        font-size:calc(1.6em + .25vw);
        text-align:center
    }
    .book-cta--on-red .book-cta__price{
        color:#fff
    }
    .book-cta__price .currency-sign{
        font-size:.5em
    }
    .book-cta__price .sup{
        font-size:.5em;
        vertical-align:top;
        line-height:1.5
    }
    .book-cta__price--del{
        font-size:.6em;
        color:#666;
        text-decoration:line-through;
        font-weight:400
    }
    .book-cta__price--old{
        display:inline-block;
        font-size:.65em;
        font-weight:700;
        color:#666;
        position:relative
    }
    .book-cta__price--old::before{
        content:"";
        display:block;
        position:absolute;
        width:100%;
        height:2px;
        border-radius:2px;
        background:#d33a2c;
        top:50%;
        margin-top:-2px;
        transform:rotate(-35deg)
    }
    .book-cta--on-red .book-cta__price--old{
        color:#390c09;
        position:relative
    }
    .book-cta--on-red .book-cta__price--old::before{
        content:"";
        display:block;
        position:absolute;
        width:100%;
        height:2px;
        border-radius:2px;
        background:#390c09;
        top:50%;
        margin-top:-2px;
        transform:rotate(-35deg)
    }
    .book-cta__desc{
        font-size:.8em!important;
        text-align:center;
        line-height:1.4;
        margin:25px 0
    }
    .book-cta--on-red .book-cta__desc{
        color:#fff
    }
    .book-cta__desc a{
        text-shadow:none
    }
    .book-cta__desc--light a{
        color:#006fc6
    }
    .accordion-list{
        margin:0 0 3em 0
    }
    .accordion-list:after,.accordion-list:before{
        content:" ";
        display:table;
        clear:both
    }
    .accordion-expand-btn-wrapper{
        position:absolute;
        right:10px;
        top:50%;
        margin-top:-15px
    }
    .accordion-expand-btn-wrapper::before{
        display:block;
        content:"";
        height:90%;
        position:absolute;
        background-image:url(/images/shadow.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        right:0;
        transition:all .1s ease-out;
        transform-origin:30% 50%;
        pointer-events:none;
        width:110%;
        top:76%;
        left:-17%
    }
    .accordion-expand-btn{
        font-size:30px;
        width:20px;
        transition:all .2s ease-in-out;
        position:relative;
        margin:0;
        float:right;
        margin-right:.25em
    }
    [aria-expanded=true] .accordion-expand-btn{
        transform:rotate(-45deg);
        color:#d33a2c;
        transition:all .2s ease-in-out
    }
    .accordion-desc{
        transition:max-height .4s linear,padding 0s linear 0s,color .2s ease-out;
        overflow:hidden;
        padding:.5em .8em;
        font-size:calc(16px + .35vw);
        display:block;
        margin:0;
        padding-top:1em;
        padding-bottom:2em
    }
    @media screen and (min-width:40em){
        .accordion-desc{
            padding:.5em
        }
    }
    .accordion-item{
        transition:max-height .4s linear,padding 0s linear 0s,color .2s ease-out;
        overflow:hidden;
        cursor:pointer;
        font-size:1em;
        font-weight:700;
        display:block;
        margin:0;
        position:relative;
        padding:calc(.5em + .5vw);
        padding-right:1.4em
    }
    .accordion-item:after,.accordion-item:before{
        content:" ";
        display:table;
        clear:both
    }
    .accordion-item:hover{
        color:#d33a2c
    }
    @media screen and (min-width:40em){
        .accordion-item{
            padding:.5em
        }
    }
    @media all and (max-width:480px){
        .accordion-item{
            padding-right:5px
        }
    }
    .bg--navy .accordion-item{
        font-weight:400
    }
    .accordion-item[aria-expanded=true]{
        color:#d33a2c
    }
    .accordion-desc:after,.accordion-desc:before{
        content:" ";
        display:table;
        clear:both
    }
    .accordion-desc p:first-of-type{
        margin-top:0
    }
    .accordion-list [aria-expanded=false]+dd{
        display:none;
        max-height:0;
        overflow:hidden;
        padding-top:0;
        padding-bottom:0;
        transition:max-height .4s linear,padding 0s linear .4s
    }
    .accordion-list [aria-expanded=true]+dd{
        display:block!important;
        max-height:2000px
    }
    .accordion-list [aria-hidden=false]{
        max-height:2000px
    }
    .accordion-list .is-hidden,.accordion-list [aria-hidden=true]{
        max-height:0;
        overflow:hidden;
        padding-top:0;
        padding-bottom:0
    }
    .accordion-list .is-visible{
        display:block!important;
        max-height:800px
    }
    .accordion-desc[aria-hidden=false]{
        box-shadow:0 9px 30px -5px rgba(50,50,83,.25),0 8px 8px -12px rgba(0,0,0,.2),0 -6px 16px -6px rgba(0,0,0,.025);
        border-radius:11px;
        padding:1.6em;
        background-color:#fff;
        margin:1.25em 0 3em 0
    }
    @media print{
        .accordion-desc,.accordion-list dd{
            display:block!important;
            max-height:1200px!important
        }
    }
    .bio-image{
        --bio-image-border-width:5px
    }
    .bio-image--white{
        --bio-image-border-color:#fff
    }
    .bio-image--white a{
        color:#fff;
        -webkit-text-decoration-line:underline;
        text-decoration-line:underline;
        -webkit-text-decoration-color:#fff;
        text-decoration-color:#fff;
        padding:10px 0;
        transition:color .1s ease-out
    }
    .pull-quote{
        font-weight:700;
        letter-spacing:-.75px;
        color:#222;
        font-size:1.5em;
        padding-left:2.5em;
        position:relative;
        margin:0
    }
    .pull-quote__quotation{
        position:absolute;
        left:0;
        top:5px;
        width:2em
    }
    .pull-quote__quotation::before{
        display:block;
        content:"";
        height:90%;
        width:160%;
        position:absolute;
        background-image:url(/images/shadow.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        top:89%;
        left:-30%;
        right:0;
        transition:all .2s ease-out;
        transform-origin:30% 50%;
        pointer-events:none;
        opacity:1;
        transform:scaleX(1);
        transition-delay:.2s
    }
    .pull-quote__link{
        font-size:1em;
        padding:0;
        display:block;
        line-height:46px;
        color:#333!important;
        background:0 0;
        text-decoration:none
    }
    .pull-quote__link::after{
        content:url(data:image/svg+xml;
        base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyMyIgd2lkdGg9IjI4cHgiIGhlaWdodD0iMjNweCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI3OTEuNTEiIHkxPSIyNzQuMzUiIHgyPSI3NzcuOCIgeTI9IjI1NC44NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U5MzcyMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y4NmYyNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TaGFyZSB0aGlzIHF1b3RlIG9uIFR3aXR0ZXI8L3RpdGxlPjxwYXRoIGlkPSJwYXRoMzYxMSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIiBkPSJNNzgwLjgxIDI3OC41N2MxMC41NyAwIDE2LjM0LTguODUgMTYuMzQtMTYuNTJ2LS43NWExMS43NSAxMS43NSAwIDAgMCAyLjg3LTMgMTEuMzYgMTEuMzYgMCAwIDEtMy4zLjkxIDUuODIgNS44MiAwIDAgMCAyLjUzLTMuMjEgMTEuNDUgMTEuNDUgMCAwIDEtMy42NSAxLjQxIDUuNzEgNS43MSAwIDAgMC00LjE5LTEuODMgNS43OCA1Ljc4IDAgMCAwLTUuNzUgNS44MSA1Ljg2IDUuODYgMCAwIDAgLjE1IDEuMzIgMTYuMjUgMTYuMjUgMCAwIDEtMTEuODEtNi4wOCA1Ljg1IDUuODUgMCAwIDAgMS43OCA3Ljc1IDUuNjYgNS42NiAwIDAgMS0yLjYtLjczdi4wN2E1Ljc5IDUuNzkgMCAwIDAgNC42MSA1LjY5IDUuNjggNS42OCAwIDAgMS0yLjU5LjEgNS43NiA1Ljc2IDAgMCAwIDUuMzcgNCAxMS41MiAxMS41MiAwIDAgMS04LjU3IDIuNDkgMTYuMTQgMTYuMTQgMCAwIDAgOC44MSAyLjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzcyLjAxIC0yNTUuNTcpIi8+PC9zdmc+);
        display:inline-block;
        margin-left:.3em
    }
    @media screen and (min-width:80em){
        .pull-quote{
            font-size:32px
        }
        .pull-quote__link{
            line-height:42px
        }
    }
    @media screen and (min-width:48em){
        .pull-quote{
            font-size:28px
        }
        .pull-quote__link{
            line-height:1.4
        }
    }
    @media all and (max-width:480px){
        .pull-quote{
            font-size:24px
        }
        .pull-quote__link{
            line-height:38px
        }
    }
    .pull-quote__bg{
        width:2em;
        height:2em;
        background:#d33a2c;
        border-radius:11px;
        transition:transform .3s ease-out;
        transform-origin:bottom left;
        transform:scale(1) rotateZ(-11deg);
        text-align:center;
        padding-top:.25em
    }
    .pull-quote__symbol{
        display:block;
        color:#fff;
        font-size:2.75em;
        line-height:1em;
        transform:rotate(11deg) translateY(5px) translateX(-4px)
    }
    .small-caps{
        -webkit-font-feature-settings:"smcp" 1,"c2sc" 1;
        font-feature-settings:"smcp" 1,"c2sc" 1;
        letter-spacing:1px;
        font-variant:petite-caps;
        text-transform:lowercase;
        background-position:center 72%
    }
    .small-caps a{
        background-position:center 72%
    }
    .clearfix:after,.clearfix:before{
        content:" ";
        display:table;
        clear:both
    }
    .l-section--medium{
        margin-top:3rem
    }
    .no-overflow{
        overflow:initial
    }
    .pan,.ptn,.pvn{
        padding-top:0!important
    }
    .pas,.pts,.pvs{
        padding-top:5px!important
    }
    .pam,.ptm,.pvm{
        padding-top:10px!important
    }
    .pal,.ptl,.pvl{
        padding-top:20px!important
    }
    .pan,.phn,.prn{
        padding-right:0!important
    }
    .pas,.phs,.prs{
        padding-right:5px!important
    }
    .pam,.phm,.prm{
        padding-right:10px!important
    }
    .pal,.phl,.prl{
        padding-right:20px!important
    }
    .pan,.pbn,.pvn{
        padding-bottom:0!important
    }
    .pas,.pbs,.pvs{
        padding-bottom:5px!important
    }
    .pam,.pbm,.pvm{
        padding-bottom:10px!important
    }
    .pal,.pbl,.pvl{
        padding-bottom:20px!important
    }
    .pan,.phn,.pln{
        padding-left:0!important
    }
    .pas,.phs,.pls{
        padding-left:5px!important
    }
    .pam,.phm,.plm{
        padding-left:10px!important
    }
    .pal,.phl,.pll{
        padding-left:20px!important
    }
    .man,.mtn,.mvn{
        margin-top:0!important
    }
    .mas,.mts,.mvs{
        margin-top:5px!important
    }
    .mam,.mtm,.mvm{
        margin-top:10px!important
    }
    .mal,.mtl,.mvl{
        margin-top:20px!important
    }
    .man,.mhn,.mrn{
        margin-right:0!important
    }
    .mas,.mhs,.mrs{
        margin-right:5px!important
    }
    .mam,.mhm,.mrm{
        margin-right:10px!important
    }
    .mal,.mhl,.mrl{
        margin-right:20px!important
    }
    .man,.mbn,.mvn{
        margin-bottom:0!important
    }
    .mas,.mbs,.mvs{
        margin-bottom:5px!important
    }
    .mam,.mbm,.mvm{
        margin-bottom:10px!important
    }
    .mal,.mbl,.mvl{
        margin-bottom:20px!important
    }
    .man,.mhn,.mln{
        margin-left:0!important
    }
    .mas,.mhs,.mls{
        margin-left:5px!important
    }
    .mam,.mhm,.mlm{
        margin-left:10px!important
    }
    .mal,.mhl,.mll{
        margin-left:20px!important
    }
    .mha,.mra{
        margin-right:auto!important
    }
    .mha,.mla{
        margin-left:auto!important
    }
    .flex{
        display:flex
    }
    .flex-wrap{
        flex-wrap:wrap
    }
    .subnav-item--green .nav-item-link{
        color:#137d54!important;
        background-color:#d6f3e7;
        transition:.2s border ease-in-out,.2s box-shadow ease-in-out;
        border:1px solid #c6f2e0
    }
    .subnav-item--green .nav-item-link:hover{
        background-color:#c8f1e0;
        border:1px solid #a0dcc4
    }
    .subnav-item--green a:active,.subnav-item--green a:active:hover,.subnav-item--green a:focus,.subnav-item--green a:focus:hover{
        background-color:#137d54;
        color:#fff!important
    }
    

      </style>
      
  <div class="c-promo-box sponsors sponsors__lead hidden sponsors__external" data-audience="non-subscriber" data-remove="true" data-amount="1"></div>


      
  <div class="c-promo-box sponsors sponsors__lead hidden sponsors__external" data-audience="non-subscriber" data-remove="true" data-amount="1"></div>



      
        <div id="sponsors-article-end" data-impression="true" class="c-promo-box c-promo-box--ad c-promo-box--wide sponsors sponsors__row hidden sponsors__external" data-audience="non-subscriber" data-remove="true"></div>
      

			
				<div id="promo-article-end hidden">
					
						

<div class="book-grid">
	
		
			

<figure class="book--featured">
	<div class="book--featured__image">
		<a data-instant href="/the-smashing-newsletter/"><img loading="lazy" width="202" height="266" src="/images/smashing-cat/cat-in-a-chair--tall.svg" alt="Smashing Newsletter"/></a>
	</div>
	<figcaption>
		<h4 class="book--featured__title">
			<a href="/the-smashing-newsletter/">
				Smashing Newsletter
			</a>
		</h4>
		<p class="book--featured__desc">
			Tips on front-end &amp; UX, delivered weekly in your inbox. Just the things you can actually use.
		</p>
	</figcaption>
</figure>



		
	
		
			

<figure class="book--featured">
	<div class="book--featured__image">
		<a data-instant href="https://www.smashingconf.com/online-workshops/"><img loading="lazy" width="202" height="266" src="https://www.smashingmagazine.com/images/smashing-cat/cat-explorer.svg" alt="Front-End &amp; UX Workshops, Online"/></a>
	</div>
	<figcaption>
		<h4 class="book--featured__title">
			<a href="https://www.smashingconf.com/online-workshops/">
				Front-End &amp; UX Workshops, Online
			</a>
		</h4>
		<p class="book--featured__desc">
			With practical takeaways, live sessions, video recordings and a friendly Q&amp;A.
		</p>
	</figcaption>
</figure>



		
	
		
			

<figure class="book--featured">
	<div class="book--featured__image">
		<a data-instant href="/printed-books/"><img loading="lazy" width="202" height="266" src="https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_400/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c2f2c6d6-4e85-449a-99f5-58bd053bc846/typescript-shop-cover-opt.png" alt="TypeScript in 50 Lessons"/></a>
	</div>
	<figcaption>
		<h4 class="book--featured__title">
			<a href="/printed-books/">
				TypeScript in 50 Lessons
			</a>
		</h4>
		<p class="book--featured__desc">
			Everything TypeScript, with code walkthroughs and examples. And other printed books.
		</p>
	</figcaption>
</figure>



		
	
</div>



					
				</div>
			

      
        <div data-component="CommentsArea" id="comments-complete-guide-html-email-templates-tools" data-thread="/2021/04/complete-guide-html-email-templates-tools/" data-date="2021-04-12 12:30:00 &#43;0000 UTC"></div>

      

    </div>
  </article>

    </main>

		
			
				
				
				<div data-component="CookieBanner"></div>
<footer class="main-footer">
  <div class="container">

    <div class="col-12">
      <div class="footer__topics open">
    <h4 class="footer__topics__title" id="topics">Browse All Smashing Magazine Topics</h4>
    <ul class="footer__topics__list">
      
        <li class="footer__topics__item">
            <a href="/category/accessibility">Accessibility</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/android">Android</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/animation">Animation</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/apps">Apps</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/css">CSS</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/design">Design</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/design-patterns">Design Patterns</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/design-systems">Design Systems</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/e-commerce">E-Commerce</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/freebies">Freebies</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/graphics">Graphics</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/html">HTML</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/illustrator">Illustrator</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/inspiration">Inspiration</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/ios">iOS</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/javascript">JavaScript</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/mobile">Mobile</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/pattern-libraries">Pattern Libraries</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/performance">Performance</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/photoshop">Photoshop</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/plugins">Plugins</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/react">React</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/responsive-design">Responsive Design</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/service-workers">Service Workers</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/sketch">Sketch</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/typography">Typography</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/ui">UI</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/usability">Usability</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/user-experience">User Experience</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/wallpapers">Wallpapers</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/web-design">Web Design</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/wordpress">WordPress</a>
        </li>
      
        <li class="footer__topics__item">
            <a href="/category/workflow">Workflow</a>
        </li>
      
    </ul>
</div>

    </div>

    <div class="col-12">
      <div class="footer__notes">
        <p>With a commitment to quality content for the design community.</p>
        <p>Founded by Vitaly Friedman and Sven Lennartz. <span class="lining-figures">2006–2021</span>.</p>
        <p>Smashing is proudly running on <a href="https://www.netlify.com/?utm_source=link&utm_medium=parter&utm_campaign=sm-footer">Netlify</a>.</p>
        <p>Fonts by <a href="http://latinotype.com/">Latinotype</a>.</p>
      </div>

      <ul class="footer__links">
        <li>&#9998; <a href="/write-for-us/">Write for us</a>
        </li>
        <li>
          <a href="/contact/">Contact us</a>
        </li>
        <li>
          <a href="/about/">About us (Impressum)</a>
        </li>
        <li>
          <a href="/privacy-policy">Privacy policy</a>
        </li>
        <li>
          <a href="/auth/">Membership login</a>
        </li>
        <li>
            <a href="/delivery-times/">Delivery times</a>
          </li>
            <li>
          <a href="mailto:&#097;&#100;&#118;&#101;&#114;&#116;&#105;&#115;&#105;&#110;&#103;&#064;&#115;&#109;&#097;&#115;&#104;&#105;&#110;&#103;&#109;&#097;&#103;&#097;&#122;&#105;&#110;&#101;&#046;&#099;&#111;&#109;?subject=Let’s talk about advertising">Advertise</a>
        </li>
      </ul>
    </div>
  </div>

  
<div class="back-to-top-wrapper" id="back_top">
	<a href="#top" data-scroll="#top" class="back-to-top" title="Back to top">
		<svg viewBox="0 0 100 100" width="25px" height="25px" tabindex="-1" role="img" aria-labelledby="title">
			<title id="title">Back to top</title>
			<path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(0 0) rotate(90 50 50)" fill="#fff" stroke="#fff"></path>
			<image src="/images/back-to-top-arrow.png" alt="Back to top arrow" xlink:href="" width="100%" height="100%"></image>
		</svg>
	</a>
</div>


  
    <div id="cart" class="cart-wrapper" data-component="MiniCart"></div>

  

</footer>

<div data-handler="PostLoad"></div>

<script src="/js/app.js" defer importance="high"></script>
<script>
  
  window.PRERELEASES = {}
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
			
			
    
  
    
			
			
    
  
    
			
			
    
  
    
			
			
    
  
    
			
			
    
  
    
			
			
    
  
    
  

  if ('serviceWorker' in navigator && !localStorage.getItem('no_sw')) {
    window.addEventListener('load', function() {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          window.caches
            .open('smashing-mag-offline-articles')
            .then(cache => cache.keys())
            .then(keys => {
              var savedOffline = document.querySelector('.meta-box--article')
              if (savedOffline && keys && keys.length) {
                var currentPageSaved = keys.find(key =>  key.url === window.location.href)
              }

              var list = document.querySelector('.offline-articles-list')
              if (list && keys && keys.length) {
                var listItem = document.createElement('li')

                var innerList = keys
                  .map(function(key) {
                    return (
                      '<li><a href="' + key.url + '">' + key.url + '</a></li>'
                    )
                  })
                  .join('')
                listItem.innerHTML =
                  'Recently viewed aritcles: <ul>' + innerList + '</ul>'
                list.appendChild(listItem)
              }
            })
        })
        .catch(function(err) {
          console.error('Failed to load service worker')
        })
    })
  }
</script>

<div hidden>
<img src="/images/icons/menu-cat-dancing.svg" alt="" />
<img src="/images/icons/close.svg" alt="" />
</div>

<style>
.nowrap{white-space:nowrap}.nowrap:after,.nowrap:before{content:' ';display:table;clear:both}.btn .sr-only,.sr-only{position:absolute;display:inline-block;height:0;width:0;line-height:0;overflow:hidden}.green,.highlight,.success{color:#41b14f}.error,.red{color:#d33a2c}.darker-red{color:#61140f}.darkest-red{color:#390c09}.black{color:#000}.bold{font-weight:700}.in-progress,.orange,.pending{color:#f88040!important}.light-grey{color:#767676!important}.grey,.grey a{color:#666!important}.white{color:#fff!important}.display-block{display:block!important}.bg--grey{background-color:#f6f6f6}.bg--lighter-grey{background-image:linear-gradient(white,#f0f0f0)}.bg--light-grey{background-color:#fafafa}.bg--dark-grey{background-color:#666}.bg--red{background-color:#d33a2c}.bg--navy{background-color:#282634}.bg--green{background-color:#41b14f}.bg--light-green{background-color:#e3f5e5!important}.bg--light-red{background-color:#fbebea!important}.bg--dark-red{background-color:#811d15}.small{font-size:.8em!important}.smaller{font-size:.7em!important}.larger{font-size:1.2em!important}.padding-bottom{padding-bottom:4vh}.italic{font-style:italic!important}.thin{font-weight:400!important}.center{text-align:center!important}.float--right{float:right}.float--left{float:left}.elena{font-family:-apple-system,Arial,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,Ubuntu,Cantarell,sans-serif}.wf-loaded-stage2 .elena{font-family:Elena}.mija{font-family:-apple-system,Arial,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,Ubuntu,Cantarell,Georgia,serif}.wf-loaded-stage2 .mija{font-family:Mija}.mt-0{margin-top:0!important}.mb-0{margin-bottom:0!important}.margin-center{margin:0 auto!important}.sticky{position:fixed;left:0;top:0;right:0;z-index:10;box-shadow:0 5px 10px rgba(0,0,0,.2)}.enhanced .no-js-only,.js .no-js-only{display:none}.text-shadow{text-shadow:1px 1px 1px rgba(0,0,0,.25)}/*! normalize.css v4.2.0 | MIT License | github.com/necolas/normalize.css */html{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,system-ui,'Open Sans','Helvetica Neue',Arial,sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}figcaption,figure,main{display:block}figure{margin:0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder;letter-spacing:.25px}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}@media (min-width:740px){.global-header,.header{padding:1rem 2em!important}}.nav-item-link{padding:.35em .9rem;background:0 0;color:#fff!important;text-shadow:1px 1px 1px rgba(0,0,0,.25);text-decoration:none}@media print{body{margin:0 .6cm 0 .6cm;padding:3mm 0}.header-description,body{color:#222}.c-felix-the-cat{padding:0}.author__image-wrapper::before,.bio-image::before,.book--featured__image:after,.book--featured__image:before,.book-details__book-image::after,.book-details__book-image::before,.books__book__image::before,.tilt::after,.tilt::before,img::after,img::before{display:none!important}body::after{content:' ';background:url(/images/smashing-cat/cat-felix-the-cat.svg),url(/images/icons/author.svg),url(/images/icons/tags.svg),url(/images/icons/published.svg);visibility:hidden;height:0;clear:both}.article__meta,.author{margin:.5em 0!important}.article-container .author--full>a{margin-bottom:0!important}.books__book__img{max-width:250px}.announcement,.article--grid__read-more,.article-header--meta,.article__comments-count,.back-to-top-wrapper,.books__tabs,.c-promo-box,.cart-wrapper,.conf-panel__image,.content-tabs,.cookie-banner,.cookies,.curated-articles-container,.feature-panel,.featured-articles__teaser,.footer__links,.global-header,.header,.meow__masthead,.meta-box,.order-details__secondary-actions,.read-more-link,.tablesaw-bar{display:none}body{display:block}pre>code,pre[class]>code{font-size:.7em}a[href]{text-decoration:underline!important}a{text-shadow:none!important;background:0 0!important}.homepage:before{content:'Smashing Magazine';font-size:2em;font-weight:700;border-bottom:8px solid #ddd!important;padding:0 0 .25em 0;margin:.25em 0 .75em 0;width:100%;display:block}.homepage .container{padding:0;width:auto;max-width:auto}.homepage .article--post,.homepage .article--post__teaser{page-break-inside:avoid!important;page-break-after:auto!important;display:block!important;widows:3;orphans:3}.homepage main::before{content:"Don't miss these articles on SmashingMag:";font-size:1.5em;font-weight:700;display:block;margin-bottom:.5em;color:#666}.wf-loaded-stage2 .homepage main::before{font-family:Mija}.homepage .author__image-wrapper{filter:grayscale(100)}.homepage .author__desc__title{margin-bottom:-7px}.homepage .author{float:none;max-width:150px}.homepage .author__image{max-height:70px;transform:none!important}.homepage .author__image img{transform:none!important}.homepage .featured-article .nowrap{display:flex;flex-direction:row;text-align:left}.homepage .featured-article__intro{display:inline}.homepage h2{z-index:9;color:#c00!important}.homepage .featured-article__title a{display:inline-block;margin-left:0;padding-left:0;font-size:.8em}.homepage .featured-article__comments-count{color:#eee!important;font-size:.5em!important}.homepage .featured-article__tags{margin:0;padding:0;color:#eee;font-size:.8em}.homepage .featured-article__tags a{color:currentColor}.homepage .featured-article__title .featured-article__title__a{color:#333!important;padding-top:0}.homepage .featured-article__title .featured-article__title__a::after,.homepage .featured-article__title .featured-article__title__a::before{content:''}.homepage .featured-articles-container{display:flex;flex-direction:row;flex-wrap:wrap;margin-left:0;padding-left:0;margin-top:auto}.homepage .featured-article{width:50%!important;min-height:30%!important;margin-top:1.5em!important;margin-bottom:2.5em!important}.homepage .featured-article:nth-child(2n+1){padding:0 0 0 4%!important}.homepage .featured-article:nth-child(2n){padding:0 4% 0 1%!important}.homepage .article--grid__content,.homepage .article--grid__title{line-height:1.5}.homepage .article--grid__content a,.homepage .article--post__author-name a,.homepage .conf-panel a{padding:0 0 2px 0;color:#333;border-bottom:1px solid #e3e3e3}.homepage .left-lined{color:#222;position:absolute;left:10px;display:inline;text-align:left;-ms-font-feature-settings:'smcp' 1,'c2sc' 1;-o-font-feature-settings:'smcp' 1,'c2sc' 1;font-feature-settings:'smcp' 1,'c2sc' 1;font-variant:petite-caps;background-position:center 72%;line-height:1;font-size:1em;margin:0!important;max-width:13em;padding-left:.75em;transform-origin:left center;transform:rotateZ(90deg) translateX(-5px) translateY(1px)!important;text-transform:lowercase;letter-spacing:4px!important}.homepage .featured-articles-container{padding-bottom:2em}.homepage .latest-articles-container{border-top:8px solid #ddd;margin-top:0!important}.homepage .article--grid__container{padding-top:.25em}.homepage .article--grid__container div,.homepage .col--article--grid:first-of-type{margin:0 5% 0 5%;padding:.5em 0 0 0}.homepage .most-popular-articles-container{-moz-column-break-before:always!important;break-before:always!important;page-break-before:always!important;border-top:8px solid #ddd}.homepage .most-popular-articles-container .container{margin:0 5% 0 2.5%!important}.homepage .most-popular-articles-container .author__image-wrapper{position:static}.homepage .most-popular-articles-container .article--post{margin:.5em 0 1.35em 0!important}.homepage .most-popular-articles-container .article--post .author{float:left}.homepage .conf-panel{-moz-column-break-before:always!important;break-before:always!important;page-break-before:always!important;color:#222;border-top:8px solid #ddd;border-bottom:8px solid #ddd}.homepage .article--post__stats ul li{padding-left:0}.homepage .footer__topics__list,.homepage .footer__topics__title{display:none}.homepage .footer__notes{color:#222}.homepage .main-footer:after{content:'Cats can be forgetful, but we are not. \A Thanks for being truly smashing — yet again. \A www.smashingmagazine.com';font-style:italic;color:#333!important;line-height:1.5em;margin-top:1.5em!important;display:inline-block;white-space:pre;text-align:center;width:100%}.article__content .meta-box{padding:1em;margin:0;list-style:none;width:100%;border-radius:11px;font-size:.75em}.wf-loaded-stage2 .article__content .meta-box{font-family:Mija}.meta-box li{margin-bottom:.5em;line-height:1.4;padding-left:30px;background-size:auto 20px;background-repeat:no-repeat;background-position:left top}.meta-box li:last-child{margin-bottom:0}.meta-box--author{background-image:url(../images/icons/author.svg)!important}.meta-box--tags{background-image:url(/images/icons/tags.svg)!important}.meta-box--published{background-image:url(/images/icons/published.svg)!important}.articlepage .article__meta li:after{content:''}.articlepage .advertisement,.articlepage .article__related-articles__title,.articlepage .article__related-articles__title+.article--grid__container,.articlepage .load-more,.articlepage .product-panel--book,.articlepage [data-component=CommentsArea]{display:none}.articlepage:before{border-bottom:8px solid #ddd!important;display:block}.articlepage #main,.articlepage article{margin:0!important;padding:0!important}.articlepage .author a{padding-bottom:0!important;margin-bottom:0!important;z-index:4;overflow:hidden}.articlepage .author{max-height:200px}.articlepage .collapsible{display:flex;flex-direction:row;width:100%;border-top:8px solid #eee;border-bottom:8px solid #eee;padding-bottom:.5em;z-index:9!important}.articlepage [data-handler=ContentTabs]{border-top:8px solid #eee;border-bottom:8px solid #eee}.articlepage .article__summary,.articlepage .article__toc{display:table-cell!important}.articlepage .article__summary{width:97.5%;padding-right:2.5%;border-bottom:0;padding-bottom:.75em}.articlepage .article__summary h5{padding-bottom:1em}.articlepage .article__toc{width:47.5%;padding-left:2.5%;padding-top:1.5em}.articlepage .article__toc h5{padding-left:0}.articlepage .article__toc a{padding:0}.articlepage .article__content a[href]{line-height:1.65;color:#006fc6;background-image:none}.articlepage .article__content .author a[href]{color:#666!important}.articlepage .article__content .author a[href]::after{content:''}.articlepage .article__content .author figcaption a[href]::after,.articlepage .article__content a[href]::after{content:" (↦ " attr(href) ")";word-wrap:break-word;font-style:italic;font-size:.9em;white-space:wrap;opacity:.75;display:inline;color:#006fc6!important;text-decoration:none!important;background-image:none!important;text-shadow:none!important}.articlepage .article__content .meta-box li{display:inline}.articlepage .article__content .meta-box .meta-box--share{display:none}.articlepage .article__content .meta-box a[href]::after{content:''}.articlepage .article__content figure a[href]{margin-bottom:0;padding-bottom:0}.articlepage .footer__topics__list,.articlepage .footer__topics__title{display:none}.articlepage .footer__links,.articlepage .footer__links a,.articlepage .footer__notes,.articlepage .footer__notes a{color:#222!important;background-color:transparent!important;text-shadow:none!important}.articlepage .main-footer{text-align:center;margin:0 auto}.articlepage .main-footer:before{content:url(/images/smashing-cat/cat-felix-the-cat.svg);width:200px!important;z-index:9;padding:.45em 0 .45em .7em;display:inline-block;white-space:pre;text-align:center;margin:1.5em auto 0 auto!important}.articlepage .main-footer:after{content:'Cats can be forgetful, but we are not. \A Thanks for being truly smashing — yet again. \A www.smashingmagazine.com';font-style:italic;color:#333!important;line-height:1.5em;margin-top:1.5em!important;display:inline-block;white-space:pre;text-align:center;width:100%}.dashboard .announcement,.dashboard .dashboard__header,.dashboard .global-header,.dashboard .header,.dashboard .main-footer,.dashboard .order-details__secondary-actions,.dashboard .tablesaw-bar{display:none}.dashboard main{position:relative}.dashboard main::before{content:url(/images/smashing-cat/cat-with-bottle-mouse.svg);width:200px!important;z-index:9;padding:.45em 0 .45em .7em;position:absolute;top:7.35em;right:0}.dashboard .dashboard::before{content:'Smashing Magazine';font-size:2em;font-weight:700;border-bottom:8px solid #ddd;padding:0 0 .25em 0;margin:.25em 0 1em 0;width:100%;display:block}.wf-loaded-stage2 .dashboard .dashboard::before{font-family:Mija}.dashboard .dashboard::after{content:'Cats can be forgetful, but we are not. \A Thanks for being truly smashing — yet again. \A www.smashingmagazine.com';font-style:italic;font-size:.9em;color:#ccc;line-height:1.5em;margin-top:2.5em;display:block;width:85%;white-space:pre}.dashboard .container{padding:0;width:auto;max-width:auto}.dashboard .col,.dashboard .row{padding:0}.dashboard .dashboard__tab-section{padding:0}.dashboard .order-details__header{display:block;float:none;padding:0;margin-bottom:2em}.dashboard .order-details__order-nb span{display:inline-block;font-size:1em;text-transform:none}.dashboard .order-details--success .order-details__order-nb h2{font-size:1.5em}.dashboard .order-details__address .billing-status,.dashboard .order-details__address address,.dashboard .order-details__address h3{margin:0 0 1em 0}.dashboard .paid{color:#41b14f!important}.dashboard .order-details__order-nb-wrapper{display:block;width:100%;float:none}.dashboard .order-details__downloads{display:none}.dashboard .order-details__address-wrapper{float:none;display:inline-block;margin:0;padding:0;width:42.75%}.dashboard .order-details__footer td,.dashboard .order-details__footer th{padding-top:.25em;padding-bottom:.25em}.dashboard .order-details__sum-total th{font-size:1.5em}.dashboard .order-details__sum-total td{font-size:1.5em}.dashboard .order-details__address{background:0 0;padding:0}.dashboard .dashboard__table{margin-bottom:0}.dashboard .dashboard__table td,.dashboard .dashboard__table th{padding:.75em}.dashboard .dashboard__table--order-details .order-details__item__name{padding-left:.75em;font-size:1.1em;width:55%}}
</style>


  <script class="js-additional" importance="low" src="/js/codepen.js" defer></script>
  <script class="js-additional" importance="low" src="/js/prism.js" defer></script>


<script class="js-additional" importance="low" src="/js/instantpage.js" type="module" defer></script>
<script class="js-additional" importance="low" src="/js/ga.js" defer></script>
<script class="js-additional" importance="low" src="https://www.google-analytics.com/analytics.js" defer></script>

			
		

  </body>
</html>

`