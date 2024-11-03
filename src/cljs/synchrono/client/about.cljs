(ns synchrono.client.about)

(defn about []
  [:div.about
   [:div.title "about"]
   [:p "Friday, November 1st, 2024"]
   [:p "On that daily journal club grind."]
   [:p "Here is the standard deal:"]
   [:ol
    [:li "Daily writings are batched, published all at once every midnight."]
    [:li "Read for free, no subscription required."]
    [:li "Purchase 10,000 satoshis (about $7) worth of credit to start engaging with the community. "]
    [:li "Publishing nostr events here will cost 10 satoshis per day."]
    [:li "Feel free to upvote outstanding posts using your satoshis as well."]
    [:li "The most upvoted post of each day wins a prize, 20 satoshis."]
    [:li "Withdraw your satoshis anytime."]
    [:li "You cannot withdraw beyond a minimum balance of 70 satoshis."]]
   [:p "To help you build a routine, and maybe make a few friends."]
   [:p "It's like the gym, but for your reading and writing."]
   [:p "Thank you for your support."]
   [:p "~ synchrono.org"]])