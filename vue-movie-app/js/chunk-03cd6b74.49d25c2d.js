(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03cd6b74"],{"1bd5":function(e,t,n){"use strict";n("5c3c")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),r=n("5899"),c="["+r+"]",i=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),a=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(u,"")),n}};e.exports={start:a(1),end:a(2),trim:a(3)}},"5c3c":function(e,t,n){},"709e":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),r=Object(o["H"])("data-v-25f41a6e");Object(o["t"])("data-v-25f41a6e");var c={id:"movie-preview"},i={id:"movie-container"},u={id:"movie-poster"},a={id:"movie-info"},l=Object(o["g"])("Actors: "),d=Object(o["h"])("strong",null,"Storyline: ",-1),b={id:"options"},s=Object(o["h"])("h3",{class:"m-0"},"Create new movie",-1),p=Object(o["h"])("p",null,"Fill out the details bellow",-1),h=Object(o["h"])("hr",null,null,-1),f={id:"actor-input"},O=Object(o["h"])("p",{class:"m-0"},"Actors",-1),j=Object(o["h"])("hr",null,null,-1);Object(o["r"])();var v=r((function(e,t,n,v,m,g){var y=Object(o["y"])("Navbar"),A=Object(o["y"])("modal");return Object(o["q"])(),Object(o["e"])("div",c,[Object(o["h"])(y),Object(o["h"])("div",i,[Object(o["h"])("div",u,[Object(o["h"])("img",{src:m.movie.poster},null,8,["src"])]),Object(o["h"])("div",a,[Object(o["h"])("div",null,[Object(o["h"])("h1",null,Object(o["A"])(m.movie.name),1),Object(o["h"])("h3",null,Object(o["A"])(m.movie.year),1),Object(o["h"])("h3",null,Object(o["A"])(m.movie.genre),1),Object(o["h"])("h3",null,[Object(o["h"])("span",{style:{"background-color":e.getRatingColor()},id:"movie-rating"},Object(o["A"])(m.movie.rating),5)]),Object(o["h"])("h3",null,"Budget: "+Object(o["A"])(m.movie.budget),1),Object(o["h"])("h3",null,"Box office: "+Object(o["A"])(m.movie.boxOffice),1),Object(o["h"])("h3",null,[l,(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(m.movie.actors,(function(e,t){return Object(o["q"])(),Object(o["e"])("span",{key:t},Object(o["A"])(e.name),1)})),128))]),Object(o["h"])("h3",null,Object(o["A"])(m.movie.budget),1),Object(o["h"])("h3",null,[d,Object(o["g"])(" "+Object(o["A"])(m.movie.storyLine),1)])]),Object(o["h"])("div",b,[Object(o["h"])("button",{class:"edit",onClick:t[1]||(t[1]=function(e){return m.showModal=!0})},"Edit"),Object(o["h"])("button",{class:"delete",onClick:t[2]||(t[2]=function(){return g.deleteMovie.apply(g,arguments)})},"Delete")])])]),m.showModal?(Object(o["q"])(),Object(o["e"])(A,{key:0,onClose:t[13]||(t[13]=function(e){return m.showModal=!1})},{header:r((function(){return[s]})),body:r((function(){return[Object(o["h"])("form",{onSubmit:t[11]||(t[11]=Object(o["G"])((function(){return g.updateMovie.apply(g,arguments)}),["prevent"])),ref:"movieForm",id:"movie-form"},[p,Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return m.movie.name=e}),type:"text",placeholder:"Name"},null,512),[[o["C"],m.movie.name]]),Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.movie.year=e}),type:"number",placeholder:"Year"},null,512),[[o["C"],m.movie.year]]),Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return m.movie.rating=e}),type:"number",placeholder:"Rating"},null,512),[[o["C"],m.movie.rating]]),Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return m.movie.budget=e}),type:"text",placeholder:"Budget"},null,512),[[o["C"],m.movie.budget]]),Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[7]||(t[7]=function(e){return m.movie.poster=e}),type:"text",placeholder:"Poster"},null,512),[[o["C"],m.movie.poster]]),Object(o["F"])(Object(o["h"])("input",{required:"","onUpdate:modelValue":t[8]||(t[8]=function(e){return m.movie.boxOffice=e}),type:"text",placeholder:"Box Office"},null,512),[[o["C"],m.movie.boxOffice]]),h,Object(o["h"])("div",null,[Object(o["h"])("div",f,[O,Object(o["h"])("span",{onClick:t[9]||(t[9]=function(){return e.addActor.apply(e,arguments)}),class:"add-actor"},"+")]),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(m.movie.actors,(function(e,t){return Object(o["F"])((Object(o["q"])(),Object(o["e"])("input",{required:"",key:t,"onUpdate:modelValue":function(e){return m.movie.actors[t].name=e},type:"text",placeholder:"Actor"},null,8,["onUpdate:modelValue"])),[[o["C"],m.movie.actors[t].name]])})),128))]),j,Object(o["F"])(Object(o["h"])("textarea",{required:"","onUpdate:modelValue":t[10]||(t[10]=function(e){return m.movie.storyline=e}),placeholder:"Storyline",rows:"6"},null,512),[[o["C"],m.movie.storyline]])],544)]})),footer:r((function(){return[Object(o["h"])("button",{id:"update-movie",onClick:t[12]||(t[12]=function(t){return e.$refs.movieForm.requestSubmit()})}," Save ")]})),_:1})):Object(o["f"])("",!0)])})),m=(n("a9e3"),n("d178")),g=n("714b"),y=(n("9dd3"),n("efb8")),A={mixins:[y["a"]],components:{Navbar:m["a"],Modal:g["a"]},props:{id:{type:[String,Number],default:null}},data:function(){return{showModal:!1,movie:{}}},methods:{updateMovie:function(){this.$store.dispatch("updateMovie",this.movie),this.showModal=!1},deleteMovie:function(){this.$store.dispatch("deleteMovie",parseInt(this.id)),this.$router.push("/")}},created:function(){this.movie=this.$store.getters.getMovieById(parseInt(this.id))}};n("1bd5");A.render=v,A.__scopeId="data-v-25f41a6e";t["default"]=A},7156:function(e,t,n){var o=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var c,i;return r&&"function"==typeof(c=t.constructor)&&c!==n&&o(i=c.prototype)&&i!==n.prototype&&r(e,i),e}},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),c=n("94ca"),i=n("6eeb"),u=n("5135"),a=n("c6b6"),l=n("7156"),d=n("c04e"),b=n("d039"),s=n("7c73"),p=n("241c").f,h=n("06cf").f,f=n("9bf2").f,O=n("58a8").trim,j="Number",v=r[j],m=v.prototype,g=a(s(m))==j,y=function(e){var t,n,o,r,c,i,u,a,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=O(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+l}for(c=l.slice(2),i=c.length,u=0;u<i;u++)if(a=c.charCodeAt(u),a<48||a>r)return NaN;return parseInt(c,o)}return+l};if(c(j,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var A,I=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof I&&(g?b((function(){m.valueOf.call(n)})):a(n)!=j)?l(new v(y(t)),n,I):y(t)},N=o?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)u(v,A=N[w])&&!u(I,A)&&f(I,A,h(v,A));I.prototype=m,m.constructor=I,i(r,j,I)}}}]);
//# sourceMappingURL=chunk-03cd6b74.49d25c2d.js.map