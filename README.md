# ramp-challenge

Instructions:

1.Open this link -> "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"

2.Find a hidden URL within the HTML

      -Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
      
      -The asterisk (*) is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result. See example.
      
      -There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
      
      -Any additional attribute that doesn't interfere with the described pattern can be safely ignored
      
      -Pattern of the DOM tree for each valid character of the URL

-section id="11*"-

 -main id="*22"-
  
-article id="*33*"-
     
 -p class="flag" value="VALID_CHARACTER"></p-

-/article-
  -/main>

-/section>


3.Make an HTTP request to URL obtained in step 2 to load the flag into a React component

      -Don't use any external libraries. Use browser APIs
      
      -Render a "Loading..." text while the request is ongoing
      
4.Render the flag you loaded in step 4 with the following conditions:

      -Simulate a typewriter effect with a half second delay between each character. Start showing nothing and then display characters one by one until the full string is displayed.
      
      -No style required
      
      -Render the flag a list, where each character is a list item
      
      -Animation should trigger after you load the flag
      
      -Animation should run only once
      
      -Use React APIs only. Don't use CSS or external libraries
