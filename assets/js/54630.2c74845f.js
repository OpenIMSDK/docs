"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[54630,57394],{57394:(t,e,o)=>{o.r(e),o.d(e,{dyte_polls:()=>n});var s=o(65733),l=o(37692),i=(o(21237),o(24555),o(96633)),a=o(20336),r=(o(60804),o(82321));const n=class{constructor(t){(0,s.r)(this,t),this.onPollsUpdate=t=>{this.polls=[...t.polls]},this.meeting=void 0,this.config=l.d,this.size=void 0,this.iconPack=i.d,this.t=(0,a.u)(),this.create=!1,this.polls=void 0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var t;null!=this.meeting&&(null===(t=this.meeting.polls)||void 0===t||t.removeListener("pollsUpdate",this.onPollsUpdate))}meetingChanged(t){null!=t&&(t&&!t.polls||(this.polls=[...t.polls.items],t.polls.addListener("pollsUpdate",this.onPollsUpdate),this.onCreate=async e=>{this.create=!1,await t.polls.create(e.question,e.options,e.anonymous,e.hideVotes)},this.onVote=async(e,o)=>{await t.polls.vote(e,o)}))}toggleCreateState(){this.create=!this.create}componentDidRender(){(0,r.s)(this.pollEl)}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"ctr",part:"container"},(0,s.h)("div",{class:"polls-view scrollbar",ref:t=>this.pollEl=t,part:"polls"},this.polls.map((t=>{var e;return(0,s.h)("dyte-poll",{key:t.id,poll:t,onDyteVotePoll:t=>{this.onVote(t.detail.id,t.detail.index)},self:null===(e=this.meeting)||void 0===e?void 0:e.self.userId,iconPack:this.iconPack,t:this.t,permissions:this.meeting.self.permissions})})),this.create&&(0,s.h)("dyte-poll-form",{part:"poll-form",onDyteCreatePoll:t=>{this.onCreate(t.detail)},iconPack:this.iconPack,t:this.t})),this.meeting.self.permissions.polls.canCreate&&(0,s.h)("dyte-button",{kind:"wide",onClick:()=>this.toggleCreateState(),variant:this.create?"secondary":"primary",part:"button",iconPack:this.iconPack,t:this.t},this.create?this.t("polls.cancel"):this.t("polls.create"))))}static get watchers(){return{meeting:["meetingChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}"},82321:(t,e,o)=>{o.d(e,{s:()=>s});const s=(t,e=!0)=>{null!=t&&t.scrollTo({top:t.scrollHeight,behavior:e?"smooth":"auto"})}}}]);