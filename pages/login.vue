<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form class="w-full max-w-sm bg-white p-6 rounded shadow" @submit.prevent="login">
        <h2 class="text-xl font-bold mb-4 text-center">Đăng nhập</h2>
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
        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const form = ref({
    email: '',
    password: ''
  })
  
  const login = async () => {
    try {
      const response = await axios.post('/api/login', form.value)
      alert('Đăng nhập thành công')
      router.push('/dashboard') // Chuyển đến trang dashboard sau khi đăng nhập
    } catch (error) {
      console.error(error)
      alert('Đăng nhập thất bại')
    }
  }
  </script>
  