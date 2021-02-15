<template>
  <div>
    <div class="table-wrapper">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" min-width="40%">
          <template slot-scope="scope">
            <!-- <div slot="reference" class="name-wrapper"> -->
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            <!-- </div> -->
          </template>
        </el-table-column>
        <el-table-column prop="messageText" label="留言" min_width="40%">
          <template slot-scope="scope">
            {{ scope.row.messageText }}
          </template>
        </el-table-column>
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(/*scope.$index,*/ scope.row)"
              >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            <!-- <el-button @click="dialogFormVisible = true">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table> 
      <el-button class="create-button" type="info  x" @click="handleCreate()"
        >添加事件</el-button
      >
    </div>
    <el-dialog width="50%" title="添加事件" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item></el-form-item>
        <el-form-item label="班级姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="寄语">
          <el-input type="textarea" v-model="form.messageText" :rows="4"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelForm()">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
 import {getdata,update,adddata,_delete} from '@/networks/message'
export default {
  data() {
    return {
      chosenId: '',
      limit: 1,
      tableData: [
        // {
        //   name:'1932 anny',
        //   message:'hhhhh'
        // }
       ],
      dialogFormVisible: false,
      form: {
        name: '',
        messageText: '',
        messageId:'',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        newsTextarea: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleEdit (/*index,*/ row) {
      this.chosenId = row.messageId
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      ////console.log(row)
      this.confirmDelete().then(() => {
        //this.axios.post('/member/delete', row)
        _delete(row).then(res => {
          ////console.log(res)
          this._getData()
        })
      }
      ).catch(() => this.$message({
        type: 'info',
        message: '已取消删除'
      }))
      ////console.log(index, row.title);
      this.chosenId = row.address
    },
    handleCreate () {
      this.chosenId = ''
      this.dialogFormVisible = true
    },
    cancelForm () {
      this.dialogFormVisible = false
      this.chosenId = ''
    },
    confirmDelete () {
      return this.$confirm('删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    emptyProperty (obj, keyReg) {
      Object.keys(obj).forEach(function (key) {
        if (keyReg.test(key)) {
          obj[key] = ''
        }
      });
    },
    _getData () {
      //this.axios.get('/member/list')
      getdata()
      .then(res => {
        ////console.log(res)
        this.tableData = res.data.message.slice()
        //console.log(res.data.message)
      })
    },
    submitForm(){
      let form = Object.assign({},this.form)
      form.messageId = this.chosenId
      let param = new FormData(); //创建form对象
      if(this.chosenId){
        this.emptyProperty(this.form,/message/)
        Object.keys(form).forEach(function (key) {
          param.append(key.toString(), form[key].toString())
        })
        update(param)
        .then((res) => { 
          ////console.log(res)
          this.chosenId = ''
          this.emptyProperty(this.form, /message/)
          this._getData()
        })
      }else {
        Object.keys(form).forEach(function (key) {
          param.append(key.toString(), form[key].toString())
        })
        adddata(param)
        .then(res => {
          ////console.log(res)
           this.chosenId = ''
          this.emptyProperty(this.form, /message/)
          this._getData()
        })
      }
      this.chosenId = ''
      this.dialogFormVisible = false
    }
  },
  created () {
    this._getData()
  },
};
</script>
<style>
.table-wrapper {
  position: relative;
  overflow: hidden;
}
.create-button {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
}
</style>