import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  isEmojiSelected = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackSection = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
          <ul className="emoji-list">
            {emojis.map(eachEmoji => (
              <li className="emoji-details" key={eachEmoji.id}>
                <button
                  className="button"
                  type="button"
                  onClick={this.isEmojiSelected}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                </button>
                <br />
                <span className="name">{eachEmoji.name}</span>
              </li>
            ))}
          </ul>
        </h1>
      </div>
    )
  }

  renderThankYouSection = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img
          src={loveEmojiUrl}
          alt="love emoji"
          value={loveEmojiUrl}
          className="love-img"
        />
        <h1 className="love-emoji-heading">Thank You!</h1>
        <p className="greeting">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackGiven
            ? this.renderThankYouSection()
            : this.renderFeedbackSection()}
        </div>
      </div>
    )
  }
}

export default Feedback
