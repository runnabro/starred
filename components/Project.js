import Link from 'next/link'

export default class Project extends React.Component {
  renderDetailButton = () => {
    if (this.props.detailsHref) {
      return (
        <Link href={this.props.detailsHref}>
          <a className="btn btn-md btn-white">Read Details</a>
        </Link>
      )
    }
    return
  }

  renderLiveButton = () => {
    if (this.props.liveHref) {
      return <a className="btn btn-md btn-white-outline" href={this.props.liveHref}><span className="span">View It Live</span></a>
    }
    return
  }

  render() {
    return (
      <>
        <h2 className="h2 weight-bold">{this.props.title}</h2>
        <p className="p">{this.props.description}</p>
        <div className="grid-block margin-top-md btn-wrapper">
          {this.renderDetailButton()}
          {this.renderLiveButton()}
        </div>
        <img className="img" src={this.props.imgSrc} alt="" />
      </>
    )
  }
}
