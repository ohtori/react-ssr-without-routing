/*! For license information please see index.js.LICENSE.txt */
module.exports=(()=>{"use strict";var e={308:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,u,l=o(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))r.call(a,s)&&(l[s]=a[s]);if(t){u=t(a);for(var f=0;f<u.length;f++)n.call(a,u[f])&&(l[u[f]]=a[u[f]])}}return l}},846:(e,t,r)=>{var n=r(308),o=r(570),i=r(413);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=60106,l=60107,c=60108,s=60114,f=60109,p=60110,d=60112,h=60113,y=60120,m=60115,v=60116,g=60121,w=60117,x=60119,b=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var S=Symbol.for;u=S("react.portal"),l=S("react.fragment"),c=S("react.strict_mode"),s=S("react.profiler"),f=S("react.provider"),p=S("react.context"),d=S("react.forward_ref"),h=S("react.suspense"),y=S("react.suspense_list"),m=S("react.memo"),v=S("react.lazy"),g=S("react.block"),w=S("react.fundamental"),x=S("react.scope"),b=S("react.debug_trace_mode"),k=S("react.legacy_hidden")}function _(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case u:return"Portal";case s:return"Profiler";case c:return"StrictMode";case h:return"Suspense";case y:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return _(e.type);case g:return _(e._render);case v:t=e._payload,e=e._init;try{return _(e(t))}catch(e){}}return null}var E=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function O(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var F=new Uint16Array(16),j=0;15>j;j++)F[j]=j+1;F[15]=0;var I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D=Object.prototype.hasOwnProperty,P={},A={};function R(e){return!!D.call(A,e)||!D.call(P,e)&&(I.test(e)?A[e]=!0:(P[e]=!0,!1))}function N(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){M[e]=new N(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];M[t]=new N(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){M[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){M[e]=new N(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){M[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){M[e]=new N(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){M[e]=new N(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){M[e]=new N(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){M[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)}));var $=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace($,T);M[t]=new N(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace($,T);M[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace($,T);M[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){M[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),M.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){M[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)}));var z=/["'&<>]/;function L(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=z.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function V(e,t){var r,n=M.hasOwnProperty(e)?M[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r))return!0;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,n)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+L(t)+'"')):R(e)?e+'="'+L(t)+'"':""}var q="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},U=null,H=null,W=null,B=!1,G=!1,Z=null,Y=0;function J(){if(null===U)throw Error(a(321));return U}function X(){if(0<Y)throw Error(a(312));return{memoizedState:null,queue:null,next:null}}function K(){return null===W?null===H?(B=!1,H=W=X()):(B=!0,W=H):null===W.next?(B=!1,W=W.next=X()):(B=!0,W=W.next),W}function Q(e,t,r,n){for(;G;)G=!1,Y+=1,W=null,r=e(t,n);return ee(),r}function ee(){U=null,G=!1,H=null,Y=0,W=Z=null}function te(e,t){return"function"==typeof t?t(e):t}function re(e,t,r){if(U=J(),W=K(),B){var n=W.queue;if(t=n.dispatch,null!==Z&&void 0!==(r=Z.get(n))){Z.delete(n),n=W.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return W.memoizedState=n,[n,t]}return[W.memoizedState,t]}return e=e===te?"function"==typeof t?t():t:void 0!==r?r(t):t,W.memoizedState=e,e=(e=W.queue={last:null,dispatch:null}).dispatch=oe.bind(null,U,e),[W.memoizedState,e]}function ne(e,t){if(U=J(),t=void 0===t?null:t,null!==(W=K())){var r=W.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!q(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),W.memoizedState=[e,t],e}function oe(e,t,r){if(!(25>Y))throw Error(a(301));if(e===U)if(G=!0,e={action:r,next:null},null===Z&&(Z=new Map),void 0===(r=Z.get(t)))Z.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ie(){}var ae=null,ue={readContext:function(e){var t=ae.threadID;return O(e,t),e[t]},useContext:function(e){J();var t=ae.threadID;return O(e,t),e[t]},useMemo:ne,useReducer:re,useRef:function(e){U=J();var t=(W=K()).memoizedState;return null===t?(e={current:e},W.memoizedState=e):t},useState:function(e){return re(te,e)},useLayoutEffect:function(){},useCallback:function(e,t){return ne((function(){return e}),t)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(e){return J(),e},useTransition:function(){return J(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ae.identifierPrefix||"")+"R:"+(ae.uniqueID++).toString(36)},useMutableSource:function(e,t){return J(),t(e._source)}},le="http://www.w3.org/1999/xhtml";function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},fe=n({menuitem:!0},se),pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},de=["Webkit","ms","Moz","O"];Object.keys(pe).forEach((function(e){de.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var he=/([A-Z])/g,ye=/^ms-/,me=o.Children.toArray,ve=E.ReactCurrentDispatcher,ge={listing:!0,pre:!0,textarea:!0},we=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xe={},be={},ke=Object.prototype.hasOwnProperty,Se={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function _e(e,t){if(void 0===e)throw Error(a(152,_(t)||"Component"))}var Ee=function(){function e(e,t,r){o.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=o.isValidElement(e)?[e]:me(e)):e=me(e),e={type:null,domNamespace:le,children:e,childIndex:0,context:C,footer:""};var n=F[0];if(0===n){var i=F,u=2*(n=i.length);if(!(65536>=u))throw Error(a(304));var c=new Uint16Array(u);for(c.set(i),(F=c)[0]=n+1,i=n;i<u-1;i++)F[i]=i+1;F[u-1]=0}else F[0]=F[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;F[e]=F[0],F[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;O(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ae;ae=this;var r=ve.current;ve.current=ue;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;F[i]=F[0],F[0]=i;break}var u=this.stack[this.stack.length-1];if(o||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===f)this.popProvider(u.type);else if(u.type===h){this.suspenseDepth--;var c=n.pop();if(o){o=!1;var s=u.fallbackFrame;if(!s)throw Error(a(303));this.stack.push(s),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=c}n[this.suspenseDepth]+=l}else{var p=u.children[u.childIndex++],d="";try{d+=this.render(p,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(a(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{ve.current=r,ae=t,ee()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""==(r=""+e)?"":this.makeStaticMarkup?L(r):this.previousWasTextNode?"\x3c!-- --\x3e"+L(r):(this.previousWasTextNode=!0,L(r));if(e=(t=function(e,t,r){function i(o,i){var u=i.prototype&&i.prototype.isReactComponent,l=function(e,t,r,n){if(n&&"object"==typeof(n=e.contextType)&&null!==n)return O(n,r),n[r];if(e=e.contextTypes){for(var o in r={},e)r[o]=t[o];t=r}else t=C;return t}(i,t,r,u),c=[],s=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){s=!0,c=[t]},enqueueSetState:function(e,t){if(null===c)return null;c.push(t)}};if(u){if(u=new i(o.props,l,f),"function"==typeof i.getDerivedStateFromProps){var p=i.getDerivedStateFromProps.call(null,o.props,u.state);null!=p&&(u.state=n({},u.state,p))}}else if(U={},u=i(o.props,l,f),null==(u=Q(i,o.props,u,l))||null==u.render)return void _e(e=u,i);if(u.props=o.props,u.context=l,u.updater=f,void 0===(f=u.state)&&(u.state=f=null),"function"==typeof u.UNSAFE_componentWillMount||"function"==typeof u.componentWillMount)if("function"==typeof u.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&u.UNSAFE_componentWillMount(),c.length){f=c;var d=s;if(c=null,s=!1,d&&1===f.length)u.state=f[0];else{p=d?f[0]:u.state;var h=!0;for(d=d?1:0;d<f.length;d++){var y=f[d];null!=(y="function"==typeof y?y.call(u,p,o.props,l):y)&&(h?(h=!1,p=n({},p,y)):n(p,y))}u.state=p}}else c=null;if(_e(e=u.render(),i),"function"==typeof u.getChildContext&&"object"==typeof(o=i.childContextTypes)){var m=u.getChildContext();for(var v in m)if(!(v in o))throw Error(a(108,_(i)||"Unknown",v))}m&&(t=n({},t,m))}for(;o.isValidElement(e);){var u=e,l=u.type;if("function"!=typeof l)break;i(u,l)}return{child:e,context:t}}(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===u)throw Error(a(257));throw Error(a(258,r.toString()))}return e=me(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var i=e.type;if("string"==typeof i)return this.renderDOM(e,t,r);switch(i){case k:case b:case c:case s:case y:case l:return e=me(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(a(294));case x:throw Error(a(343))}if("object"==typeof i&&null!==i)switch(i.$$typeof){case d:U={};var g=i.render(e.props,e.ref);return g=Q(i.render,e.props,g,e.ref),g=me(g),this.stack.push({type:null,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case m:return e=[o.createElement(i.type,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:i=me(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:i=e.type,g=e.props;var S=this.threadID;return O(i,S),i=me(g.children(i[S])),this.stack.push({type:e,domNamespace:r,children:i,childIndex:0,context:t,footer:""}),"";case w:throw Error(a(338));case v:return i=(g=(i=e.type)._init)(i._payload),e=[o.createElement(i,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(a(130,null==i?i:typeof i,""))},t.renderDOM=function(e,t,r){var i=e.type.toLowerCase();if(r===le&&ce(i),!xe.hasOwnProperty(i)){if(!we.test(i))throw Error(a(65,i));xe[i]=!0}var u=e.props;if("input"===i)u=n({type:void 0},u,{defaultChecked:void 0,defaultValue:void 0,value:null!=u.value?u.value:u.defaultValue,checked:null!=u.checked?u.checked:u.defaultChecked});else if("textarea"===i){var l=u.value;if(null==l){l=u.defaultValue;var c=u.children;if(null!=c){if(null!=l)throw Error(a(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(a(93));c=c[0]}l=""+c}null==l&&(l="")}u=n({},u,{value:void 0,children:""+l})}else if("select"===i)this.currentSelectValue=null!=u.value?u.value:u.defaultValue,u=n({},u,{value:void 0});else if("option"===i){c=this.currentSelectValue;var s=function(e){if(null==e)return e;var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(u.children);if(null!=c){var f=null!=u.value?u.value+"":s;if(l=!1,Array.isArray(c)){for(var p=0;p<c.length;p++)if(""+c[p]===f){l=!0;break}}else l=""+c===f;u=n({selected:void 0,children:void 0},u,{selected:l,children:s})}}if(l=u){if(fe[i]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw Error(a(137,i));if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw Error(a(60));if("object"!=typeof l.dangerouslySetInnerHTML||!("__html"in l.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=l.style&&"object"!=typeof l.style)throw Error(a(62))}l=u,c=this.makeStaticMarkup,s=1===this.stack.length,f="<"+e.type;e:if(-1===i.indexOf("-"))p="string"==typeof l.is;else switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":p=!1;break e;default:p=!0}for(b in l)if(ke.call(l,b)){var d=l[b];if(null!=d){if("style"===b){var h=void 0,y="",m="";for(h in d)if(d.hasOwnProperty(h)){var v=0===h.indexOf("--"),g=d[h];if(null!=g){if(v)var w=h;else if(w=h,be.hasOwnProperty(w))w=be[w];else{var x=w.replace(he,"-$1").toLowerCase().replace(ye,"-ms-");w=be[w]=x}y+=m+w+":",m=h,y+=v=null==g||"boolean"==typeof g||""===g?"":v||"number"!=typeof g||0===g||pe.hasOwnProperty(m)&&pe[m]?(""+g).trim():g+"px",m=";"}}d=y||null}h=null,p?Se.hasOwnProperty(b)||(h=R(h=b)&&null!=d?h+'="'+L(d)+'"':""):h=V(b,d),h&&(f+=" "+h)}}c||s&&(f+=' data-reactroot=""');var b=f;l="",se.hasOwnProperty(i)?b+="/>":(b+=">",l="</"+e.type+">");e:{if(null!=(c=u.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=u.children)||"number"==typeof c){c=L(c);break e}c=null}return null!=c?(u=[],ge.hasOwnProperty(i)&&"\n"===c.charAt(0)&&(b+="\n"),b+=c):u=me(u.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?ce(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:i,children:u,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,b},e}();!function(e){function t(t,r,n){var o=e.call(this,{})||this;return o.partialRenderer=new Ee(t,r,n),o}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var r=t.prototype;r._destroy=function(e,t){this.partialRenderer.destroy(),t(e)},r._read=function(e){try{this.push(this.partialRenderer.read(e))}catch(e){this.destroy(e)}}}(i.Readable);t.renderToString=function(e,t){e=new Ee(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},819:(e,t,r)=>{e.exports=r(793)},793:(e,t,r)=>{e.exports=r(846)},867:(e,t,r)=>{var n=r(308),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,l=60112;t.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),l=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=g.prototype=new v;w.constructor=g,n(w,m.prototype),w.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,i={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)b.call(t,n)&&!k.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===n?"."+C(l,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),O(a,t,r,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+C(u=e[c],c);l+=O(u,t,r,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),c=0;!(u=e.next()).done;)l+=O(u=u.value,t,r,s=n+C(u,c++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function F(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function D(){var e=I.current;if(null===e)throw Error(d(321));return e}var P={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:F,forEach:function(e,t,r){F(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=n({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)b.call(t,s)&&!k.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.1"},570:(e,t,r)=>{e.exports=r(867)},461:(e,t,r)=>{r.r(t);var n=r(570);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(){var e,t,r=(e=(0,n.useState)("Put your message"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],a=r[1];return n.createElement("form",null,n.createElement("input",{type:"text",onInput:function(e){a(e.target.value),console.log(i)},name:"email",value:i,placeholder:""}),n.createElement("button",null,"Send"))}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){var t,r,o=e.initialData,i=o||[],u=(t=(0,n.useState)(i),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],c=u[1];return console.log(o),(0,n.useEffect)((function(){l.length||fetch("https://jsonplaceholder.typicode.com/users/1/posts").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]),n.createElement("ul",null,l.map((function(e){return n.createElement("li",null,e.title)})))}r(515);const l=function(e){var t,r=e.initialData;return r?t=r:(t=window.__initialData__,console.log(t),delete window.__initialData__),n.createElement("div",{className:"App"},n.createElement("h1",null,"Hello world!"),n.createElement(u,{initialData:t}),n.createElement(i,null))};var c=r(819),s=r(605),f=r(211),p=r(622),d=r(747);s.createServer((function(e,t){if("GET"===e.method&&"/"===e.url){var r=d.createReadStream(p.join(__dirname,"client/build/index.html")),o="";r.on("data",(function(e){o+="".concat(e)})),r.on("end",(function(){f.get("https://jsonplaceholder.typicode.com/users/1/posts",(function(e){var r="";e.on("data",(function(e){r+=e})),e.on("end",(function(e){console.log(r);var i=o.replace('<div id="root"></div>',"<script>window.__initialData__=".concat(r,'<\/script><div id="root">').concat((0,c.renderToString)(n.createElement(l,{initialData:JSON.parse(r)})),"</div>"));t.writeHead(200,{"Content-Type":"text/html"}),t.write(i),t.end()}))}))})),r.on("error",(function(){t.setHeader("status",500),t.end()}))}if("GET"===e.method&&e.url.match("/static/")){var i=d.createReadStream(p.join(__dirname,"client/build",e.url)),a="";i.on("data",(function(e){a+="".concat(e)})),i.on("end",(function(){i.close(),t.writeHead(200),t.write(a),t.end()})),i.on("error",(function(){t.setHeader("status",500),t.end()}))}})).listen(5e3)},515:(e,t,r)=>{var n=r(645);r.n(n)()((function(e){return e[1]})).push([e.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""])},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},747:e=>{e.exports=require("fs")},605:e=>{e.exports=require("http")},211:e=>{e.exports=require("https")},622:e=>{e.exports=require("path")},413:e=>{e.exports=require("stream")}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(461)})();