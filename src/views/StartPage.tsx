import { Link } from 'react-router';

// TODO: Add start screen content
// - General information about the game
// - Game instructions
// - A new game start button
// - A level select button
export default function StartPage() {
  return (
    <section>
      <h1>Hello, Shelving Drag & Drop!</h1>
      <Link to={'/lvl/1'} />
    </section>
  );
}
