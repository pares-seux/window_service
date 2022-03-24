import { checkIndex } from "./helpers";

const comments = () => {
  const reviews = document.getElementById("reviews");
  const commentsContainer = reviews.querySelector(".comments-container");
  const colors = ["green", "grey", "orange"];
  const commentsList = [];
  const loader = document.createElement("img");
  loader.src = "images/loader.svg";
  loader.style = "display: block; margin-left: auto; margin-right: auto";

  let currentComment = 0,
    nextComment = 3,
    colorCounter = 0;

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

  const updateComments = () => {
    commentsList[currentComment].remove();
    currentComment = checkIndex(currentComment + 1, commentsList.length);
    commentsContainer.append(commentsList[nextComment]);
    nextComment = checkIndex(nextComment + 1, commentsList.length);
  };

  const getData = () => {
    return fetch("./comments.json", {
      method: "GET",
    }).then((res) => res.json());
  };

  const loadCommentList = () => {
    commentsContainer.innerHTML = "";
    commentsContainer.append(loader);
    getData()
      .then((data) => {
        data.comments.forEach((elem) => {
          let param = {};
          switch (colorCounter) {
            case 0:
              commentsList.push(
                makeTemplateLeft(elem, {
                  margin: "review-margin-bottom",
                  color: "green",
                })
              );
              break;
            case 1:
              commentsList.push(
                makeTemplateRight(elem, {
                  margin: "review-margin-bottom",
                  color: "gray",
                })
              );
              break;
            case 2:
              commentsList.push(
                makeTemplateLeft(elem, {
                  margin: "review-margin-bottom",
                  color: "orange",
                })
              );
              break;
            case 3:
              commentsList.push(
                makeTemplateRight(elem, {
                  margin: "review-margin-bottom",
                  color: "gray",
                })
              );
              break;
          }
          colorCounter = colorCounter + 1 < 4 ? colorCounter + 1 : 0;
        });
        loader.remove();
        for (let i = 0; i < 3; i++) {
          commentsContainer.append(commentsList[i]);
        }
        setInterval(updateComments, 20000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  loadCommentList();
};

export default comments;
