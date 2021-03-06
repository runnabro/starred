import Link from 'next/link';

const BackLink = () => (
  <Link href="/">
    <a className="back-arrow">
      <svg className="svg">
        <use href="#back-arrow-outline" />
      </svg>
    </a>
  </Link>
);

export default BackLink;
