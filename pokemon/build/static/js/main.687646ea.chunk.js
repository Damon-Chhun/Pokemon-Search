(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{21:function(e,n,t){},32:function(e,n,t){e.exports=t.p+"static/media/logo.083ed650.png"},40:function(e,n,t){e.exports=t(53)},45:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(23),c=t.n(o),i=(t(45),t(2)),s=t(11),u=t(12),p=t(15),l=t(14),f=(t(21),t(32)),h=t.n(f),m=t(9),d=t(5),v=t.n(d),g=t(16),b=t(3),k=t(6),O=t(13);function j(e){return{type:"GET_OFFSET",data:e}}function w(e){return{type:"GET_OFFSET",data:e}}var x=function(e){return function(){var n=Object(g.a)(v.a.mark((function n(t){var r,a,o,c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://pokeapi.co/api/v2/pokemon/?offset=","&limit=20",n.next=5,fetch("".concat("https://pokeapi.co/api/v2/pokemon/?offset=").concat(e).concat("&limit=20"));case 5:return r=n.sent,n.next=8,r.json();case 8:return a=n.sent,o=a.results,c=void 0===o?[]:o,n.abrupt("return",t({type:"GET_POKEMONS",data:c}));case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return function(n){return console.log(e),n({type:"SET_POKEMONINFO",data:e})}},y=function(){return{type:"fetchingData",data:!0}},P=function(){return{type:"ReceivedData",data:!0}},D=function(e,n){return function(){var t=Object(g.a)(v.a.mark((function t(r){var a,o,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,n),t.prev=1,a=e[n-1],o=a.stats,c=o.map((function(e){return e.base_stat})),t.abrupt("return",r({type:"GATHER_STATS",data:c}));case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()};function I(){var e=Object(i.a)(["\n  color: white;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"]);return I=function(){return e},e}function S(){var e=Object(i.a)(["\n  font-size: 2vh;\n  padding: 1vh 1vw;\n  border: solid 2px white;\n  border-radius: 16px;\n  margin-right: 1vw;\n  width: 7vw;\n  height: 2vh;\n  text-align: center;\n"]);return S=function(){return e},e}var A=b.a.p(S()),N=b.a.div(I()),T=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).requestForNextPage=function(){var n=e.props.offset<=346?e.props.offset+20:e.props.offset;e.props.nextPage(n)},e.requestForPrevPage=function(){var n=0!==e.props.offset?e.props.offset-20:e.props.offset;e.props.prevPage(n)},e}return Object(u.a)(t,[{key:"nextRequest",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n,t,r,a,o,c,i,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.pokemons,r=n.pokemonInfo,a=t.map((function(e){return e.name})),console.log(a,"NAMES!"),o=r.map((function(e){return e.name})),console.log(o,"NAMES!"),c=a.some((function(e){return o.includes(e)})),console.log(c,"CHECKING NAMES"),!0===c){e.next=18;break}return this.props.fetchingData(),i=this.props.pokemons.reduce((function(e,n){var t=n.url,r=new Promise(function(){var e=Object(g.a)(v.a.mark((function e(n,r){var a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,n(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}());return e.push(r),e}),[]),e.next=12,Promise.all(i);case 12:return s=e.sent,e.next=15,this.props.setPokemonInfo(s);case 15:this.props.receivedData(),e.next=19;break;case 18:console.log("ERROR WHEN SETTING POKEMON");case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(g.a)(v.a.mark((function e(n){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.offset,r=this.props.offset,!(t<r)){e.next=10;break}return e.next=5,this.props.fetchPokemons(this.props.offset);case 5:return console.log(this.props.pokemons,"FETCH POKEMONS!!!!!"),e.next=8,this.nextRequest();case 8:e.next=12;break;case 10:if(!(t>r)){e.next=12;break}return e.abrupt("return",this.props.fetchPokemons(this.props.offset));case 12:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(N,null,a.a.createElement(A,{onClick:this.requestForPrevPage,className:"pagination-prev"},"\xab Previous"),a.a.createElement(A,{onClick:this.requestForNextPage,className:"pagination-next"},"Next \xbb"))}}]),t}(r.Component),C=Object(O.b)((function(e){return console.log("state",e),{offset:e.pagination.value,pokemons:e.card.pokemons,pokemonInfo:e.pokemonInfo.pokemonInfo}}),(function(e,n){console.log("ownProps",n);var t=Object(k.bindActionCreators)({nextPage:j,prevPage:w,fetchPokemons:x,setPokemonInfo:E,fetchingData:y,receivedData:P},e);return Object(m.a)({},t)}))(T);T.defaultProps={pokemons:[],fetchPokemons:function(){},fetchPokemonInfo:function(){}};var F=t(20);function L(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 6vw;\n  height: 15vh;\n"]);return L=function(){return e},e}function M(){var e=Object(i.a)(["\n  font-size: 2vh;\n  text-align: center;\n  text-transform: capitalize;\n"]);return M=function(){return e},e}function R(){var e=Object(i.a)(["\n  font-size: 3vh;\n  text-align: center;\n  text-transform: capitalize;\n"]);return R=function(){return e},e}function _(){var e=Object(i.a)(["\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    144deg,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(149, 214, 238, 1) 33%,\n    rgba(0, 145, 210, 1) 100%\n  );\n  border: solid 4px white;\n  border-radius: 12px;\n  height: 45vh;\n  width: 17vw;\n  margin: 2vh;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-content: center;\n"]);return _=function(){return e},e}function G(){var e=Object(i.a)(["\n  &:hover {\n    animation: float 3s ease-in-out infinite;\n    border-radius 16px;\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(i.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    justify-content center; \n    align-content: center;\n    \n"]);return K=function(){return e},e}var z=b.a.div(K()),H=b.a.div(G()),W=b.a.div(_()),q=b.a.h1(R()),J=b.a.h3(M()),U=b.a.img(L()),B=function(e){var n=e.name,t=e.index,r=e.number,o=e.weight,c=e.types||[];return a.a.createElement(H,null,a.a.createElement(F.b,{to:"Pokemon-Search/".concat(r)},a.a.createElement(W,null,a.a.createElement(z,null,a.a.createElement(q,null," ",n," "),a.a.createElement(J,null," Number: ",r," "),a.a.createElement(U,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon"}),a.a.createElement(J,null,"Type: ",c[0]," ",c[1]),a.a.createElement(J,null,"Weight: ",o," ")))))},Y=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return!0===this.props.LoadingData?a.a.createElement("div",{class:"loader"},"Loading..."):null}}]),t}(r.Component),$=Object(O.b)((function(e){return{LoadingData:e.pagination.fetchingData,ReceivedData:e.pagination.receivedData}}),(function(e){return Object(k.bindActionCreators)({fetchingData:y,receivedData:P},e)}))(Y);function Q(){var e=Object(i.a)(["\n  background: transparent;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: auto;\n  width: 100vw;\n"]);return Q=function(){return e},e}var V=b.a.div(Q()),X=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).updateFilteredPokemon=function(n){if(""===e.props.searchfield)return e.props.pokemons;var t=e.props.pokemons.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));console.log("filtered Pokemon is Set",t);var r=""!==n?t:e.props.pokemons;return console.log(r,"POKEMON DATA"),r},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(36e5,this.props.LoadingData&&!(new Date-this.props.pokemonsLoadedAt>36e5)){e.next=6;break}return e.next=4,this.props.fetchingData();case 4:return e.next=6,this.props.fetchPokemons(this.props.offset);case 6:return n=this.props.pokemons.reduce((function(e,n){var t=n.url,r=new Promise(function(){var e=Object(g.a)(v.a.mark((function e(n,r){var a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,n(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}());return e.push(r),e}),[]),e.next=9,Promise.all(n);case 9:return t=e.sent,e.next=12,this.props.setPokemonInfo(t);case 12:return e.next=14,this.props.receivedData();case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){e.searchfield!==this.props.searchfield&&(console.log("SEARCHFIELD DID UPDATE IN CARDARRAY",this.props.searchfield),this.updateFilteredPokemon(this.props.searchfield))}},{key:"render",value:function(){var e=this.props.pokemonInfo,n=void 0===e?[]:e;return!0===this.props.LoadingData?a.a.createElement($,null):a.a.createElement(V,null,this.updateFilteredPokemon(this.props.searchfield).map((function(e,t){var r=n.find((function(n){return n.name===e.name})),o=e.url.replace("v2","").replace(/[^0-9]/g,""),c=r?r.types.map((function(e){return e.type.name})):null;return a.a.createElement("div",{key:t,className:"testing"},a.a.createElement(B,{name:r?r.name:null,index:o,number:o,weight:r?r.weight:null,types:c}))})))}}]),t}(r.Component),Z=Object(O.b)((function(e){return{offset:e.pagination.value,pokemons:e.card.pokemons,pokemonInfo:e.pokemonInfo.pokemonInfo,pokemonInfoLoaded:e.pokemonInfoLoaded,LoadingData:e.pagination.fetchingData,pokemonsLoadedAt:e.card.pokemonsLoadedAt}}),(function(e){return Object(k.bindActionCreators)({fetchPokemons:x,setPokemonInfo:E,fetchingData:y,receivedData:P},e)}))(X);function ee(){var e=Object(i.a)(["\n  background: transparent;\n  border-radius: 16px;\n  height: 5vh;\n  width: 20vw;\n  text-align: center;\n  color: #dde5ff;\n  border: solid 2px white;\n  outline: none;\n  font-size: 2vh;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ne=function(){return e},e}var te=b.a.div(ne()),re=b.a.input(ee()),ae=function(e){var n=e.searchChange;return a.a.createElement(te,null,a.a.createElement(re,{type:"search",placeholder:"Search Pokemon!",onChange:n}))},oe=t(4);function ce(){var e=Object(i.a)(["\n  color: white;\n  text-align: center;\n"]);return ce=function(){return e},e}var ie=b.a.h1(ce()),se=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.gatherStats(this.props.pokemonInfo,this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return void 0===this.props.stats?a.a.createElement(ie,null,"Testing"):this.props.stats.map((function(n,t){return a.a.createElement(ie,null,e.props.statProps[t],":",n)}))}}]),t}(r.Component),ue=Object(oe.f)(Object(O.b)((function(e){return{pokemonInfo:e.pokemonInfo.pokemonInfo,stats:e.pokemonInfo.stats,statProps:e.pokemonInfo.statsNames}}),(function(e){return Object(k.bindActionCreators)({gatherStats:D},e)}))(se)),pe={pokemons:[],pokemonLoadedAt:null},le={value:0,fetchingData:!1,receivedData:!0},fe={pokemonInfo:[],stats:[],statsNames:["HP","Attack","Defense","Special-Attack","Special-Defense","Speed"]},he=Object(k.combineReducers)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"GET_POKEMONS":return{pokemons:r,pokemonLoadedAt:new Date};default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"GET_OFFSET":return Object(m.a)(Object(m.a)({},e),{},{value:r});case"fetchingData":return Object(m.a)(Object(m.a)({},e),{},{fetchingData:!0,receivedData:!1});case"ReceivedData":return Object(m.a)(Object(m.a)({},e),{},{fetchingData:!1,receivedData:!0});default:return e}},pokemonInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"SET_POKEMONINFO":return Object(m.a)(Object(m.a)({},e),{},{pokemonInfo:e.pokemonInfo.concat(r)});case"GATHER_STATS":return Object(m.a)(Object(m.a)({},e),{},{stats:r});default:return e}}}),me=t(37),de=t.n(me),ve=t(38),ge=t(39);var be=[de.a,ve.a],ke=function(){try{var e=localStorage.getItem("store");if(null===e)return;return JSON.parse(e)}catch(n){return void console.log(n)}}(),Oe=Object(k.createStore)(he,ke,Object(ge.composeWithDevTools)(k.applyMiddleware.apply(void 0,be)));Oe.subscribe((function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("store",n)}catch(t){}}(Oe.getState())}));var je=Oe;function we(){var e=Object(i.a)(["\n  background: transparent;\n  height: auto;\n  width: auto;\n"]);return we=function(){return e},e}function xe(){var e=Object(i.a)(["\n  color: white;\n  font-size: 2vh;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  height: 20vh;\n  width: 20vw;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(i.a)(["\nbackground: transparent;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n}\n"]);return ye=function(){return e},e}function Pe(){var e=Object(i.a)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  background: rgb(189, 19, 19);\n  background: linear-gradient(\n    0deg,\n    rgba(189, 19, 19, 1) 0%,\n    rgba(80, 0, 9, 1) 60%,\n    rgba(49, 143, 200, 1) 93%\n  );\n  background-attachment: fixed;\n"]);return Pe=function(){return e},e}var De=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={searchfield:""},e.searchChange=function(n){e.setState({searchfield:n.target.value})},e}return Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(F.a,{basename:"/"},a.a.createElement(O.a,{store:je},a.a.createElement(Ie,null,a.a.createElement(Se,null,a.a.createElement(F.b,{to:"/Pokemon-Search"},a.a.createElement(Ae,{src:h.a,alt:"pokemon-logo"})),a.a.createElement(Ne,null,"Made Possible With Pok\xe9API!")),a.a.createElement(oe.c,null,a.a.createElement(oe.a,{exact:!0,path:"/Pokemon-Search"},a.a.createElement(Se,null,a.a.createElement(ae,{searchChange:this.searchChange}),a.a.createElement(C,{className:"pagination"})),a.a.createElement(Te,null,a.a.createElement(Z,{searchfield:this.state.searchfield}))),a.a.createElement(oe.a,{path:"/Pokemon-Search/:id",render:function(e){return a.a.createElement(ue,e)}})))))}}]),t}(r.Component),Ie=b.a.div(Pe()),Se=b.a.div(ye()),Ae=b.a.img(Ee()),Ne=b.a.h2(xe()),Te=b.a.div(we());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.687646ea.chunk.js.map