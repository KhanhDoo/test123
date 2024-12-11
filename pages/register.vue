<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form class="w-full max-w-sm bg-white p-6 rounded shadow" @submit.prevent="register">
        <h2 class="text-xl font-bold mb-4 text-center">Đăng ký</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            v-model="form.email"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2">Mật khẩu</label>
          <input
            type="password"
            v-model="form.password"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2">Loại tài khoản</label>
          <select v-model="form.role" required class="w-full px-3 py-2 border rounded">
            <option value="user">Thành viên</option>
            <option value="admin">Quản trị viên</option>
          </select>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Đăng ký
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const form = ref({
    email: '',
    password: '',
    role: 'user'
  })
  
  const register = async () => {
    try {
      const response = await axios.post('/api/register', form.value)
      alert(response.data.message)
    } catch (error) {
      console.error(error)
      alert('Đăng ký thất bại')
    }
  }
  </script>
  