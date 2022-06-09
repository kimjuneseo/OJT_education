// A01ChildComp.js
const CompOne = {
  template: `
    <div>
      <h5>Child One Component</h5>
      <div>2는 하나의 태그만 허용하므로 루트 태그 작성 후 그 내부에 요소 기술</div>
    </div>
  `
}

const CompTwo = {
  template: `
    <div>
      <h5>{{title}}</h5>
      <div>2는 하나의 태그만 허용하므로 루트 태그 작성 후 그 내부에 요소 기술</div>

      <button   @click="changeTitle">Change</button>
    </div>
  `,
  data() {
    return {
      title: 'Child Two Component'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Change Two Title';
    }
  }
}