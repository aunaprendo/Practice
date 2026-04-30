Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab, you will build a freeCodeCamp forum leaderboard that displays the latest topics, users, and replies from the freeCodeCamp forum. The HTML, CSS and part of the JS have been provided for you. Feel free to explore them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named timeAgo that takes a timestamp in the ISO 8601 format as the argument.
The timeAgo function should compute the time difference between the time passed as an argument and the current time and return:
xm ago (x represents minutes) if the amount of minutes that have passed is less than 60.
xh ago (x represents hours) if the amount of hours that have passed is less than 24.
xd ago (x represents days) otherwise.
You should have a function named viewCount that takes the number of views of a post as the argument.
If the value of the views passed as the argument is greater than or equal to 1000, the viewCount function should return a string with the views value divided by 1000, rounded down to the nearest whole number and the letter k appended to it. Otherwise, it should return the views value.
You should have a function named forumCategory that takes the id of a selected category as the argument.
The forumCategory function should verify that the selected category id is a property of the allCategories object and should return a string containing an anchor element with:
the text of the category key of the selected category.
a class of category followed by the className property of the selected category.
an href with the value of <forumCategoryUrl>/<className>/<id>, where <className> is the className property of the selected category and id is the argument passed to forumCategory.
If the allCategories object does not have the selected category id as its property, category should be indicated as General and className should be indicated as general.
You should have a function named avatars that takes two arrays representing posters and users, respectively.
The avatars function should return a string made by joining img elements, one for each user_id in the posters array. Find the img URL by looking up the user_id property in the posters array and find the matching id property in the users array.
The avatars function should set each avatar's size by accessing the avatar_template property and replacing {size} with 30.
Each image element should have an alt text with the value of the name property of the poster.
Each image element should have a source with the value of the avatar_template property of the poster. In case avatar_template contains a relative path, you should set the source to <avatarUrl>/<avatar_template>.
You should have a function named showLatestPosts that takes a single parameter.
The showLatestPosts should extract the users and topic_list properties from the object passed as argument. Also, it should process the following properties of the objects from the topics array, which is contained in topic_list:
id: the id of the post
title: the title of the post
views: the number of views of the post
posts_count: the number of replies to the topic
slug: the slug of the post
posters: the posters for that topic
category_id: an integer indicating the category id for the post
bumped_at: a timestamp in the ISO 8601 format
The showLatestPosts should set the inner HTML of #posts-container to a string made by joining tr elements, one for each item in topics.
Each tr element should have five td elements in it:
a td containing two anchor elements, one with the class of post-title, an href of <forumTopicUrl><slug>/<id>, an anchor text of <title>, and one obtained by calling forumCategory with category_id.
a td containing a div element with class avatar-container that contains the images returned by the avatars function called with posters and users as arguments.
a td containing the number of replies to the post. Hint: use posts_count - 1.
a td containing the number of views of the post.
a td containing the time passed since the last activity.
You should have an async function named fetchData.
The fetchData function should request data from forumLatest and call showLatestPosts passing it the response parsed as JSON.
If there's an error when fetching data, the fetchData function should log the error to the console. You should specifically use console.log for this.
Tests:

Waiting: 1. You should have a function named timeAgo that takes a single argument.
Waiting: 2. When the time difference between the time passed as argument and the current time is 50 minutes, timeAgo should return 50m ago.
Waiting: 3. When the time difference between the time passed as argument and the current time is 60 minutes, timeAgo should return 1h ago.
Waiting: 4. When the time difference between the time passed as argument and the current time is 115 minutes, timeAgo should return 1h ago.
Waiting: 5. When the time difference between the time passed as argument and the current time is 15 hours, timeAgo should return 15h ago.
Waiting: 6. When the time difference between the time passed as argument and the current time is 24 hours, timeAgo should return 1d ago.
Waiting: 7. When the time difference between the time passed as argument and the current time is 46 hours, timeAgo should return 1d ago.
Waiting: 8. When the time difference between the time passed as argument and the current time is 3 days, timeAgo should return 3d ago.
Waiting: 9. You should have a function named viewCount that takes a single argument.
Waiting: 10. viewCount(597) should return 597.
Waiting: 11. viewCount(1000) should return 1k.
Waiting: 12. viewCount(2730) should return 2k.
Waiting: 13. You should have a function named forumCategory that takes a single argument.
Waiting: 14. forumCategory(299) should return a string containing an anchor element with the text Career Advice.
Waiting: 15. forumCategory(299) should return a string containing an anchor element with href="https://forum.freecodecamp.org/c/career/299".
Waiting: 16. forumCategory(299) should return a string containing an anchor element with class="category career".
Waiting: 17. forumCategory(200) should return a string containing an anchor element with the text General.
Waiting: 18. forumCategory(200) should return a string containing an anchor element with href="https://forum.freecodecamp.org/c/general/200".
Waiting: 19. forumCategory(200) should return a string containing an anchor element with class="category general".
Waiting: 20. You should have a function named avatars that takes two arguments.
Waiting: 21. The avatars function should return a string made by joining img elements, one for each poster found in the user array.
Waiting: 22. Each img element in the string returned by the avatars function should have an alt text with the value of the name property of the poster.
Waiting: 23. The avatars function should set each avatar's size by accessing the avatar_template property and replacing {size} with 30.
Waiting: 24. Each img element in the string returned by the avatars function should have the src with the value of the avatar_template property of the poster. In case avatar_template contains a relative path, it should be set to <avatarUrl>/<avatar_template>.
Waiting: 25. You should have a function named showLatestPosts that takes a single parameter.
Waiting: 26. You should have a function named fetchData.
Waiting: 27. Your fetchData function should request data from https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json.
Waiting: 28. Your fetchData function should call showLatestPosts.
Waiting: 29. If there is an error, your fetchData function should log the error to the console, using console.log.
Waiting: 30. showLatestPosts should set the inner HTML of #posts-container to a string made by joining tr elements, one for each item in topics.
Waiting: 31. Each tr element from the string returned by showLatestPosts should contain 5 td elements.
Waiting: 32. The first td element of each table row from the string returned by showLatestPosts should contain two anchor elements, the first with the class of post-title, an href of <forumTopicUrl><slug>/<id>, an anchor text of <title>, and the second obtained by calling forumCategory with category_id.
Waiting: 33. The second td element of each table row from the string returned by showLatestPosts should contain the images returned by the avatars function called with posters and users as arguments, nested within a div element with the class of avatar-container.
Waiting: 34. The third td element of each table row from the string returned by showLatestPosts should contain the number of replies to the post. Hint: use posts_count - 1.
Waiting: 35. The fourth td element of each table row from the string returned by showLatestPosts should contain the number of views of the post.
Waiting: 36. The fifth td element of each table row from the string returned by showLatestPosts should contain time passed since the last activity, generated using the timeAgo function.