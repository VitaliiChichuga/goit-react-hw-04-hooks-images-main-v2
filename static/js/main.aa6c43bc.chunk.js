(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__24LMv",image:"ImageGalleryItem_image__ZDGXR"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2I0Vw",Modal:"Modal_Modal__3GwT8"}},27:function(e,t,a){e.exports={container:"Container_container__1CjT6"}},28:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__265wc"}},29:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2bvls"}},30:function(e,t,a){e.exports={Button:"Button_Button__3sZmO"}},32:function(e,t,a){e.exports={spinner:"Spinner_spinner__vt_5N"}},38:function(e,t,a){e.exports={App:"App_App__w3djH"}},7:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__1Fyrt",button:"SearchForm_button__3monr",buttonLabel:"SearchForm_buttonLabel__3K28l",input:"SearchForm_input__36rGY"}},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(16),s=a(4),u=a(11),l=(a(37),a(38),a(13)),b=a.n(l),m=a(25),j=a(26),d=a.n(j),g=function(){var e=Object(m.a)(b.a.mark((function e(t,a){var n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({q:t,page:a,per_page:"12",image_type:"photo",orientation:"horizontal",safesearch:"true"}),r="".concat("https://pixabay.com/api/","?key=").concat("23103282-e7d496618b624ef4484ab3d5c","&").concat(n),e.next=4,d.a.get(r);case 4:return c=e.sent,o=c.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=g,f=a(27),h=a.n(f),O=a(1);function _(e){var t=e.children;return Object(O.jsx)("div",{className:h.a.container,children:t})}var v=a(2),x=a.n(v),S=a(28),y=a.n(S),w=a(7),I=a.n(w);function L(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(o(""),t(c)):u.b.error("Sorry,input field is empty")},className:I.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:I.a.button,children:Object(O.jsx)("span",{className:I.a.buttonLabel,children:"Search"})}),Object(O.jsx)("input",{className:I.a.input,value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},type:"text",placeholder:"Search images and photos"})]})}function M(e){var t=e.onSubmit;return Object(O.jsx)("header",{className:y.a.Searchbar,children:Object(O.jsx)(L,{onSubmit:t})})}L.propTypes={onSubmit:x.a.func};var N=a(14),k=a.n(N);function G(e){var t=e.webformatURL,a=e.tags,n=e.toggleModal,r=e.bigImage;return Object(O.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:t,alt:a,className:k.a.image,onClick:function(){n(),r()}})})}var C=a(29),F=a.n(C);function R(e){var t=e.data,a=e.toggleModal,n=e.bigImage;return Object(O.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){return Object(O.jsx)(G,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,toggleModal:function(){return a()},bigImage:function(){return n(e.id,e.largeImageURL,e.tags)}},e.id)}))})}var U=a(30),E=a.n(U);function T(e){var t=e.onClick;return Object(O.jsx)("button",{className:E.a.Button,type:"button",onClick:t,children:"Load more"})}var B=a(15),q=a.n(B),A=document.querySelector("#modal-root");function D(e){var t=e.closeModal,a=e.modalImage;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(O.jsx)("div",{className:q.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(O.jsx)("div",{className:q.a.Modal,children:Object(O.jsx)("img",{src:a.img,alt:a.tags},a.id)})}),A)}var H=a(31),J=a.n(H),P=(a(79),a(32)),Z=a.n(P);function z(){return Object(O.jsx)(J.a,{className:Z.a.spinner,type:"MutatingDots",color:"#5da066",height:100,width:100})}var K="idle",V="pending",X="resolved";function Y(){var e=Object(n.useState)(K),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),l=o[0],b=o[1],m=Object(n.useState)(1),j=Object(s.a)(m,2),d=j[0],g=j[1],f=Object(n.useState)([]),h=Object(s.a)(f,2),v=h[0],x=h[1],S=Object(n.useState)(""),y=Object(s.a)(S,2),w=y[0],I=y[1],L=Object(n.useState)(!1),N=Object(s.a)(L,2),k=N[0],G=N[1];Object(n.useEffect)((function(){l&&(r(V),p(l,d).then((function(e){return e.hits})).then((function(e){x([].concat(Object(i.a)(v),Object(i.a)(e))),r(X),1!==d&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[d,l]);var C=function(){G(!k)};return Object(O.jsxs)(_,{children:[Object(O.jsx)(M,{onSubmit:function(e){b(e),g(1),x([])}}),Object(O.jsx)(R,{data:v,toggleModal:C,bigImage:function(e,t,a){I({id:e,img:t,tags:a})}}),a===V&&Object(O.jsx)(z,{}),v.length>0&&Object(O.jsx)(T,{onClick:function(){g(d+1),r(V)}}),k&&Object(O.jsx)(D,{closeModal:C,modalImage:w}),Object(O.jsx)(u.a,{autoClose:2e3})]})}a(80);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.querySelector("#root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.aa6c43bc.chunk.js.map