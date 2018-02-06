<template>
  <article class="chatWindow">
      <h1><span>&#60;</span>{{name}}<span class="navIcon"><i class="fa fa-navicon"></i></span></h1>
      <ul>
          <li v-for="index in json" :key="index">
            <figure>
                <img v-bind:src="index.authorAvatar" alt="">
            </figure>
            <section>
                <p>
                    {{index.author}} <span>{{addingInfo(index.nodeTypeString)}}</span>
                </p>
                <p>
                    {{index.title}}
                </p>
                <p>
                    {{getTime(index.postDate)}}
                </p>
            </section>    
          </li>
      </ul>
  </article>
</template>

<script>
export default {
  name: 'Chat Window',
  data () {
    return {
        name: 'Activities',
        json:this.gettingJSON(),
    }
  },
  methods:{
      gettingJSON:function(){
          let srcData = {"data": {"recentActivities": [{"nodeType": 17,"nodeTypeString": "Comment","nodeid": 12324,"title": "Re: What is for dinner?","postDate": 1468334737000,"author": "Tony Handy","authorId": 1,"authorAvatar": "../../static/img/avatar1465389809397.png"},{"nodeType": 2,"nodeTypeString": "Idea","nodeid": 12319,"title": "What is the best place for happy hour?","postDate": 1468334687000,"author": "Tony Handy","authorId": 1,"authorAvatar": "../../static/img/avatar1465389809397.png"},{"nodeType": 18,"nodeTypeString": "Reply","nodeid": 12318,"title": "Re: What is for dinner?","postDate": 1468334438000,"author": "Elmo Elmo","authorId": 364,"authorAvatar": "../../static/img/avatar1461606369555.jpg"},{"nodeType": 17,"nodeTypeString": "Comment","nodeid": 12317,"title": "Re: What is for dinner?","postDate": 1468334413000,"author": "Elmo Elmo","authorId": 364,"authorAvatar": "../../static/img/avatar1461606369555.jpg"},{"nodeType": 2,"nodeTypeString": "Idea","nodeid": 12312,"title": "What is for dinner?","postDate": 1468334214000,"author": "Cooke Monster","authorId": 380,"authorAvatar": "../../static/img/no_avatar.gif"}]},"success": true};
          srcData = JSON.stringify(srcData);
          srcData = JSON.parse(srcData);
          return srcData.data.recentActivities;
      },
      addingInfo:function(token){
          let typeString = new Array();
          typeString["Comment"]="commented on the idea";
          typeString["Idea"]="posted an idea"; 
          typeString["Reply"]="replied to a comment on the idea"
          return typeString[token];
      },
      getTime:function(token){
          let time = new Date(1468334747000 - token).toLocaleTimeString().split(":");
          let result =  Number(time[1]);
          if(result < 1){
              result = "a few seconds ago";
          }else{
              if(result === 1){
                  result = "a minute ago";
              }else{
                  result +=" minutes ago"; 
              }
          }
          return result;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article{
    width: 20%;
    border: solid 1px #000;
    margin: 5vh;
    overflow-y: scroll;
}
article h1{
    background-color: var(--chatBannerColor);
    color: #fff;
    padding: 1rem 10px;
    text-align: center;
    font-size: 1.5rem;
}
article h1 span{
    float: left;
    margin: 0 0 0 1vw;
}
article ul{
    list-style-type: none;
}
article ul li{
    padding: 3% 5%;
    border-bottom: solid 1px #ccc;
}
.chatWindow li{
    display: flex;
}
.chatWindow figure{
    border: solid 2px #ccc;
    border-radius: 25px;
    overflow: hidden;
    padding: 0 9px;
    height: 57px;
}
.chatWindow li section{
    margin-left: 15px;
    width: 95%;
}
.chatWindow li section p{
    font-weight: 700;
    font-size-adjust: .5
}
.chatWindow li section p span{
    font-weight: 400;
    color: rgb(146, 142, 142);
    font-size-adjust: .47
}
.chatWindow li section p+p{
    font-size-adjust: .8;
}
.chatWindow li section p+p+p{
    font-size-adjust: 0.59;
    color: rgb(146, 142, 142);
}
.navIcon{
    float: right;
    margin-right: 1vw
}
</style>
