<template>
    <div class="row">
      <div class="col-xl-8 col-lg-7 col-md-6">
        <delete-order-form>

        </delete-order-form>
      </div>
    </div>
</template>
<script>
import DeleteOrderForm from "./UserProfile/DeleteOrderForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    DeleteOrderForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
