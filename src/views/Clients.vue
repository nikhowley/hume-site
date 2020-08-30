<template>
  <div id="clients">
    <div class="section">
      <div class="container">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="name">
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="password">
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
  min-height: calc(100% - 48px);
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .button {
    background: #007191;
    color: white;
    &:hover {
      color: white;
    }
  }
}
</style>
