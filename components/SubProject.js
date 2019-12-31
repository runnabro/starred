export default function SubProject(props) {
  const imgAlt = props.imgAlt || ''

  return (
    <>
      <img
        alt={imgAlt}
        className="margin-bottom-sm"
        height="56"
        src={props.imgSrc}
        width="70"
      />
      <p className="p weight-bold">{props.title}</p>
      <p className="p">{props.description}</p>
      <div className="grid-block shrink margin-top-sm btn-wrapper">
        <a className="btn btn-sm btn-blue-outline" href={props.soureHref}>View Source</a>
        <a className="btn btn-sm btn-blue-outline" href={props.liveHref}><span className="span">View It Live</span></a>
      </div>
    </>
  )
}
