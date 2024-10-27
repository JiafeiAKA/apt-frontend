<template>
  <div class="mt-[120px] w-full max-w-[900px] mx-auto px-4 sm:px-8 md:px-12">
    <h1 class="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">All Users</h1>
    <hr class="border-gray-300 mb-6">
    <div class="overflow-x-auto">
      <table class="w-full border-collapse mt-4 text-sm sm:text-base">
        <thead class="bg-[#26294D] text-white">
          <tr>
            <th class="p-2 sm:p-4 font-semibold">Order</th>
            <th class="p-2 sm:p-4 font-semibold">Username</th>
            <th class="p-2 sm:p-4 font-semibold">Role</th>
            <th class="p-2 sm:p-4 font-semibold">Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr 
            v-for="(user, index) in users" 
            :key="user.userId" 
            class="border-t border-gray-300 text-center"
          >
            <td class="p-2 sm:p-4">{{ index + 1 }}</td>
            <td class="p-2 sm:p-4">{{ user.username }}</td>
            <td class="p-2 sm:p-4">{{ user.role }}</td>
            <td class="p-2 sm:p-4">
              <button
                @click="toggleRole(user)"
                :disabled="user.username === 'admin' || isToggled"
                :class="[
                  'px-2 sm:px-3 py-1 rounded font-medium transition duration-200',
                  user.role === Role.ADMIN.toString() ? 'border border-[#DBC488] text-[#DBC488] hover:bg-[#DBC488] hover:text-white' : 'border border-[#DBC488] text-[#DBC488] hover:bg-[#DBC488] hover:text-white',
                  'disabled:border disabled:border-[#D3D3D3] disabled:bg-[#D3D3D3] disabled:text-white disabled:cursor-not-allowed'
                ]"
              >
                {{ user.role === Role.ADMIN.toString() ? 'Downgrade to User' : 'Upgrade to Admin' }}
              </button>
            </td>
            <td class="p-2 sm:p-4">
              <button 
                @click="deleteU(user.userId)"  
                :disabled="user.username === 'admin' || isToggled"
                :class="[
                  'px-2 sm:px-3 py-1 rounded font-medium transition duration-200',
                  user.username === 'admin' ? 'bg-gray-400 text-gray-300 cursor-not-allowed' : 'border border-red-600 text-[#D36565] hover:bg-[#D36565] hover:text-white',
                  'disabled:border disabled:border-[#D3D3D3] disabled:bg-[#D3D3D3] disabled:text-white disabled:cursor-not-allowed'
                ]"
              >
                {{ user.username === 'admin' ? 'Cannot Delete' : 'Delete' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, onMounted ,defineProps, computed} from 'vue'
  import axios from 'axios'
  import { deleteUser, getAllUser, updateUserRole } from '@/services/UserService';
  import { UserRes } from '@/services/UserService';
  import { Role } from '@/services/ApiService';
  import { userIdKey } from '@/services/AuthenticationService';
 
  // Sample data for testing
  const users = ref<UserRes[]>([]);
  const userLiginRole = ref(Role.REGISTERED);
  const isToggled = ref(true);

  const props = defineProps<{
    user: UserRes;
  }>();

  const fetchUsers = async () => {

    const userIdLogin = localStorage.getItem(userIdKey);

    try {
      const response = await getAllUser();
      users.value = response;
      const matchedUsers  = response.filter(user => user.userId.toString() === userIdLogin);
      if(matchedUsers.length > 0){
        userLiginRole.value = matchedUsers[0].role;
        if(userLiginRole.value === Role.ADMIN){
          isToggled.value = false;
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  onMounted(() => {
    fetchUsers();
  });
    const deleteU = async (id: number)=>{
        try {
            await deleteUser(id);        
            fetchUsers();
            
          } catch (error) {
            console.error('Error delete users:', error)
          }
  }

  const toggleRole = async (user : UserRes) => {
  const newRole = user.role === Role.ADMIN ?  Role.REGISTERED : Role.ADMIN;

  const newUser : UserRes = {
    userId: user.userId,
    username: user.username,
    passwordHash: user.passwordHash,
    email: user.email,
    role: newRole,
    createdAt: user.createdAt
  }
  console.log(newUser)
  try {
    const response = await updateUserRole(user.userId,newUser);
    fetchUsers();
  } catch (error) {
     console.log(error);
  }
}

const buttonClass = computed(() => {
  return isToggled.value ? 'button-disabled' : 'button-active';
});

  // Uncomment to fetch real data on mount
  // onMounted(fetchUsers)
</script>

  