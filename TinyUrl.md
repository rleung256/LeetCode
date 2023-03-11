https://leetcode.com/discuss/interview-question/system-design/124658/Design-URL-Shortening-service-like-TinyURL

Key points:
Traffic: Let's assume we want to serve more than 1000 billion URLs. If we can use 62 characters [A-Z, a-z, 0-9] for the short URLs having length n, then we can have total 62^n URLs. So, we should keep our URLs as short as possible given that it should fulfill the requirement. For our requirement, we should use n=7 i.e the length of short URLs will be 7 and we can serve 62^7 ~= 3500 billion URLs.

 schema -  <“abcd123”, “http://www.google.com”> 

 hash function to shorten urls

cahching - helpful for "viral" links... a large portion of trafic could be saved using a redis instances and saving those links for fast retrieval 

3/11/23 - takeaways
learn more about hashing in general
hashing algo is complex
consistant vs distributed caching
https://www.code-recipe.com/post/url-shortener for next time