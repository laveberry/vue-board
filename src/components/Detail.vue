<template>
    <div>
        <div>{{data.writer}}</div>
        <div>{{data.title}}</div>
        <div>{{data.content}}</div>
        <button @click="updateData">수정</button>
        <button @click="deleteData">삭제</button>

    </div>
</template>

<script>
import data from '@/data'

export default {
    name : 'Detail',
    data(){
        //값을 가져올때는 route 인듯, 전송은 router
        const index = this.$route.params.contentId
        return {
            data: data[index],
            index: index,
        }
    },
    methods: {
        //특정 인덱스 삭제
        deleteData(){
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        },
        updateData(){
            this.$router.push({
                name : 'Create',
                params : {
                    //그냥 index가 아닌 저장된 this.index!
                    contentId: this.index
                }
            })
        }
    }
}
</script>