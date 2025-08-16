import { BrowserRouter, Routes, Route, Link, href } from 'react-router';
import { Route as RouteType } from './+types/_.foo.$';

export async function loader(_: RouteType.LoaderArgs) {
  console.log('Loader for _.foo.tsx');
  return null;
}

export default function Component() {
  return (
    <div>
      <h1>Foo (hosting route)</h1>

      <nav>
        <menu className="flex flex-row gap-2">
          <li>
            <Link to={href('/foo/*', { '*': '' })}>/foo</Link>
          </li>
          <li>
            <Link to={href('/foo/*', { '*': 'bar' })}>/foo/bar</Link>
          </li>
          <li>
            <Link to={href('/foo/*', { '*': 'hello' })}>/foo/hello</Link>
          </li>
          <li>
            <Link to={href('/foo/*', { '*': 'world' })}>/foo/world</Link>
          </li>
        </menu>
      </nav>

      <Routes>
        <Route index element={<>Index</>} />
        <Route path="bar" element={<>Bar</>} />
        <Route path="hello" element={<>Hello</>} />
        <Route path="world" element={<>World</>} />
      </Routes>
    </div>
  );
}
