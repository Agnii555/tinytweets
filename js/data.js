class Blog {
    #heading;
    #content;
    #author;
    #time;
    #update;
    constructor(heading, content, author, time, update) {
      this.#heading = heading;
      this.#content = content;
      this.#author = author;
      this.#time = time;
      this.#update = update;
    }
  
    get heading() {
      return this.#heading;
    }
    get content() {
      return this.#content;
    }
    get author() {
      return this.#author;
    }
    get time() {
      return this.#time;
    }
    get update() {
      return this.#update;
    }
  }
  var count = 1;
  
  //fetching data on submit button of a new blog
  
  document.getElementById("submit").onclick = function() {
    var title = document.getElementById("heading_blog").value;
    var content = document.getElementById("content").value;
    var author = document.getElementById("author").value;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const update = document.createElement('button');
    const blogs = new Blog(title, content, author, dateTime, update);
  
    //Form validations
  
    if (title === "") {
        alert("Heading must be filled out");
    }   else if (author === "") {
        alert("Author must be filled out");       
    }
    else if (content === "") {
        alert("Content must be filled out");
    }
    else {
        addBlog(blogs, body);
    };
}
  //fetching the existing Blogs from Json
  
  const addPerson = (blogs, bBody) => {
    const blog = document.createElement('article');
    blog.setAttribute("id", "blog_wrap");
    const heading = document.createElement('h3');
    heading.setAttribute("id", "heading");
    const content = document.createElement('p');
    content.setAttribute("contenteditable", "false");
    content.setAttribute("class", "content");
    content.setAttribute("id", "content" + count);
    const author = document.createElement('p');
    author.setAttribute("contenteditable", "false");
    author.setAttribute("id", "author" + count);
    const time = document.createElement('time');
    const update = document.createElement('button');
    update.setAttribute("id", "update" + count);
    count++;
    update.setAttribute("onClick", "update_blog()");
  
    //Appending Child elements in main body
    blog.appendChild(heading);
    blog.appendChild(content);
    blog.appendChild(author);
    blog.appendChild(time);
    blog.appendChild(update);
  
    bBody.appendChild(blog);
    heading.textContent = blogs.heading;
    content.textContent = blogs.content;
    author.textContent = blogs.author;
    time.textContent = blogs.time;
    update.textContent = blogs.update;
  }
  
  //Adding a new blog
  
  const addBlog = (blogs, bBody) => {
    const blog = document.createElement('article');
    blog.setAttribute("id", "blog_wrap");
    const heading = document.createElement('h3');
    heading.setAttribute("id", "heading");
    const content = document.createElement('p');
    content.setAttribute("contenteditable", "false");
    content.setAttribute("class", "content");
    content.setAttribute("id", "content" + count);
    const author = document.createElement('p');
    author.setAttribute("contenteditable", "false");
    author.setAttribute("id", "author" + count);
    const time = document.createElement('time');
    const update = document.createElement('button');
    update.setAttribute("id", "update" + count);
    count++;
    update.setAttribute("onClick", "update_blog()");
    blog.appendChild(heading);
    blog.appendChild(content);
    blog.appendChild(author);
    blog.appendChild(time);
    blog.appendChild(update);
  
    bBody.appendChild(blog);
    heading.textContent = blogs.heading;
    content.textContent = blogs.content;
    author.textContent = blogs.author;
    time.textContent = blogs.time;
    update.textContent = "Update Blog";
  }
  
  const body = document.getElementById('blog');
  
  const fetchBlogs = () => {
    const blogURL = '/data/data.json';
    const newblog = new XMLHttpRequest();
    newblog.open('GET', blogURL);
  
    newblog.addEventListener('load', function() {
      if (this.status === 200) {
        const responseText = this.responseText;
        const blogList = JSON.parse(responseText);
        blogList.forEach((item) => {
          const blogs = new Blog(item.heading, item.content, item.author, item.time, item.update);
          addPerson(blogs, body);
        })
      }
    });
    newblog.send();
  }
  
  //Updating existing Blog
  
  function update_blog() {
    var updated_content = document.getElementById("content");
    var updated_author = document.getElementById("author");
    var updateButton = document.getElementById("update1");
    updateButton.onclick = function() {
      if (updateButton.textContent === 'Update Blog') {
        updateButton.textContent = 'Save';
        updated_content.setAttribute('contenteditable', 'true');
        updated_author.setAttribute('contenteditable', 'true');
        updated_content.focus();
        updated_author.focus();
      } else if (updateButton.textContent === 'Save') {
        updateButton.textContent = 'Update Blog';
        updated_content.setAttribute('contenteditable', 'false');
        updated_author.setAttribute('contenteditable', 'false');
      }
    }
  
    var updated_content2 = document.getElementById("content2");
    var updated_author2 = document.getElementById("author2");
    var updateButton2 = document.getElementById("update2");
    updateButton2.onclick = function() {
      if (updateButton2.textContent === 'Update Blog') {
        updateButton2.textContent = 'Save';
        updated_content2.setAttribute('contenteditable', 'true');
        updated_author2.setAttribute('contenteditable', 'true');
        updated_content2.focus();
        updated_author2.focus();
      } else if (updateButton2.textContent === 'Save') {
        updateButton2.textContent = 'Update Blog';
        updated_content2.setAttribute('contenteditable', 'false');
        updated_author2.setAttribute('contenteditable', 'false');
      }
    }
  
    var updateButton3 = document.getElementById("update3");
    var updated_content3 = document.getElementById("content3");
    var updated_author3 = document.getElementById("author3");
    updateButton3.onclick = function() {
      if (updateButton3.textContent === 'Update Blog') {
        updateButton3.textContent = 'Save';
        updated_content3.setAttribute('contenteditable', 'true');
        updated_author3.setAttribute('contenteditable', 'true');
        updated_content3.focus();
        updated_author3.focus();
      } else if (updateButton3.textContent === 'Save') {
        updateButton3.textContent = 'Update Blog';
        updated_content3.setAttribute('contenteditable', 'false');
        updated_author3.setAttribute('contenteditable', 'false');
      }
    }
    var updateButton4 = document.getElementById("update4");
    var updated_content4 = document.getElementById("content4");
    var updated_author4 = document.getElementById("author4");
    updateButton4.onclick = function() {
      if (updateButton4.textContent === 'Update Blog') {
        updateButton4.textContent = 'Save';
        updated_content4.setAttribute('contenteditable', 'true');
        updated_author4.setAttribute('contenteditable', 'true');
        updated_content4.focus();
        updated_author4.focus();
      } else if (updateButton4.textContent === 'Save') {
        updateButton4.textContent = 'Update Blog';
        updated_content4.setAttribute('contenteditable', 'false');
        updated_author4.setAttribute('contenteditable', 'false');
      }
    }
  }
  
  fetchBlogs();
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  
  span.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  