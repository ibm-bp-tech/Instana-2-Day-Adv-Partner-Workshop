"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5926],{2399:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(3366),l=(a(7294),a(4983)),r=a(4295),i=["components"],o={},s={_frontmatter:o},c=r.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this lab, we will change the name of the Ratings Service from rs-ratings to rs-ratings-your last name."),(0,l.kt)("h2",null,"Step 1:"),(0,l.kt)("p",null,"SSH into your host. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sshubuntu@<IP address>\n")),(0,l.kt)("h2",null,"Step 2:"),(0,l.kt)("p",null,"Navigate to the robot-shop/ratings directory "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop/ratings \n")),(0,l.kt)("h2",null,"Step 3:"),(0,l.kt)("p",null,"Copy the file Docker file to Dockerfile.orig "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo cp Dockerfile Dockerfile.orig \n")),(0,l.kt)("h2",null,"Step 4:"),(0,l.kt)("p",null,"Edit the file Dockerfile "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo vi Dockerfile \n")),(0,l.kt)("p",null,"And add the following line: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ENV INSTANA_SERVICE_NAME=rs-ratings-<your last name> \n")),(0,l.kt)("h2",null,"Step 5:"),(0,l.kt)("p",null,"Navigate back up to the robot-shop directory. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop/ \n")),(0,l.kt)("h2",null,"Step 6:"),(0,l.kt)("p",null,"Execute: docker-compose build ratings "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo docker-compose build ratings\n")),(0,l.kt)("h2",null,"Step 7:"),(0,l.kt)("p",null,"Execute: docker-compose up -d ratings "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo docker-compose up -d ratings \n")),(0,l.kt)("h2",null,"Step 8:"),(0,l.kt)("p",null,"In the UI, find your service in your Application Perspective and verify the new name. "),(0,l.kt)("p",null,"Click Application, then Services, and lastly verify the name. "),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.15277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAADGUlEQVQ4y3WUS28cRRSFGyT2SBEiAQRGUUAghPgX/CDASTYsohA7JuYhkZ/AnhUSyAtATBaBJBKaENlOBsfJ2GZ6evpVXY9bVfegujU2BikjXU1Vd/XXp8651cULK+/ET298HREQp0+PYl23EcCzi5cVYnTkI/nwnyqKs+exur6JHXuA0eF9jMZj/PDz7/j+l9/w4+gutn69g63RHWz9dBvf3R3ji8kEa9vbuFXOgcgw5OFOVXHuwnu88dU3PCDwk37G+2XJu7t7vP3HfX44fsCTx1OePDnkyd6Ux9MjvrVY8Ghe8f4wMCKzD4F9iCdVfPj+B/j25k2kHw0Wxnnw7ADu0QPQn/cQtIJxBIDhjAHIA86BjIGxFtY5dL3CoDVijCjOvPE2rmxsikF1p+C8h7cWuq5QzyqQI5D3WNQN1KDhQ5A1zhF8WhsC9lqHstcg51A8v/IuLm18KQo7ZTAYBwoRngETkqAI6wh12wsw+SRQ8iAfpGaDR6OdvKAoXn4TF9duCLBqByjjEEKA9wGdDgJMCsv5Am3byfUQIhyRjBP8YUM4ajVCAj732lu4dH1TgEo78SGy+A1LqTsYMTK0NiDyYIbME1TWRkZjI1pts4cJeHkJnDcKvbbyoHUenfYSUtpy0/VYNB2qupXtGuvkerr/uHWYd4PMi+KlFaxe+1yAg7ZQlsQXPqUwjZOSY+VpnhXm+dwE9IbASWFx7jwurmcPy7pH3Rs4yt70JiWax/8vCWcZyk5NmNYqe1iceR2fXNsQYNNraEsnC7UNAk+hnE5V6pkpv/gKPrp6/QTolttNpV0OKKWeUiYicGpxsSDmf2bs9x6VsgDHDPz4swysGpX7ML2dPHrdojMNjCX8XVZo2i6fWZ9DOz6/TzvCQuUuyAqXwFpZWB/l1ITURtRD2UYeKqtalIYoHxrxMQWTKimcdQYxhKXCq+vpIKOdTuHKGcJijljNMDRzaNLiYdspUZDgAvT/Akvt0Rl3DHwVq1fWgPkBqp1tLHZ30E0egf7ahZoegiLkVPRqEGjqR/K5N3NQXkDaOPl8/QM3FOHRAk6RRgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 7",title:"Lab 7",src:"/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/3cbba/lab7.1.png",srcSet:["/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/7fc1e/lab7.1.png 288w","/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/a5df1/lab7.1.png 576w","/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/3cbba/lab7.1.png 1152w","/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/0b124/lab7.1.png 1728w","/Instana-2-Day-Adv-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/91583/lab7.1.png 1886w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(8650),r=a.n(l),i=a(5444),o=a(9403),s=a(3321),c=a(5900),d=a.n(c),p=function(e){var t,a=e.title,l=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||l,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),g=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),p=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=k,h=a(2881),f=a(6958),A=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,g=void 0===d?{}:d,k=t.relativePagePath,A=t.titleType,y=g.tabs,E=g.title,N=g.theme,w=g.description,P=g.keywords,D=g.date,x=(0,f.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=T?l.pathname.replace(T,""):l.pathname,C=y?S.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",I=N||x;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:I,pageTitle:E,pageDescription:w,pageKeywords:P,titleType:A},n.createElement(p,{title:c?n.createElement(c,null):E,label:"label",tabs:y,theme:I}),y&&n.createElement(b,{title:E,slug:S,tabs:y,currentTab:C}),n.createElement(h.Z,{padded:!0},a,n.createElement(u,{relativePagePath:k}),n.createElement(v,{date:D})),n.createElement(m.Z,{pageContext:t,location:l,slug:S,tabs:y,currentTab:C}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-7-mdx-faf26796e70e9f71eaad.js.map