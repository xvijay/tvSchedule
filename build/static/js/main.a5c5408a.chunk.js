(this.webpackJsonptv=this.webpackJsonptv||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),s=(a(38),a(39),a(7)),o=function(e){return l.a.createElement("section",{className:"et-hero-tabs",ref:e.nav},l.a.createElement("h1",{style:{marginBottom:"1%"}},l.a.createElement("img",{src:"./image/television.png",style:{height:"60px"},raw:!0})," ","US TV Schedule"),l.a.createElement("h6",{style:{margin:"unset"}},"One Stop Destination for TV Schedule"),l.a.createElement("button",{className:"headerButton",onClick:e.scrollFunction},"Browse List"))},i=a(13),m=a(10),u=a(11),d=a(14),h=a(12),E=a(15),v=a(6),g=a(30),p=a.n(g),f={formatDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e)var t=new Date(Number(e));else t=new Date;var a=t.getDate(),n=t.getMonth()+1,l=t.getFullYear();return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,"/").concat(n,"/").concat(l)},addTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.split(":"),n=60*a[0]+parseFloat(a[1]),l=n+parseFloat(t);return l},getHourFromMin:function(e){var t=e/60,a=Math.floor(t),n=60*(t-a);return a+":"+Math.round(n)}},N=(a(57),function(e){console.log(e);var t=e.match.params.name,a=e.data.filter((function(e){return!!e.show.network&&e.show.network.name===t}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"fixedHeight"},l.a.createElement("table",{className:"table",id:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Show Start"),l.a.createElement("th",null,"Show End"),l.a.createElement("th",null,"Show Description"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement(s.b,{to:"/detail/".concat(e.id)},e.name)),l.a.createElement("td",null,e.airtime),l.a.createElement("td",null,f.getHourFromMin(f.addTime(e.airtime,e.runtime))),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.summary}}))))})))))))))}),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).searchTerm=function(e){a.dataSource=Object(i.a)(a.state.filter);var t=e.target.value.toLowerCase();console.log(t);var n=a.dataSource.filter((function(e){return-1!==String(e).toLowerCase().toString().search(t)}));""==t&&(n=a.dataSource),n.length>0?a.setState({channel:n}):a.setState({channel:[]}),console.log(n)},a.state={channel:[]},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({channel:this.props.channel,filter:this.props.channel})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"et-main"},l.a.createElement("section",{style:{height:"80vh"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12",style:{textAlign:"center"}},l.a.createElement("h1",null,"Channel List"))),l.a.createElement("input",{style:{width:"20%",marginLeft:"2%"},type:"text",className:"searchBar",placeholder:"Search...",onKeyUp:this.searchTerm}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},this.state.channel.map((function(e){return l.a.createElement("div",{className:"col-3 col-s-6 col-xs-12",key:e},l.a.createElement(s.b,{to:"/channel/".concat(e)},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"icon  icon-shape icon-shape-primary rounded-circle mb-4"},l.a.createElement("img",{src:"//tvscheduleindia.com/img/TVSi_logo.png",height:"30px",width:"30px"})),l.a.createElement("div",{className:""},e)))))})))))))}}]),t}(l.a.Component),y=(a(63),function(e){console.log(e);var t=e.match.params.id;console.log(t);var a=e.data.find((function(e){return Number(e.id)===Number(t)}));return console.log(e.data.find((function(e){return 1760877==e.id}))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 "},l.a.createElement("div",{className:"row detailCard"},l.a.createElement("div",{className:"col-4 col-xs-6",style:{height:"300px",padding:"unset",background:"url(".concat(a.show.image.medium,")")}}),l.a.createElement("div",{className:"col-8 col-xs-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12",style:{fontSize:"2rem",fontWeight:"900"}},a.name),l.a.createElement("div",{className:"col-3 col-s-6",style:{padding:"unset"}},l.a.createElement("span",{className:"cssPill"},"Season ",a.season)),l.a.createElement("div",{className:"col-3 col-s-6",style:{padding:"unset"}},l.a.createElement("span",{className:"cssPill"},a.show.status)),l.a.createElement("div",{className:"col-3 col-s-6",style:{padding:"unset"}},l.a.createElement("span",{className:"cssPill"},a.show.type)),l.a.createElement("div",{className:"col-3 col-s-6",style:{padding:"unset"}},l.a.createElement("span",{className:"cssPill"},a.show.language))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.summary}}))))))))}),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={data:[],channel:[]},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.tvmaze.com/schedule?country=US").then((function(t){var a=[];t.data.map((function(e){return e.show.network?a.push(e.show.network.name):null})),e.setState({channel:Object(i.a)(new Set(a)),data:t.data})})).catch((function(e){})).finally((function(){}))}},{key:"render",value:function(){var e=this;return l.a.createElement(v.c,null,this.state.channel.length>0?l.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(w,Object.assign({},t,{channel:e.state.channel}))}}):"Loading",this.state.data.length>0?l.a.createElement(v.a,{path:"/channel/:name",render:function(t){return l.a.createElement(N,Object.assign({},t,{data:e.state.data}))}}):"Loading....",this.state.data.length>0?l.a.createElement(v.a,{path:"/detail/:id",render:function(t){return l.a.createElement(y,Object.assign({},t,{data:e.state.data}))}}):"Loading...")}}]),t}(l.a.Component);var S=function(){var e=l.a.createRef();return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(o,{scrollFunction:function(){window.scrollTo({top:e.current.offsetHeight,left:0,behavior:"smooth"})},nav:e}),l.a.createElement(s.a,null,l.a.createElement(b,{id:"layout",style:{}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a5c5408a.chunk.js.map