<template>
  <div>
    <div class="table-wrapper">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="eventDate" label="时间" min-width="40%">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.eventDate }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="eventIntro" label="事件" min_width="40%">
          <template slot-scope="scope">
            {{ scope.row.eventIntro }}
          </template>
        </el-table-column>
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(/*scope.$index,*/ scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <!-- <el-button @click="dialogFormVisible = true">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-button class="create-button" type="info" @click="handleCreate()"
        >添加事件</el-button>
    </div>
    <el-dialog width="50%" title="添加事件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item
          label="时间"
          :label-width="formLabelWidth"
        >
          <div class="container">
            <div class="block">
              <el-date-picker
                v-model="form.eventDate"
                type="month"
                placeholder="选择年"
              >
              </el-date-picker>
            </div>
          </div>
        </el-form-item>
        <el-form-item
          label="事件"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.eventIntro" autocomplete="off"></el-input>
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
import { update, adddata, getdata, _delete } from "@/networks/event";

export default {
  data() {
    return {
      chosenId: "",
      limit: 1,
      tableData: [],
      dialogFormVisible: false,
      form: {
        eventDate: "",
        eventIntro: "",
        eventId:"",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        newsTextarea: "",
      },
      formLabelWidth: "100px",
    };
  },
  methods: {
    handleEdit(/*index,*/ row) {
      this.chosenId = row.eventId;
      ////console.log(index, row);
      ////console.log(index, row.memberId)
      this.dialogFormVisible = true;
      // ////console.log(this.form.title, this.form.limit)
    },
    handleDelete(index, row) {
      ////console.log(row)
      this.confirmDelete()
        .then(() => {
          //this.axios.post('/member/delete', row)
          _delete(row).then((res) => {
            ////console.log(res)
            this._getData();
          });
        })
        .catch(() =>
          this.$message({
            type: "info",
            message: "已取消删除",
          })
        );
      ////console.log(index, row.title);
      this.chosenId = row.address
    },
    handleCreate() {
      this.chosenId = "";
      this.dialogFormVisible = true;
    },
    cancelForm() {
      this.dialogFormVisible = false;
      this.chosenId = "";
    },
    confirmDelete() {
      return this.$confirm("删除该事件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
    },
    
    _getData () {
      //this.axios.get('/member/list')
      getdata()
      .then(res => {
        ////console.log(res)
        this.tableData = res.data.event.slice()
      })
    },
    submitForm() {
      let form = Object.assign({}, this.form)
      form.eventId=this.chosenId
      let param = new FormData();

      if (this.chosenId) {
        // console.log(this.form)
        this.emptyProperty(this.form, /event/);

        Object.keys(form).forEach(function (key) {
          param.append(key.toString(),form[key].toString())
        })

        update(param).then((res) => {
          ////console.log(res)  
          this.chosenId = "";
          this.emptyProperty(this.form, /event/);
          this._getData();
        })
      } else {
        //form.eventDate = form.eventDate ? form.eventDate.getFullYear() : "";

        Object.keys(form).forEach(function (key) {
          param.append(key.toString(), form[key].toString())
        })
        adddata(param).then((res) => {
          ////console.log(res)
          this.chosenId = ''
          this.emptyProperty(this.form, /event/);
          this._getData();
        });
      }
      this.chosenId = "";
      this.dialogFormVisible = false;
    },
    emptyProperty(obj, keyReg) {
      Object.keys(obj).forEach(function (key) {
        if (keyReg.test(key)) {
          obj[key] = ""
        }
      });
    },
  },
  created () {
    this._getData()
  },
}
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
