(this["webpackJsonplush-interior-app"]=this["webpackJsonplush-interior-app"]||[]).push([[0],{83:function(e,a,t){e.exports=t(98)},91:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),i=t(10),s=t(11),o=t(13),m=t(12),u=t(73),d=(t(88),t(41)),g=(t(91),t(139)),h=t(149),p=t(155),v=t(100),E=t(144),f=t(142),b=t(153),y=t(154),N=t(143);var w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this,{})).name=void 0,e.phone=void 0,e.email=void 0,e.whatsapp=void 0,e.steps=["Help us with your Name","Leave Us your Number","And an Email Perhaps","How about whatsapp!"],e.handleNext=function(a){0===e.state.activeStep&&(e.name=document.getElementById("name").value),1===e.state.activeStep&&(e.phone=document.getElementById("phone").value),2===e.state.activeStep&&(e.email=document.getElementById("email").value),3===e.state.activeStep&&(e.whatsapp=document.getElementById("whatsapp").value),"Finish"===a.target.textContent&&e.sendEmail(),e.setState({activeStep:e.state.activeStep+1})},e.sendEmail=function(){var a=localStorage.clickcount;void 0===a||0===a?a=1:a++,localStorage.clickcount=a,e.send()},e.send=function(){var a="Name: "+e.name+" Phone : "+e.phone+" Email:  "+e.email+" WhatsApp : "+e.whatsapp;fetch("https://service-send-mail.herokuapp.com/api/SMTPController/send/"+a).then((function(e){console.log(e)})).catch((function(e){return console.log(e),e}))},e.handleReset=function(){e.setState({activeStep:0})},e.handleBack=function(){},e.state={activeStep:0},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{backgroundColor:"#10316b"}},n.a.createElement(y.a,{activeStep:this.state.activeStep,orientation:"vertical"},this.steps.map((function(a,t){return n.a.createElement(f.a,{key:a},n.a.createElement(b.a,null,a),n.a.createElement(p.a,null,n.a.createElement(N.a,null,function(e){switch(e){case 0:return n.a.createElement("form",{style:{width:"200px"},noValidate:!0,autoComplete:"on"},n.a.createElement(g.a,null,n.a.createElement(h.a,{id:"name",type:"text",label:"Name"})));case 1:return n.a.createElement("form",{style:{width:"200px"},noValidate:!0,autoComplete:"on"},n.a.createElement(g.a,null,n.a.createElement(h.a,{id:"phone",type:"number",label:"Phone Number"})));case 2:return n.a.createElement("form",{style:{width:"200px"},noValidate:!0,autoComplete:"on"},n.a.createElement(g.a,null,n.a.createElement(h.a,{id:"email",type:"email",label:"Email Id"})));case 3:return n.a.createElement("form",{style:{width:"200px"},noValidate:!0,autoComplete:"on"},n.a.createElement(g.a,null,n.a.createElement(h.a,{id:"whatsapp",type:"number",label:"WhatsApp Number"})));default:return"Unknown step"}}(t)),n.a.createElement("div",null,n.a.createElement(E.a,{variant:"contained",color:"primary",onClick:e.handleNext},e.state.activeStep===e.steps.length-1?"Finish":"Next"))))}))),this.state.activeStep===this.steps.length&&n.a.createElement(v.a,{className:"test123",square:!0,elevation:0},n.a.createElement(N.a,null,"Thank you! We will soon get back to you"),n.a.createElement(E.a,{variant:"contained",color:"primary",onClick:this.handleReset},"Reset")))}}]),t}(n.a.Component),j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"reach-us-out",className:"scrollspy"},n.a.createElement("footer",{className:"page-footer teal"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col l6 s12"},n.a.createElement("h5",{className:"white-text"},"Reach us out ! "),n.a.createElement("p",{className:"grey-text text-lighten-4"},"Please feel free to reach us out by using our contact details or fill this form and let our team reach you out."),n.a.createElement(w,null)),n.a.createElement("div",{className:"col l4 offset-l2 s12"},n.a.createElement("h5",{className:"white-text"},"Follow us on"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"tel:+91-85958411",className:"grey-text text-lighten-3 valign-wrapper"},n.a.createElement("i",{className:"material-icons"},"local_phone"),"+91-8595841134")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 valign-wrapper",href:"mailto:lushdelightful.decor@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{style:{height:"30px",width:"30px"},alt:"",className:"circle responsive-img",src:"social/google-plus--v1.png"}),"Gmail")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 valign-wrapper",href:"https://m.facebook.com/pg/Lush-Delightful-Decor-110190740755876/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{style:{height:"30px",width:"30px"},alt:"",className:"circle responsive-img",src:"social/facebook-circled-50.png"}),"Facebook")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 valign-wrapper",href:"https://www.instagram.com/designing_dreamsfor/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{style:{height:"30px",width:"30px"},alt:"",className:"circle responsive-img",src:"social/instagram-50-2.png"}),"Instagram")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 valign-wrapper",href:"http://www.youtube.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{style:{height:"30px",width:"30px"},alt:"",className:"circle responsive-img",src:"social/youtube-50-2.png"}),"YouTube")),n.a.createElement("li",null,n.a.createElement("a",{className:"grey-text text-lighten-3 valign-wrapper",href:"http://www.twitter.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{style:{height:"30px",width:"30px"},alt:"",className:"circle responsive-img",src:"social/twitter-circled-50.png"}),"Twitter")))))),n.a.createElement("div",{className:"footer-copyright"},n.a.createElement("div",{className:"container"},"\xa9 2020 LUSH INTERIOR DECOR- PROVIDING HOME AND INTERIOR DESIGN IDEAS. ALL RIGHTS RESERVED."))))}}]),t}(n.a.Component),x=(t(58),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){$(".sidenav-trigger").sideNav()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{id:"slide-out",className:"side-nav teal sidenav-close"},n.a.createElement("li",null,n.a.createElement("img",{alt:"",className:"circle responsive-img",src:"logo.png"})),n.a.createElement("li",{className:"sidenav-close"},n.a.createElement("a",{href:"#home-slider",className:"waves-effect sidenav-close","data-target":"slide-out"},n.a.createElement("i",{className:"material-icons"},"home"),"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#our-offerrings",className:"waves-effect"},n.a.createElement("i",{className:"material-icons"},"local_offer"),"Our Offerings")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about-us",className:"waves-effect"},n.a.createElement("i",{className:"material-icons"},"loyalty"),"About us")),n.a.createElement("li",null,n.a.createElement("a",{href:"#testimonials-component",className:"waves-effect"},n.a.createElement("i",{className:"material-icons"},"insert_comment")," Testimonials")),n.a.createElement("li",null,n.a.createElement("a",{href:"#reach-us-out",className:"waves-effect"},n.a.createElement("i",{className:"material-icons"},"phone")," Reach Us Out"))))}}]),t}(n.a.Component)),k=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={imageName:"white.png"},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,null),n.a.createElement("div",{className:"navbar-fixed"},n.a.createElement("nav",{className:"teal"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/#",className:"brand-logo center"},n.a.createElement("img",{alt:"",className:"responsive-img",style:{verticalAlign:"middle",width:"280px"},src:this.state.imageName})),n.a.createElement("ul",{id:"nav-mobile",className:"left"},n.a.createElement("li",null,n.a.createElement("a",{href:"/#","data-activates":"slide-out",className:"sidenav-trigger"},n.a.createElement("i",{className:"material-icons"},"menu"))))))))}}]),t}(n.a.Component),O=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"about-us",className:"scrollspy"},n.a.createElement("br",null),n.a.createElement("h3",{className:"center",style:{fontFamily:"cursive"}},"Celebrate the love of decor and design with our offereings"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",id:"cards-row"},n.a.createElement("ul",{className:"card-list"},n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m4 s12"},n.a.createElement("div",{className:"card hoverable",id:"card1"},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{alt:"",src:"card/tele.jpg"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",{style:{textAlign:"center"}},"Dazzling TV units for a vibrant looking living room"))))),n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m4 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{alt:"",src:"card/14.jpeg"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",{style:{textAlign:"center"}},"Explore our different designs for Gorgeous Ways to Dress Up Your Hall"))))),n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m4 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{alt:"",src:"card/15.jpg"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",{style:{textAlign:"center"}},"One stop solution for all your Kitchen needs")))))))))}}]),t}(n.a.Component),S=t(74),C=t(62),I=t.n(C),D=t(63),A=t(147),T=t(151),R=t(148),z=t(152),L=t(67),W=t.n(L),H=t(69),M=t.n(H),P=t(70),F=t.n(P),_=t(65),B=t.n(_),K=t(64),G=t.n(K),U=t(68),V=t.n(U),q=t(72),Y=t.n(q),J=t(66),Q=t.n(J),X=t(71),Z=t.n(X),ee=t(145),ae=t(146),te=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"grid-list-root grid-list-root-gridlist"},n.a.createElement(ee.a,{cellHeight:400,spacing:4,className:"gridList container center test"},this.props.data.map((function(e){return n.a.createElement(ae.a,{key:e.img,cols:0,rows:1},n.a.createElement("img",{src:e.img,alt:e.title}))}))))}}]),t}(n.a.Component);function le(e){var a=e.children,t=e.value,l=e.index,r=Object(S.a)(e,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==l,id:"scrollable-force-tabpanel-".concat(l),"aria-labelledby":"scrollable-force-tab-".concat(l)},r),t===l&&n.a.createElement(T.a,{p:3},n.a.createElement(N.a,null,a)))}function ne(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var re=[{img:"actual/1.jpeg",featured:!0},{img:"actual/2.jpeg",featured:!1},{img:"actual/3.jpeg",featured:!1},{img:"actual/4.jpeg",featured:!0}],ce=[{img:"tabs/kids/1.png",featured:!0},{img:"tabs/kids/2.png",featured:!1},{img:"tabs/kids/3.jpeg",featured:!1},{img:"tabs/kids/5.jpeg",featured:!0}],ie=[{img:"tabs/living/1.png",featured:!0},{img:"tabs/living/2.jpeg",featured:!1},{img:"tabs/living/4.jpeg",featured:!1},{img:"tabs/living/5.png",featured:!0}],se=[{img:"tabs/bathroom/1.jpg",featured:!0},{img:"tabs/bathroom/2.jpg",featured:!1},{img:"tabs/bathroom/3.jpg",featured:!1}],oe=[{img:"tabs/accessories/1.jpg",featured:!0},{img:"tabs/accessories/2.jpg",featured:!1},{img:"tabs/accessories/4.jpg",featured:!1},{img:"tabs/accessories/3.jpg",featured:!0}],me=[{img:"tabs/bedroom/1.jpg",featured:!1},{img:"tabs/bedroom/2.jpg",featured:!1},{img:"tabs/bedroom/3.jpg",featured:!1},{img:"tabs/bedroom/4.jpg",featured:!1}],ue=[{img:"tabs/kitchen/1.jpg",featured:!1},{img:"tabs/kitchen/3.jpg",featured:!1},{img:"tabs/kitchen/2.jpg",featured:!0}],de=[{img:"tabs/terrace/1.jpg",featured:!1},{img:"tabs/terrace/2.jpg",featured:!1}],ge=[{img:"tabs/wall/1.jpg",featured:!0}],he=[{img:"tabs/furniture/1.jpg",featured:!1},{img:"tabs/furniture/3.jpg",featured:!1},{img:"tabs/furniture/4.jpg",featured:!1},{img:"tabs/furniture/5.jpeg",featured:!1},{img:"tabs/furniture/6.jpg",featured:!1}],pe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=a.call(this,e)).classes=void 0,l.value=void 0,l.handleChange=function(e,a){0===a&&l.setState({value:a,data:re}),1===a&&l.setState({value:a,data:ie}),2===a&&l.setState({value:a,data:me}),3===a&&l.setState({value:a,data:se}),4===a&&l.setState({value:a,data:ue}),5===a&&l.setState({value:a,data:de}),6===a&&l.setState({value:a,data:ce}),7===a&&l.setState({value:a,data:he}),8===a&&l.setState({value:a,data:ge}),9===a&&l.setState({value:a,data:oe})},l.state={value:0,data:re},l}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{id:"our-offerrings",className:"scrollspy"},n.a.createElement(A.a,{position:"static",color:"default"},n.a.createElement(z.a,{value:this.state.value,onChange:this.handleChange,variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},n.a.createElement(R.a,Object.assign({label:"Home Designing",icon:n.a.createElement(G.a,{fontSize:"large"})},ne(0))),n.a.createElement(R.a,Object.assign({label:"Living Room",icon:n.a.createElement(B.a,{fontSize:"large"})},ne(1))),n.a.createElement(R.a,Object.assign({label:"Bedroom",icon:n.a.createElement(Q.a,{fontSize:"large"})},ne(2))),n.a.createElement(R.a,Object.assign({label:"Bathroom",icon:n.a.createElement(W.a,{fontSize:"large"})},ne(3))),n.a.createElement(R.a,Object.assign({label:"Kitchen",icon:n.a.createElement(V.a,{fontSize:"large"})},ne(4))),n.a.createElement(R.a,Object.assign({label:"Terrace",icon:n.a.createElement(D.Icon,{icon:I.a,width:"32",height:"32"})},ne(5))),n.a.createElement(R.a,Object.assign({label:"Kids Room",icon:n.a.createElement(M.a,{fontSize:"large"})},ne(6))),n.a.createElement(R.a,Object.assign({label:"Furniture",icon:n.a.createElement(F.a,{fontSize:"large"})},ne(7))),n.a.createElement(R.a,Object.assign({label:"Wall Color and Design",icon:n.a.createElement(Z.a,{fontSize:"large"})},ne(8))),n.a.createElement(R.a,Object.assign({label:"Accessories",icon:n.a.createElement(Y.a,{fontSize:"large"})},ne(9))))),n.a.createElement(le,{value:this.state.value,index:0},n.a.createElement("div",{style:{textAlign:"center"}},"Everyone wants their house to be decorated with creative ideas and get a great relaxing and smoothening environment, you give us an empty space and we will give back to you a creative space filled with great and astonishing ideas."),n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:1},n.a.createElement("div",{style:{textAlign:"center"}},"Everyone wants their living room to be relaxing spacious and stress free. We provide our clients with designs which fulfills their requirement."),n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:2},n.a.createElement("div",{style:{textAlign:"center"}},"We honestly feel that bedroom designing should be done with utmost care and it should be in such a way that gives you space where you can forget your stress and relax.")," ",n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:3},n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:4},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("div",null,"U- Shaped Kitchen "),n.a.createElement("div",null,"L- Shaped Kitchen "),n.a.createElement("div",null," Galley Kitchen Island"),n.a.createElement("div",null," Kitchen Peninsula")," ",n.a.createElement("div",null," Parallel Kitchen"),"The kitchen is one of the most important part of a home. It is one of the area in Interior Designing which has picked up rapidly in few years. Many a people are very much interested to give their kitchen a complete new and gradient look.")," ",n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:5},n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:6},n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:7},n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:8},n.a.createElement(te,{data:this.state.data})),n.a.createElement(le,{value:this.state.value,index:9},n.a.createElement(te,{data:this.state.data})))}}]),t}(n.a.Component),ve=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){$(".slider").slider()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"slider scrollspy",id:"home-slider"},n.a.createElement("ul",{className:"slides"},n.a.createElement("li",null,n.a.createElement("img",{className:"responsive-img",alt:"",src:"preeti/4.jpeg"}),n.a.createElement("div",{className:"caption center-align"},n.a.createElement("h3",null,"Why Choose us?"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Our brand's main motto is our client\u2019s full satisfaction."))),n.a.createElement("li",null,n.a.createElement("img",{alt:"",className:"responsive-img",src:"preeti/1.jpeg"}),n.a.createElement("div",{className:"caption left-align"},n.a.createElement("h3",null,"Guaranteed Client\u2019s Satisfaction!"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Not only will your materials look great \u2013 they will get results"))),n.a.createElement("li",null,n.a.createElement("img",{alt:"",className:"responsive-img",src:"preeti/kitchen.jpg"}),n.a.createElement("div",{className:"caption right-align"},n.a.createElement("h3",null,"We are Creative!"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"While keeping a close eye on the calendar and your budget."))),n.a.createElement("li",null,n.a.createElement("img",{alt:"",className:"",src:"preeti/11.jpeg"}),n.a.createElement("div",{className:"caption center-align"},n.a.createElement("h3",null,"We bring our diverse background to the table!"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Advertising, design, branding, public relations, research and strategic planning to work for your company."))))))}}]),t}(n.a.Component),Ee=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"removePulse",value:function(e){e.currentTarget.classList.remove("pulse1")}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"testimonials-component",className:"scrollspy"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",id:"cards-row"},n.a.createElement("br",null),n.a.createElement("h3",{className:"center",style:{fontFamily:"cursive"}},"Our Customer's Testimonials"),n.a.createElement("ul",{className:"testimonial-card-list"},n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m3 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-content center"},n.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light pulse",onClick:function(a){e.removePulse(a)}},n.a.createElement("i",{className:"material-icons"},"format_quote"))),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",null,"With Lush delightful, it was value for money products and designs, from private individuals looking to remodel their homes. She is well aware of the latest products and design trends in the market, loved the concept -"," ",n.a.createElement("b",null,"Ankit"))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},n.a.createElement("i",{className:"material-icons right"},"close"),"Card Title"),n.a.createElement("p",null,"I am happy to have collaborated with her to design my dream home and am very pleased with the result. Wishing her all the best for future endeavors."))))),n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m3 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-content center"},n.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light pulse",onClick:function(a){e.removePulse(a)}},n.a.createElement("i",{className:"material-icons"},"thumb_up"))),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",null,"I am happy to have collaborated with her to design my dream home and am very pleased with the result. Wishing her all the best for future endeavors - ",n.a.createElement("b",null,"Divya"))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},n.a.createElement("i",{className:"material-icons right"},"close"),"Card Title"),n.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on."))))),n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m3 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-content center"},n.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light pulse activator",onClick:function(a){e.removePulse(a)}},n.a.createElement("i",{className:"material-icons"},"rate_review"))),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",null,"Thank you for making the whole process so enjoyable. I absolutely love my kitchen. Both Style at Home and Living interiors is lifted, everyone thinks it is amazing. You have been a pleasure to work with and wishing you all the success - ",n.a.createElement("b",null,"Chetna"))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},n.a.createElement("i",{className:"material-icons right"},"close"),"Card Title"),n.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on."))))),n.a.createElement("li",{style:{opacity:0}},n.a.createElement("div",{className:"col m3 s12"},n.a.createElement("div",{className:"card hoverable"},n.a.createElement("div",{className:"card-content center"},n.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light pulse activator",onClick:function(a){e.removePulse(a)}},n.a.createElement("i",{className:"material-icons"},"whatshot"))),n.a.createElement("div",{className:"card-content"},n.a.createElement("p",null,"The exceptional service that I received from Lush Delightful Decor is beyond compare. She has a wonderful eye for detail and color. She was able to take my ideas and transform them into realities. I couldn\u2019t have had a better and more rewarding relationship. I recommend Lush Delightful Decor - ",n.a.createElement("b",null,"Rahul"))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},n.a.createElement("i",{className:"material-icons right"},"close"),"Card Title"),n.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))))))))}}]),t}(n.a.Component),fe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){$(".parallax").parallax()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ve,null),n.a.createElement("br",null),n.a.createElement(pe,null),n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{alt:"",src:"actual/7.jpeg"}))),n.a.createElement("div",{className:"section white"},n.a.createElement(O,null)),n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{alt:"",src:"actual/9.jpeg"}))),n.a.createElement("div",{className:"section white"},n.a.createElement(Ee,null)),n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{alt:"",src:"actual/10.jpeg"}))))}}]),t}(n.a.Component);d.a.initialize("UA-171596388-1",{gaOptions:{siteSpeedSampleRate:100}}),d.a.pageview(window.location.pathname+window.location.search),Object(u.a)().listen((function(e){d.a.set({page:e.pathname}),d.a.pageview(e.pathname)}));var be=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Lush Interior Decor";Materialize.scrollFire([{selector:".card-list",offset:250,callback:'Materialize.showStaggeredList(".card-list")'},{selector:".testimonial-card-list",offset:250,callback:'Materialize.showStaggeredList(".testimonial-card-list")'}]),$(".scrollspy").scrollSpy()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(k,null),n.a.createElement(fe,null),n.a.createElement(j,null))}}]),t}(n.a.Component);t(97),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.b01b9ad4.chunk.js.map