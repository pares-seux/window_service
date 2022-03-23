const comments = () => {
  const reviews = document.getElementById("reviews");
  const commentsContainer = reviews.querySelector(".comments-container");
  const colors = ["green", "grey", "orange"];
  const commentsList = [];

  let colorCounter = 0;

  const makeTemplateLeft = (comment, specificity) => {
    const newComment = document.createElement("div");
    newComment.className = "row comment-item review-margin-bottom";
    newComment.innerHTML = `<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${comment.image}" alt="" class="img-responsive avatar"></div></div><div class="col-xs-9 col-sm-9"><div class="review-inner review-${specificity.color} review-arrow review-arrow-left"><p class="text-normal">${comment.author}</p><p>${comment.comment}</p></div></div>`;
    return newComment;
  };

  const makeTemplateRight = (comment, specificity) => {
    const newComment = document.createElement("div");
    newComment.className = `row comment-item ${specificity.margin}`;
    newComment.innerHTML = `<div class="col-xs-9 col-sm-9"><div class="review-inner review-${specificity.color} review-arrow review-arrow-right"><p class="text-normal">${comment.author}</p><p>${comment.comment}</p></div></div><div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${comment.image}" alt="" class="img-responsive avatar"></div></div>`;
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
      data.comments.forEach((elem) => {
        let param = {};
        switch (colorCounter) {
          case 0:
            commentsContainer.append(
              makeTemplateLeft(elem, {
                margin: "review-margin-bottom",
                color: "green",
              })
            );
            break;
          case 1:
            commentsContainer.append(
              makeTemplateRight(elem, {
                margin: "review-margin-bottom",
                color: "gray",
              })
            );
            break;
          case 2:
            commentsContainer.append(
              makeTemplateLeft(elem, {
                margin: "",
                color: "orange",
              })
            );
            break;
        }
        colorCounter = colorCounter++ < 3 ? colorCounter++ : 0;
      });
    });
  };

  loadCommentList();
};

export default comments;
