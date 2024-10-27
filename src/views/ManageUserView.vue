<template>
  <div class="w-full max-w-[900px] mx-auto mt-24 p-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-[#26294D] mb-2">All Users</h1>
      <hr class="border-gray-300" />
    </div>
    <!-- Responsive table container -->
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-[#26294D] text-white text-left">
            <th class="p-4 font-semibold">Order</th>
            <th class="p-4 font-semibold">Username</th>
            <th class="p-4 font-semibold">Role</th>
            <th class="p-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="user.id"
            class="border-t border-gray-300 text-sm text-[#26294D] bg-white transition-colors"
          >
            <td class="p-4">{{ index + 1 }}</td>
            <td class="p-4">{{ user.username }}</td>
            <td class="p-4">{{ user.role }}</td>
            <td class="p-4">
              <button
                @click="toggleRole(user)"
                class="text-[#26294D] hover:text-[#D3B965] underline"
              >
                <span v-if="user.role === 'Admin'">Downgrade to User</span>
                <span v-else>Upgrade to Admin</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  // Sample data for testing
  const users = ref([
    { id: 1, username: 'Username1', role: 'RegisteredUser' },
    { id: 2, username: 'Username2', role: 'RegisteredUser' },
    { id: 3, username: 'Admin1', role: 'Admin' }
  ])
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users')
      console.log(response.data) // Check if data is being fetched correctly
      users.value = response.data
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  
  const toggleRole = async (user) => {
  const newRole = user.role === 'Admin' ? 'RegisteredUser' : 'Admin'
  
  try {
    const response = await axios.put(`/api/users/${user.id}`, { role: newRole })
    
    if (response.status === 200) {
      console.log(`Successfully updated role for ${user.username}`)
      user.role = newRole
    } else {
      console.error('Failed to update role. Server responded with:', response)
      alert('Failed to update role. Please check the server logs for more details.')
    }
  } catch (error) {
    console.error('Error updating role:', error)
    if (error.response && error.response.status === 403) {
      alert('Permission denied: You are not authorized to modify roles.')
    } else if (error.response && error.response.status === 400) {
      alert('Bad request: Please check if the role is correctly set.')
    } else {
      alert('Failed to update the user role. Please try again.')
    }
  }
}

  
  // Uncomment to fetch real data on mount
  // onMounted(fetchUsers)
</script>
  
  <style scoped>
  .manage-user-view {
    padding: 20px;
    max-width: 800px;
    margin: 100px auto;
  }
  
  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin: 20px 0;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .user-table th, .user-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .user-table th {
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
  }
  
  .modify-btn {
    background-color: #3498db;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .modify-btn:hover {
    background-color: #2980b9;
  }
  </style>
  