let apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 
    'http://localhost:5000/api/' : 
    'https://cobochat.com/api/';

/* --- Likes --- */

const sendLike = async (user_id, post_id) => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("post_id", post_id)
    const response = await fetch(apiUrl + "like", {
        method: "POST",
        body: formData
    });
  
    const json = await response.json();
    let preData = Number(document.getElementById(`post_likes_${post_id}`).innerHTML);
  
    if (json['is_liked']) {
        document.getElementById(`post_likes_${post_id}`).innerHTML = preData + 1;
    } else {
        document.getElementById(`post_likes_${post_id}`).innerHTML = preData - 1;
    }
};
    
    /* --- Dislikes --- */
const sendDislike = async (user_id, post_id) => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("post_id", post_id)
    const response = await fetch(apiUrl + "dislike", {
        method: "POST",
        body: formData
    });
  
    const json = await response.json();
    let preData = Number(document.getElementById(`post_dislikes_${post_id}`).innerHTML);
  
    if (json['is_disliked']) {
        document.getElementById(`post_dislikes_${post_id}`).innerHTML = preData + 1;
    } else {
        document.getElementById(`post_dislikes_${post_id}`).innerHTML = preData - 1;
    }
};
  

    /* --- Time Zone --- */
document.addEventListener('DOMContentLoaded', () => {
    const dateElements = document.querySelectorAll('[data-post-date]');

    dateElements.forEach(elem => {
    elem.textContent = new Date(elem
        .getAttribute('data-post-date'))
        .toLocaleString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
    });;
    });
});