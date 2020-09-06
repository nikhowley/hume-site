<template>
  <div id="clients">
    <div class="section">
      <div class="container">
        <h1 class="title is-1">Clients</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="Email">
          </div>
          <a href="#">Not registered yet?</a>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password">
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button class="button">Log in</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#clients {
  min-height: calc(100vh - 37px);
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #007191;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 1rem;
      @media only screen and (min-width: 426px) {
        font-size: 48px;
      }
    }
    .field {
      max-width: 426px;
      width: 100%;
      label {
        font-size: 18px;
        @media only screen and (min-width: 426px) {
          font-size: 20px;
        }
      }
      input {
        font-size: 18px;
        @media only screen and (min-width: 426px) {
          font-size: 20px;
        }
      }
    }
    a {
      display: block;
      text-align: right;
      font-size: 14px;
      padding-top: .5rem;
    }
    .button {
      background: #007191;
      color: white;
      font-size: 16px;
      border-radius: 34px;
      &:hover {
        color: white;
      }
    }
  }
}
</style>
