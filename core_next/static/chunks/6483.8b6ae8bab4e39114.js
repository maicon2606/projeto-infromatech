"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6483],{18321:function(e,t,n){n.d(t,{Z:function(){return d}});var r,o,i,a,s=n(67294),l=n(27603);(r=i||(i={})).PRIMARY="primary",r.SECONDARY="secondary",r.ERROR="error",r.SUCCESS="success",r.WARNING="warning",r.BLACK="black",(o=a||(a={})).SM="sm",o.MD="md",o.LG="lg",o.XL="xl";let m=l.ZP.button`
  border: none;
  cursor: pointer;

  /* IF CATEGORY AND GHOST */
  ${e=>e.category===i.PRIMARY?l.iv`
        color: ${e.ghost?e.theme.colors.primary():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.primary()}`};
        background: ${e.ghost?"transparent":e.theme.colors.primary()};
      `:e.category===i.SECONDARY?l.iv`
        color: ${e.ghost?e.theme.colors.secondary():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.secondary()}`};
        background: ${e.ghost?"transparent":e.theme.colors.secondary()};
      `:e.category===i.BLACK?l.iv`
        color: ${e.ghost?e.theme.colors.black():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.black()}`};
        background: ${e.ghost?"transparent":e.theme.colors.black()};
      `:e.category===i.ERROR?l.iv`
        color: ${e.ghost?e.theme.colors.error():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.error()}`};
        background: ${e.ghost?"transparent":e.theme.colors.error()};
      `:e.category===i.SUCCESS?l.iv`
        color: ${e.ghost?e.theme.colors.success():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.success()}`};
        background: ${e.ghost?"transparent":e.theme.colors.success()};
      `:e.category===i.WARNING?l.iv`
        color: ${e.ghost?e.theme.colors.warning():"#fff"};
        border: ${e.ghost&&`1px solid ${e.theme.colors.warning()}`};
        background: ${e.ghost?"transparent":e.theme.colors.warning()};
      `:void 0}

  /* HOVER IF CATEGORY AND GHOST */
  ${e=>{if(!e.ghost){if(e.category===i.PRIMARY)return l.iv`
          &:hover {
            background: ${e.theme.colors.primary(400)};
          }
        `;if(e.category===i.SECONDARY)return l.iv`
          &:hover {
            background: ${e.theme.colors.secondary(400)};
          }
        `;if(e.category===i.BLACK)return l.iv`
          &:hover {
            background: ${e.theme.colors.black(800)};
          }
        `;if(e.category===i.ERROR)return l.iv`
          &:hover {
            background: ${e.theme.colors.error(400)};
          }
        `;if(e.category===i.SUCCESS)return l.iv`
          &:hover {
            background: ${e.theme.colors.success(400)};
          }
        `;if(e.category===i.WARNING)return l.iv`
          &:hover {
            background: ${e.theme.colors.warning(400)};
          }
        `}}}

  /* IF SIZE */
  ${e=>e.size===a.SM?l.iv`
        ${e.theme.font(12,16,700)};
        height: 32px;
        padding: 0 ${e.theme.spacing.md};
      `:e.size===a.MD?l.iv`
        ${e.theme.font(14,24,700)};
        height: 40px;
        padding: 0 ${e.theme.spacing.lg};
      `:e.size===a.LG?l.iv`
        ${e.theme.font(18,32,700)};
        height: 48px;
        padding: 0 ${e.theme.spacing.xl};
      `:e.size===a.XL?l.iv`
        ${e.theme.font(24,32,700)};
        height: 64px;
        padding: 0 ${e.theme.spacing.xxl};
      `:void 0}
`,c=(0,l.ZP)(m)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>"left"===e.iconPlacement?"row":"row-reverse"};
  gap: ${e=>e.theme.spacing.xxxs};
  border-radius: ${e=>e.theme.borderRadius?.[e.borderRadius||"md"]};

  transition: background 250ms ease;
`;function d(e){let{text:t,icon:n}=e;return s.createElement(c,{...e},!!n&&n,t)}(0,l.ZP)(m)`
  background: none;
  border: none;
  text-decoration: underline;
  padding: unset;
`,d.defaultProps={category:"secondary",ghost:!1,size:"lg",iconPlacement:"left",type:"button"}},40187:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),o=n(27603);let i={customPadding:{sm:"16px",md:"16px",lg:"32px",xl:"32px"}};function a(e,t,n){return"object"==typeof e[n]&&t in e[n]?e[n][t]:t in e&&e[t]?e[t]:i[t][n]}let s=o.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`,l=o.ZP.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-height: 80vh;
  background-color: #fff;
  padding: ${e=>a(e,"customPadding","sm")};
  box-shadow: ${e=>e.theme.shadow.lg};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    padding: ${e=>a(e,"customPadding","md")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${e=>e.widthStyle?e.widthStyle:"auto"};
    max-width: 60vw;
    height: max-content;
    max-height: 90vh;
    padding: ${e=>a(e,"customPadding","lg")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktopLarge}) {
    padding: ${e=>a(e,"customPadding","xl")};
  }
`;var m=n(4204);let c=o.ZP.div`
  ${e=>e.theme.font(14,24,400)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: ${e=>e.titlePadding?e.titlePadding:"0"};
`,d=o.ZP.div`
  ${e=>e.theme.font(14,24,400)};
  display: flex;
  align-self: baseline;
  flex-direction: column;
  padding: ${e=>e.titlePadding?e.titlePadding:"0"};
`,g=o.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: ${({theme:e})=>e.spacing.xs};
    width: ${({theme:e})=>e.rem(13)};
    height: ${({theme:e})=>e.rem(13)};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    & > svg {
      width: ${({theme:e})=>e.rem(16)};
      height: ${({theme:e})=>e.rem(16)};
    }
  }
`,h=o.ZP.h2`
  ${e=>e.theme.font(16,28,700)};
  color: ${e=>e.theme.colors.black(800)};
  text-transform: uppercase;
  margin: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${e=>e.theme.font(20,14,700)};
  }
`,u=o.ZP.span`
  color: ${e=>e.theme.colors.secondary(500)};
  ${e=>e.theme.font(20)}
  margin-left: ${e=>e.theme.spacing.xxs};
`,p=o.ZP.div`
  position: absolute;
  cursor: pointer;
  user-select: none;
  top: ${e=>e.theme.spacing.sm};
  right: ${e=>e.theme.spacing.sm};

  translate: filter 250ms;
  &:hover {
    filter: brightness(0.7);
  }

  svg {
    width: ${e=>e.theme.spacing.md};
    height: ${e=>e.theme.spacing.md};

    path {
      fill: ${e=>e.closeColor||"#ff6500"};
      stroke: ${e=>e.closeColor||"#ff6500"};
    }
  }
`,f=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: ${e=>e.titlePadding?e.titlePadding:"0"};
  background-color: ${e=>e.backgroundColor||"#fff"};
  background-image: url(${e=>e.backgroundImage});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: ${({theme:e})=>e.rem(150)};

  + ${p} {
    top: ${e=>e.theme.spacing.xxs};
    right: ${e=>e.theme.spacing.xxs};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    background-size: ${({theme:e})=>e.rem(250)};
    + ${p} {
      top: ${e=>e.theme.spacing.sm};
      right: ${e=>e.theme.spacing.sm};
    }
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    background-size: ${({theme:e})=>e.rem(212)};
  }
`,$=o.ZP.h2`
  ${e=>e.theme.font(12,18,700)};
  color: #fff;

  ${e=>e.backgroundImage?o.iv`
        margin: ${e=>e.theme.spacing.lg}
          ${e=>e.theme.spacing.lg}
          ${e=>e.theme.spacing.lg}
          ${e=>e.theme.rem(158)};
      `:o.iv`
        margin: ${e=>e.theme.spacing.lg}
          ${e=>e.theme.rem(64)} ${e=>e.theme.spacing.lg}
          ${e=>e.theme.rem(64)};
      `}
  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${e=>e.theme.font(14,24,700)};

    ${e=>e.backgroundImage?o.iv`
          margin: ${e=>e.theme.rem(48)}
            ${e=>e.theme.spacing.lg}
            ${e=>e.theme.spacing.xl}
            ${e=>e.theme.rem(280)};
        `:o.iv`
          margin: ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(64)}
            ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(64)};
        `}
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    ${e=>e.theme.font(20,30,700)};

    ${e=>e.backgroundImage?o.iv`
          margin: ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(64)}
            ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(244)};
        `:o.iv`
          margin: ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(64)}
            ${e=>e.theme.spacing.lg}
            ${e=>e.theme.rem(64)};
        `}
  }
`,b={Modal:function({children:e,handleClose:t,isOpen:n=!1,id:o,width:i,customPadding:a,className:m,sm:c,md:d,lg:g,xl:h}){let[u,p]=(0,r.useState)(),f=(0,r.useRef)();return(0,r.useEffect)(()=>{n&&p(document.getElementById("modalWrapper"))},[n]),u?.addEventListener("click",e=>{f.current&&!f.current.contains(e.target)&&t()}),r.createElement(r.Fragment,null,n&&r.createElement(s,{id:"modalWrapper",className:m,"data-testid":"modal"},r.createElement(l,{ref:f,widthStyle:i,customPadding:a,id:o,sm:c,md:d,lg:g,xl:h},e)))},ModalHeader:function({handleClose:e,titlePadding:t,children:n,closeColor:o}){return r.createElement(c,{titlePadding:t},n,r.createElement(p,{onClick:()=>{e&&e()},"data-testid":"btnClose",closeColor:o},r.createElement(m.bMz,null)))},ModalHeaderWithCustomerSettings:function({image:e,title:t,background:n}){return r.createElement(f,{backgroundColor:n,backgroundImage:e,className:"ModalWithImage"},r.createElement($,{backgroundImage:e,dangerouslySetInnerHTML:{__html:t}}))},ModalHeaderWithText:function({title:e,icon:t,alternativeText:n,titlePadding:o}){return r.createElement(d,{titlePadding:o},r.createElement(g,{className:"ModalWithText"},t,e&&r.createElement(r.Fragment,null,r.createElement(h,null,e),n&&r.createElement(u,null,n))))}}},36483:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),o=n(67294),i=n(11163),a=n(22328),s=n(40187),l=n(73248),m=n(31585),c=n(7297),d=n(18321),g=n(27603);function h(){let e=(0,c.Z)(["\n  div.ModalWithImage {\n    background-size: ",";\n    text-align: center;\n    align-content: center;\n\n    > h2 {\n      ",";\n      width: ",";\n      height: ",";\n      margin-left: ",";\n\n      > b {\n        ",";\n      }\n    }\n\n    @media (min-width: ",") {\n      background-size: ",";\n      text-align: center;\n      align-content: center;\n\n      > h2 {\n        ",";\n        margin-left: ",";\n\n        > b {\n          ",";\n        }\n      }\n    }\n\n    @media (min-width: ",") {\n      background-size: ",";\n      text-align: center;\n      align-content: center;\n\n      > h2 {\n        ",";\n        width: ",";\n        height: ",";\n        margin-left: 80px;\n\n        > b {\n          ",";\n        }\n      }\n    }\n  }\n"]);return h=function(){return e},e}function u(){let e=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: "," ",";\n\n  @media (min-width: ",") {\n    margin: "," ",";\n  }\n"]);return u=function(){return e},e}function p(){let e=(0,c.Z)(["\n  ",";\n  color: ",";\n  align-items: center;\n\n  margin-bottom: ",";\n\n  @media (min-width: ",") {\n    ",";\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,c.Z)(["\n  ",";\n  color: ",";\n  margin-bottom: ",";\n\n  @media (min-width: ",") {\n    ",";\n  }\n"]);return f=function(){return e},e}function $(){let e=(0,c.Z)(["\n  ",";\n  padding: "," ",";\n\n  margin-bottom: ",";\n\n  @media (min-width: ",") {\n    ",";\n    padding: "," ",";\n\n    margin-bottom: ",";\n  }\n"]);return $=function(){return e},e}function b(){let e=(0,c.Z)(["\n  ",";\n  color: ",";\n\n  @media (min-width: ",") {\n    ",";\n  }\n"]);return b=function(){return e},e}let x=g.ZP.div.withConfig({componentId:"sc-b213d931-0"})(h(),e=>{let{theme:t}=e;return t.rem(120)},e=>{let{theme:t}=e;return t.font(12,16,400)},e=>{let{theme:t}=e;return t.rem(172)},e=>{let{theme:t}=e;return t.rem(48)},e=>{let{theme:t}=e;return t.rem(80)},e=>{let{theme:t}=e;return t.font(14,18,700)},e=>{let{theme:t}=e;return t.breakpoints.minTablet},e=>{let{theme:t}=e;return t.rem(148)},e=>{let{theme:t}=e;return t.font(12,16,300)},e=>{let{theme:t}=e;return t.rem(80)},e=>{let{theme:t}=e;return t.font(14,18,700)},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.rem(132)},e=>{let{theme:t}=e;return t.font(14,24,600)},e=>{let{theme:t}=e;return t.rem(260)},e=>{let{theme:t}=e;return t.rem(64)},e=>{let{theme:t}=e;return t.font(24,34,700)}),k=g.ZP.div.withConfig({componentId:"sc-b213d931-1"})(u(),e=>{let{theme:t}=e;return t.spacing.sm},e=>{let{theme:t}=e;return t.rem(42)},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.spacing.lg},e=>{let{theme:t}=e;return t.rem(112)}),v=g.ZP.h6.withConfig({componentId:"sc-b213d931-2"})(p(),e=>{let{theme:t}=e;return t.font(16,28,700)},e=>{let{theme:t}=e;return t.colors.primary(600)},e=>{let{theme:t}=e;return t.spacing.md},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.font(20,30,700)}),w=g.ZP.span.withConfig({componentId:"sc-b213d931-3"})(f(),e=>{let{theme:t}=e;return t.font(12,18,400)},e=>{let{theme:t}=e;return t.colors.black(700)},e=>{let{theme:t}=e;return t.spacing.sm},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.font(14,24,400)}),P=(0,g.ZP)(d.Z).withConfig({componentId:"sc-b213d931-4"})($(),e=>{let{theme:t}=e;return t.font(14,24,600,"uppercase")},e=>{let{theme:t}=e;return t.spacing.xxs},e=>{let{theme:t}=e;return t.rem(14)},e=>{let{theme:t}=e;return t.spacing.sm},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.font(14,24,600,"uppercase")},e=>{let{theme:t}=e;return t.spacing.xxs},e=>{let{theme:t}=e;return t.rem(27)},e=>{let{theme:t}=e;return t.spacing.sm}),y=g.ZP.p.withConfig({componentId:"sc-b213d931-5"})(b(),e=>{let{theme:t}=e;return t.font(10,16,400)},e=>{let{theme:t}=e;return t.colors.black(700)},e=>{let{theme:t}=e;return t.breakpoints.minDesktop},e=>{let{theme:t}=e;return t.font(12,18,400)});var C=function(){let e=(0,i.useRouter)(),[t,n]=(0,o.useState)(!1);function c(){n(!1),localStorage.removeItem("needsUpdatePJ")}return(0,o.useEffect)(()=>{let e=localStorage.getItem("needsUpdatePJ");e&&n(!0)},[]),(0,r.jsx)(x,{className:"ModalWithImage",children:(0,r.jsxs)(s.Z.Modal,{isOpen:t,handleClose:()=>c(),width:"544px",customPadding:"0px",children:[(0,r.jsx)(s.Z.ModalHeader,{handleClose:()=>c(),children:(0,r.jsx)(s.Z.ModalHeaderWithCustomerSettings,{image:"".concat(l.STATIC_KABUM_IMAGES_K5,"/Ninja_Atualizacao_Cadastro_PJ.png"),title:"<b> ATEN\xc7\xc3O NINJA! </b> <br/>\n            Atualiza\xe7\xe3o cadastral necess\xe1ria.",background:m.Z.colors.primary(500)})}),(0,r.jsxs)(k,{children:[(0,r.jsx)(v,{children:" Seus dados cadastrais precisam ser atualizados. "}),(0,r.jsx)(w,{children:"Verificamos que seus dados encontram-se desatualizados no nosso site. \xc9 importante sempre mante-los atualizados. Clique no bot\xe3o abaixo para atualizar agora."}),(0,r.jsx)(P,{text:"Atualizar dados",onClick:()=>void(localStorage.removeItem("needsUpdatePJ"),e.push("/minha-conta/meus-dados"))}),(0,r.jsx)(y,{children:(0,r.jsx)(a.Z,{MobileComponent:()=>(0,r.jsxs)(r.Fragment,{children:["* Para atualizar depois, acesse",(0,r.jsx)("br",{})," Minha conta > Meus Dados"]}),DesktopComponent:()=>(0,r.jsx)(r.Fragment,{children:"* Para atualizar depois, acesse Minha conta > Meus Dados"})})})]})]})})}}}]);