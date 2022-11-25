<script setup>
  import {getData} from "./integration/Integration";
</script>
<script>
  export default {
    props: ['config'],
    data() {
      return {
        message: null,
        date: null
      }
    },
    methods:{
      callTheApi: async function callTheApi() {
        const { res, error } = await getData(this.config);

        if (res) {
          this.message = res.data.greeting
          this.date = new Date(res.data.timestamp).toLocaleString()
        }else{
          this.message = error.message
        }
      }
    }
  }
</script>

<template>
  <div>
    <button @click="callTheApi()">call the api</button>
  </div>
  <div>
    <h1>{{message}}</h1>
    <p>{{date}}</p>
  </div>
</template>

<style>
  :host {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
    }

    #app {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }

    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    .logo {
      margin: 0 2rem 0 0;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }

  .item {
    margin-top: 2rem;
    display: flex;
  }

  .details {
    flex: 1;
    margin-left: 1rem;
  }

  i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;

    color: var(--color-text);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }

  @media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }

    i {
      top: calc(50% - 25px);
      left: -26px;
      position: absolute;
      border: 1px solid var(--color-border);
      background: var(--color-background);
      border-radius: 8px;
      width: 50px;
      height: 50px;
    }

    .item:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }

    .item:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }

    .item:first-of-type:before {
      display: none;
    }

    .item:last-of-type:after {
      display: none;
    }
  }

</style>
