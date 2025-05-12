function searchPosts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post');
  
    posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const excerpt = post.querySelector('.excerpt').textContent.toLowerCase();
  
      if (title.includes(input) || excerpt.includes(input)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }
  

