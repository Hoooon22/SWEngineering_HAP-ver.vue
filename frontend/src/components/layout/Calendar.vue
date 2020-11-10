<template>
    <div>
        <h1>Calendar</h1>
        <h2>{{title}}</h2>
        <h2>{{title2}}</h2>
        <input type = "text" v-model = "input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class = "form-control" v-model="region">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <table class = "table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>

    </div>
</template>
<script>
export default {
    name: "Calendar",
    data() {  
        return {
            title: "HAP",
            title2: "Seoul",
            input1: "과제1",
            options: [
                {v:"S",t:"Seoul"},
                {v:"J",t:"Jeju"},
                {v:"B",t:"Busan"},
            ],
            region: "J",
            tableShow: true ,
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    methods:{
        getData() {
            alert(this.input1)
        },
        setData() {
            this.input1="12345";
        }
    },
    beforeCreate() {
        console.log("1")
    },
    created() {
        console.log("2")
    },
    beforeMount() {
        console.log("3")
    },
    mounted() {
        console.log("4")
    },
    beforeUpdate(){
        console.log("5")
    },
    updated(){
        console.log("6")
    },
    beforeDestroy() {
        console.log("7")
    },
    destroyed() {
        console.log("8")
    }
};
</script>