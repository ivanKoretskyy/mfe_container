# mfe_container
container for mfe test project

-------------Marketing-------------------
1. create config folder 
2. create webpack common dev and prod
3. create public folder and basic index html
4. create src folder and basic index js
5. add script for package json to start app
6. Add bootstrap.js with mount function
7. update index js with import bootstrap.js import as a function()
8. create component for pricing and landing
9. create app component with router pricing page and landing page
10. Use app component in ootstrap

-----------Container----------------------------------------------
11. copy webpack config from marketing to container, change port to 8080
12. add start script 
13. create public with index html with id of 'root'
14. create src folder with index js import('./bootstrap.js')
15. create bootstrap js file
16. create App js

17. Add module federation to marketing webpack dev and webpack 
18. Add module federation to mfe container
19. add marketing


-------------AWS-----------------------
GITHUB ACTIONS https://www.udemy.com/course/microfrontend-course/learn/lecture/23207048#overview

20. create amazon account
23. create s3 buket
https://us-east-2.console.aws.amazon.com/console/home?nc2=h_si&refid=5cb9d43a-a80b-42ce-8f53-bb53f52c25b6&region=us-east-2&src=header-signin
https://us-east-2.console.aws.amazon.com/s3/get-started?region=us-east-2
24. bukect name 'koretskyy-mfe-dashboard'
25. REgion US East (Ohio) us-east-2
26. https://us-east-2.console.aws.amazon.com/s3/buckets/koretskyy-mfe-dashboard?region=us-east-2&tab=properties
27. enable static website hosting in properties tab
28. allow public acces 'Edit Block public access'
29. create bucket policy https://www.udemy.com/course/microfrontend-course/learn/lecture/33274448#questions
30. create cloud front distribution
31. TODO: CHECK DISTRIBUTION VERSION This S3 bucket has static web hosting enabled. If you plan to use this distribution as a website, we recommend using the S3 website endpoint rather than the bucket endpoint.
34.  after deployed, go to distribution settings, change default root object to /container/latest/index.html
35. change error pages to same /container/latest/index.html
36. create IAM user and key for user, Attach clould front full access policy
37. after creating user - create access key for it
38. in github settings add that key and secret

------------URLS--------------
public: https://d2ynwmfzhk724q.cloudfront.net/

