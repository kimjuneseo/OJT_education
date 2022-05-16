<template>
  <div>
    <h5>A10 Slot Named</h5>

    <div class="row card-body">
      <div class="col-12 border">
        <slot name="header"></slot>
      </div>
      <div class="col-4 border">
        <slot name="menu"></slot>
      </div>
      <div class="col-8 border">
        <slot name="content"></slot>
      </div>
      <div class="col-12 border">
        <slot name="footer"></slot>
      </div>

      <div class="col-12">
        <slot></slot>
      </div>
    </div>

  </div>
</template>