<template>
    <div class="row">
      <div class="col-xl-8 col-lg-7 col-md-6">
        <new-supplier-form>

        </new-supplier-form>
      </div>
    </div>
</template>
<script>
import NewSupplierForm from "./UserProfile/NewSupplierForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    NewSupplierForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
