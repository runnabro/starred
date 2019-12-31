import Link from 'next/link';

const HomeLink = () => (
  <Link href="/">
    <a className="btn btn-md btn-blue-outline">
      <svg className="svg">
        <use href="#back-arrow-filled" />
      </svg>
      Go Home
    </a>
  </Link>
);

export default HomeLink;
