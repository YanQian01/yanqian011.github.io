var posts=["2023/06/16/hello-world/","2023/06/16/健康作息/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};