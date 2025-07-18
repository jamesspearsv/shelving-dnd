import { Link } from 'react-router';

export default function StartPage() {
  return (
    <section>
      <h1>Hello, Shelving Drag & Drop!</h1>
      <Link to={'/lvl/1'} />
    </section>
  );
}
