<template>
    <div>
        {{name}}
        <el-button @click="changeName">改变名称</el-button>
        <el-button @click="syncChangeName">异步改变名称</el-button>
        <el-input v-model="username"></el-input>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex"
const staticData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
}, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
}, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
}, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
}];
export default {
    computed: {
        ...mapState({
            name: state => state.name
        })
    },
    data() {
        return {
            username:"td",
            dialogVisible: false,
            form: { name: "td", region: '' },
            tableData: []
        }
    },
    created() {
        this.ajax();
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        ajax() {
            // axios.get("/api/system/version").then((res) => {
            //     this.tableData = staticData;
            // })
            this.tableData = staticData;
        },
        changeName(){
            this.$store.commit("changeName",this.username)
        },
        syncChangeName(){
            this.$store.dispatch("changeNameSync",this.username)
        }
    },
}
</script>

<style>
</style>