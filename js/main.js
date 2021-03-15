const app = new Vue({
    el: "#tabs",
    data: {
        active: 0,
        categories: [
            "C quoi un banger ?",
            "Ecouter les bangers",
            "Ajouter un banger"
        ]
    },
    methods: {
        activate(index) {
            this.active = index;
        }
    }
});



// const app =new Vue({
//
//     el: "#app",
//     data:{
//         riffs:[
//
//         ],
//         newRiff: {
//             "name": "",
//             "genre": "",
//             "author": "",
//             "customfile":[],
//             "description": ""
//         },
//         errorRiff: {
//             "name": "erreur",
//             "genre": "",
//             "author": "",
//             "customfile":[],
//             "description": ""
//         },
//         // selectedId:"6044afc5dfdb2b05a0d85d06",
//     },
//     computed:{
//         // selecteRiffById:function() {
//         //     let filteredRiff = this.errorRiff
//         //
//         //     this.riffs.forEach(
//         //         (e)=>{
//         //             console.log(e._id)
//         //             filteredRiff = e
//         //         }
//         //     )
//         //     return filteredRiff
//         // }
//     },
//     methods:{
//         selectRiffById:function(id) {
//             let filteredRiff = this.errorRiff
//
//             this.riffs.forEach(
//                 (e)=>{
//                     if (e._id == id)
//                          filteredRiff = e
//                 }
//             )
//             return filteredRiff
//         },
//         add:function(){
//             this.newRiff.customfile = encodeURIComponent(JSON.stringify(window.song))
//             console.log(encodeURIComponent(JSON.stringify(window.song)))
//             this.ajax("/riff/add",this.newRiff).then(function(response){
//                 this.riffs.push(this.newRiff)
//                 this.riffs = response.body
//             })
//
//         },
//         deleteriff:function(supressId){
//             this.ajax("/riff/remove",{ "_id":supressId })
//             //     .then(function(response){
//             //     //this.riffs.(this.newRiff)
//             //     //TODO remove riff from  array
//             //     //this.riffs = response.body
//             // })
//
//         },
//         playsong:function(customfile){
//
//             window.songtoplay = JSON.parse(customfile)
//             document.getElementById("invisible-button-play").click()
//
//         },
//         initForm:function(){
//             this.newRiff = {
//             }
//         },
//         ajax: function(url, params = { } ) {
//             let s = url+"?";
//             for(let key in params) {
//                 s += key + "=" + params[key] +"&"
//             }
//             console.log(s)
//             return this.$http.get(s);
//         }
//     },
//     mounted:function(){
//         this.$http.get("/riff/list").then(function(response){
//             this.riffs = response.body
//         })
//         this.initForm()
//     }
//
// })