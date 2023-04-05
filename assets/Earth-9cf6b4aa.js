import{b as z,c as N,W as V,f as u,h as x,i as g,j as W,A as P,k as B,G as E,l as G,m as A,F as C,n as F,g as j}from"./index-8139de19.js";import{d as H,r as L,o as R,c as T,e as U,b as o}from"./index-ad70fc23.js";const D="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",q="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0,0,1.0));vec3 atmosphere=vec3(0.3,0.6,1)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",X="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",Y="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",I=o("div",{class:"content-container text-white no-select"},[o("h2",null,"Earth"),o("p",{class:"main-content fs-50 italic"},"Earth 3D model"),o("p",{class:"fs-20"},"you can check mouse move effect")],-1),J=[I],Z=H({__name:"Earth",setup(K){const d=L(),a=new z,n=new N(75,innerWidth/innerHeight,.1,1e3),t=new V({antialias:!0});t.setSize(innerWidth,innerHeight),t.setPixelRatio(window.devicePixelRatio);let i;function f(){i=new u(new x(5,50,50),new g({vertexShader:D,fragmentShader:q,uniforms:{globeTexture:{value:new W().load("/img/globe.jpg")}}}))}let s;function w(){s=new u(new x(5,50,50),new g({vertexShader:X,fragmentShader:Y,blending:P,side:B})),s.scale.set(1.1,1.1,1.1),a.add(s)}let r;function y(){r=new E,r.add(i),a.add(r)}let c;function S(){const e=new G,h=new A({color:16777215}),p=[];for(let l=0;l<5e3;l++){const M=(Math.random()-.5)*2e3,b=(Math.random()-.5)*2e3,k=(l%2==0?-Math.random():Math.random())*2e3;p.push(M,b,k)}e.setAttribute("position",new C(p,3)),c=new F(e,h),a.add(c)}n.position.z=15;const m={x:0,y:0};function v(){requestAnimationFrame(v),t.render(a,n),i.rotation.y+=.003,c.rotation.y+=5e-4,j.to(r.rotation,{y:m.x*.5,duration:2})}function _(){n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight)}return addEventListener("mousemove",e=>{m.x=e.clientX/innerWidth*2-1,m.y=e.clientY/innerHeight*2+1}),addEventListener("resize",_),R(async()=>{d.value.appendChild(t.domElement),await f(),await w(),await y(),await S(),v()}),(e,h)=>(U(),T("div",{ref_key:"canvas",ref:d,class:"canvas-container"},J,512))}});export{Z as default};