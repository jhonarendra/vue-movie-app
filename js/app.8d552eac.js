(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-03cd6b74":"49d25c2d"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-03cd6b74":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03cd6b74":"79182e2d"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-movie-app/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16b0":function(e,t,n){"use strict";n("fe80")},"413d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,o,i){var s=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["e"])(s)}var o={data:function(){return{}}};n("9cdc");o.render=r;var i=o,s=(n("d3b7"),n("6c02")),c=Object(a["H"])("data-v-12f5602a");Object(a["t"])("data-v-12f5602a");var u={class:"home"},d={id:"main-section"};Object(a["r"])();var l=c((function(e,t,n,r,o,i){var s=Object(a["y"])("Navbar"),c=Object(a["y"])("Sidebar"),l=Object(a["y"])("MovieList");return Object(a["q"])(),Object(a["e"])("div",u,[Object(a["h"])(s),Object(a["h"])("div",d,[Object(a["h"])(c),Object(a["h"])(l)])])})),h=n("d178"),m=(n("b0c0"),Object(a["H"])("data-v-6c356609"));Object(a["t"])("data-v-6c356609");var f={id:"sidebar"},b=Object(a["h"])("h3",{class:"m-0"},"Create new movie",-1),p=Object(a["h"])("p",null,"Fill out the details bellow",-1),g=Object(a["h"])("hr",null,null,-1),v={id:"actor-input"},y=Object(a["h"])("p",{class:"m-0"},"Actors",-1),O=Object(a["h"])("hr",null,null,-1);Object(a["r"])();var j=m((function(e,t,n,r,o,i){var s=Object(a["y"])("filters"),c=Object(a["y"])("modal");return Object(a["q"])(),Object(a["e"])("div",f,[Object(a["h"])(s),Object(a["h"])("button",{onClick:t[1]||(t[1]=function(e){return o.showModal=!0})},"Add movie"),o.showModal?(Object(a["q"])(),Object(a["e"])(c,{key:0,onClose:t[13]||(t[13]=function(e){return o.showModal=!o.showModal})},{header:m((function(){return[b]})),body:m((function(){return[Object(a["h"])("form",{onSubmit:t[11]||(t[11]=Object(a["G"])((function(){return i.addMovie.apply(i,arguments)}),["prevent"])),ref:"movieForm",id:"movie-form"},[p,Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.form.name=e}),type:"text",placeholder:"Name"},null,512),[[a["C"],o.form.name]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.form.year=e}),type:"number",placeholder:"Year"},null,512),[[a["C"],o.form.year]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.form.rating=e}),type:"number",placeholder:"Rating"},null,512),[[a["C"],o.form.rating]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.form.genre=e}),type:"text",placeholder:"Genre"},null,512),[[a["C"],o.form.genre]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.form.budget=e}),type:"text",placeholder:"Budget"},null,512),[[a["C"],o.form.budget]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.form.boxOffice=e}),type:"text",placeholder:"Box Office"},null,512),[[a["C"],o.form.boxOffice]]),Object(a["F"])(Object(a["h"])("input",{required:"","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.form.poster=e}),type:"text",placeholder:"Poster"},null,512),[[a["C"],o.form.poster]]),g,Object(a["h"])("div",null,[Object(a["h"])("div",v,[y,Object(a["h"])("span",{onClick:t[9]||(t[9]=function(){return i.addActor.apply(i,arguments)}),class:"add-actor"},"+")]),(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(o.form.actors,(function(e,t){return Object(a["F"])((Object(a["q"])(),Object(a["e"])("input",{required:"",key:t,"onUpdate:modelValue":function(e){return o.form.actors[t].name=e},type:"text",placeholder:"Actor"},null,8,["onUpdate:modelValue"])),[[a["C"],o.form.actors[t].name]])})),128))]),O,Object(a["F"])(Object(a["h"])("textarea",{required:"","onUpdate:modelValue":t[10]||(t[10]=function(e){return o.form.storyline=e}),placeholder:"Storyline",rows:"6"},null,512),[[a["C"],o.form.storyline]])],544)]})),footer:m((function(){return[Object(a["h"])("button",{id:"add-movie",onClick:t[12]||(t[12]=function(t){return e.$refs.movieForm.requestSubmit()})}," Add ")]})),_:1})):Object(a["f"])("",!0)])})),w=Object(a["H"])("data-v-0709812b");Object(a["t"])("data-v-0709812b");var k={id:"filters"},C=Object(a["h"])("h3",null,"Filters",-1);Object(a["r"])();var _=w((function(e,t,n,r,o,i){return Object(a["q"])(),Object(a["e"])("div",k,[C,(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(o.filters,(function(e,t){return Object(a["q"])(),Object(a["e"])("p",{key:e.key,onClick:function(t){return i.applyFilter(e)}},Object(a["A"])(e.name),9,["onClick"])})),128))])})),M={data:function(){return{filters:[{name:"Rating Highest",key:"rating",order:"desc"},{name:"Rating Lowest",key:"rating",order:"asc"},{name:"Year Newest",key:"year",order:"desc"},{name:"Year Oldest",key:"year",order:"asc"}]}},methods:{applyFilter:function(e){this.$store.dispatch("filter",e)}}};n("b7d0");M.render=_,M.__scopeId="data-v-0709812b";var A=M,x=n("714b"),S={components:{Filters:A,Modal:x["a"]},data:function(){return{showModal:!1,form:{name:"",year:"",rating:"",genre:"",budget:"",boxOffice:"",poster:"",actors:[{name:""}],storyline:""}}},methods:{addActor:function(){this.form.actors.push({name:""})},addMovie:function(e){e.preventDefault(),this.$store.dispatch("addMovie",this.form),this.showModal=!1}}};n("e790");S.render=j,S.__scopeId="data-v-6c356609";var T=S,L=Object(a["H"])("data-v-0272ee36");Object(a["t"])("data-v-0272ee36");var q={id:"movie-container"};Object(a["r"])();var F=L((function(e,t,n,r,o,i){var s=Object(a["y"])("Movie");return Object(a["q"])(),Object(a["e"])("div",q,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(i.movies,(function(e){return Object(a["q"])(),Object(a["e"])(s,{key:e.id,movie:e},null,8,["movie"])})),128))])})),E=Object(a["H"])("data-v-05252003");Object(a["t"])("data-v-05252003");var B={class:"movie"},I={class:"description"},R={class:"basic-info"};Object(a["r"])();var P=E((function(e,t,n,r,o,i){return Object(a["q"])(),Object(a["e"])("div",B,[Object(a["h"])("img",{src:n.movie.poster,onClick:t[1]||(t[1]=function(){return i.openDetails.apply(i,arguments)})},null,8,["src"]),Object(a["h"])("div",I,[Object(a["h"])("div",R,[Object(a["h"])("h3",null,Object(a["A"])(n.movie.name),1),Object(a["h"])("span",{style:{"background-color":e.getRatingColor()}},Object(a["A"])(n.movie.rating),5)]),Object(a["h"])("p",null,Object(a["A"])(n.movie.genre),1),Object(a["h"])("p",null,Object(a["A"])(n.movie.year),1)])])})),D=n("efb8"),H={mixins:[D["a"]],props:{movie:{type:Object,default:function(){}}},methods:{openDetails:function(){this.$router.push({name:"MoviePreview",params:{id:this.movie.id}})}}};n("16b0");H.render=P,H.__scopeId="data-v-05252003";var N=H,V={components:{Movie:N},data:function(){return{movies:[]}},computed:{movies:function(){return this.$store.getters.getMovies}}};n("d17c");V.render=F,V.__scopeId="data-v-0272ee36";var W=V,J={name:"Home",components:{Navbar:h["a"],Sidebar:T,MovieList:W}};n("95b7");J.render=l,J.__scopeId="data-v-12f5602a";var U,z=J,$=[{path:"/",name:"Home",component:z},{path:"/movie-preview/:id",name:"MoviePreview",component:function(){return n.e("chunk-03cd6b74").then(n.bind(null,"709e"))},props:!0}],G=Object(s["a"])({history:Object(s["b"])("vue-movie-app"),routes:$}),K=G,Y=n("5502"),Q=(n("4de4"),n("7db0"),n("c740"),n("c975"),n("d81d"),n("a434"),n("ac1f"),n("841c"),n("ade3")),Z=[{id:1,name:"The Lord of The Rings",genre:"Fantasy",rating:8,year:2001,budget:"93,000,000",boxOffice:"888,159,092",poster:"https://images-na.ssl-images-amazon.com/images/I/51uKITEiT1L._AC_SY445_.jpg",actors:[{name:"Sean Astin"},{name:"Elijah Wood"},{name:"Orlando Bloom"}],storyline:"An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign."},{id:2,name:"Transformers",genre:"Action",rating:7,year:2007,budget:"150,000,000",boxOffice:"709,709,780",poster:"https://images-na.ssl-images-amazon.com/images/I/51dpfe9JJLL._AC_.jpg",actors:[{name:"Shia LaBeouf"},{name:"Megan Fox"}],storyline:"High-school student Sam Witwicky buys his first car, who is actually the Autobot Bumblebee. Bumblebee defends Sam and his girlfriend Mikaela Banes from the Decepticon Barricade, before the other Autobots arrive on Earth. They are searching for the Allspark, and the war on Earth heats up as the Decepticons attack a United States military base in Qatar. Sam and Mikaela are taken by the top-secret agency Sector 7 to help stop the Decepticons, but when they learn the agency also intends to destroy the Autobots, they formulate their own plan to save the world."},{id:3,name:"Pirates of the Caribbean",genre:"Adventure",rating:8,storyline:"This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",year:2003,budget:"140,000,000",boxOffice:"654,264,015",poster:"https://cdn.shopify.com/s/files/1/0037/8008/3782/products/pirates_of_the_caribbean_advance_cast_style_WC23692_B_2_framed1.jpg?v=1581768597",actors:[{name:"Johnny Depp"},{name:"Geoffrey Rush"},{name:"Orlando Bloom"}]},{id:4,name:"Avatar",genre:"Action",rating:7,year:2009,budget:"237,000,000",boxOffice:"2,790,439,092",poster:"https://images-na.ssl-images-amazon.com/images/I/91FKuRPgwCL._AC_SL1500_.jpg",actors:[{name:"Sam Worthington"},{name:"Zoe Saldana"}],storyline:"When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid Na'vi in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an 'avatar' identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora."},{id:5,name:"Princess Mononoke",genre:"Animation",rating:8,year:1997,budget:"22,936,871",boxOffice:"169,785,629",poster:"https://images-na.ssl-images-amazon.com/images/I/517mkEqmnpL._AC_.jpg",actors:[{name:"Billy Crudup"},{name:"Billy Bob Thornton"},{name:"Minnie Driver"}],storyline:"While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met by animosity by both sides as they each see him as supporting the enemy."},{id:6,name:"Pulp Fiction",genre:"Crime",rating:8,year:1994,budget:"8,000,000",boxOffice:"214,194,847",poster:"https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._AC_SL1024_.jpg",actors:[{name:"Tim Roth"},{name:"John Travolta"},{name:"Samuel L. Jackson"}],storyline:"Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents."},{id:7,name:"Spider-Man 3",genre:"Action",rating:5,year:2007,budget:"258,000,000",boxOffice:"894,983,373",poster:"https://images-na.ssl-images-amazon.com/images/I/51MssEjdaRL._AC_.jpg",actors:[{name:"Tobey Maguire"},{name:"Kirsten Dunst"}],storyline:"Peter Parker has finally managed to piece together the once-broken parts of his life, maintaining a balance between his relationship with Mary-Jane and his responsibility as Spider-Man. But more challenges arise for our young hero. Peter's old friend Harry Obsourne has set out for revenge against Peter; taking up the mantle of his late father's persona as The New Goblin, and Peter must also capture Uncle Ben's real killer, Flint Marko, who has been transformed into his toughest foe yet, the Sandman. All hope seems lost when suddenly Peter's suit turns jet-black and greatly amplifies his powers. But it also begins to greatly amplify the much darker qualities of Peter's personality that he begins to lose himself to. Peter has to reach deep inside himself to free the compassionate hero he used to be if he is to ever conquer the darkness within and face not only his greatest enemies, but also...himself."},{id:8,name:"Holmes & Watson",genre:"Comedy",rating:3,year:2018,budget:"42,000,000",boxOffice:"40,466,970",poster:"https://images-na.ssl-images-amazon.com/images/I/91YUfw5aztL._AC_SL1500_.jpg",actors:[{name:"Will Ferrell"},{name:"John C. Reilly"}],storyline:"A humorous take on Sir Arthur Conan Doyle's classic mysteries featuring Sherlock Holmes and Doctor Watson."},{id:9,name:"Spirited Away",genre:"Animation",rating:9,year:2001,budget:"19,000,000",boxOffice:"355,467,076",poster:"https://images-na.ssl-images-amazon.com/images/I/41DpF-t-BFL._AC_.jpg",actors:[{name:"Rumi Hiiragi"},{name:"\tMiyu Irino"}],storyline:"Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax."},{id:10,name:"Inception",genre:"Action",rating:8,year:2010,budget:"160,000,000",boxOffice:"836,836,967",poster:"https://images-na.ssl-images-amazon.com/images/I/71uKM%2BLdgFL._AC_SY879_.jpg",actors:[{name:"Leonardo DiCaprio"},{name:"Joseph Gordon-Levitt"}],storyline:"Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."},{id:11,name:"The Matrix",genre:"Action",rating:8,year:1999,budget:"63,000,000",boxOffice:"466,364,409",poster:"https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",actors:[{name:"Keanu Reeves"},{name:"Carrie-Anne Moss"}],storyline:"Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion."}],X=n("9dd3"),ee="SET_SEARCH",te="SET_FILTER",ne="ADD_MOVIE",ae="DELETE_MOVIE",re="UPDATE_MOVIE",oe="SET_MOVIES",ie={movies:Z,search:"",filter:{key:"rating",order:"desc"}},se=(U={},Object(Q["a"])(U,ee,(function(e,t){e.search=t})),Object(Q["a"])(U,te,(function(e,t){e.filter=t})),Object(Q["a"])(U,ne,(function(e,t){e.movies.push(t)})),Object(Q["a"])(U,ae,(function(e,t){e.movies.splice(e.movies.findIndex((function(e){return e.id===t})),1)})),Object(Q["a"])(U,re,(function(e,t){e.movies=e.movies.map((function(e){return t.id===e.id?t:e}))})),Object(Q["a"])(U,oe,(function(e,t){e.movies=t})),U),ce={search:function(e,t){var n=e.commit;n(ee,t)},filter:function(e,t){var n=e.commit;n(te,t)},addMovie:function(e,t){var n=e.commit,a=e.state;t.id=a.movies.length+1,n(ne,t)},updateMovie:function(e,t){var n=e.commit;X["a"].updateMovie(t).then((function(e){return n(re,e)})).catch((function(e){return console.log(e)}))},deleteMovie:function(e,t){var n=e.commit;n(ae,t)},fetchMovies:function(e){var t=e.commit;X["a"].getMovies().then((function(e){return t(oe,e)})).catch((function(e){return console.log(e)}))}},ue={getMovies:function(e){return e.movies.filter((function(t){return t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1})).sort(de(e.filter))},getMovieById:function(e){return function(t){return e.movies.find((function(e){return e.id===t}))}}},de=function(e){var t=e.key,n=e.order;return function(e,a){var r=0;return e[t]>a[t]&&(r=1),e[t]<a[t]&&(r=-1),"asc"===n?r:-1*r}},le={state:ie,mutations:se,actions:ce,getters:ue},he=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{movies:le}});Object(a["d"])(i).use(he).use(K).mount("#app")},"5b37":function(e,t,n){},"714b":function(e,t,n){"use strict";var a=n("7a23"),r={class:"modal-wrapper"},o={class:"modal-container"},i={class:"modal-header"},s={class:"modal-body"},c={class:"modal-footer"},u=Object(a["h"])("div",null,null,-1);function d(e,t,n,d,l,h){return Object(a["q"])(),Object(a["e"])(a["b"],{name:"modal"},{default:Object(a["E"])((function(){return[Object(a["h"])("div",{class:"modal-mask",onClick:t[2]||(t[2]=function(){return h.closeModal.apply(h,arguments)})},[Object(a["h"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("div",i,[Object(a["x"])(e.$slots,"header")]),Object(a["h"])("div",s,[Object(a["x"])(e.$slots,"body")]),Object(a["h"])("div",c,[Object(a["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}," Close "),Object(a["x"])(e.$slots,"footer",{},(function(){return[u]}))])])])])]})),_:3})}var l={methods:{closeModal:function(e){"modal-mask"!==e.target.className&&"modal-wrapper"!==e.target.className||this.$emit("close")}}};n("b6bf");l.render=d;t["a"]=l},"84d8":function(e,t,n){"use strict";n("cd84")},"95b7":function(e,t,n){"use strict";n("99a8")},"99a8":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},"9dd3":function(e,t,n){"use strict";n("d81d");var a=n("5530"),r=(n("96cf"),n("1da1")),o={getMovies:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,db.get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return Object(a["a"])(Object(a["a"])({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),addMovie:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,db.add(t);case 2:return n=e.sent,r=n.id,e.abrupt("return",Object(a["a"])(Object(a["a"])({},t),{},{id:r}));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getMovieById:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,db.doc(t).get();case 2:return n=e.sent,e.abrupt("return",Object(a["a"])(Object(a["a"])({},n.data()),{},{id:t}));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateMovie:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,db.doc(t.id).update(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteMovie:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,db.doc(t).delete();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()};t["a"]=o},b6bf:function(e,t,n){"use strict";n("5b37")},b7d0:function(e,t,n){"use strict";n("413d")},c701:function(e,t,n){},cb71:function(e,t,n){},cd84:function(e,t,n){},cdbd:function(e,t,n){},d178:function(e,t,n){"use strict";n("ac1f"),n("841c");var a=n("7a23"),r=Object(a["H"])("data-v-65823b16");Object(a["t"])("data-v-65823b16");var o={id:"navbar-wrap"},i={id:"navbar"},s={key:0};Object(a["r"])();var c=r((function(e,t,n,r,c,u){return Object(a["q"])(),Object(a["e"])("div",o,[Object(a["h"])("div",i,[Object(a["h"])("h2",{onClick:t[1]||(t[1]=function(t){return e.$router.push("/")})},"Jhonarendra's Movie"),"/"==e.$route.path?(Object(a["q"])(),Object(a["e"])("div",s,[Object(a["F"])(Object(a["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.search=e}),type:"text",placeholder:"Cari film"},null,512),[[a["C"],c.search]])])):Object(a["f"])("",!0)])])})),u={data:function(){return{search:""}},watch:{search:function(){this.$store.dispatch("search",this.search)}}};n("84d8");u.render=c,u.__scopeId="data-v-65823b16";t["a"]=u},d17c:function(e,t,n){"use strict";n("cdbd")},e790:function(e,t,n){"use strict";n("cb71")},efb8:function(e,t,n){"use strict";var a={methods:{getRatingColor:function(){return this.movie.rating>7?"#4CAF50":this.movie.rating>4?"#FFEB3B":"#F44336"}}};t["a"]=a},fe80:function(e,t,n){}});
//# sourceMappingURL=app.8d552eac.js.map