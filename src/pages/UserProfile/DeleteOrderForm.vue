<template>
  <card class="card" title="Delete Order">
    <div>
      <form @submit.prevent>
        
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Order ID"
                      placeholder="Order Id"
                      v-model="order.id">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="danger"
                    round
                    @click.native.prevent="postData">
            Delete Product
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      order: {
        id: ""
      }
    };
  },
  methods: {
    async postData() {
      const res = await fetch('https://codechallenge.pikdrive.com/api/delete-order', {
        method: 'POST',
        headers: {     
          "Content-Type": "application/json",     
          "Accept": "application/json, text-plain, */*",     
          "X-Requested-With": "XMLHttpRequest"
        },   
  		method: 'post',
  		credentials: "same-origin",
        body: JSON.stringify({id:this.order.id}),
      })
      const data = await res.json()
      alert("Your data: " + JSON.stringify(data));
      this.order.id = 0
    }
  }
};
</script>
<style>
</style>
