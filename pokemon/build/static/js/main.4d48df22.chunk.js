(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{14:function(e,n,t){},21:function(e,n,t){e.exports=t.p+"static/media/logo.083ed650.png"},29:function(e,n,t){e.exports=t(45)},34:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(15),c=t.n(a),i=(t(34),t(1)),s=t(7),u=t(8),p=t(12),l=t(11),f=(t(14),t(21)),h=t.n(f),m=t(6),d=t(3),v=t.n(d),g=t(5),k=t(2),b=t(4),O=t(10);function w(e){return{type:"GET_OFFSET",data:e}}function x(e){return{type:"GET_OFFSET",data:e}}var E=function(e){return function(){var n=Object(g.a)(v.a.mark((function n(t){var r,o,a,c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://pokeapi.co/api/v2/pokemon/?offset=","&limit=20",n.next=5,fetch("".concat("https://pokeapi.co/api/v2/pokemon/?offset=").concat(e).concat("&limit=20"));case 5:return r=n.sent,n.next=8,r.json();case 8:return o=n.sent,a=o.results,c=void 0===a?[]:a,n.abrupt("return",t({type:"GET_POKEMONS",data:c}));case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},j=function(e){return function(n){return n({type:"SET_POKEMONINFO",data:e})}};function P(){var e=Object(i.a)(["\n  font-size: 2vh;\n"]);return P=function(){return e},e}function y(){var e=Object(i.a)(["\n  color: white;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"]);return y=function(){return e},e}var I=k.a.div(y()),N=k.a.p(P()),C=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).requestForNextPage=function(){var n=e.props.offset<=346?e.props.offset+20:e.props.offset;e.props.nextPage(n)},e.requestForPrevPage=function(){var n=0!==e.props.offset?e.props.offset-20:e.props.offset;e.props.prevPage(n)},e}return Object(u.a)(t,[{key:"nextRequest",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n,t,r,o,a,c,i,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.pokemons,r=n.pokemonInfo,o=t.map((function(e){return e.name})),console.log(o,"NAMES!"),a=r.map((function(e){return e.name})),console.log(a,"NAMES!"),c=o.some((function(e){return a.includes(e)})),console.log(c,"CHECKING NAMES"),!0===c){e.next=16;break}return i=this.props.pokemons.reduce((function(e,n){var t=n.url,r=new Promise(function(){var e=Object(g.a)(v.a.mark((function e(n,r){var o,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}());return e.push(r),e}),[]),e.next=11,Promise.all(i);case 11:return s=e.sent,e.next=14,this.props.setPokemonInfo(s);case 14:e.next=17;break;case 16:console.log("ERROR WHEN SETTING POKEMON");case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(g.a)(v.a.mark((function e(n){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.offset,r=this.props.offset,!(t<r)){e.next=10;break}return e.next=5,this.props.fetchPokemons(this.props.offset);case 5:return console.log(this.props.pokemons,"FETCH POKEMONS!!!!!"),e.next=8,this.nextRequest();case 8:e.next=12;break;case 10:if(!(t>r)){e.next=12;break}return e.abrupt("return",this.props.fetchPokemons(this.props.offset));case 12:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(I,null,o.a.createElement(N,{onClick:this.requestForPrevPage,className:"pagination-prev"},"\xab Previous"),o.a.createElement(N,{onClick:this.requestForNextPage,className:"pagination-next"},"Next \xbb"))}}]),t}(r.Component),A=Object(O.b)((function(e){return console.log("state",e),{offset:e.pagination.value,pokemons:e.card.pokemons,pokemonInfo:e.pokemonInfo.pokemonInfo}}),(function(e,n){console.log("ownProps",n);var t=Object(b.bindActionCreators)({nextPage:w,prevPage:x,fetchPokemons:E,setPokemonInfo:j},e);return Object(m.a)({},t)}))(C);function S(){var e=Object(i.a)(["\n  width: 8vw;\n  margin-left: auto;\n  margin-right: auto; \n"]);return S=function(){return e},e}function F(){var e=Object(i.a)(["\n  font-size: 2vh;\n  text-align: center;\n"]);return F=function(){return e},e}function T(){var e=Object(i.a)(["\n  font-size: 3vh;\n  text-align: center;\n"]);return T=function(){return e},e}function M(){var e=Object(i.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    justify-content center; \n    align-content: center;\n"]);return M=function(){return e},e}function D(){var e=Object(i.a)(["\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    144deg,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(149, 214, 238, 1) 33%,\n    rgba(0, 145, 210, 1) 100%\n  );\n  border: solid 4px white;\n  border-radius: 12px;\n  height: 45vh;\n  width: 17vw;\n  margin: 2vh;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-content: center;\n"]);return D=function(){return e},e}C.defaultProps={pokemons:[],fetchPokemons:function(){},fetchPokemonInfo:function(){}};var R=k.a.div(D()),K=k.a.div(M()),G=k.a.h1(T()),_=k.a.h3(F()),q=k.a.img(S()),L=function(e){var n=e.name,t=e.index,r=e.number,a=e.weight,c=e.types||[];return o.a.createElement(R,null,o.a.createElement(K,null,o.a.createElement(G,null," ",n," "),o.a.createElement(_,null," Number: ",r," "),o.a.createElement(q,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon"}),o.a.createElement(_,null,"Type: ",c[0]," ",c[1]),o.a.createElement(_,null,"Weight: ",a," ")))};function W(){var e=Object(i.a)(["\n  background: transparent;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: auto;\n  width: 100vw;\n"]);return W=function(){return e},e}var z=k.a.div(W()),H=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).updateFilteredPokemon=function(n){if(""===e.props.searchfield)return e.props.pokemons;var t=e.props.pokemons.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));console.log("filtered Pokemon is Set",t);var r=""!==n?t:e.props.pokemons;return console.log(r,"POKEMON DATA"),r},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchPokemons(this.props.offset);case 2:return n=this.props.pokemons.reduce((function(e,n){var t=n.url,r=new Promise(function(){var e=Object(g.a)(v.a.mark((function e(n,r){var o,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}());return e.push(r),e}),[]),e.next=5,Promise.all(n);case 5:return t=e.sent,e.next=8,this.props.setPokemonInfo(t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){e.searchfield!==this.props.searchfield&&(console.log("SEARCHFIELD DID UPDATE IN CARDARRAY",this.props.searchfield),this.updateFilteredPokemon(this.props.searchfield))}},{key:"render",value:function(){var e=this.props.pokemonInfo,n=void 0===e?[]:e;return o.a.createElement(z,null,this.updateFilteredPokemon(this.props.searchfield).map((function(e,t){var r=n.find((function(n){return n.name===e.name})),a=e.url.replace("v2","").replace(/[^0-9]/g,""),c=r?r.types.map((function(e){return e.type.name})):null;return o.a.createElement("div",{key:t,className:"testing"},o.a.createElement(L,{name:r?r.name:null,index:a,number:a,weight:r?r.weight:null,types:c}))})))}}]),t}(r.Component),U=Object(O.b)((function(e){return{offset:e.pagination.value,pokemons:e.card.pokemons,pokemonInfo:e.pokemonInfo.pokemonInfo,pokemonInfoLoaded:e.pokemonInfoLoaded,weight:e.pokemonInfo.weight}}),(function(e){return Object(b.bindActionCreators)({fetchPokemons:E,setPokemonInfo:j},e)}))(H);function B(){var e=Object(i.a)(["\n  background: transparent;\n  border-radius: 16px;\n  height: 5vh;\n  width: 20vw;\n  text-align: center;\n  color: #dde5ff;\n  border: solid 2px white;\n  outline: none;\n  font-size: 2vh;\n"]);return B=function(){return e},e}function J(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return e},e}var Y=k.a.div(J()),$=k.a.input(B()),Q=function(e){var n=e.searchChange;return o.a.createElement(Y,null,o.a.createElement($,{type:"search",placeholder:"Search Pokemon!",onChange:n}))},V={pokemons:[]},X={value:0},Z={pokemonInfo:[]},ee=Object(b.combineReducers)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"GET_POKEMONS":return{pokemons:r};default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"GET_OFFSET":return Object(m.a)(Object(m.a)({},e),{},{value:r});default:return e}},pokemonInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"SET_POKEMONINFO":return Object(m.a)(Object(m.a)({},e),{},{pokemonInfo:e.pokemonInfo.concat(r)});default:return e}}}),ne=t(26),te=t(27),re=t.n(te),oe=t(28),ae=t(17);function ce(){var e=Object(i.a)(["\n  background: transparent;\n  height: auto;\n  width: auto;\n"]);return ce=function(){return e},e}function ie(){var e=Object(i.a)(["\n  color: white;\n  font-size: 2vh;\n"]);return ie=function(){return e},e}function se(){var e=Object(i.a)(["\n  height: 20vh;\n  width: 20vw;\n"]);return se=function(){return e},e}function ue(){var e=Object(i.a)(["\nbackground: transparent;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n}\n"]);return ue=function(){return e},e}function pe(){var e=Object(i.a)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  background: rgb(189, 19, 19);\n  background: linear-gradient(\n    0deg,\n    rgba(189, 19, 19, 1) 0%,\n    rgba(80, 0, 9, 1) 60%,\n    rgba(49, 143, 200, 1) 93%\n  );\n  background-attachment: fixed;\n"]);return pe=function(){return e},e}var le=[re.a,oe.a],fe=Object(b.createStore)(ee,Object(ae.load)({states:["card","Pagination"]}),Object(ne.composeWithDevTools)(b.applyMiddleware.apply(void 0,le.concat([Object(ae.save)({states:["card","Pagination"]})])))),he=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={searchfield:""},e.searchChange=function(n){e.setState({searchfield:n.target.value})},e}return Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{store:fe},o.a.createElement(me,null,o.a.createElement(de,null,o.a.createElement(ve,{src:h.a,className:"App-Logo",alt:"pokemon-logo"}),o.a.createElement(ge,{className:" credits "},"Made Possible With Pok\xe9API!"),o.a.createElement(Q,{searchChange:this.searchChange}),o.a.createElement(A,{className:"pagination"})),o.a.createElement(ke,null,o.a.createElement(U,{searchfield:this.state.searchfield}))))}}]),t}(r.Component),me=k.a.div(pe()),de=k.a.div(ue()),ve=k.a.img(se()),ge=k.a.h2(ie()),ke=k.a.div(ce());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4d48df22.chunk.js.map