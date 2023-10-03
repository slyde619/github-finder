const app = Vue.createApp({
    data(){
        return{
            username: '',
            user: null,
            error: ''
        }
    },
    methods:{
        // Fetch github data api
        async getUserInfo(){
            try {
                this.username.trim()
                const response = await fetch(
                  `https://api.github.com/users/${this.username}`
                );
                // Check if response is okay
                if(!response.ok){
                    throw new Error('User not found')
                }
                // parse data
                this.user = await response.json()
            } catch (error) {
                this.error = error.message
                this.user = null
            }
        }
    }
})

app.mount('#app')