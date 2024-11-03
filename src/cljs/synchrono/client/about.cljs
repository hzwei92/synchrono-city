(ns synchrono.client.about)

(defn about []
  [:div.about
   [:div.title "about"]

   [:p (str "It's like going to the gym to train reading and writing. "
            "")]
   [:p (str "We publish everyone's writing every 24 hours. "
            "It's a simultaneous-reveal game-mechanic, like in the board game called Diplomacy. ")]
   [:p (str "It gives a daily rhythm. "
            "You can read through the day's content, and then set it aside, "
            "getting on with the rest of your day. ")]
   [:p (str "We function as a kind of lightning channel, for micropayments in BTC. "
            "Pay people by upvoting their content. ")]
   [:p (str "Regarding data storage, many a client will store all its data to some single centralized server. "
            "However, a nostr client stores its data to multiple relays simultaneously. "
            "This way, if one relay goes down, your data may still be accessible via the others. ")]
   [:p (str "There are three roles to play here. "
            "You can read and write. "
            "You can even host your own relay. "
            "It would be like running your own newpaper, your own version of Twitter/X. ")]
   [:p "Sunday, November 3, 2024."]])