<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
              
            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["id","name","created_at","updated_at","deleted_at"];

const tableData = [
{
  id:1,
name:"Supplier A",
created_at:"2021-03-23T08:55:28.000000Z",
updated_at:"2021-03-23T08:55:28.000000Z",
deleted_at:null}
 
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Suppliers",
        subTitle: "Products Suppliers",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch('https://codechallenge.pikdrive.com/api/suppliers')
      const data = await res.json()
      return data["data"]
    },
  },
  async created() {
    this.table1.data = await this.fetchData()
  },
};
</script>
<style>
</style>
