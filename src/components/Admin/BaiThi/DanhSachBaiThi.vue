
<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Danh sách bài thi
    </div>
    <div class="bg-color-white flex justify-between">
      <RouterLink :to="{ name : 'Home'}">
        <el-button type="primary" plain>Thêm bài thi</el-button>
      </RouterLink>
    </div>
    <div class="pt-8">
  <!--    <div class="m-4">-->
  <!--      <el-select-->
  <!--          v-model="value"-->
  <!--          value-key="id"-->
  <!--          placeholder="Sắp xếp"-->
  <!--          style="width: 240px"-->
  <!--      >-->
  <!--        <el-option-->
  <!--            v-for="item in options"-->
  <!--            :key="item.id"-->
  <!--            :label="item.label"-->
  <!--            :value="item"-->
  <!--        />-->
  <!--      </el-select>-->
  <!--    </div>-->
      <el-table :data="filterTableData">
        <el-table-column type="selection" width="55" />
        <el-table-column label="Title" prop="title" />
        <el-table-column label="Position" prop="position" />
        <el-table-column label="Status" prop="status">
          <template #default="scope">
            <el-button v-if="scope.row.status === 'active'" type="success" plain size="small" >Hoạt động</el-button>
            <el-button v-else type="danger" plain size="small" >Dừng hoạt động</el-button>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template #header>
            <el-input size="small" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button size="small">
              <RouterLink :to="`/admin/edit-category/${scope.row.id}`">
                Edit
              </RouterLink>
            </el-button>
            <el-button
                size="small"
                type="danger"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>