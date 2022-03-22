const comments = () => {
  const reviews = document.getElementById("reviews");
  const commentsContainer = reviews.querySelector(".comments-container");
  const colors = ["green", "grey", "orange"];
  const commentsList = [];

  let colorCounter = 0;

  const makeTemplate = (comment, specificity) => {
    const newComment = document.createElement("div");
    newComment.className = "row comment-item";
    newComment.innerHTML = `<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="${comment.image}" alt="" class="img-responsive avatar"></div></div><div class="col-xs-9 col-sm-9"><div class="review-inner ${specificity.color} review-arrow review-arrow-${specificity.position}"><p class="text-normal">${comment.author}</p><p>${comment.comment}</p></div></div>`;
    console.log(newComment);
    return newComment;
  };

  const getData = () => {
    return fetch("./comments.json", {
      method: "GET",
    }).then((res) => res.json());
  };

  const loadCommentList = () => {
    commentsContainer.innerHTML = "";
    getData().then((data) => {
      data.comments.forEach((elem) =>
        commentsList.push(
          makeTemplate(elem, { color: "red", position: "left" })
        )
      );
    });
  };

  loadCommentList();
};

export default comments;
