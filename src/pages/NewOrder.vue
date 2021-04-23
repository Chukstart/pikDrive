<template>
    <div class="row">
      <div class="col-xl-8 col-lg-7 col-md-6">
        <new-order-form>

        </new-order-form>
      </div>
    </div>
</template>
<script>
import NewOrderForm from "./UserProfile/NewOrderForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    NewOrderForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
