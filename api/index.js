import axios from 'axios'

export async function addContact(email, website) {
  return await axios.post(
    `https://api.elasticemail.com/v2/contact/add?publicAccountID=8c6a6611-6693-443b-902d-ca4183c481a5&email=${email}&firstName=Feedback for&lastName=${website}&listName=Landing page feedback&activationTemplate=Subscription_email`
  )
}
