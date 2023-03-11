// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem
  return (
    <li className={`${className} card`}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="button">Show More</button>
    </li>
  )
}
export default BannerCardItem
