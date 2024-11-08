(ns synchrono.client.about)

(defn about []
  [:div.about
   [:div.title "about"]
   [:p "Welcome to a new kind of journal - where we write together, every day."]
   [:p "How does it work?"]
   [:p "Every day at 00:00 PST, all entries from the last 24 hours are published as today's edition. Each edition becomes a permanent part of our growing collection."]
   [:p "Read through to discover what's on people's minds. Connect with others by citing their entries in your own writing."]
   [:p "The journal is structured as a chronological collection of daily editions, with entries interconnected through citations."]
   [:p "Why are we doing this?"]
   [:p "We're exploring how thoughtful discourse can thrive in the digital age. Think of this as your daily intellectual workout - a place to exercise both reading and writing muscles."]
   [:p "This is a space for authentic expression. Like athletes in a gym, we come here to be vulnerable, to practice, and to grow stronger together."]
   [:p "Writing works best when you know your audience. Getting feedback helps refine our thoughts and sharpen our thinking."]
   [:p "How does it work technically?"]
   [:p "Reading is free, but writing and upvoting require satoshis (tiny fractions of bitcoin)."]
   [:p (str "Buy in for 100,000 satoshis at a time. "
            "It costs 100 satoshis per day to maintain your membership. "           
            "When someone upvotes your entry, you receive one satoshi from them. "
            "Participation is key - give satoshis to get satoshis.")]
   [:p (str "You can withdraw your satoshis anytime, though we ask you to leave enough "
            "for one week of membership in case inspiration strikes again.")]
   [:p "Friday, November 8, 2024"]
   [:p "~WEIHZ"]])
