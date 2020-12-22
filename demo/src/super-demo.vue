<template>
    <div>
        <table v-if="list.length>0">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>商品名称</td>
                    <td>商品单价</td>
                    <td>商品数量</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="(item,index)">
                    <td>{{item.id+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="reduce(index)">-</button>
                        {{item.count}}
                        <button @click="add(index)">+</button>
                    </td>
                    <td><button @click="remove(index)">删除</button></td>
                </tr>
            </tbody>
            <h1>总价：{{totalPrice}}</h1>
        </table>
        <h1 v-else>没东西...</h1>
    </div>
</template>

<style>
table{
    border: 1px solid #ccc;
    text-align: center;
}
tr,td{
    padding: 15px;
}
</style>


<script>
export default {
    data (){
        return {
            list:[
                {
                    id:0,
                    name:'汉堡包',
                    price:8,
                    count:1
                },
                {
                    id:1,
                    name:'鸡肉卷',
                    price:7,
                    count:1
                },
                {
                    id:2,
                    name:'上校鸡块',
                    price:5,
                    count:1
                },
                {
                    id:3,
                    name:'黄金鸡柳',
                    price:6,
                    count:1
                },
                {
                    id:4,
                    name:'轰炸鸡',
                    price:20,
                    count:1
                }
            ]
        }
    },
    methods:{
        add(index){
            this.list[index].count++
        },
        reduce(index){
            if(this.list[index].count===1) return;
            this.list[index].count--
        },
        remove(index){
            this.list.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            let total = 0;
            for(let i=0;i<this.list.length;i++){
                total += this.list[i].count*this.list[i].price;
            }
            return total;
        }
    }
}
</script>
