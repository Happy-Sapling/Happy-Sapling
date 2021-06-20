<p align="center">
  <img src="pictures/icon.png" alt="Logo" width="150px" /><br/>
</p>

# Happy-Sapling

Happy Sapling is an all-in-one mental health, meditation, and goal-fulfilling mobile application. Users can record their accomplishments and journal entries to look back later on their successes!

### Inspiration
Throughout the pandemic, the world has seen a decline in mental health, which has affected productivity. Being at home all day can make it difficult to stay motivated, and makes it harder for us to recognize our accomplishments, no matter how trivial. 

### What it does
Happy Sapling is an app that encourages mindfulness and daily self-reflection. When the user first enters the app, they’re greeted with a sapling, which slowly grows over time as the user continues to use the app. The user has the opportunity to reflect on their day, via daily questions, journal entries, and a timed meditation bubble, as well as celebrate their successes, via the accomplishments tab. Through the mood calendar, the user can also have a birds’ eye view of how they were feeling that month, through the mood colour they logged when answering the mindfulness questions.

### How we built it
To design the user interface of Happy Sapling, we used Figma, then implemented the designs using React Native and Node.js. We used MongoDB, node.js and express.js to store past journal entries and achieved accomplishments, as well as the user’s sign In information and state. We also used nodemailer to send out user verification emails to the users as well. As we were designing the app, we constantly were updating the frontend design of our app, so we needed to use Expo and Android emulator tools to be able to see our changes in real time.

### Challenges we ran into
Our group is split up over two time zones, which can make it more difficult to collaborate. One of our biggest technical challenges was implementing the animation on the meditation screen. It expands and contracts to mimic breathing, and it was a challenge coding the animation as well as perfecting the timing. This app has many moving parts in both frontend and backend design, so we faced challenges implementing them both seamlessly. 	

### Accomplishments that we're proud of
We are very proud of the user’s personal profile aspect of Happy Sapling. We were able to detect when the information fields are insufficiently filled out, and give users the ability to authenticate their account through email. We were able to store the profile data in a database, and keep users logged into the app once they have entered their information once.

### What we learned
We learned a lot about React Native, as two group members had never used the framework before. All group members became much more proficient in using Github, and we were all also able to learn how to efficiently communicate and support each other virtually, despite the difficulty of working remotely in different timezones.


### What's next for Happy Sapling
One area of our app that has very strong potential is the calendar section. In the future, we would like to make this calendar much more interactive, allowing users to see other information about any given day on the calendar, including their responses to the opening questions. We would also like to allow users to share their entries and successes on social media by connecting popular platforms to the app. Finally, we would like implement the streak feature and connect this to the backend.

## Commands to Run
 
In the project directory, you can run the following commands:
 
### `npm start`
 
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 
### `nodemon index.js`
 
Runs the development server to connect with the MongoDB database. In the terminal "listening on port 9000... Database Connected Succesfully" should be running.

