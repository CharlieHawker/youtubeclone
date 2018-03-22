'use strict';

var myCommentForm = function() {
  // when the form is submitted
  var form = document.getElementById('commentForm');

  // get Username
  var username = document.getElementById("username");

  // get comment
  var comment = document.getElementById("comment");

  var onCommentFormSubmit = function(e) {
    e.preventDefault(); // stop page from re-loading upon submit
    // call new comment
    var myNewComment = createComment(username.value, comment.value);
    //call bump comment
    bumpComment(myNewComment);
    //reset form
    clearComment();
  }

  //create comment function
  var createComment = function(name, text) {
    var newComment = document.createElement("div");
    newComment.classList = "comment";
    newComment.innerHTML = '<div class="comment-image"><img src="http://fillmurray.com/100/100" alt="bill murray"></div><div class="comment-info"><b>'+name+'</b><p>'+text+'</p></div>';
    return newComment;
  }

  // bump comment down
  var bumpComment = function(newComment){
    var commentList = document.getElementById("comments");
    commentList.appendChild(newComment);
  }

  //reset form
  var clearComment = function(){
    username.value = "";
    comment.value = "";
  }
  // perform something on submit
  // pass the function that can be called upon event being fired
  form.addEventListener('submit', onCommentFormSubmit );
};

myCommentForm();
