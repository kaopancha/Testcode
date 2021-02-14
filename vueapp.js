new Vue({
    el:"#vue-app",
    data:{
        name:"HRK",
        age:30,
        status:false,
        website:'https://www.youtube.com/user/HEARTROCKERChannel',
        count:0,
    },
    methods:{
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name = n
        },
        addAge:function(){
            this.age++
            console.log(this.age)
        },
        subtractAge:function(){
            this.age--
            console.log(this.age)
        },
        addCount:function(){
            this.count++
            console.log(this.count);
        },
    }
})