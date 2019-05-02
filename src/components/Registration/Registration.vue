<template lang="pug">

  .content-wrapper
    section
      .container
        .auth
          .auth__banner
            h1.ui-title-1 Hello banner
          .auth__form
            span.ui-title-1 Registration
            form(@submit.prevent="onSubmit")
              .form-item(:class="{ errorInput : $v.email.$error}")
                input(
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  :class="{ error : $v.email.$error}"
                  @change="$v.email.$touch()"
                 )
                .error(v-if="!$v.email.required") Field is required
                .error(v-if="!$v.email.email") Email is not correct
              .form-item(:class="{ errorInput : $v.password.$error}")
                input(
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  :class="{error: $v.password.$error}"
                  @change="$v.password.$touch()"
                  )
                .error(v-if="!$v.password.required") Field is required
                .error(v-if="!$v.password.minLength") Password must have at least {{$v.password.$params.minLength}}
              .form-item(:class="{ errorInput : $v.repeat_password.$error}")
                input(
                  type="password"
                  placeholder="Repeat password"
                  v-model="repeat_password"
                  :class="{error: $v.repeat_password.$error}"
                  @change="$v.repeat_password.$touch()"
                )
                <!--.error(v-if="!$v.repeat_password.required") Field is required-->
                <!--.error(v-if="!$v.repeat_password.minLength") Password is not correct-->
              .buttons-list
                button.button.button--round.button-primary(
                  type="submit"
                )
                  span(v-if="loading") Loading...
                  span(v-else) Registration
              .buttons-list.buttons-list--info
                p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
                p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
                p.typo__p(v-else) {{ submitStatus }}
                <!--p.typo__p(v-if="submitStatus === 'PENDING'") Sending...-->

              .buttons-list.buttons-list--info
                span Do you have accout?
                  router-link(to="/login")  Enter here

</template>

<script>
  import { required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default{
    data(){
      return{
          email: '',
          password: '',
          repeat_password: '',
          submitStatus: null

      }
    },
    validations: {
      email: {
        required,
        email

      },
      password: {
        required,
        minLength: minLength(6)

      },
      repeat_password:{
          required,
        sameAsPassword: sameAs('password')
      }

    },
    methods: {
      onSubmit() {

        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
            const user = {
              email: this.email,
              password: this.password
            }
//          setTimeout(() => {
//            this.submitStatus = 'OK'
//          }, 500)
          this.$store.dispatch("registerUser", user)
            .then(()=>{
                console.log('registered')
                this.submitStatus = 'OK'
                this.$router.push('/login')

            }).catch((err)=>{
                this.submitStatus = err.message
          })
        }
      }
    },
    computed:{
        loading(){
           return this.$store.getters.loading
        }
    }
  }

</script>

<style lang="stylus" scoped>
  .auth
    display flex
    flex-wrap wrap
  .auth__banner
  .auth__form
    width 50%
    @media screen and (max-width:768px)
      width 100%
      margin-bottom 30px
      &:last-child
        margin-bottom 0

  input
    &.error
      border-color red

  .form-item
    .error
      display none
      margin-bottom 8px
      font-size 13.4px
      color red
    &.errorInput
      .error
        display block

  .buttons-list
    text-align right
    margin-bottom 20px
    &.buttons-list--info
      text-align center
      &:last-child
        margin-bottom 0
  a
    color blue
</style>
