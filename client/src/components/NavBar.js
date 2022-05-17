export default function Greeting({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "NavBar-container";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <nav class="NavBar">
      <a href="/" data-link>dashboard</a>
      <a href="/posts" data-link>posts</a>
      <a href="/settings" data-link>settings</a>
    </nav>
    `;
  };

  this.render();
}
