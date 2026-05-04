

ou should export a Footer component.
Your Footer component should return a footer element that contains all the other elements.
Your footer element should have:

At least three unordered lists, each with at least two list items.
At least one paragraph element with a copyright © symbol.
At least three links with the href value set to # and the link content set to an icon or text of your choice.

	export default function Footer() {
  return (
      <footer>
			<ul>
	<li>Squirrels</li>
	<li>Nuts</li>
</ul>

<ul>
	<li>Dinosaurs</li>
	<li>Triceratops</li>
</ul>

<ul>
	<li>Bubbles</li>
	<li>Rainbows</li>
</ul>
<p>GJ©</p>
<a href="#">Click</a>
<a href="#">Click</a> 
<a href="#">Click</a>
  </footer>
  );
}
