<template>
  <Layout>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Gridsome Hubspot Starter</div>
        <div class="text-green-700 leading-tight">to create new contacts and deals on your <a target=_new href="https://Hubspot.com">Hubspot</a></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/hubspot.svg" width=200 alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->

    <!--div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">This Gridsome Hubspot Hubpsot starter is a fork from this <a href="https://github.com/drehimself/gridsome-portfolio-starter">Gridsome Portfolio Starter</a>. Feel free to use it for your own site or projects! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat. Dolores iure, quas perspiciatis rerum quaerat atque eum repellat autem.</p>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <div>Project One</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Two</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Three</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
          <li class="checkmark">
            <div>Project Four</div>
            <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>
        </ul>
      </div>
    </div-->

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>
          <p class="mb-12" id="contact">Contact Form connected to <a href="https://www.hubspot.com">Hubspot</a>.</p>
          <div class="text-lg sm:text-lg mb-16">
            <form @submit.prevent="submit" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="firstname">
                    First Name
                  </label>
                  <input type="text" name="firstname" id="firstname" v-model="senderFirstName" placeholder="Jon" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                </div>
                 <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">
                    Last Name
                  </label>
                  <input type="text" name="lastname" id="lastname" v-model="senderLastName" placeholder="Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                </div>
                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">
                    Email Address
                  </label>
                  <input type="email" name="email" id="email" v-model="senderEmail" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                </div>
                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">
                    Company
                  </label>
                  <input type="company" name="company" id="company" v-model="senderCompany" placeholder=""  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4">
                </div>
              </div>
              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">
                  Message
                </label>
                <textarea id="message" rows="5" name="message" v-model="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required></textarea>
              </div>
              <div class="flex justify-end w-full">
                <span v-if=submitted class="text-primary text-sm font-semibold tracking-wide py-3">Thank you. Your information has been submitted.</span>
              </div>
              <div class="flex justify-end w-full">
                <input type="submit" value="Submit" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
              </div>
            </form>
          </div>
        </div>
      </div> <!-- end contact-me -->
    </div>

  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      senderFirstName: '',
      senderLastName: '',
      senderCompany: '',
      senderEmail: '',
      message: '',
      submitted: false,
    }
  },
  methods: {
    async submit() {
      try {
        await axios.post('/api/contact',
          {
            senderFirstName: this.senderFirstName,
            senderLastName: this.senderLastName,
            senderEmail: this.senderEmail,
            senderCompany: this.senderCompany,
            message: this.message,
          }
        )
      } catch (err) {
        console.error(err)
      } finally {
        console.log("contact success")
        this.senderFirstName = ''
        this.senderLastName = ''
        this.senderEmail = ''
        this.senderCompany = ''
        this.message = ''
        this.submitted = true
      }
    }
  }
}
</script>

