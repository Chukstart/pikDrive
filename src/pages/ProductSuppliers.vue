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
const tableColumns = ["id","supplier_id","product_id","created_at","updated_at","deleted_at"];

const tableData = [
{id:3,
supplier_id:2,
product_id:1,
created_at:"2021-04-22T19:26:47.000000Z",
updated_at:"2021-04-22T19:26:47.000000Z",
deleted_at:null
},
 
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "ProductSuppliers",
        subTitle: "ProductSuppliers Table",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch('https://codechallenge.pikdrive.com/api/product-suppliers')
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
