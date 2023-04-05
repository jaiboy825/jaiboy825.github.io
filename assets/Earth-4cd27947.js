import{d as A,r as g,o as W,c as w,f as B,w as F,T as L,e as y,b as s,h as D,g as U}from"./index-5bd36057.js";import{S as j,a as H,W as R,O,c as _,d as S,e as M,T as q,A as I,f as $,G as J,g as K,h as Q,F as X,i as Y,V as Z}from"./OrbitControls-eefa1f2e.js";import{e as u,g as ee}from"./index-80a2b873.js";const te="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",ae="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0,0,1.0));vec3 atmosphere=vec3(0.3,0.6,1)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",ne="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",oe="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",re={key:0,class:"content-container text-white no-select"},ie=s("h2",null,"Earth",-1),se=s("p",{class:"main-content fs-50 italic"},"Earth 3D model",-1),ce=s("p",{class:"main-content fs-20"},"you can check drag effect",-1),pe=A({__name:"Earth",setup(de){const{proxy:c}=U(),h=g(),r=new j,e=new H(75,innerWidth/innerHeight,.1,1e3),a=new R({antialias:!0});a.setSize(innerWidth,innerHeight),a.setPixelRatio(window.devicePixelRatio);let d;function z(){d=new _(new S(5,50,50),new M({vertexShader:te,fragmentShader:ae,uniforms:{globeTexture:{value:new q().load("/img/globe.jpg")}}}))}let l;function b(){l=new _(new S(5,50,50),new M({vertexShader:ne,fragmentShader:oe,blending:I,side:$})),l.scale.set(1.1,1.1,1.1),r.add(l)}let i;function V(){i=new J,i.add(d),r.add(i)}let m;function C(){const n=new K,o=new Q({color:16777215,size:Math.random(),sizeAttenuation:!1}),f=[];for(let p=0;p<5e3;p++){const G=(Math.random()-.5)*2e3,P=(Math.random()-.5)*2e3,T=(p%2==0?-Math.random():Math.random())*2e3;f.push(G,P,T)}n.setAttribute("position",new X(f,3)),m=new Y(n,o),r.add(m)}e.position.z=15;const N={x:0,y:0};function x(){u.update(),requestAnimationFrame(x),a.render(r,e),t.update(),d.rotation.y+=.003,m.rotation.y+=5e-4,ee.to(i.rotation,{y:N.x*.5,duration:2})}function k(){e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),a.setSize(innerWidth,innerHeight)}const t=new O(e,a.domElement);t.minDistance=10,t.maxDistance=100,t.rotateSpeed=.4,t.enablePan=!1;const v=g(!0);t.addEventListener("start",()=>{v.value=!1}),t.addEventListener("end",()=>{v.value=!0}),addEventListener("resize",k),W(async()=>{h.value.appendChild(a.domElement),await z(),await b(),await V(),await C(),x()});function E(){let n={x:e.position.x,y:e.position.y,z:e.position.z},o={x:0,y:0,z:10};new u.Tween(n).to(o,500).easing(u.Easing.Linear.None).onUpdate(()=>{e.position.lerp(o,.1),t.update(),t.target=new Z(0,0,0)}).onComplete(()=>{c==null||c.$router.push("/game")}).start()}return(n,o)=>(y(),w("div",{ref_key:"canvas",ref:h,class:"canvas-container"},[B(L,{name:"fade"},{default:F(()=>[v.value?(y(),w("div",re,[ie,se,ce,s("button",{class:"view-btn",onClick:E},"GO GAME")])):D("",!0)]),_:1})],512))}});export{pe as default};
