(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__3ype8",QuizWrapper:"Quiz_QuizWrapper__2Ri9q"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__1w0jD",Question:"ActiveQuiz_Question__2iEqj"}},,,function(e,t,n){e.exports={Layout:"Layout_Layout__2qcHE"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2q-Jh"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3_92J"}},function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),s=n.n(r),c=(n(18),n(1)),o=n(2),u=n(4),l=n(3),w=n(5),m=n(10),d=n.n(m),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:d.a.Layout},i.a.createElement("main",null,this.props.children))}}]),t}(i.a.Component),p=n(6),f=n.n(p),v=n(7),A=n.n(v),Q=n(11),_=n.n(Q),E=n(12),b=n.n(E),z=function(e){return i.a.createElement("li",{className:b.a.AnswerItem,onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},j=function(e){return i.a.createElement("ul",{className:_.a.AnswersList},e.answers.map(function(t,n){return i.a.createElement(z,{key:n,answer:t,onAnswerClick:e.onAnswerClick})}))},k=function(e){return i.a.createElement("div",{className:A.a.ActiveQuiz},i.a.createElement("p",{className:A.a.Question},i.a.createElement("span",null,i.a.createElement("strong",null,e.answerNumber,". "),e.question),i.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),i.a.createElement(j,{answers:e.answers,onAnswerClick:e.onAnswerClick}))},q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={activeQuestion:0,quiz:[{question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0431\u043e",rightAnswerId:2,id:1,answers:[{text:"\u0427\u0435\u0440\u043d\u044b\u0439",id:1},{text:"\u0421\u0438\u043d\u0438\u0439",id:2},{text:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",id:3},{text:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",id:4}]},{question:"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443?",rightAnswerId:2,id:2,answers:[{text:"1700",id:1},{text:"1702",id:2},{text:"1703",id:3},{text:"1805",id:4}]}]},n.onAnswerClickHandler=function(e){console.log("answerId",e),n.setState({activeQuestion:n.state.activeQuestion+1})},n}return Object(w.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:f.a.Quiz},i.a.createElement("div",{className:f.a.QuizWrapper},i.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),i.a.createElement(k,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1})))}}]),t}(i.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(h,null,i.a.createElement(q,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,2,1]]]);
//# sourceMappingURL=main.0d6e377b.chunk.js.map