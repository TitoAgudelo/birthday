export default ({ date, days, nextBirthday }) => {
    return `
      <div id="birthday-wrapper">
        <p>Your next math birthday is your ${nextBirthday}-day-old birthday on ${date}.</p>
      </div>
    `
}
