(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59930],{11298:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return we},default:function(){return ve}});var i=t(76750),r=t(11870),o=t(87468),a=t(74122),s=t(63313),d=t(57348),c=t(93657),l=t(84047),p=t(2784),m=t(94804),u=t(43826),h=t(48230),f=t(45080),g=t(24916),x=t(52322),w={small:(0,o.iv)(["height:","px;transform:scale(0.7);"],(function(e){return e.theme.spacing(3)})),regular:(0,o.iv)(["height:","px;transform:scale(0.9);"],(function(e){return e.theme.spacing(5)}))},v={small:"s1",regular:"h4"},_={padding:{small:3,regular:4},height:{small:"auto",regular:"320px"},gap:{small:3,regular:2}},j={small:(0,o.iv)(["position:absolute;left:0;bottom:0;opacity:0;width:100%;padding:","px;background:rgb(255,255,255);background:linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);transition:all 0.2s ease-out;"],(function(e){return e.theme.spacing(2)})),regular:(0,o.iv)(["position:relative;"])},y=o.ZP.div.withConfig({displayName:"MediaCard__CompanyLogo",componentId:"sc-36iv3c-0"})(["position:relative;color:",";transform-origin:top left;transform:scale(0.7);z-index:2;",";svg{max-width:100%;path{fill:",";}}"],(function(e){return e.theme.colors.mineShaft}),(function(e){var n=e.variants;return w[n]}),(function(e){return e.theme.mosaiq.colors.mineShaft})),C=o.ZP.div.withConfig({displayName:"MediaCard__ArticleContent",componentId:"sc-36iv3c-1"})(["position:relative;flex:2;z-index:3;"]),Z=o.ZP.div.withConfig({displayName:"MediaCard__BackgroundBlur",componentId:"sc-36iv3c-2"})(["display:none;position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,#fff 80%);backdrop-filter:blur(1px);opacity:0;transition:all 0.3s ease;z-index:5;"]),N=o.ZP.div.withConfig({displayName:"MediaCard__ReadMoreLinkContainer",componentId:"sc-36iv3c-3"})(["",";z-index:10;a{",";text-decoration:underline;color:",";}"],(function(e){var n=e.variants;return j[n]}),(function(e){return e.theme.typography.h4(e)}),(function(e){return e.theme.colors.textSecondary})),b=o.ZP.span.withConfig({displayName:"MediaCard__ArrowIconContainer",componentId:"sc-36iv3c-4"})(["display:flex;transform:translate(-0.125rem,0.125rem);transition:all 0.2s linear;"]),k=o.ZP.a.withConfig({displayName:"MediaCard__ReadMoreLink",componentId:"sc-36iv3c-5"})(["display:flex;align-items:center;","{opacity:0;","{opacity:1;transform:translate(0rem,0rem);}}"],b,(function(e){return e.theme.mediaQueries.tabletDown})),P=o.ZP.div.withConfig({displayName:"MediaCard__Card",componentId:"sc-36iv3c-6"})(["position:relative;--shadow-color:0deg 0% 90%;border-radius:","px;padding:","px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;text-align:left;transition:background 0.2s ease-out;min-height:",";gap:",";border:1px solid #e3e5e9;background:#fff;box-shadow:0px 3px 5px 0px rgba(0,0,0,0.05),0px 10px 20px 0px rgba(0,0,0,0.05),0px 40px 80px 0px rgba(0,0,0,0.05);cursor:pointer;overflow:hidden;&:hover{transition-timing-function:linear;text-decoration:none;","{opacity:1;}}","{opacity:0;","{opacity:1;transform:translate(0rem,0rem);}}:hover{","{color:",";}","{}","{",";}","{","{opacity:1;transform:translate(0rem,0rem);}}}"],(function(e){return e.theme.spacing(2.5)}),(function(e){var n=e.theme,t=e.variants;return n.spacing(_.padding[t])}),(function(e){var n=e.variants;return _.height[n]}),(function(e){var n=e.theme,t=e.variants;return n.spacing(_.gap[t])+"px"}),N,b,(function(e){return e.theme.mediaQueries.tabletDown}),y,(function(e){return e.theme.colors.blackWhite}),C,Z,(function(e){return"small"===e.variants&&(0,o.iv)(["display:block;opacity:1;"])}),k,b),I=function(e){var n=e.data,t=e.variants,i=void 0===t?"regular":t,r=n.description,o=n.link,a=n.publisher_logo,s=(0,g.SS)(480);return(0,x.jsxs)(P,{onClick:function(){window.open(o,"_blank","noopener, noreferrer")},variants:i,children:[(0,x.jsx)(y,{variants:i,children:(0,x.jsx)(m.Z,{src:a})}),(0,x.jsx)(C,{children:(0,x.jsx)(f.ZT,{variant:v[i],color:"mineShaft",fontWeight:500,ellipsis:{lines:4},whiteSpace:"pre",children:r})}),(0,x.jsx)(Z,{}),(0,x.jsx)(N,{variants:i,children:(0,x.jsx)(h.Z,{href:o,variant:"secondary",endAdornment:(0,x.jsx)(u.default,{size:16,weight:"bold"}),flex:s,children:"Read more"})})]})},R=o.ZP.div.withConfig({displayName:"NewsroomMediaCards__Root",componentId:"cc468h-0"})(["display:grid;grid-template-columns:repeat(",",1fr);gap:","px;","{grid-template-columns:1fr;}"],(function(e){var n=e.columns;return null!==n&&void 0!==n?n:3}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.mediaQueries.tabletDown})),M={small:4,regular:3};var S=function(e){var n=e.newsgroup,t=e.variants;return(0,x.jsx)(R,{columns:M[t],children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,x.jsx)(I,{data:e,variants:t},n)}))})},D=o.ZP.div.withConfig({displayName:"NewsroomHero__BgVisual",componentId:"sc-2eprdq-0"})(["position:absolute;inset:0;"]),Q=(0,o.ZP)(s.Z).withConfig({displayName:"NewsroomHero__StyledHero",componentId:"sc-2eprdq-1"})(["margin-bottom:","px;","{margin-bottom:","px;}"],(function(e){return e.theme.spacing(10)}),(function(e){return e.theme.mediaQueries.desktopDown}),(function(e){return e.theme.spacing(3)}));var T=function(e){var n=e.data,t=(0,p.useMemo)((function(){if(n.title){var e=n.title,t=new RegExp(/(?:\r\n|\r|\n)/,"g"),i=e.split(t);return(0,x.jsx)(x.Fragment,{children:i.map((function(e,n){return n<i.length?(0,x.jsxs)(x.Fragment,{children:[e,(0,x.jsx)(c.Z,{})]}):e}))})}}),[n.title]);return(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(D,{children:(0,x.jsx)(a.Z,{children:(0,x.jsx)(l.Z,{})})}),(0,x.jsxs)(a.Z,{$maxWidth:960,children:[(0,x.jsx)(Q,{subheader:n.subtitle,header:t,description:(0,x.jsx)(x.Fragment,{}),hideCTA:!0}),(0,x.jsx)(S,{newsgroup:n.mediaCards,height:352})]})]})},z=t(43650),U=o.ZP.section.withConfig({displayName:"NewsroomPressRelease__Root",componentId:"sgn154-0"})([""]),q=(0,o.ZP)(a.Z).withConfig({displayName:"NewsroomPressRelease__Main",componentId:"sgn154-1"})(["display:flex;flex-direction:column;gap:","px;align-items:center;"],(function(e){return e.theme.spacing(5)})),B=o.ZP.div.withConfig({displayName:"NewsroomPressRelease__Header",componentId:"sgn154-2"})(["display:flex;flex-direction:column;gap:","px;align-items:center;"],(function(e){return e.theme.spacing(2)})),W=o.ZP.div.withConfig({displayName:"NewsroomPressRelease__Releases",componentId:"sgn154-3"})(["width:100%;display:grid;grid-gap:","px;"],(function(e){return e.theme.spacing(3)})),X=o.ZP.a.withConfig({displayName:"NewsroomPressRelease__Release",componentId:"sgn154-4"})(["display:flex;padding:24px;justify-content:space-between;align-items:center;align-content:center;gap:","px;align-self:stretch;flex-wrap:wrap;border-radius:16px;border:1px solid #d3d6df;background:#fffffe;cursor:pointer;","{align-items:flex-end;}"],(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.mediaQueries.desktopDown})),H=(0,o.ZP)(f.ZT).withConfig({displayName:"NewsroomPressRelease__ReleaseDate",componentId:"sgn154-5"})(["","{}"],(function(e){return e.theme.mediaQueries.desktopDown})),A=(0,o.ZP)(f.ZT).withConfig({displayName:"NewsroomPressRelease__ReleaseTitle",componentId:"sgn154-6"})(["width:75%;text-decoration:underline;display:flex;align-items:center;svg{margin-left:","px;opacity:0;transform:translate(-0.125rem,0.125rem);transition:all 0.2s linear;}&:hover svg{opacity:1;transform:translate(0rem,0rem);}","{width:85%;}"],(function(e){return e.theme.spacing(.5)}),(function(e){return e.theme.mediaQueries.desktopDown}));var E=function(e){var n=e.posts,t=(0,g.SS)(480);return(0,x.jsx)(U,{children:(0,x.jsxs)(q,{$maxWidth:960,children:[(0,x.jsx)(B,{children:(0,x.jsx)(f.ZT,{variant:t?"h25":"h1",fontWeight:500,forwardedAs:t?null:"h3",children:"Press releases"})}),(0,x.jsx)(W,{children:n.map((function(e){return(0,x.jsxs)(X,{target:"_blank",href:"/blog/post/".concat(e.slug,"/"),rel:"noopener noreferrer",children:[(0,x.jsx)(H,{variant:"h4",color:"mineShaft",children:(0,z.Z)(new Date(e.published),"MMM d, yyyy")}),(0,x.jsx)(A,{variant:"h4",color:"mineShaft",ellipsis:{lines:t?3:2},whiteSpace:"nowrap",children:e.title}),(0,x.jsx)(u.default,{size:24,color:"grey"})]},e.slug)}))})]})})},Y=o.ZP.section.withConfig({displayName:"NewsroomRecentCoverage__Root",componentId:"sc-1q1msah-0"})([""]),F=(0,o.ZP)(a.Z).withConfig({displayName:"NewsroomRecentCoverage__Main",componentId:"sc-1q1msah-1"})(["display:flex;flex-direction:column;gap:","px;align-items:center;"],(function(e){return e.theme.spacing(5)})),K=o.ZP.div.withConfig({displayName:"NewsroomRecentCoverage__Header",componentId:"sc-1q1msah-2"})(["display:flex;flex-direction:column;gap:","px;align-items:center;"],(function(e){return e.theme.spacing(2)}));var O=function(e){var n=e.newsgroup,t=(0,g.SS)(480);return(0,x.jsx)(Y,{children:(0,x.jsxs)(F,{$maxWidth:960,children:[(0,x.jsx)(K,{children:(0,x.jsx)(f.ZT,{variant:t?"h25":"h1",fontWeight:500,forwardedAs:t?null:"h3",children:"Recent coverage"})}),(0,x.jsx)("div",{children:(0,x.jsx)(S,{newsgroup:n,variants:"small"})})]})})},$=t(72627),L=t(48588),V=t(21687),G=t(19806),J=(0,o.ZP)(G.Z).withConfig({displayName:"ContactUs__Root",componentId:"sc-1uelrcj-0"})(["flex:2;","{min-height:auto;}"],(function(e){return e.theme.mediaQueries.desktopDown})),ee=(0,o.ZP)($.kC).withConfig({displayName:"ContactUs__Main",componentId:"sc-1uelrcj-1"})(["height:100%;overflow:hidden;> div{flex:1 1 50%;","{flex:0 0 100%;}}"],(function(e){return e.theme.mediaQueries.desktopDown})),ne=(0,o.ZP)($.kC).attrs({direction:"column",jusify:"space-between"}).withConfig({displayName:"ContactUs__TextBlock",componentId:"sc-1uelrcj-2"})(["position:relative;padding:","px;flex:0 0 55%;z-index:1;gap:","px;","{padding:","px ","px;}"],(function(e){return e.theme.spacing(4.5)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.mediaQueries.desktopDown}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(3)})),te=o.ZP.div.withConfig({displayName:"ContactUs__Headers",componentId:"sc-1uelrcj-3"})(["","{> div:first-child{font-size:28px;}}"],(function(e){return e.theme.mediaQueries.desktopDown})),ie=o.ZP.div.withConfig({displayName:"ContactUs__VisualBlock",componentId:"sc-1uelrcj-4"})(["position:relative;background-image:url(\"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='18' height='18' patternTransform='scale(1.45) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M10 15a5 5 0 110-10 5 5 0 010 10z'  stroke-width='0.5' stroke='hsla(223,16%,85%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-16)' fill='url(%23a)'/></svg>\");"]),re=(0,o.ZP)(L.E.div).withConfig({displayName:"ContactUs__CircleRoot",componentId:"sc-1uelrcj-5"})(["border-radius:50%;border:1px solid ",";width:16px;height:16px;position:absolute;z-index:10;"],(function(e){return e.theme.mosaiq.colors.passive})),oe=function(e){var n=e.offsetX,t=void 0===n?2:n,i=e.offsetY,r=void 0===i?2:i,o=(0,V.c)(6+26*t),a=(0,V.c)(17+26*r);return(0,x.jsx)(re,{style:{x:o,y:a}})};var ae=function(){var e=(0,g.SS)(480);return(0,x.jsx)(J,{children:(0,x.jsxs)(ee,{children:[(0,x.jsxs)(ne,{children:[(0,x.jsxs)(te,{children:[(0,x.jsx)(f.ZT,{variant:"h3",fontWeight:500,style:{lineHeight:1.1},marginBottom:2,children:"Contact us"}),(0,x.jsx)(f.ZT,{variant:"p2",color:"passive"})]}),(0,x.jsx)(h.Z,{href:"mailto:press@qatalog.com",variant:"secondary",endAdornment:(0,x.jsx)(u.default,{size:16,weight:"bold"}),children:"press@qatalog.com"})]}),!e&&(0,x.jsxs)(ie,{children:[(0,x.jsx)(oe,{offsetX:0,offsetY:6}),(0,x.jsx)(oe,{offsetX:3,offsetY:3}),(0,x.jsx)(oe,{offsetX:3,offsetY:10}),(0,x.jsx)(oe,{offsetX:6,offsetY:6}),(0,x.jsx)(oe,{offsetX:8,offsetY:0})]})]})})},se=(0,o.ZP)(G.Z).withConfig({displayName:"MediaKit__Root",componentId:"t9s06u-0"})(["flex:1;","{min-height:auto;}"],(function(e){return e.theme.mediaQueries.desktopDown})),de=(0,o.ZP)($.kC).attrs({direction:"column"}).withConfig({displayName:"MediaKit__Main",componentId:"t9s06u-1"})(["height:100%;> div{flex:1 1 50%;}","{flex-direction:row !important;}"],(function(e){return e.theme.mediaQueries.desktopDown})),ce=(0,o.ZP)($.kC).attrs({direction:"column",jusify:"space-between"}).withConfig({displayName:"MediaKit__TextBlock",componentId:"t9s06u-2"})(["padding:","px;padding-bottom:","px;gap:","px;","{padding:","px ","px;flex:1 0 60% !important;}"],(function(e){return e.theme.spacing(4.5)}),(function(e){return e.theme.spacing(0)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.mediaQueries.desktopDown}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(3)})),le=o.ZP.div.withConfig({displayName:"MediaKit__Headers",componentId:"t9s06u-3"})(["","{> div:first-child{font-size:28px;}}"],(function(e){return e.theme.mediaQueries.desktopDown})),pe=o.ZP.div.withConfig({displayName:"MediaKit__VisualBlock",componentId:"t9s06u-4"})(["position:relative;background:url('/assets/5.0/media/ai-assistant/shapes.svg') no-repeat center center;","{padding:","px ","px;flex:1 0 40% !important;background:url('/assets/5.0/media/ai-assistant/shapes-m.svg') no-repeat top center;}"],(function(e){return e.theme.mediaQueries.desktopDown}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(3)}));var me=function(){var e=(0,g.SS)(480);return(0,x.jsx)(se,{children:(0,x.jsxs)(de,{children:[(0,x.jsxs)(ce,{children:[(0,x.jsxs)(le,{children:[(0,x.jsx)(f.ZT,{variant:"h3",fontWeight:500,style:{lineHeight:1.1},marginBottom:2,children:"Media kit"}),(0,x.jsx)(f.ZT,{variant:"p2",color:"passive"})]}),(0,x.jsx)(h.Z,{href:"https://drive.google.com/drive/folders/14bUPw6SauGpERkBlZlIOXeqh5XDzPuYr",variant:"secondary",endAdornment:(0,x.jsx)(u.default,{size:16,weight:"bold"}),children:"Download"})]}),!e&&(0,x.jsx)(pe,{})]})})},ue=o.ZP.section.withConfig({displayName:"NewsroomContactUs__Root",componentId:"sc-1a0shce-0"})([""]),he=(0,o.ZP)($.kC).attrs({direction:"column"}).withConfig({displayName:"NewsroomContactUs__FlexRows",componentId:"sc-1a0shce-1"})(["gap:","px;"],(function(e){return e.theme.spacing(4)})),fe=(0,o.ZP)($.kC).withConfig({displayName:"NewsroomContactUs__FlexRow",componentId:"sc-1a0shce-2"})(["gap:","px;","{flex-direction:column;}"],(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.mediaQueries.desktopDown}));var ge=function(){return(0,x.jsx)(ue,{children:(0,x.jsx)(a.Z,{$maxWidth:960,children:(0,x.jsx)(he,{children:(0,x.jsxs)(fe,{children:[(0,x.jsx)(ae,{}),(0,x.jsx)(me,{})]})})})})},xe=t(83912),we=!0;function ve(e){var n=e.page,t=e.posts,o={type:"seo-with-schema",fields:n.data.fields["seo-with-schema"]},a=n.data.fields.newsblock[0].fields.newsgroup,s=n.data.fields.featured_media_cards;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(i.Z,{components:[o]}),(0,x.jsx)(T,{data:{title:"Newsroom",subtitle:"News",mediaCards:s.mediacards}}),(0,x.jsx)(E,{posts:t}),(0,x.jsx)(O,{newsgroup:a}),(0,x.jsx)(ge,{}),(0,x.jsx)(xe.Z,{})]})})}},97982:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsroom",function(){return t(11298)}])}},function(e){e.O(0,[37519,15628,22411,49774,92888,40179],(function(){return n=97982,e(e.s=n);var n}));var n=e.O();_N_E=n}]);