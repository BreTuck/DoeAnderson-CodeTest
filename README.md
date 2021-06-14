# Doe-Anderson Code Test

I would like to thank you all again for this opportunity. I have written a few comments in the code as guides, but more detailed explanations of my implementation can be found below. In total I spent about eight hours to get as far as I did as the email said that this was the cutoff. However, I would say the four hour mark was when I was completing the CSS portion. This would have been prior to any backend work that I was able to achieve. Please let me know if you have any questions. Thank you.


Tech Stack: VueJS (with Fetch API), NodeJS, PostgreSQL, Icons acquired from FontAwesome

Feature 1. Responsive layout: I struggled more than expected here due to some last minute changes to my plan as I initially intended to use Tailwind. However, I just used Plain CSS with CSS Grid and CSS Flexbox. I did include an external Google Font called Poppins to the entire application.

Feature 2. Pull data from randomuser.me/api endpoint: I was able to pull the data from the external api. I utilized event management in Vue so that the icon navigation is a single component that emits a change to the profile text description component which triggers the change in text based on the icon that is clicked.

Feature 3. Build a sentence from the data the API returns. IE) Hi, I'm {name} and I live in {city}, {state}: I associated a general form of a sentence or display with most of the icon navigation toggles. 

Feature 4. Social links open in new tab: Like the icon navigation component, the social links are accessed via icons from FontAwesome

Note: Before moving on to the form functionality I wanted to address the responsive layout. While I was able to use CSS Grid and CSS Flexbox I was not able to achieve the level of responsiveness that I would have liked. In addition, this took up a lot of my time. You could say, I got stuck in the rabbit hole.

Feature 5. Form Functionality: The form does not have any validation. I do have a bit of backend implemention complete as well as a local database setup. I did not get to sending the email.

BreAunna Tucker
